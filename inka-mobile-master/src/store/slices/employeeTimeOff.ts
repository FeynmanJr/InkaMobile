import axios from "../../utils/axios";
import { dispatch } from "../index";
import { createSlice } from "@reduxjs/toolkit";
import { DefaultRootStateProps } from "../../types";
import { TimeOffRequest } from "types/employeeTimeOffRequest";

const initialState: DefaultRootStateProps["employeeTimeOff"] = {
  timeOff: null,
  timeOffs: {
    count: null,
    hasNext: null,
    hasPrevious: null,
    index: null,
    items: [],
    pages: null,
    size: null,
  },
  employeeTimeOffEligibility: null,
  error: null,
  loading: false,
  loadingData: false,
  addedTimeOffRequest: null,
  deletedTimeOffRequest: null,
  updatedTimeOffRequest: null,
};

const slice = createSlice({
  name: "employeeTimeOff",
  initialState,
  reducers: {
    hasError(state, action) {
      state.error = action.payload;
    },

    getTimeOffRequestSuccess(state, action) {
      state.timeOffs = action.payload;
    },

    postTimeOffRequestSuccess(state, action) {
      state.addedTimeOffRequest = action.payload;
    },

    deleteTimeOffRequestSuccess(state, action) {
      state.deletedTimeOffRequest = action.payload;
    },

    putTimeOffRequestSuccess(state, action) {
      state.updatedTimeOffRequest = action.payload;
    },
    getTimeOffRequestByIdSuccess(state, action) {
      state.timeOff = action.payload;
    },

    getEmployeeTimeOffEligibilitySuccess(state, action) {
      state.employeeTimeOffEligibility = action.payload;
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },
    setLoadingData(state, action) {
      state.loadingData = action.payload;
    },

    cleanTimeOffRequestState() {
      return initialState;
    },
  },
});

export default slice.reducer;

export function getTimeOffRequestList(queryString: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get("/api/timeoffs" + queryString);
      dispatch(slice.actions.getTimeOffRequestSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function getTimeOffRequestById(id: any) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get("/api/timeoffs/" + id);
      dispatch(slice.actions.getTimeOffRequestByIdSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function getTimeOffRequestByUserId(userId: string, queryString: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const Response = await axios.get(
        "/api/timeoffs/employee" + userId + queryString
      );
      dispatch(slice.actions.getTimeOffRequestSuccess(Response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function postTimeOffRequest(timeOffRequest: TimeOffRequest) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.post("/api/timeoffs", timeOffRequest);
      dispatch(slice.actions.postTimeOffRequestSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}
export function deleteTimeOffRequest(userId: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.delete(`/api/timeoffs/${userId}`);
      dispatch(slice.actions.deleteTimeOffRequestSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function putTimeOffRequest(timeOffRequest: TimeOffRequest) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.put("/api/timeoffs", timeOffRequest);
      dispatch(slice.actions.putTimeOffRequestSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function getEmployeeTimeOffEligibility(userId: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.get(
        "/api/timeoffs/employeetimeofeligibility/" + userId
      );
      dispatch(
        slice.actions.getEmployeeTimeOffEligibilitySuccess(response.data)
      );
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function cleanTimeOffRequestState() {
  return async () => {
    dispatch(slice.actions.cleanTimeOffRequestState());
  };
}
