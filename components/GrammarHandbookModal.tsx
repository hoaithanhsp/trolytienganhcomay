import React, { useState } from 'react';
import { X, Book, ChevronRight, Bookmark, AlertTriangle, Lightbulb, Repeat, GitCompare, Zap } from 'lucide-react';
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
                    <div className="bg-slate-50 p-4 border-b border-slate-200 flex justify-between items-center">
                      <h3 className="text-lg font-bold text-emerald-800">{tense.name_en} <span className="font-normal text-slate-500 text-sm block md:inline md:ml-2">({tense.name_vi})</span></h3>
                      <span className="text-xs font-bold px-2 py-1 bg-emerald-100 text-emerald-700 rounded-md">{tense.level}</span>
                    </div>
                    <div className="p-4 space-y-4">
                      {/* Formulas */}
                      <div className="bg-emerald-50/50 rounded-lg p-3">
                         <h4 className="font-semibold text-emerald-700 mb-2 text-sm uppercase tracking-wide">Công thức</h4>
                         <div className="grid gap-2 text-sm">
                            <FormulaRow label="(+)" content={tense.formula.positive} />
                            <FormulaRow label="(-)" content={tense.formula.negative} />
                            <FormulaRow label="(?)" content={tense.formula.question} />
                         </div>
                      </div>
                      
                      {/* Usage */}
                      <div>
                         <h4 className="font-semibold text-slate-700 mb-2 text-sm uppercase tracking-wide">Cách dùng phổ biến</h4>
                         <ul className="space-y-3">
                           {tense.usage.map((u, idx) => (
                             <li key={idx} className="text-sm text-slate-600 flex gap-2">
                               <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                               <div>
                                 <strong className="text-slate-800 block mb-1">{u.description}</strong>
                                 <ul className="pl-2 border-l-2 border-slate-200 ml-1">
                                    {u.examples.map((ex, exIdx) => (
                                        <li key={exIdx} className="italic text-slate-500 text-xs mb-0.5">{ex}</li>
                                    ))}
                                 </ul>
                               </div>
                             </li>
                           ))}
                         </ul>
                      </div>

                      {/* Signals & Notes */}
                      <div className="grid md:grid-cols-2 gap-3">
                          {tense.signal_words && (
                              <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                                  <h4 className="font-semibold text-yellow-700 mb-1 text-xs uppercase tracking-wide flex items-center gap-1">
                                      <Lightbulb size={12}/> Dấu hiệu nhận biết
                                  </h4>
                                  <p className="text-xs text-slate-700 leading-relaxed">{tense.signal_words.join(", ")}</p>
                              </div>
                          )}
                          {tense.notes && (
                              <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                  <h4 className="font-semibold text-blue-700 mb-1 text-xs uppercase tracking-wide flex items-center gap-1">
                                      <Bookmark size={12}/> Lưu ý
                                  </h4>
                                  <p className="text-xs text-slate-700 leading-relaxed">{tense.notes}</p>
                              </div>
                          )}
                      </div>

                      {/* Mistakes */}
                      {tense.common_mistakes && (
                          <div className="bg-red-50 rounded-lg p-3 border border-red-100">
                             <h4 className="font-semibold text-red-700 mb-2 text-sm uppercase tracking-wide flex items-center gap-2">
                                <AlertTriangle size={14} /> Lỗi thường gặp
                             </h4>
                             <ul className="space-y-2">
                               {tense.common_mistakes.map((mistake, idx) => (
                                 <li key={idx} className="text-sm">
                                    <div className="text-red-800 line-through decoration-red-400 text-xs">{mistake.wrong}</div>
                                    <div className="text-green-700 font-medium flex items-center gap-1 text-xs">
                                        <ChevronRight size={12}/> {mistake.correct}
                                    </div>
                                    <p className="text-slate-500 text-[10px] mt-0.5 italic">{mistake.explanation}</p>
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
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <h3 className="text-lg font-bold text-emerald-800">{cond.name_en}</h3>
                                <p className="text-slate-500 text-sm">{cond.name_vi}</p>
                            </div>
                            <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-600 rounded-md">{cond.level}</span>
                        </div>
                        
                        <div className="bg-slate-100 p-3 rounded-lg font-mono text-sm text-slate-700 mb-4 border border-slate-200">
                           {cond.formula.structure}
                           {cond.formula.alternative && (
                               <div className="mt-1 text-slate-500 text-xs pt-1 border-t border-slate-200">Or: {cond.formula.alternative}</div>
                           )}
                        </div>

                        <div className="mb-3">
                            {cond.usage.map((u, i) => (
                                <div key={i} className="mb-2">
                                    <p className="text-sm font-semibold text-slate-700 flex items-center gap-1">
                                        <div className="w-1 h-1 rounded-full bg-slate-400"></div> {u.description}
                                    </p>
                                    <ul className="pl-4 mt-1 space-y-1">
                                        {u.examples.map((ex, j) => (
                                            <li key={j} className="text-xs text-slate-500 italic border-l-2 border-emerald-200 pl-2">{ex}</li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                        
                        {cond.common_mistakes && (
                            <div className="mt-3 pt-3 border-t border-slate-100">
                                <p className="text-xs font-bold text-red-600 mb-1">Lưu ý lỗi sai:</p>
                                {cond.common_mistakes.map((m, k) => (
                                    <div key={k} className="text-xs mb-1">
                                        <span className="text-red-500 line-through mr-2">{m.wrong}</span>
                                        <span className="text-green-600">{m.correct}</span>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                 ))}
              </div>
            )}

            {activeTab === 'passive' && (
               <div className="space-y-6">
                   <div className="bg-blue-50 p-4 rounded-xl border border-blue-100">
                       <h3 className="font-bold text-blue-800 text-lg mb-1">{GRAMMAR_RULES.passive_voice.name_vi} ({GRAMMAR_RULES.passive_voice.name_en})</h3>
                       <p className="text-blue-900 text-sm mb-3">{GRAMMAR_RULES.passive_voice.definition}</p>
                       <div className="bg-white p-3 rounded border border-blue-200 font-mono text-center text-blue-800 font-bold text-sm">
                           {GRAMMAR_RULES.passive_voice.formula.general}
                       </div>
                   </div>

                   <div className="border border-slate-200 rounded-xl overflow-hidden">
                       <div className="bg-slate-50 px-4 py-2 border-b border-slate-200 font-semibold text-slate-700 text-sm">
                           Công thức chi tiết theo thì
                       </div>
                       <div className="divide-y divide-slate-100">
                           {Object.entries(GRAMMAR_RULES.passive_voice.formula).map(([key, formula]) => {
                               if (key === 'general') return null;
                               return (
                                   <div key={key} className="px-4 py-3 flex flex-col md:flex-row md:items-center gap-2">
                                       <span className="text-xs font-bold text-slate-500 uppercase w-32 shrink-0">{key.replace('_', ' ')}</span>
                                       <span className="text-sm font-mono text-emerald-700">{formula}</span>
                                   </div>
                               );
                           })}
                       </div>
                   </div>

                   <div className="grid md:grid-cols-2 gap-4">
                       <div className="border border-slate-200 rounded-xl p-4">
                           <h4 className="font-bold text-slate-700 mb-2 text-sm">Cách dùng</h4>
                           <ul className="space-y-3">
                               {GRAMMAR_RULES.passive_voice.usage.map((u, i) => (
                                   <li key={i} className="text-sm">
                                       <p className="font-medium text-slate-800 text-xs mb-1">{u.description}</p>
                                       {u.examples.map((ex, j) => (
                                           <p key={j} className="text-slate-500 italic text-[10px] pl-2 border-l border-slate-300">{ex}</p>
                                       ))}
                                   </li>
                               ))}
                           </ul>
                       </div>
                       
                       <div className="space-y-4">
                           {GRAMMAR_RULES.passive_voice.common_mistakes && (
                               <div className="bg-red-50 p-3 rounded-xl border border-red-100">
                                   <h4 className="font-bold text-red-700 mb-2 text-xs uppercase">Lỗi thường gặp</h4>
                                   <ul className="space-y-2">
                                       {GRAMMAR_RULES.passive_voice.common_mistakes.map((m, i) => (
                                           <li key={i} className="text-xs">
                                               <div className="text-red-500 line-through">{m.wrong}</div>
                                               <div className="text-green-700 font-medium">→ {m.correct}</div>
                                           </li>
                                       ))}
                                   </ul>
                               </div>
                           )}
                           {GRAMMAR_RULES.passive_voice.notes && (
                               <div className="bg-slate-100 p-3 rounded-xl border border-slate-200">
                                   <h4 className="font-bold text-slate-700 mb-1 text-xs uppercase">Ghi chú</h4>
                                   <p className="text-xs text-slate-600">{GRAMMAR_RULES.passive_voice.notes}</p>
                               </div>
                           )}
                       </div>
                   </div>
               </div>
            )}

            {activeTab === 'reported' && (
                <div className="space-y-6">
                    <div className="bg-purple-50 p-4 rounded-xl border border-purple-100">
                        <h3 className="font-bold text-purple-900 text-lg mb-1 flex items-center gap-2">
                            <Repeat size={20} className="text-purple-700"/> {GRAMMAR_RULES.reported_speech.name_vi}
                        </h3>
                        <p className="text-purple-800 text-sm">{GRAMMAR_RULES.reported_speech.definition}</p>
                    </div>

                    {GRAMMAR_RULES.reported_speech.types.map((type, idx) => (
                        <div key={idx} className="border border-slate-200 rounded-xl p-5 shadow-sm">
                            <h4 className="text-lg font-bold text-slate-800 mb-3 border-b border-slate-100 pb-2">{type.name_vi} ({type.name_en})</h4>
                            
                            <div className="bg-slate-50 p-3 rounded-lg mb-4 border border-slate-200">
                                <p className="text-xs font-bold text-slate-500 uppercase mb-2">Công thức</p>
                                <div className="space-y-2">
                                    {Object.entries(type.formula).map(([key, val]) => (
                                        val && typeof val === 'string' && <div key={key} className="font-mono text-sm text-purple-700">{val}</div>
                                    ))}
                                    {Array.isArray(type.formula.reporting_verbs) && (
                                        <div className="text-xs text-slate-500 mt-1">Verbs: {type.formula.reporting_verbs.join(', ')}</div>
                                    )}
                                </div>
                            </div>

                            {type.tense_changes && (
                                <div className="mb-4">
                                    <p className="text-xs font-bold text-slate-500 uppercase mb-2">Quy tắc lùi thì</p>
                                    <div className="grid grid-cols-2 gap-2 text-xs">
                                        {Object.entries(type.tense_changes).map(([k, v]) => (
                                            <div key={k} className="flex justify-between bg-white border border-slate-100 p-2 rounded">
                                                <span className="text-slate-600">{k}</span>
                                                <span className="text-slate-400">→</span>
                                                <span className="font-medium text-purple-600">{v}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div>
                                <p className="text-xs font-bold text-slate-500 uppercase mb-2">Ví dụ</p>
                                <div className="space-y-3">
                                    {type.examples.map((ex, i) => (
                                        <div key={i} className="text-sm bg-purple-50/50 p-3 rounded-lg border border-purple-50">
                                            <div className="flex gap-2 mb-1">
                                                <span className="text-xs font-bold text-slate-400 w-16">Direct:</span>
                                                <span className="text-slate-700">"{ex.direct}"</span>
                                            </div>
                                            <div className="flex gap-2 mb-1">
                                                <span className="text-xs font-bold text-purple-500 w-16">Indirect:</span>
                                                <span className="font-medium text-purple-800">{ex.indirect}</span>
                                            </div>
                                            <p className="text-xs text-slate-400 italic mt-1 ml-18 pl-18">{ex.translation}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}

                    <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100 text-sm">
                        <h4 className="font-bold text-yellow-800 mb-2 flex items-center gap-2"><Lightbulb size={16}/> Lưu ý quan trọng</h4>
                        <ul className="list-disc list-inside space-y-1 text-yellow-900">
                            {GRAMMAR_RULES.reported_speech.notes.map((note, i) => (
                                <li key={i}>{note}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {activeTab === 'comparisons' && (
                <div className="space-y-6">
                    <div className="bg-orange-50 p-4 rounded-xl border border-orange-100 flex items-center gap-3">
                        <GitCompare size={24} className="text-orange-600"/>
                        <div>
                            <h3 className="font-bold text-orange-900 text-lg">{GRAMMAR_RULES.comparisons.name_vi}</h3>
                            <p className="text-orange-800 text-xs">Level: {GRAMMAR_RULES.comparisons.level}</p>
                        </div>
                    </div>

                    <div className="grid gap-6">
                        {GRAMMAR_RULES.comparisons.types.map((type, idx) => (
                            <div key={idx} className="border border-slate-200 rounded-xl p-5 shadow-sm">
                                <h4 className="text-lg font-bold text-slate-800 mb-3">{type.name_vi}</h4>
                                
                                <div className="bg-slate-50 p-3 rounded-lg mb-4 font-mono text-sm text-orange-700 space-y-2 border border-slate-200">
                                    {Object.entries(type.formula).map(([k, v]) => (
                                        typeof v === 'string' && <div key={k} className="flex gap-2"><span className="text-slate-400 w-20 text-xs uppercase font-sans mt-0.5">{k.replace('_', ' ')}</span> <span>{v}</span></div>
                                    ))}
                                </div>

                                <div className="space-y-2">
                                    <p className="text-xs font-bold text-slate-500 uppercase">Ví dụ</p>
                                    {type.examples.map((ex, i) => (
                                        <p key={i} className="text-sm text-slate-600 pl-3 border-l-2 border-orange-200">{ex}</p>
                                    ))}
                                </div>

                                {type.common_mistakes && (
                                    <div className="mt-4 pt-3 border-t border-slate-100">
                                        <p className="text-xs font-bold text-red-500 uppercase mb-2">Lỗi thường gặp</p>
                                        {type.common_mistakes.map((m, i) => (
                                            <div key={i} className="text-xs mb-1">
                                                <span className="line-through text-slate-400 mr-2">{m.wrong}</span>
                                                <span className="text-green-600 font-medium">{m.correct}</span>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                    
                    <div className="bg-slate-100 p-4 rounded-xl text-sm text-slate-600">
                        <h4 className="font-bold text-slate-800 mb-2">Ghi chú</h4>
                        <ul className="list-disc list-inside space-y-1">
                            {GRAMMAR_RULES.comparisons.notes.map((n, i) => <li key={i}>{n}</li>)}
                        </ul>
                    </div>
                </div>
            )}

            {activeTab === 'modals' && (
                <div className="space-y-6">
                    <div className="bg-indigo-50 p-4 rounded-xl border border-indigo-100">
                        <h3 className="font-bold text-indigo-900 text-lg mb-2 flex items-center gap-2">
                            <Zap size={20} className="text-indigo-600"/> {GRAMMAR_RULES.modal_verbs.name_vi}
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                            {GRAMMAR_RULES.modal_verbs.general_rules.map((rule, i) => (
                                <div key={i} className="flex items-start gap-2 text-sm text-indigo-800">
                                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0"/>
                                    {rule}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="grid gap-6">
                        {GRAMMAR_RULES.modal_verbs.modals.map((modal, idx) => (
                            <div key={idx} className="border border-slate-200 rounded-xl p-5 shadow-sm hover:border-indigo-200 transition-colors">
                                <div className="flex justify-between mb-3 border-b border-slate-100 pb-2">
                                    <h4 className="text-lg font-bold text-indigo-700">{modal.name}</h4>
                                    <span className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-500 font-bold">{modal.level}</span>
                                </div>

                                <div className="grid md:grid-cols-2 gap-4">
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase mb-2">Công thức</p>
                                        <div className="space-y-1 font-mono text-xs text-slate-600 bg-slate-50 p-2 rounded border border-slate-100">
                                            <div>(+) {modal.formula.positive}</div>
                                            {modal.formula.negative && <div>(-) {modal.formula.negative}</div>}
                                            {modal.formula.question && <div>(?) {modal.formula.question}</div>}
                                        </div>
                                    </div>
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase mb-2">Cách dùng</p>
                                        <div className="space-y-3">
                                            {modal.usage.map((u, i) => (
                                                <div key={i}>
                                                    <p className="text-sm font-semibold text-slate-700">{u.description}</p>
                                                    <ul className="pl-2 border-l-2 border-indigo-100 mt-1">
                                                        {u.examples.map((ex, j) => (
                                                            <li key={j} className="text-xs text-slate-500 italic mb-0.5">{ex}</li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {GRAMMAR_RULES.modal_verbs.comparison_table && (
                        <div className="border border-slate-200 rounded-xl overflow-hidden">
                            <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 font-bold text-slate-700">
                                Bảng so sánh nhanh
                            </div>
                            <div className="p-4 grid md:grid-cols-3 gap-4 text-sm">
                                {Object.entries(GRAMMAR_RULES.modal_verbs.comparison_table).map(([key, values]) => (
                                    <div key={key}>
                                        <h5 className="font-bold text-indigo-600 uppercase text-xs mb-2 border-b border-indigo-100 pb-1">{key}</h5>
                                        <ul className="space-y-1">
                                            {Object.entries(values).map(([k, v]) => (
                                                <li key={k} className="flex justify-between">
                                                    <span className="font-mono text-slate-500 text-xs">{k.replace(/_/g, ' ')}</span>
                                                    <span className="text-slate-700 text-right text-xs">{v}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
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
        <span className="font-mono text-slate-700 break-all">{content}</span>
    </div>
);

export default GrammarHandbookModal;