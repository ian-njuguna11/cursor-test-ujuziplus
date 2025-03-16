interface Ticket {
  id: string;
  userName: string;
  timestamp: string;
  priority: 'High' | 'Medium' | 'Low';
}

const tickets: Ticket[] = [
  {
    id: 'T#001',
    userName: 'HeroCoder',
    timestamp: 'Jan 13 15:29:20',
    priority: 'High',
  },
  {
    id: 'T#002',
    userName: 'RakshaSalian',
    timestamp: 'Jan 13 15:29:22',
    priority: 'Medium',
  },
  {
    id: 'T#003',
    userName: 'Viveka',
    timestamp: 'Jan 13 15:29:26',
    priority: 'Low',
  },
];

const priorityClasses = {
  High: 'bg-red-100 text-red-800',
  Medium: 'bg-yellow-100 text-yellow-800',
  Low: 'bg-green-100 text-green-800',
};

export default function SupportManagement() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Support Management</h2>
        <div className="flex gap-2">
          <button className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
            Open
          </button>
          <button className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
            Pending
          </button>
          <button className="px-3 py-1 text-sm rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200">
            Resolved
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Ticket ID
              </th>
              <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                User Name
              </th>
              <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Timestamp
              </th>
              <th className="py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Priority Level
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {tickets.map((ticket) => (
              <tr key={ticket.id}>
                <td className="py-4 text-sm text-gray-900">{ticket.id}</td>
                <td className="py-4 text-sm text-gray-900">{ticket.userName}</td>
                <td className="py-4 text-sm text-gray-500">{ticket.timestamp}</td>
                <td className="py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      priorityClasses[ticket.priority]
                    }`}
                  >
                    {ticket.priority}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
} 