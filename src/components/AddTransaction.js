import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const AddTransaction = () => {
  const [description, setDescription] = useState("");
  const [ amount, setAmount ] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (e) => {
    e.preventDefault();
    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      description,
      amount: Number(amount),
    };
    addTransaction(newTransaction);
    setDescription('');
    setAmount(0);
  };

  return (
    <>
      <h3>Nova Transação</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="description">Descrição</label>
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Valor <br /> (Receita: positivo - Despesa: negativo)
          </label>
          <input
            type="number"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
        <button className="btn">Adicionar</button>
      </form>
    </>
  );
};

export default AddTransaction;
