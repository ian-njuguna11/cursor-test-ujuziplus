import { Metadata } from 'next';
import DashboardHeader from '@/components/dashboard/DashboardHeader';
import StatsGrid from '@/components/dashboard/StatsGrid';
import DashboardContent from '@/components/dashboard/DashboardContent';

export const metadata: Metadata = {
  title: 'UjuziPlus Dashboard',
  description: 'Admin dashboard for UjuziPlus learning platform',
};

const stats = [
  { title: 'Total Active Users', value: '239,325' },
  { title: 'Total Courses', value: '1,456' },
  { title: 'Revenue Generated', value: '$2,800.00' },
  { title: 'Active Support Tickets', value: '17' },
];

export default function DashboardPage() {
  return (
    <div className="p-8">
      <DashboardHeader username="Welfare" />
      <StatsGrid stats={stats} />
      <DashboardContent />
    </div>
  );
}
