import React from 'react';

const TicketTable = ({ tickets, onDelete }) => {
  return (
    <table className="table-auto w-full mt-4 border-collapse">
      <thead>
        <tr className="bg-gray-200">
          <th className="border px-4 py-2">Incident</th>
          <th className="border px-4 py-2">Name</th>
          <th className="border px-4 py-2">Phone</th>
          <th className="border px-4 py-2">Issue</th>
          <th className="border px-4 py-2">Description</th>
          <th className="border px-4 py-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {tickets.map((ticket) => (
          <tr key={ticket.incident} className="text-center">
            <td className="border px-4 py-2">{ticket.incident}</td>
            <td className="border px-4 py-2">{ticket.name}</td>
            <td className="border px-4 py-2">{ticket.phone}</td>
            <td className="border px-4 py-2">{ticket.issue}</td>
            <td className="border px-4 py-2">{ticket.description}</td>
            <td className="border px-4 py-2">
              <button
                onClick={() => onDelete(ticket.incident)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TicketTable;