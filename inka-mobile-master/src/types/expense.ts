import { PaginationList } from "./paginationList";

export type Expense = {
  id?: string;
  employeeId?: string;
  expenseDate?: string;
  amount?:string;
  description?:string;
  expenseTypeId?: string;
  filePath?:string;
  vat?:string;
  documentTypeId?:string;
  invoiceReceiptNumber?:string;
  statusId?:string;
  paymentDate?:string;
  paymentDescription?:string;

};

export interface ExpenseStateProps {
  expense: Expense | null;
  expenses: PaginationList<Expense>;
  error: object | string | null;
  loading: boolean;
  loadingData: boolean;
  addedExpense: object | null;
  deletedExpense: Expense | null;
  updatedExpense: Expense | null;
}
