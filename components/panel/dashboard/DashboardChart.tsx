
import React, { useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts';
import { DASH_DATA_7D, DASH_DATA_30D } from '../../../data/mock';

interface DashboardChartProps {
  darkMode: boolean;
}

const DashboardChart: React.FC<DashboardChartProps> = ({ darkMode }) => {
  const [period, setPeriod] = useState('7d');
  const chartData = period === '7d' ? DASH_DATA_7D : DASH_DATA_30D;

  return (
    <div className="lg:col-span-2 bg-white dark:bg-darkSurface p-6 rounded-xl shadow-sm border border-gray-100 dark:border-gray-800">
      <div className="flex justify-between items-center mb-6">
        <h4 className="font-bold text-secondary dark:text-white text-lg">Volume ({period === '7d' ? '7 dias' : '30 dias'})</h4>
        <select 
          className="fintech-input text-sm rounded-lg px-3 py-1 outline-none w-40"
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
        >
          <option value="7d">Últimos 7 dias</option>
          <option value="30d">Últimos 30 dias</option>
        </select>
      </div>
      <div className="h-64 md:h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <defs>
              <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4C6FFF" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#4C6FFF" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke={darkMode ? "#334155" : "#E2E8F0"} />
            <XAxis dataKey="name" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} dy={10} />
            <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(val) => `k`} />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1A1F36', border: 'none', borderRadius: '8px', color: '#fff' }}
              itemStyle={{ color: '#8AA2FF' }}
            />
            <Area type="monotone" dataKey="val" stroke="#4C6FFF" strokeWidth={3} fillOpacity={1} fill="url(#colorVal)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardChart;
