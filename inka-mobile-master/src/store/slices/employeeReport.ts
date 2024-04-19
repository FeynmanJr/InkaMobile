import axios from "../../utils/axios";
import { dispatch } from "../index";
import { createSlice } from "@reduxjs/toolkit";
import { DefaultRootStateProps } from "../../types";
import { EmployeeReport } from "types/employeeReport";

const initialState: DefaultRootStateProps["employeeReport"] = {
  employeeReport: null,
  employeeReports: {
    count: null,
    hasNext: null,
    hasPrevious: null,
    index: null,
    items: [],
    pages: null,
    size: null,
  },
  error: null,
  loading: false,
  loadingData: false,
  addedEmployeeReport: null,
  deletedEmployeeReport: null,
  updatedEmployeeReport: null,
  addedEmployeeReportManager: null,
  deletedEmployeeReportManager: null,
  updatedEmployeeReportManager: null,
};

const slice = createSlice({
  name: "employeeReport",
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },

    getEmployeeReportSuccess(state, action) {
      state.employeeReports = action.payload;
    },
    // ADD EmployeeReport
    postEmployeeReportSuccess(state, action) {
      state.addedEmployeeReport = action.payload;
    },
    // delete EmployeeReport
    deleteEmployeeReportSuccess(state, action) {
      state.deletedEmployeeReport = action.payload;
    },
    //edit EmployeeReport
    putEmployeeReportSuccess(state, action) {
      state.updatedEmployeeReport = action.payload;
    },
    getEmployeeReportByIdSuccess(state, action) {
      state.employeeReport = action.payload;
    },

    postManagerEmployeeReportSuccess(state, action) {
      state.addedEmployeeReportManager = action.payload;
    },

    deleteManagerEmployeeReportSuccess(state, action) {
      state.deletedEmployeeReportManager = action.payload;
    },

    putManagerEmployeeReportSuccess(state, action) {
      state.updatedEmployeeReportManager = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setLoadingData(state, action) {
      state.loadingData = action.payload;
    },

    cleanEmployeeReportState() {
      return initialState;
    },
  },
});

export default slice.reducer;

export function getEmployeeReportList(queryString: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get("/api/sickReports" + queryString);
      dispatch(slice.actions.getEmployeeReportSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function getEmployeeReportById(id: any) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get("/api/sickReports/" + id);
      dispatch(slice.actions.getEmployeeReportByIdSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function getEmployeeReportByUserId(userId: string, queryString: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get(
        "/api/sickReports/employee/" + userId + queryString
      );
      dispatch(slice.actions.getEmployeeReportSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function postEmployeeReport(employeeReport: EmployeeReport) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.post("/api/sickReports", employeeReport);
      dispatch(slice.actions.postEmployeeReportSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function postEmployeeReportManager(employeeReport: EmployeeReport) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.post(
        "/api/sickReports/manager",
        employeeReport
      );
      dispatch(slice.actions.postManagerEmployeeReportSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function deleteEmployeeReport(userId: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.delete(`/api/sickReports/${userId}`);
      dispatch(slice.actions.deleteEmployeeReportSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function deleteEmployeeReportManager(userId: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.delete(`/api/sickReports/manager/${userId}`);
      dispatch(slice.actions.deleteManagerEmployeeReportSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function putEmployeeReport(employeeReport: EmployeeReport) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.put("/api/sickReports", employeeReport);
      dispatch(slice.actions.putEmployeeReportSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function putEmployeeReportManager(employeeReport: EmployeeReport) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.put(
        "/api/sickReports/manager",
        employeeReport
      );
      dispatch(slice.actions.putManagerEmployeeReportSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function cleanEmployeeReportState() {
  return async () => {
    dispatch(slice.actions.cleanEmployeeReportState());
  };
}
