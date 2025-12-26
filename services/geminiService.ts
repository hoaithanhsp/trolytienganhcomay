import { GoogleGenAI, Chat, Part } from "@google/genai";
import { Message, Role, SupportMode } from "../types";
import { SYSTEM_INSTRUCTION, FALLBACK_ORDER, DEFAULT_MODEL } from "../constants";

let chatSessions: Record<string, Chat> = {};
let genAI: GoogleGenAI | null = null;

export const getStoredApiKey = (): string | null => {
    return localStorage.getItem('GEMINI_API_KEY') || process.env.API_KEY || null;
}

export const setStoredApiKey = (key: string) => {
    localStorage.setItem('GEMINI_API_KEY', key);
    // Reset instance when key changes
    genAI = null;
    chatSessions = {};
}

export const getStoredModel = (): string => {
    return localStorage.getItem('GEMINI_PREFERRED_MODEL') || DEFAULT_MODEL;
}

export const setStoredModel = (model: string) => {
    localStorage.setItem('GEMINI_PREFERRED_MODEL', model);
    // Clear sessions to force re-init with new model if needed, 
    // though sendMessage fallback logic handles dynamic model switching.
    chatSessions = {};
}

const getGenAI = (): GoogleGenAI => {
  if (!genAI) {
    const apiKey = getStoredApiKey();
    if (!apiKey) {
      throw new Error("MISSING_API_KEY");
    }
    genAI = new GoogleGenAI({ apiKey });
  }
  return genAI;
};

// Initialize or get an existing chat session for a specific model
const getChatSession = (modelName: string): Chat => {
    if (chatSessions[modelName]) {
        return chatSessions[modelName];
    }

    const ai = getGenAI();
    const session = ai.chats.create({
        model: modelName,
        config: {
            systemInstruction: SYSTEM_INSTRUCTION,
            temperature: 0.3,
            maxOutputTokens: 4000,
        },
        history: [],
    });
    
    chatSessions[modelName] = session;
    return session;
};

export const initializeChat = async () => {
    // Just ensures API key is present and Client is ready
    try {
        getGenAI();
    } catch (error) {
         console.warn("API Key missing during init");
         throw error;
    }
};

export const sendMessageToGemini = async (
  text: string, 
  currentMode: SupportMode,
  history: Message[],
  image?: string
): Promise<string> => {
  
  // Verify API Key existence first
  const apiKey = getStoredApiKey();
  if (!apiKey) throw new Error("MISSING_API_KEY");

  // Determine the sequence of models to try
  const preferredModel = getStoredModel();
  
  // Create a unique list starting with preferred model, then the fallback order excluding duplicates
  const trySequence = [
      preferredModel, 
      ...FALLBACK_ORDER.filter(m => m !== preferredModel)
  ];

  const contextAwareMessage = `[CHẾ ĐỘ HIỆN TẠI: ${currentMode.toUpperCase()}]
  
  Câu hỏi/Trả lời của học sinh:
  ${text}`;

  let messageContent: string | Part[] = contextAwareMessage;

  // Prepare content
  if (image) {
      const parts: Part[] = [];
      parts.push({ text: contextAwareMessage });
      const [mimeTypeHeader, base64Data] = image.split(';base64,');
      const mimeType = mimeTypeHeader.split(':')[1];
      parts.push({
        inlineData: {
          mimeType: mimeType,
          data: base64Data
        }
      });
      messageContent = parts;
  }

  // Fallback Loop
  let lastError: any = null;

  for (const model of trySequence) {
      try {
          console.log(`Attempting with model: ${model}`);
          const session = getChatSession(model);
          const response = await session.sendMessage({ message: messageContent });
          return response.text || "Cô đang suy nghĩ...";
      } catch (error: any) {
          console.warn(`Model ${model} failed:`, error);
          lastError = error;
          
          // If error is related to API Key validity, stop immediately, don't fallback
          if (error.toString().includes("API_KEY_INVALID") || error.toString().includes("PERMISSION_DENIED")) {
               throw new Error("API Key không hợp lệ. Vui lòng kiểm tra lại.");
          }
          
          // Continue to next model in loop
      }
  }

  // If we get here, all models failed
  console.error("All models failed. Last error:", lastError);
  
  // Return specific error message if possible
  if (lastError) {
      const errorStr = lastError.toString();
      if (errorStr.includes("429")) return `Lỗi 429: Hệ thống quá tải (Resource Exhausted). Cô đã thử tất cả các kênh nhưng đều bận.`;
      return `Lỗi hệ thống: ${lastError.message || errorStr}`;
  }

  return "Hệ thống đang gặp sự cố. Vui lòng thử lại sau.";
};

export const generateDailyReport = async (messages: Message[]): Promise<string> => {
    try {
        const ai = getGenAI();
        const conversationText = messages.map(m => `${m.role}: ${m.text}`).join('\n');
        
        const prompt = `Dựa trên đoạn hội thoại sau, hãy lập "BÁO CÁO HỖ TRỢ HỌC SINH" theo mẫu đã quy định trong System Instruction. Chỉ trích xuất thông tin từ cuộc hội thoại này.\n\nHội thoại:\n${conversationText}`;

        const response = await ai.models.generateContent({
            model: getStoredModel(), // Use preferred model for report
            contents: prompt
        });
        return response.text || "Không thể tạo báo cáo lúc này.";
    } catch (e) {
        return "Lỗi khi tạo báo cáo. Vui lòng kiểm tra API Key.";
    }
}