
import React, { useState } from 'react';
import { MOCK_TEACHER_CLASSES, MOCK_LESSONS } from '../constants';

interface Props {
  activeTab: string;
}

const TeacherDashboard: React.FC<Props> = ({ activeTab }) => {
  const [lessons] = useState(MOCK_LESSONS);

  const renderStats = () => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {[
        { label: 'إجمالي الطلاب', value: '١٤٥', icon: '👥', color: 'bg-blue-50 text-blue-600' },
        { label: 'الدروس المنشورة', value: '٢٨', icon: '📤', color: 'bg-emerald-50 text-emerald-600' },
        { label: 'مهام للتصحيح', value: '١٢', icon: '📝', color: 'bg-orange-50 text-orange-600' },
        { label: 'متوسط التفاعل', value: '٩٥٪', icon: '📈', color: 'bg-purple-50 text-purple-600' },
      ].map((stat, i) => (
        <div key={i} className="glass-card p-6 rounded-3xl border border-white shadow-sm hover:shadow-md transition-all animate-pop-in" style={{ animationDelay: `${i * 100}ms` }}>
          <div className={`w-12 h-12 ${stat.color} rounded-2xl flex items-center justify-center text-2xl mb-4 shadow-inner`}>
            {stat.icon}
          </div>
          <p className="text-xs text-gray-400 font-black mb-1 uppercase tracking-wider">{stat.label}</p>
          <div className="text-2xl font-black text-gray-800">{stat.value}</div>
        </div>
      ))}
    </div>
  );

  if (activeTab === 'my-classes') {
    return (
      <div className="pb-24 md:pb-8 md:mr-64 p-4 md:p-10 space-y-8 animate-fade-in-up">
        <header className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-black text-gray-900">إدارة الفصول الدراسية</h1>
            <p className="text-gray-500 font-medium">متابعة دقيقة لمستوى استيعاب الطلاب في كل فصل</p>
          </div>
          <button className="hidden md:block sudanese-gradient text-white px-6 py-3 rounded-2xl font-black text-sm shadow-lg hover:scale-105 transition-all">
            إضافة فصل جديد
          </button>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MOCK_TEACHER_CLASSES.map((cls, idx) => (
            <div key={cls.id} className="group glass-card rounded-[2.5rem] p-8 border border-white shadow-xl hover:shadow-2xl transition-all duration-500 animate-pop-in" style={{ animationDelay: `${idx * 100}ms` }}>
              <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-4xl mb-6 group-hover:scale-110 transition-transform shadow-inner">🏫</div>
              <h2 className="text-2xl font-black text-gray-800 mb-2">{cls.name}</h2>
              <div className="flex items-center gap-2 mb-6">
                <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">{cls.subject}</span>
              </div>
              <div className="flex justify-between items-center pt-6 border-t border-gray-50">
                <div className="flex flex-col">
                  <span className="text-2xl font-black text-gray-900">{cls.studentCount}</span>
                  <span className="text-[10px] font-bold text-gray-400">طالب مسجل</span>
                </div>
                <button className="bg-gray-900 text-white px-5 py-2.5 rounded-xl text-xs font-black hover:bg-emerald-700 transition-colors shadow-md">
                  سجل الحضور
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (activeTab === 'content') {
    return (
      <div className="pb-24 md:pb-8 md:mr-64 p-4 md:p-10 space-y-8 animate-fade-in-up">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-3xl font-black text-gray-900">المحتوى التعليمي</h1>
            <p className="text-gray-500 font-medium">إدارة الدروس، الفيديوهات، والملفات المرجعية</p>
          </div>
          <div className="flex gap-3 w-full md:w-auto">
            <button className="flex-1 md:flex-none sudanese-gradient text-white px-8 py-4 rounded-2xl font-black text-sm shadow-lg hover:scale-105 transition-all">
              + إضافة درس جديد
            </button>
          </div>
        </header>

        <div className="bg-white rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden animate-pop-in">
          <div className="overflow-x-auto">
            <table className="w-full text-right border-collapse">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100">
                  <th className="p-6 text-xs font-black text-gray-400 uppercase tracking-widest">اسم الدرس</th>
                  <th className="p-6 text-xs font-black text-gray-400 uppercase tracking-widest">المادة</th>
                  <th className="p-6 text-xs font-black text-gray-400 uppercase tracking-widest">المدة</th>
                  <th className="p-6 text-xs font-black text-gray-400 uppercase tracking-widest">الحالة</th>
                  <th className="p-6 text-xs font-black text-gray-400 uppercase tracking-widest">الإجراءات</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {lessons.map((lesson, idx) => (
                  <tr key={lesson.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="p-6 font-black text-gray-800">{lesson.title}</td>
                    <td className="p-6 text-sm font-bold text-gray-500">الرياضيات</td>
                    <td className="p-6 text-sm font-bold text-gray-400">{lesson.duration}</td>
                    <td className="p-6">
                      <span className="bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">منشور</span>
                    </td>
                    <td className="p-6">
                      <div className="flex gap-3">
                        <button className="text-blue-600 hover:bg-blue-50 p-2 rounded-lg transition-colors">✏️</button>
                        <button className="text-red-600 hover:bg-red-50 p-2 rounded-lg transition-colors">🗑️</button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }

  if (activeTab === 'exams') {
    return (
      <div className="pb-24 md:pb-8 md:mr-64 p-4 md:p-10 space-y-8 animate-fade-in-up">
        <header>
          <h1 className="text-3xl font-black text-gray-900">الامتحانات والتقييم</h1>
          <p className="text-gray-500 font-medium">تصميم الاختبارات التفاعلية ومراجعة نتائج الطلاب</p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <section className="bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl space-y-6">
            <h2 className="text-xl font-black text-gray-800 flex items-center gap-2">
              <span>📅</span> الاختبارات المجدولة
            </h2>
            <div className="space-y-4">
              <div className="p-6 bg-gray-50 rounded-3xl border border-gray-100 flex justify-between items-center group hover:border-emerald-500 transition-all">
                <div>
                  <p className="font-black text-gray-800">اختبار الرياضيات الفتري</p>
                  <p className="text-[10px] font-bold text-gray-400 mt-1">التاريخ: غداً، الساعة ٠٨:٠٠ ص</p>
                </div>
                <button className="bg-emerald-600 text-white px-5 py-2.5 rounded-xl text-xs font-black shadow-md">دخول المراقبة</button>
              </div>
            </div>
            <button className="w-full py-4 text-xs font-black text-gray-400 border-2 border-dashed rounded-2xl hover:bg-gray-50 transition-all">
              + جدولة اختبار جديد
            </button>
          </section>

          <section className="bg-gray-900 rounded-[2.5rem] p-8 text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-xl font-black mb-6">إحصائيات النجاح</h2>
              <div className="space-y-6">
                {[
                  { label: 'الصف الثامن (أ)', val: 88, color: 'bg-emerald-400' },
                  { label: 'الصف الثامن (ب)', val: 72, color: 'bg-orange-400' },
                  { label: 'الصف السابع (ج)', val: 95, color: 'bg-blue-400' },
                ].map((item, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between text-xs font-black mb-2 opacity-80">
                      <span>{item.label}</span>
                      <span>{item.val}٪</span>
                    </div>
                    <div className="w-full bg-white/10 h-2 rounded-full overflow-hidden">
                      <div className={`h-full rounded-full ${item.color}`} style={{ width: `${item.val}٪` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="absolute -right-10 -bottom-10 text-9xl opacity-5 select-none pointer-events-none rotate-12">📈</div>
          </section>
        </div>
      </div>
    );
  }

  return (
    <div className="pb-24 md:pb-8 md:mr-64 p-4 md:p-10 space-y-10 max-w-7xl mx-auto">
      <header className="sudanese-gradient rounded-[3rem] p-10 md:p-16 text-white shadow-2xl animate-fade-in-up relative overflow-hidden">
        <div className="relative z-10">
          <div className="bg-white/10 w-fit px-4 py-1 rounded-full text-[10px] font-black mb-6 border border-white/20 uppercase tracking-widest">بوابة المعلم v2.0</div>
          <h1 className="text-4xl md:text-5xl font-black mb-4">أهلاً بك، أ. أحمد علي</h1>
          <p className="text-lg opacity-80 font-medium">لديك اليوم ٣ حصص مجدولة، وحوالي ١٤ واجباً بانتظار التصحيح.</p>
        </div>
        <div className="absolute left-10 bottom-10 text-9xl opacity-10 animate-float select-none">👨‍🏫</div>
      </header>

      {renderStats()}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 bg-white rounded-[2.5rem] p-8 border border-gray-100 shadow-xl">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-black text-gray-800">أحدث الأنشطة</h2>
            <button className="text-emerald-700 font-bold text-sm">تنزيل التقرير</button>
          </div>
          <div className="space-y-6">
            {[
              { type: 'submission', text: 'قام محمد عوض الكريم بتسليم واجب الرياضيات', time: 'منذ ٥ دقائق' },
              { type: 'exam', text: 'بدأ ٤٠ طالباً اختبار العلوم الآن', time: 'نشط الآن' },
              { type: 'comment', text: 'لديك رسالة جديدة من ولي أمر الطالبة فاطمة', time: 'منذ ساعة' },
            ].map((activity, i) => (
              <div key={i} className="flex items-center gap-4 p-5 hover:bg-gray-50 rounded-3xl transition-all border border-transparent hover:border-gray-100 group">
                <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                  {activity.type === 'submission' ? '📝' : activity.type === 'exam' ? '⚡' : '✉️'}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-black text-gray-800">{activity.text}</p>
                  <p className="text-[10px] font-bold text-gray-400 mt-1 uppercase tracking-wider">{activity.time}</p>
                </div>
                <button className="text-[10px] font-black text-emerald-600 bg-emerald-50 px-3 py-1.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity">متابعة</button>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="bg-gray-900 rounded-[2.5rem] p-8 text-white shadow-2xl">
            <h2 className="text-xl font-black mb-6">الجدول الزمني اليوم</h2>
            <div className="space-y-6 relative mr-4">
              <div className="absolute right-[-17px] top-2 bottom-2 w-0.5 bg-white/10"></div>
              {[
                { time: '٠٨:٠٠ ص', class: 'ثامن (أ)', sub: 'رياضيات' },
                { time: '١٠:٣٠ ص', class: 'ثامن (ب)', sub: 'رياضيات' },
                { time: '١٢:٠٠ م', class: 'سابع (ج)', sub: 'هندسة' },
              ].map((item, i) => (
                <div key={i} className="relative pr-6 group">
                  <div className="absolute right-[-21px] top-1.5 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)] group-hover:scale-150 transition-transform"></div>
                  <p className="text-[10px] font-black text-emerald-400 mb-1">{item.time}</p>
                  <p className="text-sm font-black">{item.class} - {item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherDashboard;
