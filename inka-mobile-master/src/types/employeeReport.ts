import { PaginationList } from "./paginationList";

export type EmployeeReport = {
  id?: string;
  userId?: string;
  employeeUserId?: string;
  companyId?: string;
  departmentId?: string;
  reportPath?: string;
  description?: string;
  usedTimeOffDay?: string;
  startDate?: string;
  endDate?: string;
};

export interface EmployeeReportStateProps {
  employeeReport: EmployeeReport | null;
  employeeReports: PaginationList<EmployeeReport>;
  error: object | string | null;
  loading: boolean;
  loadingData: boolean;
  addedEmployeeReport: object | null;
  deletedEmployeeReport: EmployeeReport | null;
  updatedEmployeeReport: EmployeeReport | null;
  addedEmployeeReportManager: object | null;
  deletedEmployeeReportManager: EmployeeReport | null;
  updatedEmployeeReportManager: EmployeeReport | null;
}
