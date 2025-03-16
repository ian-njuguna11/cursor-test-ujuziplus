interface DashboardHeaderProps {
  username: string;
}

export default function DashboardHeader({ username }: DashboardHeaderProps) {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
          Dashboard
        </h1>
        <p className="text-gray-500 mt-1">Welcome back, {username}!</p>
      </div>
      <button className="bg-gradient-to-r from-blue-600 to-blue-500 text-white px-6 py-2.5 rounded-xl hover:from-blue-700 hover:to-blue-600 transition-all duration-200 font-medium shadow-sm shadow-blue-500/20">
        View Support Tickets
      </button>
    </div>
  );
} 