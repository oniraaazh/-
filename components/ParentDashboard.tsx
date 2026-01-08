
import React, { useState } from 'react';
import { MOCK_REPORTS } from '../constants';

interface Props {
  activeTab: string;
}

const ParentDashboard: React.FC<Props> = ({ activeTab }) => {
  const [selectedChild, setSelectedChild] = useState(0);

  const children = [
    { name: 'محمد أحمد', grade: 'الثامن أساس', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix' },
    { name: 'سارة أحمد', grade: 'الخامس أساس', img: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Sasha' },
  ];

  const renderChildSelector = () => (
    <div className="flex gap-6 overflow-x-auto pb-6 no-scrollbar">
      {children.map((child, i) => (
        <button 
          key={i} 
          onClick={() => setSelectedChild(i)} 
          className={`flex-shrink-0 flex items-center gap-4 px-8 py-5 rounded-[2rem] border-2 transition-all duration-500 shadow-sm ${
            selectedChild === i 
              ? 'bg-emerald-50 border-emerald-600 shadow-emerald-100 shadow-xl scale-105' 
              : 'bg-white border-transparent hover:border-gray-200 opacity-60'
          }`}
        >
          <div className="relative">
            <img src={child.img} className="w-14 h-14 rounded-2xl shadow-md bg-white p-1" alt={child.name} />
            {selectedChild === i && <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-600 rounded-full border-2 border-white animate-pulse"></div>}
          </div>
          <div className="text-right">
            <p className="font-black text-gray-800">{child.name}</p>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{child.grade}</p>
          </div>
        </button>
      ))}
      <button className="flex-shrink-0 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white border-2 border-dashed border-gray-200 rounded-[2rem] text-gray-300 hover:bg-gray-50 hover:border-emerald-300 transition-all">
        <span className="text-2xl font-black">+</span>
      </button>
    </div>
  );

  if (activeTab === 'reports') {
    return (
      <div className="pb-24 md:pb-8 md:mr-64 p-4 md:p-10 space-y-10 animate-fade-in-up">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900">التقارير الأكاديمية</h1>
            <p className="text-gray-500 font-medium">متابعة دقيقة لمستوى التحصيل الدراسي لكل مادة</p>
          </div>
          <div className="bg-white px-5 py-2 rounded-2xl border border-gray-100 shadow-sm">
             <span className="text-xs font-black text-gray-400">الفصل الدراسي الأول ٢٠٢٤</span>
          </div>
        </header>

        {renderChildSelector()}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MOCK_REPORTS.map((report, i) => (
            <div key={i} className="glass-card rounded-[2.5rem] p-8 border border-white shadow-xl hover:shadow-2xl transition-all duration-500 animate-pop-in" style={{ animationDelay: `${i * 100}ms` }}>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h2 className="text-2xl font-black text-gray-800">{report.subject}</h2>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">المستوى العام</span>
                  </div>
                </div>
                <div className="text-4xl font-black text-emerald-600 bg-emerald-50 w-20 h-20 flex items-center justify-center rounded-3xl shadow-inner">
                  {report.grade}٪
                </div>
              </div>
              
              <div className="bg-gray-50/50 p-6 rounded-3xl mb-6 border border-gray-50">
                <p className="text-xs font-black text-emerald-800 mb-2">💡 ملاحظة المعلم:</p>
                <p className="text-sm text-gray-600 font-medium leading-relaxed italic">"{report.teacherComment}"</p>
              </div>

              <div className="flex justify-between items-center pt-6 border-t border-gray-50">
                <div className="flex flex-col">
                  <span className="text-lg font-black text-blue-600">{report.attendance}٪</span>
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">نسبة الحضور</span>
                </div>
                <button className="text-xs font-black text-gray-400 hover:text-emerald-700 transition-colors">عرض التفاصيل ←</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (activeTab === 'attendance') {
    return (
      <div className="pb-24 md:pb-8 md:mr-64 p-4 md:p-10 space-y-10 animate-fade-in-up">
        <header>
          <h1 className="text-3xl font-black text-gray-900">سجل الانضباط والحضور</h1>
          <p className="text-gray-500 font-medium">مراقبة يومية لانتظام الطالب في الحصص الدراسية</p>
        </header>

        {renderChildSelector()}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden">
               <div className="p-8 border-b border-gray-50 flex justify-between items-center">
                  <h2 className="text-xl font-black text-gray-800">سجل الأيام الماضية</h2>
                  <div className="flex gap-2">
                    <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">مايو ٢٠٢٤</span>
                  </div>
               </div>
               <div className="p-4 space-y-3">
                 {[
                   { date: '٢٤ مايو ٢٠٢٤', status: 'حاضر', color: 'bg-emerald-50 text-emerald-600', note: 'دخل في الوقت المحدد' },
                   { date: '٢٣ مايو ٢٠٢٤', status: 'غائب', color: 'bg-red-50 text-red-600', note: 'لم يتم تقديم عذر' },
                   { date: '٢٢ مايو ٢٠٢٤', status: 'حاضر', color: 'bg-emerald-50 text-emerald-600', note: 'حضور مبكر' },
                   { date: '٢١ مايو ٢٠٢٤', status: 'حاضر', color: 'bg-emerald-50 text-emerald-600', note: 'حضور مبكر' },
                 ].map((day, i) => (
                   <div key={i} className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border border-gray-50 rounded-3xl hover:bg-gray-50 transition-all group">
                     <div>
                        <p className="font-black text-gray-800">{day.date}</p>
                        <p className="text-[10px] font-bold text-gray-400 mt-1">{day.note}</p>
                     </div>
                     <span className={`mt-3 md:mt-0 px-6 py-2 rounded-xl text-xs font-black uppercase tracking-widest shadow-sm ${day.color}`}>
                       {day.status}
                     </span>
                   </div>
                 ))}
               </div>
            </div>
          </div>

          <aside className="space-y-8">
             <div className="sudanese-gradient rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
                <div className="relative z-10 text-center">
                   <p className="text-xs font-black uppercase tracking-widest opacity-60 mb-2">إجمالي الحضور</p>
                   <p className="text-6xl font-black mb-6">٩٨٪</p>
                   <div className="bg-white/20 px-4 py-2 rounded-xl text-sm font-bold backdrop-blur-md">حضور متميز جداً</div>
                </div>
                <div className="absolute -left-10 -bottom-10 text-9xl opacity-10 rotate-12 select-none">✅</div>
             </div>

             <div className="bg-gray-900 rounded-[2.5rem] p-8 text-white shadow-2xl">
                <h2 className="text-xl font-black mb-6">إحصائيات الغياب</h2>
                <div className="space-y-6">
                   <div className="flex justify-between items-center">
                      <span className="text-sm opacity-60">بعذر طبي</span>
                      <span className="text-xl font-black">٠</span>
                   </div>
                   <div className="flex justify-between items-center border-t border-white/10 pt-4">
                      <span className="text-sm opacity-60">بدون عذر</span>
                      <span className="text-xl font-black text-red-400">١</span>
                   </div>
                   <button className="w-full mt-4 py-4 bg-white/10 hover:bg-white/20 rounded-2xl text-xs font-black transition-all">إرسال استفسار للمدرسة</button>
                </div>
             </div>
          </aside>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24 md:pb-8 md:mr-64 p-4 md:p-10 space-y-10 max-w-7xl mx-auto">
      <header className="sudanese-gradient rounded-[3rem] p-10 md:p-16 text-white shadow-2xl animate-fade-in-up relative overflow-hidden">
        <div className="relative z-10">
          <div className="bg-white/10 w-fit px-4 py-1 rounded-full text-[10px] font-black mb-6 border border-white/20 uppercase tracking-widest">بوابة أولياء الأمور</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">مرحباً بك، أ. محمد أحمد</h1>
          <p className="text-lg opacity-80 font-medium">يمكنك متابعة تقدم أبنائك، سجل الحضور، والتواصل مع المعلمين من هنا.</p>
        </div>
        <div className="absolute left-10 bottom-10 text-9xl opacity-10 animate-float select-none">👨‍👩‍👧‍👦</div>
      </header>

      {renderChildSelector()}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
           <div className="flex justify-between items-center">
             <h2 className="text-2xl font-black text-gray-800">ملخص الأداء الحالي</h2>
             <button className="text-emerald-700 font-bold text-sm">عرض التحليلات</button>
           </div>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="glass-card p-8 rounded-[2.5rem] shadow-xl border border-white group hover:border-emerald-500 transition-all duration-500">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl">📚</span>
                  <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">التحصيل</span>
                </div>
                <h3 className="text-xl font-black text-gray-800 mb-2">الدرجات الشهرية</h3>
                <p className="text-gray-400 text-xs font-bold mb-6 italic">متوسط ممتاز: ٩٢٪</p>
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-emerald-500 h-full w-[92%] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]"></div>
                </div>
              </div>

              <div className="glass-card p-8 rounded-[2.5rem] shadow-xl border border-white group hover:border-blue-500 transition-all duration-500">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-4xl">📅</span>
                  <span className="bg-blue-50 text-blue-600 px-3 py-1 rounded-full text-[10px] font-black tracking-widest uppercase">الانضباط</span>
                </div>
                <h3 className="text-xl font-black text-gray-800 mb-2">الحضور العام</h3>
                <p className="text-gray-400 text-xs font-bold mb-6 italic">منتظم: ٩٨٪</p>
                <div className="w-full bg-gray-100 h-2.5 rounded-full overflow-hidden">
                  <div className="bg-blue-500 h-full w-[98%] rounded-full shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                </div>
              </div>
           </div>
        </div>

        <aside className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl h-fit">
           <h2 className="text-xl font-black text-gray-800 mb-6 flex items-center gap-2">
             <span className="animate-bounce">🔔</span> تنبيهات المدرسة
           </h2>
           <div className="space-y-4">
              <div className="p-5 bg-orange-50 rounded-2xl border-r-4 border-orange-500 animate-pop-in">
                 <p className="text-xs font-black text-orange-800 mb-1">اجتماع طارئ</p>
                 <p className="text-[11px] text-orange-700 font-bold leading-relaxed">ندعوكم لاجتماع مجلس الآباء يوم الخميس القادم لمناقشة الترتيبات.</p>
              </div>
              <div className="p-5 bg-emerald-50 rounded-2xl border-r-4 border-emerald-500 animate-pop-in delay-100">
                 <p className="text-xs font-black text-emerald-800 mb-1">نتائج الامتحانات</p>
                 <p className="text-[11px] text-emerald-700 font-bold leading-relaxed">تم رفع نتائج اختبارات شهر مايو على المنصة الآن.</p>
              </div>
           </div>
           <button className="w-full mt-8 py-4 bg-gray-900 text-white rounded-2xl font-black text-xs hover:bg-emerald-700 transition-all shadow-lg active:scale-95">
             تواصل مع الإدارة
           </button>
        </aside>
      </div>
    </div>
  );
};

export default ParentDashboard;
