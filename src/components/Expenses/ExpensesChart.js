import React from "react";
import Chart from "../Chart/Chart";

function ExpensesChart(props) {
  const chartDataPoint = [
    { label: "Jan", value: 0 },
    { label: "Fev", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Abr", value: 0 },
    { label: "Mai", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Ago", value: 0 },
    { label: "Set", value: 0 },
    { label: "Out", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dez", value: 0 },
  ];

  for(const expenses of props.expenses) {
      const expenseMonth = expenses.date.getMonth();
      chartDataPoint[expenseMonth].value += expenses.amount;
  }

  return <Chart dataPoints={chartDataPoint}/>;
}

export default ExpensesChart;
