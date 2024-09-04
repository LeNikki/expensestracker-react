import Navbar from "./components/Navbar";
import IncomeExpenses from "./components/IncomeExpenses";
import Transaction from "./components/Transaction";
import History from "./components/History";
import { Months } from "./types/interfaces";
import type { ClientData, MonthlyTransactions } from "./types/interfaces";
import { useState, useEffect } from "react";
function App() {
  const [transactions, setTransactions] = useState<ClientData[]>([]);
  const [incomeTransactions, setIncomeTransactions] = useState<ClientData[]>(
    []
  );
  const [expensesTransactions, setExpensesTransactions] = useState<
    ClientData[]
  >([]);
  const [monthlyDatabase, setDatabase] = useState<MonthlyTransactions>(
    Months.reduce((acc, month) => {
      acc[month] = [];
      return acc;
    }, {} as MonthlyTransactions)
  );
  const [monthSelected, setmonthSelected] = useState<string>("August");
  //set transactions
  const handleFormSubmit = (data: ClientData) => {
    setTransactions((prev) => {
      const newTransactions = [...prev, { ...data, id: Math.random() }];
      updateDatabase(newTransactions);
      return newTransactions;
    });
  };
  //set incomeTransaction, set expensesTransaction
  useEffect(() => {
    const monthHistory: ClientData[] = monthlyDatabase[monthSelected];
    setIncomeTransactions(
      monthHistory.filter(
        (transaction) => transaction.transactionType === "income"
      )
    );
    setExpensesTransactions(
      monthHistory.filter(
        (transaction) => transaction.transactionType === "expense"
      )
    );
  }, [transactions, monthlyDatabase, monthSelected]);
  //set monthly database
  const updateDatabase = (updatedTransactions: ClientData[]) => {
    const updatedDatabase = Months.reduce((acc, month) => {
      acc[month] = updatedTransactions.filter(
        (transaction) => transaction.date.includes(month.slice(0, 3)) // using the first 3 letters of month for matching
      );
      return acc;
    }, {} as MonthlyTransactions);

    setDatabase(updatedDatabase);
  };
  //delete a transaction
  const handleDeleteTransaction = (deleteId: number) => {
    setTransactions((prevTransactions) => {
      const newTransactions: ClientData[] = prevTransactions.filter(
        (transaction) => transaction.id !== deleteId
      );
      updateDatabase(newTransactions);

      return newTransactions;
    });
  };
  return (
    <div className="bg-gradient-to-b from-slate-800 to-pink-950 pb-10">
      <div className="flex justify-start items-center">
        <Navbar />
      </div>

      <IncomeExpenses
        monthSelected={monthSelected}
        setMonthSelected={setmonthSelected}
        incomeTransactions={incomeTransactions}
        expensesTransactions={expensesTransactions}
      />
      <div className="flex justify-center items-center">
        <Transaction submitForm={handleFormSubmit} />
      </div>
      <History
        monthSelected={monthSelected}
        incomeTransactions={incomeTransactions}
        expensesTransactions={expensesTransactions}
        handleDeleteTransaction={handleDeleteTransaction}
      />
      <p className="p-5 text-white font-semibold text-center mt-10">
        Copyright@2024 Designed and coded by Nicole P. Satiembre
      </p>
    </div>
  );
}

export default App;
