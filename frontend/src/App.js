import React, { useEffect, useState } from 'react';
import TicketForm from './components/TicketForm';
import TicketTable from './components/TicketTable';
import Pagination from './components/Pagination';

const App = () => {
  const [tickets, setTickets] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const ticketsPerPage = 5;

  useEffect(() => {
    fetchTickets();
  }, []);

  const fetchTickets = async () => {
    const res = await fetch('http://localhost:8000/tickets');
    const data = await res.json();
    setTickets(data);
  };

  const createTicket = async (ticket) => {
    await fetch('http://localhost:8000/tickets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(ticket),
    });
    fetchTickets();
  };

  const deleteTicket = async (incident) => {
    await fetch(`http://localhost:8000/tickets/${incident}`, {
      method: 'DELETE',
    });
    fetchTickets();
  };

  // Pagination logic
  const indexOfLastTicket = currentPage * ticketsPerPage;
  const indexOfFirstTicket = indexOfLastTicket - ticketsPerPage;
  const currentTickets = tickets.slice(indexOfFirstTicket, indexOfLastTicket);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="max-w-4xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Ticket Management</h1>
      <TicketForm onCreate={createTicket} />
      <TicketTable tickets={currentTickets} onDelete={deleteTicket} />
      <Pagination
        totalTickets={tickets.length}
        ticketsPerPage={ticketsPerPage}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default App;