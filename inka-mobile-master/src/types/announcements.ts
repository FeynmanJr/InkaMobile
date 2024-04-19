import { PaginationList } from "./paginationList";

export type Announcements = {
  id?: string;
  title?: string;
  content?: string;
  startDate?: string;
  endDate?: string;
  isActive?: boolean;
  announcementTypeId?: string;
  isMandatoryWarning?: boolean;
  informationTypeId?: string;
  createdUserId?: string;
  createdUserFullName?: string;
  announcementReadStatusId?: string;
  readDate?: string;
  isReaded?: boolean;
  userId?: string;
  departmentId?: string;
  announcementTypeValue?: string;
  informationTypeValue?: string;
};

export interface AnnouncementsStateProps {
  announcements: PaginationList<Announcements>;
  error: object | string | null;
  loadingAnnouncements: boolean;
}
