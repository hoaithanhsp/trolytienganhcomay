import React, { useState } from 'react';
import { X, Library, ChevronRight, Volume2, Globe } from 'lucide-react';
import { VOCABULARY_DB } from '../data/vocabulary';

interface VocabularyHandbookModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const VocabularyHandbookModal: React.FC<VocabularyHandbookModalProps> = ({ isOpen, onClose }) => {
  const [activeTopicId, setActiveTopicId] = useState<string>(VOCABULARY_DB.topics[0]?.topic_id || '');

  const activeTopic = VOCABULARY_DB.topics.find(t => t.topic_id === activeTopicId);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
      
      <div className="bg-white w-full max-w-5xl h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col relative z-10 animate-fade-in-up">
        {/* Header */}
        <div className="bg-teal-600 p-4 flex items-center justify-between text-white shrink-0">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 p-2 rounded-lg backdrop-blur-sm">
                <Library size={24} className="text-white" />
            </div>
            <div>
                <h2 className="text-xl font-bold">Sổ Tay Từ Vựng</h2>
                <p className="text-teal-100 text-xs opacity-90">Tra cứu từ vựng theo chủ đề ({VOCABULARY_DB.topics.length} topics)</p>
            </div>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-white/10 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <div className="flex flex-1 overflow-hidden">
          {/* Sidebar */}
          <div className="w-1/3 md:w-1/4 bg-slate-50 border-r border-slate-200 overflow-y-auto custom-scrollbar">
            <nav className="p-2 space-y-1">
              {VOCABULARY_DB.topics.map((topic) => (
                  <button 
                    key={topic.topic_id}
                    onClick={() => setActiveTopicId(topic.topic_id)}
                    className={`w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all flex items-center justify-between group ${
                      activeTopicId === topic.topic_id
                        ? 'bg-teal-100 text-teal-800' 
                        : 'text-slate-600 hover:bg-slate-100'
                    }`}
                  >
                    <div>
                        <div className="font-semibold">{topic.vietnamese_name}</div>
                        <div className="text-xs text-slate-400 font-normal mt-0.5 truncate">{topic.topic_name}</div>
                    </div>
                    {activeTopicId === topic.topic_id && <ChevronRight size={16} className="text-teal-600 shrink-0" />}
                  </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-4 md:p-6 bg-white custom-scrollbar">
            {activeTopic ? (
                <div className="max-w-4xl mx-auto">
                    <div className="mb-6 border-b border-slate-100 pb-4">
                        <h3 className="text-2xl font-bold text-slate-800 mb-1">{activeTopic.vietnamese_name}</h3>
                        <div className="flex items-center gap-2 text-slate-500 mb-2">
                             <Globe size={14} />
                             <span className="font-medium">{activeTopic.topic_name}</span>
                             <span className="px-2 py-0.5 bg-slate-100 rounded text-xs text-slate-500 uppercase">{activeTopic.level}</span>
                        </div>
                        <p className="text-slate-600 text-sm italic">{activeTopic.description}</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {activeTopic.vocabulary.map((vocab, idx) => (
                            <div key={idx} className="border border-slate-200 rounded-xl p-4 hover:border-teal-300 hover:shadow-sm transition-all bg-slate-50/50">
                                <div className="flex items-start justify-between mb-2">
                                    <div>
                                        <h4 className="text-lg font-bold text-teal-700 flex items-center gap-2">
                                            {vocab.word}
                                            <span className="text-xs font-normal text-slate-400 bg-white border border-slate-200 px-1.5 py-0.5 rounded">{vocab.part_of_speech}</span>
                                        </h4>
                                        <div className="flex items-center gap-2 mt-1">
                                            <span className="font-mono text-sm text-slate-500 bg-slate-100 px-1.5 rounded">{vocab.pronunciation}</span>
                                            {/* Fake audio button for UI purposes */}
                                            <button className="text-slate-400 hover:text-teal-600" title="Nghe phát âm">
                                                <Volume2 size={14} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mb-3">
                                    <p className="font-semibold text-slate-800">{vocab.vietnamese_meaning}</p>
                                </div>

                                <div className="space-y-2 text-sm">
                                    <div className="pl-3 border-l-2 border-teal-200">
                                        <p className="text-slate-600 italic">"{vocab.example}"</p>
                                        <p className="text-slate-500 text-xs mt-0.5">{vocab.vietnamese_example}</p>
                                    </div>
                                    
                                    {vocab.collocations && vocab.collocations.length > 0 && (
                                        <div className="flex flex-wrap gap-1 mt-2">
                                            {vocab.collocations.map((col, i) => (
                                                <span key={i} className="text-[10px] bg-blue-50 text-blue-700 px-2 py-0.5 rounded-full border border-blue-100">
                                                    {col}
                                                </span>
                                            ))}
                                        </div>
                                    )}

                                    {vocab.synonyms && vocab.synonyms.length > 0 && (
                                         <p className="text-xs text-slate-400 mt-1">
                                            <span className="font-semibold">Synonyms:</span> {vocab.synonyms.join(', ')}
                                         </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ) : (
                <div className="flex flex-col items-center justify-center h-full text-slate-400">
                    <p>Vui lòng chọn một chủ đề để xem từ vựng.</p>
                </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VocabularyHandbookModal;