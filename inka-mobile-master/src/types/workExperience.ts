import { PaginationList } from "./paginationList";

export type WorkExperience = {
  id?: string;
  userId?: string;
  companyName?: string;
  position?: string;
  employmentStartDate?: string;
  dateOfLeaving?: string;
  positionName?: string;
};

export interface WorkExperienceStateProps {
  workExperience: PaginationList<WorkExperience>;
  error: object | string | null;
  loading: boolean;
  loadingData: boolean;
  addedWorkExperience: object | null;
  deletedWorkExperience: WorkExperience | null;
  updatedWorkExperience: WorkExperience | null;
}
