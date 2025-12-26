import React, { useState } from 'react';
import { X, Book, ChevronRight, Bookmark } from 'lucide-react';
import { GRAMMAR_RULES } from '../data/grammarRules';

interface GrammarHandbookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const GrammarHandbookModal: React.FC<GrammarHandbookModalProps> = ({ isOpen, onClose }) => {
  const [activeTab, setActiveTab] = useState<'tenses' | 'conditionals' | 'passive' | 'reported' | 'comparisons' | 'modals'>('tenses');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="bg-white w-full max-w-4xl h-[85vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col relative z-10 animate-fade-in-up">
        {/* Header */}
        <div className="bg-emerald-600 p-4 flex items-center justify-between text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                <Book size={24} className="text-white" />
            </div>
            <div>
                <h2 className="text-xl font-bold">Sổ Tay Ngữ Pháp</h2>
                <p className="text-emerald-100 text-xs opacity-90">Tra cứu nhanh công thức và cách dùng</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-1/3 md:w-1/4 bg-slate-50 border-r border-slate-200 overflow-y-auto">
            <nav className="p-2 space-y-1">
              <SidebarItem label="12 Thì cơ bản" active={activeTab === 'tenses'} onClick={() => setActiveTab('tenses')} />
              <SidebarItem label="Câu điều kiện" active={activeTab === 'conditionals'} onClick={() => setActiveTab('conditionals')} />
              <SidebarItem label="Câu bị động" active={activeTab === 'passive'} onClick={() => setActiveTab('passive')} />
              <SidebarItem label="Câu gián tiếp" active={activeTab === 'reported'} onClick={() => setActiveTab('reported')} />
              <SidebarItem label="So sánh" active={activeTab === 'comparisons'} onClick={() => setActiveTab('comparisons')} />
              <SidebarItem label="Động từ khuyết thiếu" active={activeTab === 'modals'} onClick={() => setActiveTab('modals')} />
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6 bg-white custom-scrollbar">
            
            {activeTab === 'tenses' && (
              <div className="space-y-8">
                {GRAMMAR_RULES.tenses.map((tense) => (
                  <div key={tense.id} className="border border-slate-200 rounded-xl overflow-hidden shadow-sm">
                    <div className="bg-slate-50 p-4 border-b border-slate-200">
                      <h3 className="text-lg font-bold text-emerald-800">{tense.name} <span className="font-normal text-slate-500 text-sm">({tense.vietnamese_name})</span></h3>
                    </div>
                    <div className="p-4 space-y-4">
                      {/* Formulas */}
                      <div className="bg-emerald-50/50 rounded-lg p-3">
                         <h4 className="font-semibold text-emerald-700 mb-2 text-sm uppercase tracking-wide">Công thức</h4>
                         <div className="grid gap-2 text-sm">
                            <FormulaRow label="(+)" content={tense.formulas.affirmative.structure} />
                            <FormulaRow label="(-)" content={tense.formulas.negative.structure} />
                            <FormulaRow label="(?)" content={tense.formulas.question.structure} />
                         </div>
                      </div>
                      
                      {/* Usage */}
                      <div>
                         <h4 className="font-semibold text-slate-700 mb-2 text-sm uppercase tracking-wide">Cách dùng phổ biến</h4>
                         <ul className="space-y-2">
                           {tense.usage.map((u, idx) => (
                             <li key={idx} className="text-sm text-slate-600 flex gap-2">
                               <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                               <div>
                                 <strong className="text-slate-800">{u.case}</strong>
                                 <p className="italic text-slate-500 mt-0.5">VD: "{u.examples[0].english}" ({u.examples[0].vietnamese})</p>
                               </div>
                             </li>
                           ))}
                         </ul>
                      </div>

                      {/* Mistakes */}
                      {tense.common_mistakes && (
                          <div className="bg-red-50 rounded-lg p-3 border border-red-100">
                             <h4 className="font-semibold text-red-700 mb-2 text-sm uppercase tracking-wide flex items-center gap-2">
                                <Bookmark size={14} /> Lỗi thường gặp
                             </h4>
                             <ul className="space-y-2">
                               {tense.common_mistakes.map((mistake, idx) => (
                                 <li key={idx} className="text-sm">
                                    <div className="text-red-800 line-through decoration-red-400">{mistake.wrong}</div>
                                    <div className="text-green-700 font-medium flex items-center gap-1">
                                        <ChevronRight size={12}/> {mistake.correct}
                                    </div>
                                    <p className="text-slate-500 text-xs mt-0.5">{mistake.vietnamese}</p>
                                 </li>
                               ))}
                             </ul>
                          </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'conditionals' && (
              <div className="space-y-6">
                 {GRAMMAR_RULES.conditional_sentences.map((cond, idx) => (
                    <div key={idx} className="border border-slate-200 rounded-xl p-5 shadow-sm hover:border-emerald-200 transition-colors">
                        <h3 className="text-lg font-bold text-emerald-800 mb-1">{cond.type}</h3>
                        <p className="text-slate-500 text-sm mb-4">{cond.vietnamese_name} - {cond.usage}</p>
                        
                        <div className="bg-slate-100 p-3 rounded-lg font-mono text-sm text-slate-700 mb-4 border border-slate-200">
                           {cond.formula}
                        </div>

                        <div>
                            <p className="text-sm font-semibold text-slate-700 mb-2">Ví dụ:</p>
                            {cond.examples.map((ex, i) => (
                                <div key={i} className="text-sm text-slate-600 mb-1 pl-3 border-l-2 border-emerald-300">
                                    <p className="font-medium">{ex.english}</p>
                                    <p className="italic text-slate-400">{ex.vietnamese}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                 ))}
              </div>
            )}

            {activeTab === 'passive' && (
               <div className="space-y-6">
                   <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                       <h3 className="font-bold text-blue-800 text-lg mb-2">Tổng quan</h3>
                       <p className="text-blue-900 mb-2">{GRAMMAR_RULES.passive_voice.definition}</p>
                       <div className="bg-white p-2 rounded border border-blue-200 font-mono text-center text-blue-800 font-bold">
                           {GRAMMAR_RULES.passive_voice.formula}
                       </div>
                   </div>

                   <div className="grid gap-4 md:grid-cols-2">
                       {GRAMMAR_RULES.passive_voice.tenses.map((t, idx) => (
                           <div key={idx} className="border border-slate-200 rounded-xl p-4">
                               <h4 className="font-bold text-slate-700 mb-3">{t.tense}</h4>
                               <div className="space-y-2 text-sm">
                                   <div className="flex justify-between">
                                       <span className="text-slate-500">Active:</span>
                                       <span className="font-medium">{t.active}</span>
                                   </div>
                                   <div className="flex justify-between">
                                       <span className="text-emerald-600 font-medium">Passive:</span>
                                       <span className="font-bold text-emerald-700">{t.passive}</span>
                                   </div>
                                   <div className="mt-3 pt-3 border-t border-slate-100 italic text-slate-500">
                                       "{t.example.passive}"
                                   </div>
                               </div>
                           </div>
                       ))}
                   </div>
               </div>
            )}

             {/* Placeholder for other tabs if they need simple rendering */}
            {(activeTab === 'reported' || activeTab === 'comparisons' || activeTab === 'modals') && (
                <div className="text-center py-12 text-slate-400">
                    <p>Dữ liệu đang được cập nhật hiển thị chi tiết.</p>
                    <p className="text-xs mt-2">(Dữ liệu thô đã có sẵn trong hệ thống AI để trả lời câu hỏi của bạn)</p>
                    <div className="mt-6 text-left bg-slate-50 p-4 rounded-lg overflow-x-auto border border-slate-200 font-mono text-xs text-slate-600">
                        <pre>{JSON.stringify(GRAMMAR_RULES[activeTab as keyof typeof GRAMMAR_RULES], null, 2)}</pre>
                    </div>
                </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) => (
  <button 
    onClick={onClick}
    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center justify-between group ${
      active 
        ? 'bg-emerald-100 text-emerald-800' 
        : 'text-slate-600 hover:bg-slate-100'
    }`}
  >
    {label}
    {active && <ChevronRight size={16} className="text-emerald-600" />}
  </button>
);

const FormulaRow = ({ label, content }: { label: string, content: string }) => (
    <div className="flex gap-3">
        <span className="font-mono font-bold text-slate-400 w-6 shrink-0">{label}</span>
        <span className="font-mono text-slate-700">{content}</span>
    </div>
);

export default GrammarHandbookModal;