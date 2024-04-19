import { PaginationList } from "./paginationList";

export type TimeOffEligilibity = {
  userId?: string;
  availableTimeOff?: string;
  totalUsedTimeOffDay: string;
  totalTimeOff: string;
};

export type TimeOffRequest = {
  id?: string;
  employeeId?: string;
  companyId?: string;
  departmentId?: string;
  leaveTypeId?: string;
  filePath?: string;
  usedTimeOffDay?: string;
  startDate?: string;
  endDate?: string;
  requestDate?: string;
  description?: string;
  approvalStatusId?: string;
  approverId?: string;
  approvalDate?: string;
  approvalMailStatusId?: string;
  approverDescription?: string;
  documentPath?: string;
};

export interface EmployeeTimeOffStateProps {
  timeOff: TimeOffRequest | null;
  timeOffs: PaginationList<TimeOffRequest>;
  employeeTimeOffEligibility: TimeOffEligilibity | null;
  error: object | string | null;
  loading: boolean;
  loadingData: boolean;
  addedTimeOffRequest: object | null;
  deletedTimeOffRequest: TimeOffRequest | null;
  updatedTimeOffRequest: TimeOffRequest | null;
}
