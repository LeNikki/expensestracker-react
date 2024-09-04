import { Months } from "../types/interfaces";
import { useState, useEffect } from "react";
import type { IncomeExpensesProps, MonthSummary } from "../types/interfaces";

export default function IncomeExpenses({
  monthSelected,
  setMonthSelected,
  incomeTransactions,
  expensesTransactions,
}: IncomeExpensesProps) {
  const [month, setMonth] = useState<string>(monthSelected);
  const [monthSummary, setMonthSummary] = useState<MonthSummary>({
    income: 0,
    expenses: 0,
    balance: 0,
  });
  useEffect(() => {
    setMonthSelected(month);
  }, [month, setMonthSelected]);
  useEffect(() => {
    const totalIncome = incomeTransactions.reduce(
      (acc, curr) => acc + curr.amount,
      0
    );
    const totalExpenses = expensesTransactions.reduce(
      (acc, curr) => acc + curr.amount,
      0
    );
    const balance = totalIncome - totalExpenses;
    setMonthSummary({
      income: totalIncome,
      expenses: totalExpenses,
      balance: balance,
    });
  }, [incomeTransactions, expensesTransactions]);
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="font-semibold text-xl text-white">Transaction Summary</h1>
      <section className="flex justify-around items-center w-full md:w-1/4 mt-5 ">
        <p className="text-white">Pick month:</p>
        <select
          className="p-2 w-44 rounded-lg border border-1 border-pink-500"
          value={month}
          onChange={(e) => setMonth(e.target.value)}
        >
          {Months.map((month: string) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>
      </section>
      <div className="w-full flex justify-center items-center mt-10 mb-10">
        <section className="w-3/4 md:w-1/4 h-32 md:h-44 p-2 bg-pink-600 rounded-xl m-3 flex flex-col items-center justify-center drop-shadow-lg border border-1 border-white/50 ">
          <p className="text-white text-center text-md md:text-2xl">Income</p>
          <p className="text-white text-center text-md md:text-2xl mt-3">
            P {monthSummary.income}
          </p>
        </section>
        <section className="w-3/4 md:w-1/4 h-32 md:h-44  p-2 bg-pink-800 rounded-xl m-3 flex flex-col items-center justify-center drop-shadow-lg border border-1 border-white/50 ">
          <p className="text-white text-center text-md md:text-2xl">Balance</p>
          <p className="text-white text-center text-md md:text-2xl mt-3">
            P{monthSummary.balance}
          </p>
        </section>
        <section className="w-3/4 md:w-1/4 h-32 md:h-44  p-2 bg-pink-950 rounded-xl m-3 flex flex-col items-center justify-center drop-shadow-lg border border-1 border-white/50 ">
          <p className="text-white text-center text-md md:text-2xl">Expenses</p>
          <p className="text-white text-center text-md md:text-2xl mt-3">
            P{monthSummary.expenses}
          </p>
        </section>
      </div>
    </div>
  );
}
