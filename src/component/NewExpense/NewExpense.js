import React from "react";
import "./NewExpense.scss";
import NewExpenseForm from "./NewExpenseForm/NewExpenseForm";

const NewExpense = (props) => {
  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 1000).toString(),
    };
    props.onAddExpense(expenseData);
  };

  return (
    <div className="new-expense">
      <NewExpenseForm onSaveExpenseData={SaveExpenseDataHandler} />
    </div>
  );
};

export default NewExpense;
