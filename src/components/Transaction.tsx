import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { useState } from "react";
import dayjs, { Dayjs } from "dayjs";
import type { ClientData, TransactionProps} from "../types/interfaces";

export default function Transaction({ submitForm }: TransactionProps) {
  const [clientData, setclientData] = useState<ClientData>({
    id: 0,
    date: dayjs().format("MMM D, YYYY"),
    transactionType: "income",
    transactionName: "",
    amount: 0,
  });

  return (
    <div className="w-full md:w-1/2 bg-white  flex flex-col justify-center p-5 items-center rounded-xl">
      <h3 className="text-pink-600 font-semibold mb-5">Add Transaction</h3>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          submitForm(clientData);
        }}
        className="w-full flex flex-col  justify-center items-center"
      >
        <section className="w-full flex flex-wrap justify-around items-center">
          <section className="flex flex-col">
            <label>Select Date:</label>
            <DatePicker
              value={dayjs(clientData.date)}
              onChange={(newValue: Dayjs | null) =>
                setclientData((prev) => ({
                  ...prev,
                  date: newValue ? newValue.format("MMM D, YYYY") : "",
                }))
              }
            />
            <p>
              Date: {clientData.date ? clientData.date : "No date selected"}
            </p>

            <label htmlFor="transactionType">Transaction Type:</label>
            <select
              id="transactionType"
              className="border border-1 border-slate-400 rounded-md p-2 w-72"
              value={clientData.transactionType}
              onChange={(event) =>
                setclientData((prev) => ({
                  ...prev,
                  transactionType: event.target.value,
                }))
              }
            >
              <option value="income">Income</option>
              <option value="expense">Expenses</option>
            </select>
            <p>{clientData.transactionType}</p>
          </section>
          <section className="flex flex-col">
            <label htmlFor="date">Transaction Name:</label>
            <input
              id="date"
              className="border border-1 border-slate-400 rounded-md p-2 w-72"
              value={clientData.transactionName}
              onChange={(event) =>
                setclientData((prev) => ({
                  ...prev,
                  transactionName: event.target.value,
                }))
              }
            />
            <p>{clientData.transactionName}</p>
            <label htmlFor="date">Amount:</label>
            <input
              id="amount"
              type="text"
              maxLength={6}
              value={clientData.amount}
              onChange={(event) => {
                const input = event.target.value;
                if (!isNaN(Number(input))) {
                  setclientData((prev) => ({
                    ...prev,
                    amount: Number(input),
                  }));
                }
              }}
              className="border border-1 border-slate-400 rounded-md p-2 w-72"
            />
            <p>{clientData.amount}</p>
          </section>
        </section>
        <button
          type="submit"
          className="w-44 bg-pink-700 hover:bg-pink-900 text-white p-2 rounded-md mt-10"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
