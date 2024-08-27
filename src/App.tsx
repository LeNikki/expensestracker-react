import Navbar from "./components/Navbar";
import IncomeExpenses from "./components/IncomeExpenses";
import Transaction from "./components/Transaction";
import History from "./components/History";
import "./index.css";
function App() {
  return (
    <div className="bg-gradient-to-b from-slate-800 to-pink-950 pb-10">
      <div className="flex justify-start items-center">
        <Navbar />
      </div>

      <IncomeExpenses />
      <div className="flex justify-center items-center">
        <Transaction />
      </div>
      <History />
      <p className="p-5 text-white font-semibold text-center mt-10">
        Copyright@2024 Designed and coded by Nicole P. Satiembre
      </p>
    </div>
  );
}

export default App;
