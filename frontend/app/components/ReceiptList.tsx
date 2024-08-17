const ReceiptList: React.FC<{ receipts: any[] }> = ({ receipts }) => {
    return (
      <div>
        <h2 className="text-3xl font-semibold mb-4">Your Receipts</h2>
        <ul>
          {receipts.map((receipt) => (
            <li key={receipt.id} className="bg-gray-800 p-4 rounded-lg mb-2">
              <h3 className="font-bold">{receipt.title}</h3>
              <p>Amount: ${receipt.amount}</p>
              <p>Date: {receipt.date}</p>
              <p>Tags: {receipt.tags.join(', ')}</p>
              {/* Add buttons for edit and delete */}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default ReceiptList;