
import React from 'react';
import { UserRole } from '../types';

interface SidebarProps {
  role: UserRole;
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ role, activeTab, setActiveTab }) => {
  const menuItems = {
    [UserRole.STUDENT]: [
      { id: 'dashboard', label: 'الرئيسية', icon: '🏠' },
      { id: 'curriculum', label: 'المناهج', icon: '📚' },
      { id: 'tasks', label: 'الواجبات', icon: '📝' },
      { id: 'ai-tutor', label: 'أستاذي الذكي', icon: '🤖' },
    ],
    [UserRole.TEACHER]: [
      { id: 'dashboard', label: 'الرئيسية', icon: '👨‍🏫' },
      { id: 'my-classes', label: 'فصولي', icon: '👥' },
      { id: 'content', label: 'إدارة المحتوى', icon: '📤' },
      { id: 'exams', label: 'الامتحانات', icon: '📝' },
    ],
    [UserRole.PARENT]: [
      { id: 'dashboard', label: 'الأبناء', icon: '👨‍👩‍👦' },
      { id: 'reports', label: 'التقارير', icon: '📋' },
      { id: 'attendance', label: 'الحضور', icon: '✅' },
    ],
    [UserRole.ADMIN]: []
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex w-64 bg-white/80 backdrop-blur-xl border-l border-gray-100 h-screen flex-col fixed right-0 top-0 shadow-2xl z-30">
        <div className="p-8 border-b border-gray-50 text-center">
          <div className="text-3xl font-black text-emerald-800 mb-1 tracking-tighter">النهضة</div>
          <div className="bg-emerald-50 px-3 py-1 rounded-full text-[10px] font-black text-emerald-600 inline-block uppercase tracking-widest">مدرسة جديدة</div>
        </div>
        
        <nav className="flex-1 p-6 space-y-3 overflow-y-auto">
          {menuItems[role]?.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 font-black text-sm ${
                activeTab === item.id 
                  ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-200 translate-x-1' 
                  : 'text-gray-400 hover:bg-gray-50 hover:text-gray-600'
              }`}
            >
              <span className={`text-xl ${activeTab === item.id ? 'scale-110' : ''}`}>{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
        
        <div className="p-6 border-t border-gray-50">
          <div className="bg-gray-50 p-4 rounded-3xl mb-4 flex items-center gap-3">
             <div className="w-10 h-10 rounded-full bg-emerald-600 flex items-center justify-center text-white font-black">أ</div>
             <div className="flex-1 min-w-0">
                <p className="text-xs font-black text-gray-800 truncate">أحمد محمد</p>
                <p className="text-[10px] font-bold text-gray-400">طالب متميز</p>
             </div>
          </div>
          <button className="w-full flex items-center justify-center gap-3 p-4 text-red-500 hover:bg-red-50 rounded-2xl transition-all font-black text-sm">
            <span>🚪</span>
            <span>تسجيل الخروج</span>
          </button>
        </div>
      </aside>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 left-0 right-0 bg-white/80 backdrop-blur-xl border-t border-gray-100 flex justify-around items-center h-20 z-50 px-4 shadow-[0_-10px_30px_rgba(0,0,0,0.05)] rounded-t-[2.5rem]">
        {menuItems[role]?.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`relative flex flex-col items-center justify-center flex-1 h-full transition-all duration-500 ${
              activeTab === item.id ? 'text-emerald-700' : 'text-gray-300'
            }`}
          >
            <span className={`text-2xl transition-transform duration-500 ${activeTab === item.id ? '-translate-y-1 scale-110' : ''}`}>{item.icon}</span>
            <span className={`text-[9px] font-black mt-1 transition-opacity duration-300 ${activeTab === item.id ? 'opacity-100' : 'opacity-60'}`}>{item.label}</span>
            {activeTab === item.id && (
              <div className="absolute bottom-4 w-1.5 h-1.5 bg-emerald-600 rounded-full"></div>
            )}
          </button>
        ))}
      </nav>
    </>
  );
};

export default Sidebar;
