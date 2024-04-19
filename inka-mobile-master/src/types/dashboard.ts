import { PaginationList } from "./paginationList";

export type EmployeeDailyTimeOff = {
  id?: string;
  userId?: string;
  employeeFullName?: string;
  employeeJobTitleValue?: string;
  dayType?: string;
  timeOffType?: string;
};

export type SpecialDays = {
  id?: string;
  fullName?: string;
  employeeJobTitleValue?: string;
  birthday?: string;
  hiringDate?: string;
  day?: string;
  speacialDayType?: string;
  description?: string;
};

export type HiringDate = {
  id?: string;
  userId?: string;
  companyId?: string;
  departmentId?: string;
  positionId?: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  companyName?: string;
  departmentName?: string;
  positionName?: string;
  hiringDate?: string;
};

export interface EmployeeDailyTimeOffStateProps {
  employeeDailyTimeOff: PaginationList<EmployeeDailyTimeOff>;
  loadingEmployeeDailyTimeOff: boolean;
  specialDays: PaginationList<SpecialDays>;
  loadingSpecialDays: boolean;
  hiringDate: PaginationList<HiringDate>;
  loadingHiringDate: boolean;
  error: object | string | null;
}
