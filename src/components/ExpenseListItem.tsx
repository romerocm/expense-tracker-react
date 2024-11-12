import React from 'react';
import Link from '../../node_modules/next/link';

interface Expense {
  id: string;
  description: string;
  amount: number;
  createdAt: number;
}

const ExpenseListItem: React.FC<Expense> = ({ id, description, amount, createdAt }) => (
  <Link 
    href={`/expenses/${id}`}
    className="px-4 py-4 sm:px-6 hover:bg-gray-50 flex justify-between items-center"
  >
    <div>
      <h3 className="text-lg font-medium">{description}</h3>
      <span className="text-sm text-gray-500">
        {new Date(createdAt).toLocaleDateString()}
      </span>
    </div>
    <h3 className="text-lg font-medium">
      ${(amount / 100).toFixed(2)}
    </h3>
  </Link>
);

export default ExpenseListItem;
