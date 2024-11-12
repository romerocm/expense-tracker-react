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
