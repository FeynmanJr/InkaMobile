import { PaginationList } from "./paginationList";
import { Advance } from "./advance";

type AdvanceEligilibity = {
  userId?: string;
  advanceLimit?: number;
  currentAdvanceAmount: string;
  activeAdvances: string;
};

export interface EmployeeAdvanceStateProps {
  employeeAdvance: Advance | null;
  employeeAdvances: PaginationList<Advance>;
  employeeAdvanceEligibility: AdvanceEligilibity | null;
  error: object | string | null;
  loading: boolean;
  loadingData: boolean;
  addedAdvance: object | null;
  deletedAdvance: Advance | null;
  updatedAdvance: Advance | null;
}
