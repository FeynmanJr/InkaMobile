import { EmployeeStateProps } from "./employee";
import { ChangePasswordStateProps } from "./changePassword";
import { EducationStateProps } from "./education";
import { NoteStateProps } from "./note";
import { WorkExperienceStateProps } from "./workExperience";
import { AnnouncementStateProps } from "./announcement";
import { AuthUser } from "./auth";
import { AnnouncementsStateProps } from "./announcements";
import { AnnouncementReadStatusStateProps } from "./announcementReadStatus";
import { SocialMediasStateProps } from "./socialMedias";
import { ClientStateProps } from "./client";
import { EmployeeReportStateProps } from "./employeeReport";
import { EmployeeTimeOffStateProps } from "./employeeTimeOffRequest";
import { EmployeeAdvanceStateProps } from "./employeeAdvance";
import { EmployeeExpenseStateProps } from "./employeeExpense";
import { EmployeeDailyTimeOffStateProps } from "./dashboard";
import { TrainingsStateProps } from "./trainings";

export interface DefaultRootStateProps {
  client: ClientStateProps;
  employee: EmployeeStateProps;
  changePassword: ChangePasswordStateProps;
  education: EducationStateProps;
  note: NoteStateProps;
  workExperience: WorkExperienceStateProps;
  employeeTimeOff: EmployeeTimeOffStateProps;
  announcement: AnnouncementStateProps;
  announcements: AnnouncementsStateProps;
  announcementReadStatus: AnnouncementReadStatusStateProps;
  socialMedias: SocialMediasStateProps;
  employeeReport: EmployeeReportStateProps;
  employeeAdvance: EmployeeAdvanceStateProps;
  employeeExpense: EmployeeExpenseStateProps;
  employeeDailyTimeOff: EmployeeDailyTimeOffStateProps;
  trainings: TrainingsStateProps;
}

export interface InitialLoginContextProps {
  isLoggedIn: boolean;
  isInitialized?: boolean;
  authUser?: AuthUser | null | undefined;
  loading: boolean;
}
