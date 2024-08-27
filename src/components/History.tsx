import "../index.css";
export default function History() {
  return (
    <div className=" w-full flex justify-center items-center mt-10 md:mt-20">
      <div className="flex flex-col w-full md:w-3/4 items-center  bg-white rounded-lg p-2 md:p-5">
        <h1 className="text-center font-semibold text-pink-600">
          Transaction History for the month: August
        </h1>
        <table className="flex flex-col md:flex-row justify-center items-center">
          <section className=" w-full  md:w-1/2 m-2 flex flex-col items-center">
            <p className="text-green-600 font-semibold mb-3">Income</p>
            <section className="scrollable">
              <tr>
                <th>Date</th>
                <th>Transaction Name</th>
                <th>Amount</th>
                <th>Delete</th>
              </tr>
              <tr>
                <td>Date</td>
                <td>Date</td>
                <td>Date</td>
                <td className="text-center">
                  <i className="fa-solid fa-trash text-pink-800"></i>
                </td>
              </tr>
              <tr>
                <td>Date</td>
                <td>Date</td>
                <td>Date</td>
                <td className="text-center">
                  <i className="fa-solid fa-trash text-pink-800"></i>
                </td>
              </tr>
              <tr>
                <td>Date</td>
                <td>Date</td>
                <td>Date</td>
                <td className="text-center">
                  <i className="fa-solid fa-trash text-pink-800"></i>
                </td>
              </tr>
              <tr>
                <td>Date</td>
                <td>Date</td>
                <td>Date</td>
                <td className="text-center">
                  <i className="fa-solid fa-trash text-pink-800"></i>
                </td>
              </tr>
              <tr>
                <td>Date</td>
                <td>Date</td>
                <td>Date</td>
                <td className="text-center">
                  <i className="fa-solid fa-trash text-pink-800"></i>
                </td>
              </tr>
              <tr>
                <td>Date</td>
                <td>Date</td>
                <td>Date</td>
                <td className="text-center">
                  <i className="fa-solid fa-trash text-pink-800"></i>
                </td>
              </tr>
              <tr>
                <td>Date</td>
                <td>Date</td>
                <td>Date</td>
                <td className="text-center">
                  <i className="fa-solid fa-trash text-pink-800"></i>
                </td>
              </tr>{" "}
              <tr>
                <td>Date</td>
                <td>Date</td>
                <td>Date</td>
                <td className="text-center">
                  <i className="fa-solid fa-trash text-pink-800"></i>
                </td>
              </tr>{" "}
              <tr>
                <td>Date</td>
                <td>Date</td>
                <td>Date</td>
                <td className="text-center">
                  <i className="fa-solid fa-trash text-pink-800"></i>
                </td>
              </tr>
            </section>
          </section>
          <section className="w-full md:w-1/2 m-2  flex flex-col items-center">
            <p className="text-red-600 font-semibold mb-3">Expenses</p>
            <section className="scrollable">
              <tr>
                <th>Date</th>
                <th>Transaction Name</th>
                <th>Amount</th>
                <th>Delete</th>
              </tr>
              <tr>
                <td>Date</td>
                <td>Date</td>
                <td>Date</td>
                <td className="text-center">
                  {" "}
                  <i className="fa-solid fa-trash text-pink-800"></i>
                </td>
              </tr>
              <tr>
                <td>Date</td>
                <td>Date</td>
                <td>Date</td>
                <td className="text-center">
                  {" "}
                  <i className="fa-solid fa-trash text-pink-800"></i>
                </td>
              </tr>
              <tr>
                <td>Date</td>
                <td>Date</td>
                <td>Date</td>
                <td className="text-center">
                  {" "}
                  <i className="fa-solid fa-trash text-pink-800"></i>
                </td>
              </tr>
              <tr>
                <td>Date</td>
                <td>Date</td>
                <td>Date</td>
                <td className="text-center">
                  {" "}
                  <i className="fa-solid fa-trash text-pink-800"></i>
                </td>
              </tr>
              <tr>
                <td>Date</td>
                <td>Date</td>
                <td>Date</td>
                <td className="text-center">
                  {" "}
                  <i className="fa-solid fa-trash text-pink-800"></i>
                </td>
              </tr>
              <tr>
                <td>Date</td>
                <td>Date</td>
                <td>Date</td>
                <td className="text-center">
                  {" "}
                  <i className="fa-solid fa-trash text-pink-800"></i>
                </td>
              </tr>
              <tr>
                <td>Date</td>
                <td>Date</td>
                <td>Date</td>
                <td className="text-center">
                  {" "}
                  <i className="fa-solid fa-trash text-pink-800"></i>
                </td>
              </tr>
            </section>
          </section>
        </table>
      </div>
    </div>
  );
}
