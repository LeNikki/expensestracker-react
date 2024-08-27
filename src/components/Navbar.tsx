import expenses_logo from "../assets/expenses_logo.png";
const Navbar = () => {
  return (
    <div className="p-5 w-full md:w-1/4 flex flex-row justify-between items-center drop-shadow-lg">
      <img src={expenses_logo} alt="logo" className="w-10" />
      <h1 className="font-semibold md:text-xl text-md text-pink-100">
        Expenses Tracker
      </h1>
      <p className="text-purple-100">made with ReactJS</p>
    </div>
  );
};

export default Navbar;
