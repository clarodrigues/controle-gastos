import React, {useContext} from "react";
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {

  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map(transaction => transaction.amount);
  const total = amounts.reduce((accumulator, amount) => (accumulator += amount), 0)

  return (
    <>
      <h4>Saldo</h4>
  <h1 id="balance">R$ {total.toFixed(2).replace('.',',')}</h1>
    </>
  );
};

export default Balance;
