'use client';

import React from 'react';
import { MetricCard } from "../commonfiles/MetricCard";
import { useAuth } from '@/contexts/AuthContext';
import { 
  Lock, 
  CheckCircle2, 
  Layout, 
  Star,
  Home,
  Plus
} from 'lucide-react';

export default function DashboardHome({ setActiveTab }) {
  const { user } = useAuth();
  const currentDate = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

  return (
    <div className="max-w-6xl mx-auto p-10 bg-[#f8f9fa] min-h-screen">
      
      {/* Editorial Header */}
      <div className="flex justify-between items-start mb-12">
        <div>
          <h1 className="text-5xl font-semibold text-slate-900 tracking-tight mb-2">Good evening, {user?.displayName?.split(' ')[0] || 'Reeti'}.</h1>
          <p className="text-lg text-slate-500">{currentDate} · Your portfolio at a glance</p>
        </div>
        
        <div className="flex gap-4">
          <button className="px-8 py-4 text-sm font-bold text-slate-400 bg-transparent border-2 border-slate-200 rounded-2xl hover:border-slate-300 hover:text-slate-600 transition-all">
            Clear All
          </button>
          <button 
            onClick={() => setActiveTab('add-warehouse')}
            className="px-8 py-4 text-sm font-bold text-slate-400 bg-transparent border-2 border-slate-200 rounded-2xl hover:border-slate-300 hover:text-slate-600 transition-all flex items-center gap-2"
          >
            <Plus size={18} />
            List New Warehouse
          </button>
        </div>
      </div>

      {/* Dark Metric Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        <MetricCard 
          title="Total Warehouses" 
          value="1" 
          subtitle="Listed on platform"
          icon={<Lock size={22} />}
          iconColor="text-[#E65100]"
        />
        <MetricCard 
          title="Active Listings" 
          value="0" 
          subtitle="Currently live"
          icon={<CheckCircle2 size={22} />}
          iconColor="text-emerald-500"
        />
        <MetricCard 
          title="Total Area" 
          value="2.5L" 
          subtitle="sq ft capacity"
          icon={<Layout size={22} />}
          iconColor="text-blue-500"
        />
        <MetricCard 
          title="Available Area" 
          value="2L" 
          unit="80% available"
          icon={<Star size={22} />}
          iconColor="text-[#E65100]"
        />
      </div>

      {/* My Warehouses List */}
      <div className="mb-12">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-900">My Warehouses</h2>
          <button 
            onClick={() => setActiveTab('my-warehouses')}
            className="text-sm font-bold text-[#E65100] hover:text-[#c44400] flex items-center gap-1"
          >
            View all →
          </button>
        </div>

        <div className="space-y-4">
          {/* Active Warehouse Card */}
          <div className="flex items-center justify-between p-6 bg-[#2a2a2c] rounded-3xl text-white shadow-lg cursor-pointer hover:-translate-y-1 transition-transform">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-[#E65100] shadow-sm">
                <Home size={28} />
              </div>
              <div>
                <h3 className="text-xl font-medium mb-1">Main Storage Unit — Patna</h3>
                <p className="text-sm text-slate-400">2,50,000 sq ft · Cold Storage · Pending Review</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-xl font-bold mb-2">₹45/sq ft</div>
              <span className="px-4 py-1 text-xs font-bold text-[#E65100] bg-white rounded-full">
                Pending
              </span>
            </div>
          </div>

          {/* Add Another Warehouse Card */}
          <div 
            onClick={() => setActiveTab('add-warehouse')}
            className="flex items-center gap-6 p-6 bg-slate-400/20 border-2 border-dashed border-slate-300 rounded-3xl cursor-pointer hover:bg-slate-400/30 transition-colors"
          >
            <div className="w-16 h-16 bg-slate-400/20 rounded-2xl flex items-center justify-center text-slate-500">
              <Plus size={28} />
            </div>
            <div>
              <h3 className="text-xl font-medium text-slate-600 mb-1">Add another warehouse</h3>
              <p className="text-sm text-slate-500">Expand your portfolio</p>
            </div>
          </div>
        </div>
      </div>

      {/* Inquiries Section */}
      <div>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-slate-900">Inquiries this week</h2>
          <span className="px-4 py-1 text-xs font-bold text-white bg-[#2a2a2c] rounded-full">0 new</span>
        </div>
        <div className="p-10 bg-[#2a2a2c] rounded-3xl text-center text-slate-400 shadow-lg">
          No inquiries yet — share your listing to get started
        </div>
      </div>

    </div>
  );
}