import React from 'react';

export const MetricCard = ({ title, value, unit, subtitle, icon, iconColor }) => {
  return (
    <div className="relative overflow-hidden rounded-[2rem] bg-[#2a2a2c] p-6 shadow-lg transition-transform hover:-translate-y-1">
      
      {/* Floating White Icon Box */}
      <div className={`absolute top-6 right-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white shadow-md ${iconColor}`}>
        {icon}
      </div>

      {/* Content */}
      <div className="flex flex-col h-full justify-between">
        <div>
          <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest w-2/3 leading-relaxed">
            {title}
          </h3>
          <div className="mt-4 flex items-baseline gap-1">
            <span className="text-5xl font-semibold text-white tracking-tight">
              {value}
            </span>
          </div>
        </div>
        
        <div className="mt-6">
          <p className="text-sm text-slate-400">
            {subtitle} <span className="text-emerald-400 font-medium">{unit}</span>
          </p>
        </div>
      </div>
    </div>
  );
};