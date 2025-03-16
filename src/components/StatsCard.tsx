import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

interface StatsCardProps {
  title: string;
  value: string | number;
}

export default function StatsCard({ title, value }: StatsCardProps) {
  return (
    <div className="bg-gradient-to-br from-white to-white/50 backdrop-blur-xl rounded-2xl shadow-sm border border-white/20 transition-all duration-200 hover:shadow-md hover:shadow-blue-500/5 group">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-gray-500 text-sm font-medium">{title}</h3>
            <p className="mt-2 text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent group-hover:from-blue-600 group-hover:to-blue-500 transition-all duration-200">
              {value}
            </p>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <EllipsisHorizontalIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </div>
  );
} 