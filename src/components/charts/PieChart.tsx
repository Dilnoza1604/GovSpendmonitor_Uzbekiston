import React, { useEffect, useRef } from 'react';
import { ChartDataPoint } from '../../utils/types';

interface PieChartProps {
  data: ChartDataPoint[];
  title?: string;
  size?: number;
  showLabels?: boolean;
  showLegend?: boolean;
}

const PieChart: React.FC<PieChartProps> = ({ 
  data, 
  title, 
  size = 200, 
  showLabels = true,
  showLegend = true
}) => {
  const chartRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    const animateChart = () => {
      const paths = chartRef.current?.querySelectorAll('path');
      if (paths) {
        paths.forEach((path, index) => {
          setTimeout(() => {
            path.style.opacity = '1';
            path.style.transform = 'scale(1)';
          }, index * 200);
        });
      }
    };

    animateChart();
  }, [data]);

  // Calculate total for percentages
  const total = data.reduce((sum, item) => sum + item.value, 0);
  
  // Create pie chart segments
  const createPieSegments = () => {
    let startAngle = 0;
    const radius = size / 2;
    const center = size / 2;
    
    return data.map((item, index) => {
      const value = item.value;
      const sliceAngle = (value / total) * 360;
      const endAngle = startAngle + sliceAngle;
      
      // Convert angles to radians
      const startAngleRad = (startAngle - 90) * (Math.PI / 180);
      const endAngleRad = (endAngle - 90) * (Math.PI / 180);
      
      // Calculate path coordinates
      const x1 = center + radius * Math.cos(startAngleRad);
      const y1 = center + radius * Math.sin(startAngleRad);
      const x2 = center + radius * Math.cos(endAngleRad);
      const y2 = center + radius * Math.sin(endAngleRad);
      
      // Determine the large-arc-flag
      const largeArcFlag = sliceAngle > 180 ? 1 : 0;
      
      // Create SVG path
      const pathData = `
        M ${center},${center}
        L ${x1},${y1}
        A ${radius},${radius} 0 ${largeArcFlag} 1 ${x2},${y2}
        Z
      `;
      
      // Update start angle for next segment
      startAngle = endAngle;
      
      return {
        path: pathData,
        color: item.color || `hsl(${index * (360 / data.length)}, 70%, 50%)`,
        value: item.value,
        label: item.label,
        percentage: Math.round((value / total) * 100)
      };
    });
  };
  
  const segments = createPieSegments();

  return (
    <div className="bg-white rounded-xl shadow-card p-6">
      {title && <h3 className="text-xl font-semibold mb-4">{title}</h3>}
      
      <div className="flex flex-col md:flex-row items-center justify-center gap-6">
        <div className="relative" style={{ width: size, height: size }}>
          <svg 
            ref={chartRef} 
            width={size} 
            height={size} 
            viewBox={`0 0 ${size} ${size}`}
          >
            {segments.map((segment, index) => (
              <path
                key={index}
                d={segment.path}
                fill={segment.color}
                opacity="0"
                transform="scale(0.95)"
                style={{ 
                  transition: 'all 0.7s ease-out',
                  transformOrigin: 'center'
                }}
              />
            ))}
          </svg>
          
          {showLabels && (
            <div className="absolute inset-0 flex items-center justify-center flex-col">
              <div className="text-3xl font-bold">{total}</div>
              <div className="text-sm text-neutral-600">Total</div>
            </div>
          )}
        </div>
        
        {showLegend && (
          <div className="flex flex-col gap-2">
            {segments.map((segment, index) => (
              <div key={index} className="flex items-center gap-2">
                <div 
                  className="w-4 h-4 rounded-sm"
                  style={{ backgroundColor: segment.color }}
                />
                <span className="text-sm">
                  {segment.label} ({segment.percentage}%) - {segment.value}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PieChart;