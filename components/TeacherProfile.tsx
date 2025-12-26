import React from 'react';
import { TEACHER_NAME, TEACHER_SCHOOL } from '../constants';
import { GraduationCap, BookOpen, Clock, FileText, Book, Library } from 'lucide-react';

interface TeacherProfileProps {
    onGenerateReport: () => void;
    isGeneratingReport: boolean;
    onOpenGrammar: () => void;
    onOpenVocabulary: () => void;
}

const TeacherProfile: React.FC<TeacherProfileProps> = ({ onGenerateReport, isGeneratingReport, onOpenGrammar, onOpenVocabulary }) => {
  return (
    <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm h-full flex flex-col">
      <div className="text-center mb-6">
        <div className="w-24 h-24 mx-auto mb-3 relative">
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-emerald-100 shadow-md bg-emerald-50 flex items-center justify-center">
                <span className="text-emerald-700 font-bold text-lg text-center px-2 leading-tight">
                    TRỢ LÝ<br/>AI
                </span>
            </div>
            <div className="absolute bottom-0 right-1 w-5 h-5 bg-green-500 border-2 border-white rounded-full"></div>
        </div>
        <h2 className="text-xl font-bold text-slate-800">{TEACHER_NAME}</h2>
        <p className="text-emerald-600 font-medium text-sm whitespace-pre-line">{TEACHER_SCHOOL}</p>
      </div>

      <div className="space-y-4 mb-8">
        <div className="flex items-start gap-3 text-sm text-slate-600">
          <GraduationCap size={18} className="mt-0.5 text-emerald-500" />
          <span>Trợ lý môn Tiếng Anh</span>
        </div>
        <div className="flex items-start gap-3 text-sm text-slate-600">
          <BookOpen size={18} className="mt-0.5 text-emerald-500" />
          <span>Phong cách: Hiện đại, "Tây" hóa, tâm lý & gần gũi.</span>
        </div>
        <div className="flex items-start gap-3 text-sm text-slate-600">
          <Clock size={18} className="mt-0.5 text-emerald-500" />
          <span>Hỗ trợ 24/7: Ngữ pháp, Dịch thuật, Viết luận.</span>
        </div>
      </div>

      <div className="mt-auto pt-6 border-t border-slate-100 space-y-2">
        <h3 className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">Công cụ giáo viên</h3>
        
        <div className="grid grid-cols-2 gap-2">
            <button 
                onClick={onOpenGrammar}
                className="flex flex-col items-center justify-center gap-1 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 py-3 rounded-lg text-xs font-medium transition-colors"
            >
                <Book size={18} />
                Ngữ pháp
            </button>
            <button 
                onClick={onOpenVocabulary}
                className="flex flex-col items-center justify-center gap-1 bg-teal-50 hover:bg-teal-100 text-teal-700 border border-teal-200 py-3 rounded-lg text-xs font-medium transition-colors"
            >
                <Library size={18} />
                Từ vựng
            </button>
        </div>

        <button 
            onClick={onGenerateReport}
            disabled={isGeneratingReport}
            className="w-full flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 py-2.5 rounded-lg text-sm font-medium transition-colors disabled:opacity-50 mt-2"
        >
            <FileText size={16} />
            {isGeneratingReport ? 'Đang tạo báo cáo...' : 'Tạo báo cáo ngày'}
        </button>
      </div>
    </div>
  );
};

export default TeacherProfile;