import { PaginationList } from "./paginationList";

export type SocialMedias = {
  id?: string;
  relatedAccountId?: string;
  relatedAccountType?: string;
  socialMediaTypeId?: string;
  url?: string;
};

export interface SocialMediasStateProps {
  socialMedias: PaginationList<SocialMedias>;
  error: object | string | null;
  loading: boolean;
  loadingData: boolean;
  addedSocialMedias: object | null;
  deletedSocialMedias: SocialMedias | null;
  updatedSocialMedias: SocialMedias | null;
}
