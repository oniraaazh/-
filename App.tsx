
import React, { useState } from 'react';
import { UserRole } from './types';
import Sidebar from './components/Sidebar';
import StudentDashboard from './components/StudentDashboard';
import TeacherDashboard from './components/TeacherDashboard';
import ParentDashboard from './components/ParentDashboard';

const App: React.FC = () => {
  const [role, setRole] = useState<UserRole | null>(null);
  const [activeTab, setActiveTab] = useState('dashboard');

  if (!role) {
    return (
      <div className="min-h-screen bg-[#f8fafc] flex flex-col items-center justify-center p-6 md:p-12 font-['Cairo']">
        <div className="text-center mb-10 md:mb-16 max-w-2xl">
          <div className="inline-block bg-emerald-50 px-4 py-1.5 rounded-full text-emerald-700 text-sm font-bold mb-4 border border-emerald-100">
             رؤية تعليمية جديدة ومستقبل مشرق ✨
          </div>
          <h1 className="text-3xl md:text-5xl font-black text-emerald-900 mb-4 leading-tight">
            مدرسة النهضة الجديدة
          </h1>
          <p className="text-gray-500 text-base md:text-xl font-medium px-4">
            المنصة التعليمية المتكاملة لدعم الطلاب والمعلمين في مسيرة العلم والابتكار
          </p>
        </div>
        
        <div className="max-w-5xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          <RoleCard 
            title="طالب" 
            desc="ادخل لموادك، دروسك التفاعلية، واسأل المعلم الذكي" 
            icon="🎓" 
            color="emerald"
            onClick={() => setRole(UserRole.STUDENT)}
          />
          <RoleCard 
            title="معلم" 
            desc="أدوات ذكية لإدارة الفصول، رفع المحتوى، وتقييم الطلاب" 
            icon="👨‍🏫" 
            color="blue"
            onClick={() => setRole(UserRole.TEACHER)}
          />
          <RoleCard 
            title="ولي أمر" 
            desc="متابعة دقيقة للأداء الأكاديمي، الحضور، والتواصل المدرسي" 
            icon="👨‍👩‍👧‍👦" 
            color="orange"
            onClick={() => setRole(UserRole.PARENT)}
          />
        </div>

        <div className="mt-16 text-gray-400 text-xs md:text-sm font-bold text-center">
          <p>مدرسة النهضة الجديدة &copy; 2024 - التميز هو خيارنا</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f8fafc] font-['Cairo'] selection:bg-emerald-100">
      <Sidebar role={role} activeTab={activeTab} setActiveTab={setActiveTab} />
      <main className="transition-all duration-300">
        {role === UserRole.STUDENT && <StudentDashboard activeTab={activeTab} />}
        {role === UserRole.TEACHER && <TeacherDashboard activeTab={activeTab} />}
        {role === UserRole.PARENT && <ParentDashboard activeTab={activeTab} />}
      </main>
    </div>
  );
};

interface RoleCardProps {
  title: string;
  desc: string;
  icon: string;
  color: string;
  onClick: () => void;
}

const RoleCard: React.FC<RoleCardProps> = ({ title, desc, icon, color, onClick }) => {
  const colors: any = {
    emerald: 'hover:border-emerald-600 text-emerald-600',
    blue: 'hover:border-blue-600 text-blue-600',
    orange: 'hover:border-orange-600 text-orange-600'
  };

  return (
    <button 
      onClick={onClick}
      className={`bg-white p-8 rounded-[2.5rem] border-2 border-transparent hover:shadow-2xl transition-all group flex flex-col items-center text-center relative overflow-hidden ${colors[color]}`}
    >
      <div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-[100px] -z-1 opacity-50 transition-all group-hover:w-full group-hover:h-full group-hover:rounded-none"></div>
      <span className="text-6xl mb-8 transform group-hover:scale-125 transition-transform duration-500 drop-shadow-lg">{icon}</span>
      <h3 className="text-2xl font-black text-gray-800 mb-4">{title}</h3>
      <p className="text-gray-500 text-sm leading-loose font-medium px-2">{desc}</p>
      <div className={`mt-8 font-black flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300`}>
        دخول الآن <span>←</span>
      </div>
    </button>
  );
}

export default App;
