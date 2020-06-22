import React, {useContext} from 'react';
import {GlobalContext} from '../context/GlobalState'
const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const incomes = amounts.filter(amount => amount > 0).reduce((accumulator, amount) => (accumulator += amount), 0);
  const expenses = amounts.filter(amount => amount < 0).reduce((accumulator, amount) => (accumulator += amount), 0);

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Receitas</h4>
        <p className="money plus">+ R$ {incomes.toFixed(2).replace('.',',')}</p>
      </div>
      <div>
        <h4>Gastos</h4>
        <p className="money minus">- R$ {Math.abs(expenses).toFixed(2).replace('.',',')}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
