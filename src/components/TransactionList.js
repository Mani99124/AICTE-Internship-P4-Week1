import React from 'react';

function TransactionList({ transactions }) {
  return (
    <div className="card mt-4">
      <div className="card-body">
        <h5 className="card-title">Transaction List</h5>
        <ul className="list-group">
          {transactions.map((transaction, index) => (
            <li key={index} className="list-group-item">
              <strong>{transaction.description}:</strong> ${transaction.amount.toFixed(2)}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default TransactionList;
