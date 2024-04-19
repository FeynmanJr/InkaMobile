export type JWTContextType = {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  authUser?: AuthUser | null | undefined;
  loading: boolean;
  logout: () => void;
  login: (email: string, password: string) => Promise<void>;
  register: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => Promise<void>;
  resetPassword: (email: string) => void;
};

export type AuthUser = {
  id?: string;
  userId?: string;
  companyId?: string;
  departmentId?: string;
  managerId?: string;
  assistantId?: string;
  firstName?: string;
  lastName?: string;
  fullName?: string;
  emailAddress?: string;
  positionId?: string;
  positionName?: string;
  jobTitleId?: string;
  jobTitleValue?: string;
  hiringDate?: string;
};
