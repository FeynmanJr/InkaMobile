export type ChangePassword = {
  userId?: string;
  password?: string;
  newPassword?: string;
  newPasswordRepeat?: string;
};

export interface ChangePasswordStateProps {
  error: object | string | null;
  loading: boolean;
  updatedChangePassword: object | string | null;
}
