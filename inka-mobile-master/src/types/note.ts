import { PaginationList } from "./paginationList";

export type Note = {
  id?: string;
  userId?: string;
  noteTypeId?: string;
  noteTypeValue?: string;
  description?: string;
  createdDate?: string;
  createdUserId?: string;
  createdUserFullName?: string;
};

export interface NoteStateProps {
  note: PaginationList<Note>;
  error: object | string | null;
  loading: boolean;
  loadingData: boolean;
  addedNote: object | null;
  deletedNote: Note | null;
  updatedNote: Note | null;
}
