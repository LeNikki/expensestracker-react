export const Months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
export interface ClientData {
  id: number;
  date: string;
  transactionType: string;
  transactionName: string;
  amount: number;
}
export interface MonthlyTransactions {
  [month: string]: ClientData[];
}
export interface MonthSelected {
  monthSelected: string;
}
export interface IncomeExpensesProps {
  monthSelected: string;
  setMonthSelected: (month: string) => void;
  incomeTransactions: ClientData[];
  expensesTransactions: ClientData[];
}
export interface HistoryProps {
  monthSelected: string;
  incomeTransactions: ClientData[];
  expensesTransactions: ClientData[];
  handleDeleteTransaction: (data: number) => void;
}
export interface TransactionProps {
  submitForm: (data: ClientData) => void;
}
export interface MonthSummary {
  income: number;
  expenses: number;
  balance: number;
}
export const clientTransaction: ClientData[] = [];
