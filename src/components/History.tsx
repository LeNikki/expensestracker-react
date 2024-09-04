import "../index.css";
import type { HistoryProps } from "../types/interfaces";
export default function History({
  monthSelected,
  incomeTransactions,
  expensesTransactions,
  handleDeleteTransaction,
}: HistoryProps) {
  return (
    <div className=" w-full flex justify-center items-center mt-10 md:mt-20">
      <div className="flex flex-col w-full md:w-3/4 items-center  bg-white rounded-lg p-2 md:p-5">
        <h1 className="text-center font-semibold text-pink-600">
          Transaction History for the month: {monthSelected}
        </h1>
        <section className="flex flex-col  md:flex-row justify-center items-center">
          <section className="w-full  md:w-1/2 m-2 flex flex-col items-center">
            <p className=" font-semibold mb-3 text-green-600">Income</p>
            <section className="scrollable">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Transaction Name</th>
                    <th>Amount</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {incomeTransactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td>{transaction.date}</td>
                      <td>{transaction.transactionName}</td>
                      <td>{transaction.amount}</td>
                      <td className="text-center">
                        <i
                          className="fa-solid fa-trash text-pink-800"
                          onClick={() =>
                            handleDeleteTransaction(transaction.id)
                          }
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </section>
          <section className="  w-full md:w-1/2 m-2  flex flex-col items-center">
            <p className="text-red-600 font-semibold mb-3">Expenses</p>
            <section className="scrollable">
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Transaction Name</th>
                    <th>Amount</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {expensesTransactions.map((transaction) => (
                    <tr key={transaction.id}>
                      <td>{transaction.date}</td>
                      <td>{transaction.transactionName}</td>
                      <td>{transaction.amount}</td>
                      <td className="text-center">
                        <i
                          className="fa-solid fa-trash text-pink-800"
                          onClick={() =>
                            handleDeleteTransaction(transaction.id)
                          }
                        ></i>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </section>
          </section>
        </section>
      </div>
    </div>
  );
}
