import { PaginationList } from "./paginationList";

export type Advance = {
  id?: string;
  employeeId?: string;
  advanceTypeId?: string;
  paymentStatusId?: string;
  approvalStatusId?: string;
  requestedAmount?: string;
  numberOfInstallments?: string;
  amountToBePaid?: string;
  notes?: string;
  paymentDate?: string;
  firstPaymentDate?: string;
  remainingNumberOfInstallments?: string;
  monthlyInstallmentAmount?: string;
  installmentPaymentDates?: string;
};

export interface AdvanceStateProps {
  advance: Advance | null;
  advances: PaginationList<Advance>;
  error: object | string | null;
  loading: boolean;
  loadingData: boolean;
  addedAdvance: object | null;
  deletedAdvance: Advance | null;
  updatedAdvance: Advance | null;
}
