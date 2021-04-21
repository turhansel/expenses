import ExpenseDate from "../ExpenseDate/ExpenseDate";
import "./ExpenseItem.scss";
import Card from "../Card/Card";

const ExpenseItem = (props) => {
  return (
    <li>
      <Card className="expense-item">
        <ExpenseDate date={props.date} />
        <div className="description">
          <h2>{props.title}</h2>
          <div className="price">{props.amount} ₺ </div>
        </div>
      </Card>
    </li>
  );
};

export default ExpenseItem;
