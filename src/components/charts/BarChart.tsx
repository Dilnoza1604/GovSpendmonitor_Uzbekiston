import React, { useEffect, useRef } from 'react';
import { ChartDataPoint } from '../../utils/types';

interface BarChartProps {
  data: ChartDataPoint[];
  title?: string;
  height?: number;
  showLabels?: boolean;
}

const BarChart: React.FC<BarChartProps> = ({ 
  data, 
  title, 
  height = 400, 
  showLabels = true
}) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const animateChart = () => {
      const bars = chartRef.current?.querySelectorAll('.bar-item');
      if (bars) {
        bars.forEach((bar, index) => {
          setTimeout(() => {
            (bar as HTMLElement).style.height = (bar as HTMLElement).getAttribute('data-height') || '0%';
            (bar as HTMLElement).style.opacity = '1';
          }, index * 100);
        });
      }
    };

    animateChart();
  }, [data]);

  // Find max value for scaling
  const maxValue = Math.max(...data.map(item => item.value));

  return (
    <div className="bg-white rounded-xl shadow-card p-6">
      {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
      
      <div className="relative">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-6 w-12 flex flex-col justify-between text-sm text-neutral-500">
          <span>{maxValue}</span>
          <span>{Math.round(maxValue * 0.75)}</span>
          <span>{Math.round(maxValue * 0.5)}</span>
          <span>{Math.round(maxValue * 0.25)}</span>
          <span>0</span>
        </div>

        {/* Grid lines */}
        <div className="absolute left-12 right-0 top-0 bottom-6 flex flex-col justify-between">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="border-b border-neutral-200 w-full h-0" />
          ))}
        </div>
        
        <div 
          ref={chartRef} 
          className="flex items-end justify-between h-[400px] space-x-2 mt-6 pt-5 overflow-x-auto pb-6 pl-12"
          style={{ height: `${height}px` }}
        >
          {data.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center min-w-[60px] flex-1"
            >
              <div 
                className="bar-item w-full rounded-t-md opacity-0 transition-all duration-700 ease-out hover:brightness-110 cursor-pointer relative group"
                style={{ 
                  height: '0%',
                  background: item.color || '#4E73DF',
                  boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
                }}
                data-height={`${(item.value / maxValue) * 100}%`}
              >
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-neutral-800 text-white px-2 py-1 rounded text-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-10">
                  {item.value.toLocaleString()}
                </div>
              </div>
              
              {showLabels && (
                <div className="mt-4 text-xs md:text-sm text-center transform -rotate-45 origin-top-left whitespace-nowrap">
                  <div className="font-medium text-neutral-600">{item.label}</div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BarChart;