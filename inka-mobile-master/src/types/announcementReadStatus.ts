import { PaginationList } from "./paginationList";

export type AnnouncementReadStatus = {
  id?: string;
  userId?: string;
  announcementId?: string;
  readDate?: string;
};

export interface AnnouncementReadStatusStateProps {
  announcementReadStatus: PaginationList<AnnouncementReadStatus>;
  error: object | string | null;
  loading: boolean;
  loadingData: boolean;
  addedAnnouncementReadStatus: object | null;
  deletedAnnouncementReadStatus: AnnouncementReadStatus | null;
  updatedAnnouncementReadStatus: AnnouncementReadStatus | null;
}
