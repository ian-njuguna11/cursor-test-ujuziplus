import { EllipsisHorizontalIcon } from '@heroicons/react/24/outline';

interface Activity {
  id: number;
  user: {
    name: string;
    avatar: string;
  };
  action: string;
  target: string;
  timestamp: string;
}

const activities: Activity[] = [
  {
    id: 1,
    user: {
      name: 'Demi Wilkinson',
      avatar: 'DW',
    },
    action: 'Enrolled in',
    target: 'Webflow 101',
    timestamp: 'Oct 8, 2024, 9:15 AM',
  },
  {
    id: 2,
    user: {
      name: 'Aliah Lane',
      avatar: 'AL',
    },
    action: 'Created',
    target: 'Python 101',
    timestamp: 'Oct 7, 2024, 6:30 PM',
  },
  {
    id: 3,
    user: {
      name: 'Marcus Chen',
      avatar: 'MC',
    },
    action: 'Completed',
    target: 'React Masterclass',
    timestamp: 'Oct 8, 2024, 8:45 AM',
  },
  {
    id: 4,
    user: {
      name: 'Sarah Johnson',
      avatar: 'SJ',
    },
    action: 'Started',
    target: 'UI/UX Fundamentals',
    timestamp: 'Oct 8, 2024, 7:20 AM',
  },
  {
    id: 5,
    user: {
      name: 'James Wilson',
      avatar: 'JW',
    },
    action: 'Submitted',
    target: 'Final Project',
    timestamp: 'Oct 7, 2024, 11:45 PM',
  },
  {
    id: 6,
    user: {
      name: 'Elena Rodriguez',
      avatar: 'ER',
    },
    action: 'Achieved',
    target: 'Advanced Certificate',
    timestamp: 'Oct 7, 2024, 10:30 PM',
  },
  {
    id: 7,
    user: {
      name: 'Michael Park',
      avatar: 'MP',
    },
    action: 'Posted in',
    target: 'Discussion Forum',
    timestamp: 'Oct 7, 2024, 9:15 PM',
  },
  {
    id: 8,
    user: {
      name: 'Sophia Lee',
      avatar: 'SL',
    },
    action: 'Scheduled',
    target: 'Mentorship Session',
    timestamp: 'Oct 7, 2024, 8:00 PM',
  },
  {
    id: 9,
    user: {
      name: 'David Kumar',
      avatar: 'DK',
    },
    action: 'Updated',
    target: 'Course Materials',
    timestamp: 'Oct 7, 2024, 7:30 PM',
  },
  {
    id: 10,
    user: {
      name: 'Emma Thompson',
      avatar: 'ET',
    },
    action: 'Joined',
    target: 'Study Group',
    timestamp: 'Oct 7, 2024, 6:45 PM',
  }
];

export default function UserActivity() {
  return (
    <div className="bg-gradient-to-br from-white to-white/50 backdrop-blur-xl rounded-2xl shadow-sm border border-white/20 h-full">
      <div className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h2 className="text-lg font-semibold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              User Activity
            </h2>
          </div>
          <button className="text-gray-400 hover:text-gray-600 transition-colors">
            <EllipsisHorizontalIcon className="h-6 w-6" />
          </button>
        </div>

        <div className="space-y-5 overflow-y-auto max-h-[calc(100vh-120px)] pr-2 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent hover:scrollbar-thumb-gray-300">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-start gap-4 group">
              <div className="h-8 w-8 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 text-sm font-medium border border-blue-100/50 group-hover:bg-blue-100 transition-colors">
                {activity.user.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between items-baseline">
                  <p className="text-sm font-medium text-gray-900">
                    {activity.user.name}
                  </p>
                  <p className="text-sm text-gray-400">{activity.timestamp}</p>
                </div>
                <p className="text-sm text-gray-500">
                  {activity.action}{' '}
                  <span className="text-blue-600 font-medium">{activity.target}</span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 