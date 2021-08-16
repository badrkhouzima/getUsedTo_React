import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expense.css";



function Expenses(props) {
  return (
    <Card className="expenses">
      <ExpenseItem
        title={props.expenses1[0].title}
        amount={props.expenses1[0].amount}
        date={props.expenses1[0].date}
      />
      <ExpenseItem
        title={props.expenses1[1].title}
        amount={props.expenses1[1].amount}
        date={props.expenses1[1].date}
      />
      <ExpenseItem
        title={props.expenses1[2].title}
        amount={props.expenses1[2].amount}
        date={props.expenses1[2].date}
      />
      <ExpenseItem
        title={props.expenses1[3].title}
        amount={props.expenses1[3].amount}
        date={props.expenses1[3].date}
      />
    </Card>
  );
}

export default Expenses;
