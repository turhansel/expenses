import React, { useState } from "react";
import "./NewExpense.scss";
import NewExpenseForm from "./NewExpenseForm/NewExpenseForm";

const NewExpense = (props) => {
  const [isEditting, setIsEditting] = useState(false);

  const SaveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.floor(Math.random() * 1000).toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditting(false);
  };

  const startEdittingHandler = () => {
    setIsEditting(true);
  };

  const stopEdittingHandler = () => {
    setIsEditting(false);
  };

  return (
    <div className="new-expense">
      {!isEditting && (
        <button onClick={startEdittingHandler}>Add New Expense</button>
      )}
      {isEditting && (
        <NewExpenseForm
          onSaveExpenseData={SaveExpenseDataHandler}
          onCancel={stopEdittingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
