import React from 'react';
import ExpenseListItem from './ExpenseListItem';
import { useFirebase } from '../context/FirebaseContext';

const ExpenseList: React.FC = () => {
  const [expenses, setExpenses] = React.useState([]);
  const { database, user } = useFirebase();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:px-6 flex justify-between">
          <div className="text-lg font-medium">Expenses</div>
          <div className="text-lg font-medium">Amount</div>
        </div>
        <div className="border-t border-gray-200">
          {expenses.length === 0 ? (
            <div className="px-4 py-5 sm:px-6 text-gray-500 text-center">
              No expenses found
            </div>
          ) : (
            expenses.map((expense) => (
              <ExpenseListItem key={expense.id} {...expense} />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default ExpenseList;
import React from 'react';
import { useExpenses } from '../hooks/useExpenses';

export const ExpenseList: React.FC = () => {
  const { expenses, loading } = useExpenses();

  if (loading) {
    return <div>Loading expenses...</div>;
  }

  if (expenses.length === 0) {
    return <div>No expenses found.</div>;
  }

  return (
    <div className="space-y-4">
      {expenses.map((expense) => (
        <div 
          key={expense.id} 
          className="bg-white p-4 rounded-lg shadow"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="text-lg font-semibold">{expense.description}</h3>
              {expense.note && (
                <p className="text-gray-600 text-sm">{expense.note}</p>
              )}
              <p className="text-gray-500 text-sm">
                {new Date(expense.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="text-xl font-bold">
              ${expense.amount.toFixed(2)}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
