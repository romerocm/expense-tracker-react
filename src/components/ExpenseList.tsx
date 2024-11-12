import React from 'react';
import { useSelector } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList: React.FC = () => {
  const expenses = useSelector(selectExpenses);

  return (
    <div className="content-container">
      <div className="list-header">
        <div className="show-for-mobile">Gastos</div>
        <div className="show-for-desktop">Gasto</div>
        <div className="show-for-desktop">Monto</div>
      </div>
      <div className="list-body">
        {expenses.length === 0 ? (
          <div className="list-item list-item--message">
            <span>No existen gastos</span>
          </div>
        ) : (
          expenses.map((expense) => <ExpenseListItem key={expense.id} {...expense} />)
        )}
      </div>
    </div>
  );
};

export default ExpenseList;
