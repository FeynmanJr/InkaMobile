// third-party
import { combineReducers } from "redux";

import clientReducer from "./slices/client";
import employeeReducer from "./slices/employee";
import educationReducer from "./slices/education";
import noteReducer from "./slices/note";
import workExperienceReducer from "./slices/workExperience";
import employeeTimeOffReducer from "./slices/employeeTimeOff";
import announcementReducer from "./slices/announcement";
import announcementsReducer from "./slices/announcements";
import announcementReadStatusReducer from "./slices/announcementReadStatus";
import socialMediasReducer from "./slices/socialMedias";
import employeeReportReducer from "./slices/employeeReport";
import employeeAdvanceReducer from "./slices/employeeAdvance";
import employeeExpenseReducer from "./slices/employeeExpense";
import changePasswordReducer from "./slices/changePassword";
import dashboardReducer from "./slices/dashboard";

const reducer = combineReducers({
  client: clientReducer,
  employee: employeeReducer,
  education: educationReducer,
  note: noteReducer,
  workExperience: workExperienceReducer,
  employeeTimeOff: employeeTimeOffReducer,
  announcement: announcementReducer,
  announcements: announcementsReducer,
  announcementReadStatus: announcementReadStatusReducer,
  socialMedias: socialMediasReducer,
  employeeReport: employeeReportReducer,
  employeeAdvance: employeeAdvanceReducer,
  employeeExpense: employeeExpenseReducer,
  changePassword: changePasswordReducer,
  dashboard: dashboardReducer,
});

export default reducer;
