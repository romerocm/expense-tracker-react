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
