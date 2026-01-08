
import React, { useState, useEffect } from 'react';
import { MOCK_SUBJECTS, MOCK_TASKS, MOCK_LESSONS } from '../constants';
import { geminiService } from '../services/geminiService';

interface Props {
  activeTab: string;
}

const StudentDashboard: React.FC<Props> = ({ activeTab }) => {
  const [question, setQuestion] = useState('');
  const [aiResponse, setAiResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [points, setPoints] = useState(1250);

  const handleAskTutor = async () => {
    if (!question.trim()) return;
    setLoading(true);
    try {
      const response = await geminiService.askTutor(question, 'عام', 'الأساس', 'الثامن');
      setAiResponse(response || 'عذراً، أحاول استرجاع المعلومة...');
    } catch (error) {
      setAiResponse('حدث خطأ تقني، حاول مرة أخرى يا بطل.');
    } finally {
      setLoading(false);
    }
  };

  if (activeTab === 'curriculum') {
    return (
      <div className="pb-24 md:pb-8 md:mr-64 p-4 md:p-10 space-y-8 animate-fade-in-up">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900">المكتبة الرقمية 🇸🇩</h1>
            <p className="text-gray-500 font-medium">تصفح دروسك المصورة والمكتوبة وفق أحدث نسخة للمنهج</p>
          </div>
          <div className="bg-white px-6 py-2 rounded-2xl shadow-sm border-2 border-emerald-100 flex items-center gap-3">
            <span className="text-2xl">⭐</span>
            <div>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">نقاط التميز</p>
              <p className="text-xl font-black text-emerald-700">{points}</p>
            </div>
          </div>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_SUBJECTS.map((subject, idx) => (
            <div key={subject.id} className="group relative bg-white rounded-[2rem] p-1 shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-bl-[100px] -z-0 opacity-50 group-hover:bg-emerald-100 transition-colors"></div>
              <div className="relative z-10 p-6">
                <div className="text-5xl mb-6 bg-white w-20 h-20 flex items-center justify-center rounded-3xl shadow-sm group-hover:scale-110 transition-transform duration-500">
                  {subject.icon}
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{subject.name}</h2>
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                  <span className="text-xs font-bold text-gray-400">الصف الثامن أساس</span>
                </div>
                
                <div className="space-y-3">
                  {MOCK_LESSONS.filter(l => l.subjectId === subject.id).map(lesson => (
                    <button key={lesson.id} className="w-full flex items-center justify-between p-4 bg-gray-50 rounded-2xl hover:bg-emerald-50 transition-colors group/item">
                      <div className="flex items-center gap-3">
                        <span className="text-emerald-600 group-hover/item:animate-bounce">▶️</span>
                        <span className="text-sm font-bold text-gray-700">{lesson.title}</span>
                      </div>
                      <span className="text-[10px] font-black text-gray-400">{lesson.duration}</span>
                    </button>
                  ))}
                </div>
                <button className="w-full mt-6 py-4 bg-gray-900 text-white rounded-2xl font-black text-sm hover:bg-emerald-700 transition-all shadow-lg active:scale-95">
                  دخول المادة
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (activeTab === 'ai-tutor') {
    return (
      <div className="pb-24 md:pb-8 md:mr-64 p-4 md:p-10 max-w-5xl mx-auto h-[90vh]">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden flex flex-col h-full border-4 border-white">
          <div className="sudanese-gradient p-8 text-white flex items-center justify-between">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-4xl animate-float">🤖</div>
              <div>
                <h1 className="text-2xl font-black">أستاذي الرقمي</h1>
                <div className="flex items-center gap-2 opacity-80">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
                  <p className="text-sm font-medium">متصل الآن لمساعدتك</p>
                </div>
              </div>
            </div>
            <div className="hidden md:flex flex-col items-end">
                <span className="text-xs opacity-60">النموذج: Gemini 3 Flash</span>
                <span className="text-xs font-bold">نسخة السودان 2.0</span>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-8 space-y-6 bg-gray-50/50">
            <div className="bg-white p-6 rounded-3xl rounded-tr-none shadow-sm max-w-[80%] text-sm font-bold border border-gray-100">
               يا بطل! أنا المعلم الذكي الخاص بك. هل لديك سؤال في الرياضيات، العلوم، أو أي مادة أخرى؟ اسألني وسأشرح لك بكل بساطة.
            </div>
            
            {aiResponse && (
              <div className="bg-emerald-50 p-6 rounded-3xl rounded-tl-none border-2 border-emerald-100 shadow-sm mr-auto max-w-[90%] animate-pop-in">
                <p className="font-black text-emerald-800 mb-3 flex items-center gap-2">
                  <span>🎓</span> أستاذي يقول:
                </p>
                <div className="text-gray-700 leading-relaxed text-sm md:text-base whitespace-pre-wrap font-medium">
                  {aiResponse}
                </div>
              </div>
            )}
            
            {loading && (
              <div className="flex gap-2 p-4 bg-white w-fit rounded-full shadow-sm animate-pulse">
                <div className="w-3 h-3 bg-emerald-400 rounded-full"></div>
                <div className="w-3 h-3 bg-emerald-600 rounded-full"></div>
                <div className="w-3 h-3 bg-emerald-800 rounded-full"></div>
              </div>
            )}
          </div>
          
          <div className="p-6 bg-white border-t-2 border-gray-50">
            <div className="flex gap-4 items-center">
              <div className="relative flex-1">
                <input 
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleAskTutor()}
                  placeholder="اكتب سؤالك التعليمي هنا..."
                  className="w-full bg-gray-50 border-2 border-gray-100 rounded-[2rem] px-8 py-5 outline-none focus:border-emerald-500 focus:bg-white transition-all text-sm font-bold shadow-inner"
                />
                <button className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-emerald-600 transition-colors">🎤</button>
              </div>
              <button 
                onClick={handleAskTutor}
                disabled={loading || !question.trim()}
                className="sudanese-gradient text-white w-16 h-16 rounded-full flex items-center justify-center hover:scale-105 transition-all shadow-xl disabled:opacity-50"
              >
                <span className="text-2xl">🚀</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24 md:pb-8 md:mr-64 p-4 md:p-10 space-y-10 max-w-7xl mx-auto">
      {/* Premium Hero Section */}
      <section className="sudanese-gradient rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden shadow-2xl animate-fade-in-up">
        <div className="relative z-10 max-w-2xl">
          <div className="bg-white/10 w-fit px-4 py-1 rounded-full text-xs font-bold mb-6 backdrop-blur-md border border-white/20">
             نظام التعليم الذكي v2.1
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight">
            مرحباً بك يا بطل، <br/> <span className="text-emerald-300">أحمد محمد!</span>
          </h1>
          <p className="text-lg opacity-80 mb-8 font-medium">
            لديك اليوم تحدي جديد في مادة الرياضيات. هل أنت مستعد لجمع المزيد من النقاط؟
          </p>
          <div className="flex gap-4">
            <button className="bg-white text-emerald-900 px-8 py-4 rounded-2xl font-black text-sm hover:shadow-xl transition-all active:scale-95">
              ابدأ المذاكرة الآن
            </button>
            <button className="bg-emerald-600/50 border border-white/20 px-8 py-4 rounded-2xl font-black text-sm backdrop-blur-md hover:bg-emerald-600 transition-all">
              عرض الجدول
            </button>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
        <div className="absolute top-10 left-10 text-9xl opacity-10 font-black rotate-12 select-none">
          🇸🇩
        </div>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
           <div className="flex justify-between items-center">
             <h2 className="text-2xl font-black text-gray-800">نشاطي التعليمي</h2>
             <button className="text-emerald-700 font-bold text-sm">تعديل التفضيلات</button>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="glass-card p-8 rounded-[2.5rem] shadow-sm border border-gray-100 group hover:border-emerald-500 transition-all duration-500">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl">📚</span>
                  <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black tracking-widest">المواد</span>
                </div>
                <h3 className="text-xl font-black text-gray-800 mb-2">الرياضيات</h3>
                <p className="text-gray-400 text-xs font-bold mb-6 italic">الوحدة الثالثة: الجبر</p>
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-3/4 rounded-full"></div>
                </div>
                <p className="mt-3 text-[10px] font-black text-emerald-600 text-left">أنجزت 75%</p>
              </div>

              <div className="glass-card p-8 rounded-[2.5rem] shadow-sm border border-gray-100 group hover:border-blue-500 transition-all duration-500">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl">🧪</span>
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-black tracking-widest">المواد</span>
                </div>
                <h3 className="text-xl font-black text-gray-800 mb-2">العلوم</h3>
                <p className="text-gray-400 text-xs font-bold mb-6 italic">الأحياء: الخلية</p>
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-1/2 rounded-full"></div>
                </div>
                <p className="mt-3 text-[10px] font-black text-blue-600 text-left">أنجزت 50%</p>
              </div>
           </div>
        </div>

        <aside className="space-y-8">
           <div className="bg-white p-8 rounded-[2.5rem] shadow-xl border border-gray-50">
              <h2 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-2">
                <span className="animate-bounce">🔔</span> الإشعارات
              </h2>
              <div className="space-y-4">
                 <div className="p-4 bg-orange-50 rounded-2xl border-r-4 border-orange-500 animate-pop-in">
                    <p className="text-xs font-black text-orange-800 mb-1">تنبيه هام</p>
                    <p className="text-[11px] text-orange-700 font-bold leading-relaxed">تعديل موعد امتحان الرياضيات الفتري ليصبح غداً الساعة 9 ص.</p>
                 </div>
                 <div className="p-4 bg-emerald-50 rounded-2xl border-r-4 border-emerald-500 animate-pop-in delay-100">
                    <p className="text-xs font-black text-emerald-800 mb-1">إنجاز جديد</p>
                    <p className="text-[11px] text-emerald-700 font-bold leading-relaxed">أحسنت! لقد أكملت 5 دروس متتالية هذا الأسبوع.</p>
                 </div>
              </div>
              <button className="w-full mt-6 py-4 text-xs font-black text-gray-400 hover:text-emerald-700 transition-colors uppercase tracking-widest">
                مشاهدة كل التنبيهات
              </button>
           </div>

           <div className="bg-gray-900 p-8 rounded-[2.5rem] text-white shadow-2xl relative overflow-hidden group">
              <div className="relative z-10">
                <h2 className="text-xl font-black mb-4">التحدي اليومي</h2>
                <p className="text-xs opacity-60 leading-relaxed mb-6 font-medium">حل 5 مسائل في الجبر واحصل على 100 نقطة إضافية!</p>
                <button className="bg-emerald-500 w-full py-4 rounded-2xl font-black text-sm hover:bg-emerald-400 transition-colors">
                  ابدأ التحدي
                </button>
              </div>
              <div className="absolute -right-5 -bottom-5 text-7xl opacity-10 transition-transform duration-700 group-hover:rotate-45">🏆</div>
           </div>
        </aside>
      </div>
    </div>
  );
};

export default StudentDashboard;
