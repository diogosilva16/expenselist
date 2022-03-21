import React, { useState } from "react";

import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

function Expenses(props) {
  const [yearFilter, setYearFilter] = useState("2020");

  const handleFilter = (yearFilter) => {
    setYearFilter(yearFilter);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === yearFilter;
  });

  

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selectedYear={yearFilter}
          onChangeFilter={handleFilter}
        />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses}/>
      </Card>
    </div>
  );
}

export default Expenses;
