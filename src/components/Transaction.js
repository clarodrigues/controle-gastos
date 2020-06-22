import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
  const { deleteTransaction } = useContext(GlobalContext);

  const sign = transaction.amount > 0 ? "+" : "-";
  const clsName = transaction.amount > 0 ? "plus" : "minus";

  return (
    <li className={clsName}>
      {transaction.description}
      <span>
        {sign}
        R$ {Math.abs(transaction.amount).toFixed(2).replace(".", ",")}
      </span>
      <button onClick={() => deleteTransaction(transaction.id)} className="delete-btn">
      <i className="fa fa-trash" aria-hidden="true"></i>
      </button>
    </li>
  );
};
