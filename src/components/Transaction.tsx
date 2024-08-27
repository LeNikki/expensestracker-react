import { DatePicker } from "@mui/x-date-pickers/DatePicker";

export default function Transaction() {
  return (
    <div className="w-full md:w-1/2 bg-white  flex flex-col justify-center p-5 items-center rounded-xl">
      <h3 className="text-pink-600 font-semibold mb-5">Add Transaction</h3>
      <form className="w-full flex flex-col  justify-center items-center">
        <section className="w-full flex flex-wrap justify-around items-center">
          <section className="flex flex-col">
            <label>Select Date:</label>
            <DatePicker />
            <label htmlFor="transactionType">Transaction Type:</label>
            <select
              id="transactionType"
              className="border border-1 border-pink-600 rounded-md p-2 w-72"
            >
              <option>Income</option>
              <option>Expenses</option>
            </select>
          </section>
          <section className="flex flex-col">
            <label htmlFor="date">Transaction Name:</label>
            <input
              id="date"
              className="border border-1 border-pink-600 rounded-md p-2 w-72"
            />
            <label htmlFor="date">Amount:</label>
            <input
              id="date"
              type="number"
              className="border border-1 border-pink-600 rounded-md p-2 w-72"
            />
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
