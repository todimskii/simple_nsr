import React, { useState } from 'react';

const TicketForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    incident: '',
    name: '',
    phone: '',
    issue: '',
    description: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.incident || !formData.name)
      return alert('Incident and Name are required');
    onCreate(formData);
    setFormData({ incident: '', name: '', phone: '', issue: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input name="incident" placeholder="Incident" value={formData.incident} onChange={handleChange} className="border p-2 w-full" />
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} className="border p-2 w-full" />
      <input name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} className="border p-2 w-full" />
      <input name="issue" placeholder="Issue" value={formData.issue} onChange={handleChange} className="border p-2 w-full" />
      <textarea name="description" placeholder="Description" value={formData.description} onChange={handleChange} className="border p-2 w-full" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Create Ticket</button>
    </form>
  );
};

export default TicketForm;
