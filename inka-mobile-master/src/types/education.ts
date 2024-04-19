import { PaginationList } from "./paginationList";

export type Education = {
  id?: string;
  userId?: string;
  educationalStatusId?: string;
  educationalStatusValue?: string;
  school?: string;
  departmentOfEducation?: string;
  graduationDate?: string;
};

export interface EducationStateProps {
  education: PaginationList<Education>;
  error: object | string | null;
  loading: boolean;
  loadingData: boolean;
  addedEducation: object | null;
  deletedEducation: Education | null;
  updatedEducation: Education | null;
}
