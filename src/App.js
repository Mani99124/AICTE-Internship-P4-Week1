import React, { useState } from 'react';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';

function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const totalBalance = transactions.reduce((total, transaction) => total + transaction.amount, 0);

  return (
    <div className="container mt-5">
      <h1 className="text-center">Personal Finance Manager</h1>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
      <div className="mt-4">
        <h4>Total Balance: ${totalBalance.toFixed(2)}</h4>
      </div>
    </div>
  );
}

export default App;
