'use client'
import { LayoutDashboard, Briefcase, PlusCircle, AlignLeft, Calendar, Crosshair, LogOut } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

export default function OwnerSidebar({ activeTab, setActiveTab, onLogout }) {
  const { user } = useAuth();

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'my-warehouses', label: 'My Warehouses', icon: Briefcase, badge: '1' },
    { id: 'add-warehouse', label: 'Add New Warehouse', icon: PlusCircle },
    { id: 'inquiries', label: 'Inquiries Received', icon: AlignLeft },
    { id: 'calendar', label: 'Availability Calendar', icon: Calendar },
    { id: 'settings', label: 'Settings', icon: Crosshair },
  ];

  return (
    <div className="w-72 bg-[#1c1c1e] text-slate-300 h-screen flex flex-col fixed left-0 top-0 z-50 shadow-2xl">
      
      {/* Brand Logo Area */}
      <div className="p-8 border-b border-white/10 flex items-center gap-4 cursor-pointer">
        <div className="w-10 h-10 bg-[#E65100] rounded-xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
          WH
        </div>
        <div className="flex flex-col">
          <span className="text-xl font-bold text-white tracking-tight">WarehouseHub</span>
          <span className="text-[10px] font-bold text-[#E65100] uppercase tracking-widest">Owner Portal</span>
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-4 py-8 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActiveTab(item.id)}
            className={`w-full flex items-center justify-between px-5 py-3.5 transition-all text-sm font-medium rounded-2xl ${
              activeTab === item.id 
                ? 'bg-white text-[#E65100] shadow-md' 
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <div className="flex items-center gap-4">
              <item.icon className={`w-5 h-5 ${activeTab === item.id ? 'text-[#E65100]' : 'text-slate-500'}`} />
              {item.label}
            </div>
            {item.badge && (
              <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${activeTab === item.id ? 'bg-[#E65100] text-white' : 'bg-[#E65100] text-white'}`}>
                {item.badge}
              </span>
            )}
          </button>
        ))}
      </nav>

      {/* Bottom User Profile */}
      <div className="p-6 border-t border-white/10 flex items-center justify-between hover:bg-white/5 transition-colors cursor-pointer" onClick={onLogout}>
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-white text-[#E65100] flex items-center justify-center font-bold text-lg">
            {user?.displayName?.charAt(0) || 'R'}
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold text-white">{user?.displayName || 'Reeti Singh'}</span>
            <span className="text-xs text-slate-500">{user?.email || 'reetisingh861@gmail.com'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}