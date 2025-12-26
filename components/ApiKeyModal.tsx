import React, { useState, useEffect } from 'react';
import { Key, ExternalLink, Save, Settings, Check, Cpu } from 'lucide-react';
import { getStoredApiKey, setStoredApiKey, getStoredModel, setStoredModel } from '../services/geminiService';
import { AVAILABLE_MODELS } from '../constants';

interface ApiKeyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

const ApiKeyModal: React.FC<ApiKeyModalProps> = ({ isOpen, onClose, onSuccess }) => {
  const [apiKey, setApiKey] = useState('');
  const [selectedModel, setSelectedModel] = useState('');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
        setApiKey(getStoredApiKey() || '');
        setSelectedModel(getStoredModel());
        setIsVisible(true);
    } else {
        setIsVisible(false);
    }
  }, [isOpen]);

  const handleSave = () => {
    if (!apiKey.trim()) {
        alert("Vui lòng nhập API Key!");
        return;
    }
    setStoredApiKey(apiKey.trim());
    setStoredModel(selectedModel);
    onSuccess();
    onClose();
  };

  if (!isOpen && !isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative overflow-hidden flex flex-col max-h-[90vh]">
        <div className="bg-teal-600 p-5 text-white flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-md">
                <Settings size={20} className="text-white" />
            </div>
            <div>
                <h2 className="text-xl font-bold">Thiết lập Hệ thống</h2>
                <p className="text-teal-100 text-xs">Cấu hình API Key và Trí tuệ nhân tạo</p>
            </div>
        </div>

        <div className="p-6 overflow-y-auto custom-scrollbar">
            {/* Section 1: API Key */}
            <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 mb-2 flex items-center gap-2">
                    <Key size={16} className="text-teal-600"/> 
                    Google Gemini API Key <span className="text-red-500">*</span>
                </label>
                <input
                    type="password"
                    value={apiKey}
                    onChange={(e) => setApiKey(e.target.value)}
                    placeholder="Dán mã API Key của bạn vào đây (AIzaSy...)"
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-teal-500 focus:border-teal-500 outline-none transition-all text-slate-800 font-mono text-sm"
                />
                
                <div className="mt-3 bg-blue-50 p-3 rounded-lg border border-blue-100 text-sm">
                    <p className="font-semibold text-blue-800 mb-1">Chưa có API Key?</p>
                    <ul className="space-y-1 text-slate-600">
                        <li className="flex items-center gap-2">
                            1. Lấy key miễn phí tại: <a href="https://aistudio.google.com/app/apikey" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline font-medium flex items-center gap-1">Google AI Studio <ExternalLink size={12}/></a>
                        </li>
                        <li className="flex items-center gap-2">
                            2. Xem hướng dẫn chi tiết: <a href="https://tinyurl.com/hdsdpmTHT" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline font-medium flex items-center gap-1">Tại đây <ExternalLink size={12}/></a>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Section 2: Model Selection */}
            <div className="mb-6">
                <label className="block text-sm font-bold text-slate-700 mb-3 flex items-center gap-2">
                    <Cpu size={16} className="text-teal-600"/> 
                    Chọn Mô hình AI (Model)
                </label>
                
                <div className="grid grid-cols-1 gap-3">
                    {AVAILABLE_MODELS.map((model) => (
                        <div 
                            key={model.id}
                            onClick={() => setSelectedModel(model.id)}
                            className={`
                                relative p-3 rounded-xl border-2 cursor-pointer transition-all
                                ${selectedModel === model.id 
                                    ? 'border-teal-500 bg-teal-50 shadow-sm' 
                                    : 'border-slate-200 bg-white hover:border-teal-200 hover:bg-slate-50'
                                }
                            `}
                        >
                            <div className="flex items-center justify-between">
                                <div>
                                    <h4 className={`font-bold text-sm ${selectedModel === model.id ? 'text-teal-800' : 'text-slate-700'}`}>
                                        {model.name}
                                    </h4>
                                    <p className="text-xs text-slate-500 mt-0.5">{model.desc}</p>
                                </div>
                                {selectedModel === model.id && (
                                    <div className="w-5 h-5 bg-teal-500 rounded-full flex items-center justify-center">
                                        <Check size={12} className="text-white" />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
                <p className="text-[10px] text-slate-400 mt-2 italic">
                    * Hệ thống sẽ tự động chuyển sang các model khác nếu model bạn chọn bị quá tải (Fallback).
                </p>
            </div>
        </div>

        <div className="p-5 border-t border-slate-100 bg-slate-50 flex gap-3 shrink-0">
            <button
                onClick={onClose}
                className="flex-1 py-2.5 px-4 rounded-xl border border-slate-300 text-slate-600 font-medium hover:bg-white transition-colors"
            >
                Đóng
            </button>
            <button
                onClick={handleSave}
                className="flex-1 py-2.5 px-4 rounded-xl bg-teal-600 text-white font-bold hover:bg-teal-700 shadow-md transition-all flex items-center justify-center gap-2"
            >
                <Save size={18} />
                Lưu cấu hình
            </button>
        </div>
      </div>
    </div>
  );
};

export default ApiKeyModal;