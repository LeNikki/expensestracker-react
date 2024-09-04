import { clientTransaction } from "./interfaces";
import { useState, useEffect } from "react";
import type { ClientData } from "./interfaces";
interface MonthlyTransactions {
  January: ClientData[];
  February: ClientData[];
  March: ClientData[];
  April: ClientData[];
  May: ClientData[];
  June: ClientData[];
  July: ClientData[];
  August: ClientData[];
  September: ClientData[];
  October: ClientData[];
  November: ClientData[];
  December: ClientData[];
}
export const [database, setDatabase] = useState<MonthlyTransactions>({
  January: [],
  February: [],
  March: [],
  April: [],
  May: [],
  June: [],
  July: [],
  August: [],
  September: [],
  October: [],
  November: [],
  December: [],
});

useEffect(() => {
  const updateDatabase = () => {
    const updatedDatabase: MonthlyTransactions = {
      January: clientTransaction.filter((transaction) =>
        transaction.date.includes("Jan")
      ),
      February: clientTransaction.filter((transaction) =>
        transaction.date.includes("Feb")
      ),
      March: clientTransaction.filter((transaction) =>
        transaction.date.includes("Mar")
      ),
      April: clientTransaction.filter((transaction) =>
        transaction.date.includes("Apr")
      ),
      May: clientTransaction.filter((transaction) =>
        transaction.date.includes("May")
      ),
      June: clientTransaction.filter((transaction) =>
        transaction.date.includes("Jun")
      ),
      July: clientTransaction.filter((transaction) =>
        transaction.date.includes("Jul")
      ),
      August: clientTransaction.filter((transaction) =>
        transaction.date.includes("Aug")
      ),
      September: clientTransaction.filter((transaction) =>
        transaction.date.includes("Sep")
      ),
      October: clientTransaction.filter((transaction) =>
        transaction.date.includes("Oct")
      ),
      November: clientTransaction.filter((transaction) =>
        transaction.date.includes("Nov")
      ),
      December: clientTransaction.filter((transaction) =>
        transaction.date.includes("Dec")
      ),
    };
    setDatabase(updatedDatabase);
  };

  updateDatabase();
}, [clientTransaction]);
