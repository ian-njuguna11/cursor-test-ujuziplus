import UserGrowth from '@/components/UserGrowth';
import UserActivity from '@/components/UserActivity';
import SupportManagement from '@/components/SupportManagement';

export default function DashboardContent() {
  return (
    <div className="flex gap-6">
      <div className="flex flex-col flex-1 gap-6">
        <UserGrowth />
        <SupportManagement />
      </div>
      <div className="w-[400px]">
        <UserActivity />
      </div>
    </div>
  );
} 