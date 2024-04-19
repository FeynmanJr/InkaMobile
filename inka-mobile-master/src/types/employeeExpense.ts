import { PaginationList } from "./paginationList";
import { Expense } from "./expense";

export interface EmployeeExpenseStateProps {
  employeeExpense: Expense | null;
  employeeExpenses: PaginationList<Expense>;
  error: object | string | null;
  loading: boolean;
  loadingData: boolean;
  addedExpense: object | null;
  deletedExpense: Expense | null;
  updatedExpense: Expense | null;
}
