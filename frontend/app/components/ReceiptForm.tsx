import React, { useState } from 'react';

const ReceiptForm: React.FC = () => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const [tags, setTags] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., send to API)
    console.log({ title, amount, date, tags, notes });
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Create Receipt</h2>
      {/* Form fields for title, amount, date, tags, notes */}
      <button type="submit" className=" text-white py-2 rounded-md">
        Create Receipt
      </button>
    </form>
  );
};

export default ReceiptForm;