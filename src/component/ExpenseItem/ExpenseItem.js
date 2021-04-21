import React, { useState } from "react";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.scss";
import Card from "../Card/Card";

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);

  const clickHandler = () => {
    setTitle("Updated!");
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="description">
        <h2>{title}</h2>
        <div className="price">{props.amount} 💸 </div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
