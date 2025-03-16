import Link from 'next/link';
import {
  ChartBarIcon,
  AcademicCapIcon,
  UsersIcon,
  ChartPieIcon,
  DocumentTextIcon,
  QuestionMarkCircleIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  { name: 'Dashboard', href: '/', icon: ChartBarIcon, current: true },
  { name: 'Courses', href: '/courses', icon: AcademicCapIcon, current: false },
  { name: 'Users', href: '/users', icon: UsersIcon, current: false },
  { name: 'Analytics', href: '/analytics', icon: ChartPieIcon, current: false },
  { name: 'Content', href: '/content', icon: DocumentTextIcon, current: false },
  { name: 'Support', href: '/support', icon: QuestionMarkCircleIcon, current: false },
  { name: 'Settings', href: '/settings', icon: Cog6ToothIcon, current: false },
];

export default function Sidebar() {
  return (
    <div className="w-64 bg-gradient-to-b from-blue-600 to-blue-700 text-white rounded-3xl shadow-xl shadow-blue-500/20 backdrop-blur-xl">
      <div className="p-6">
        <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
          UjuziPlus
        </h1>
      </div>
      
      <nav className="px-4 flex-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center px-4 py-3 text-sm rounded-xl transition-all duration-200 mb-2 ${
                item.current
                  ? 'bg-white/10 text-white font-medium backdrop-blur-lg border border-white/10'
                  : 'text-blue-100 hover:bg-white/5 hover:text-white'
              }`}
            >
              <Icon className="h-5 w-5 mr-3" aria-hidden="true" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-6 border-t border-white/10">
        <div className="flex items-center">
          <div className="h-8 w-8 rounded-xl bg-white/10 backdrop-blur-lg flex items-center justify-center border border-white/10">
            <span className="text-sm font-medium text-white">W</span>
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-white">Welfare</p>
            <p className="text-xs text-blue-200">welfare@ujuziplus.com</p>
          </div>
        </div>
      </div>
    </div>
  );
} 