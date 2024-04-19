import { PaginationList } from "./paginationList";

export type Trainings = {
  id?: string;
  name?: string;
  description?: string;
  userId?: string;
  employeeFullName?: string;
  trainingTypeId?: string;
  trainingTypeValue?: string;
  certificateUrl?: string;
  organization?: string;
  beginDate?: string;
  endDate?: string;
  filePath?: string;
};

export interface TrainingsStateProps {
  trainings: PaginationList<Trainings>;
  error: object | string | null;
  loading: boolean;
  loadingData: boolean;
  addedTrainings: object | null;
  deletedTrainings: Trainings | null;
  updatedTrainings: Trainings | null;
}
