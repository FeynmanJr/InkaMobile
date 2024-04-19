import { PaginationList } from "./paginationList";

export type Announcement = {
  id?: string;
  title?: string;
  content?: string;
  startDate?: string;
  endDate?: string;
  isActive?: boolean;
  announcementTypeId?: string;
  isMandatoryWarning?: boolean;
  informationTypeId?: string;
  announcementTypeValue?: string;
  informationTypeValue?: string;
  companyId?: string;
  departmentId?: string;
  isContinuous?: boolean;
};

export interface AnnouncementStateProps {
  announcement: PaginationList<Announcement>;
  error: object | string | null;
  loading: boolean;
  loadingData: boolean;
  addedAnnouncement: object | null;
  deletedAnnouncement: Announcement | null;
  updatedAnnouncement: Announcement | null;
}
