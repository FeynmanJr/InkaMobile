import axios from "../../utils/axios";
import { dispatch } from "../index";
import { createSlice } from "@reduxjs/toolkit";
import { DefaultRootStateProps } from "../../types";
import { Advance } from "types/advance";

const initialState: DefaultRootStateProps["employeeAdvance"] = {
  employeeAdvance: null,
  employeeAdvances: {
    count: null,
    hasNext: null,
    hasPrevious: null,
    index: null,
    items: [],
    pages: null,
    size: null,
  },
  employeeAdvanceEligibility: null,
  error: null,
  loading: false,
  loadingData: false,
  addedAdvance: null,
  deletedAdvance: null,
  updatedAdvance: null,
};

const slice = createSlice({
  name: "advance",
  initialState,
  reducers: {
    hasError(state, action) {
      state.error = action.payload;
    },

    getAdvanceSuccess(state, action) {
      state.employeeAdvances = action.payload;
    },

    getEmployeeAdvanceEligibilitySuccess(state, action) {
      state.employeeAdvanceEligibility = action.payload;
    },

    postAdvanceSuccess(state, action) {
      state.addedAdvance = action.payload;
    },

    deleteAdvanceSuccess(state, action) {
      state.deletedAdvance = action.payload;
    },

    putAdvanceSuccess(state, action) {
      state.updatedAdvance = action.payload;
    },
    getAdvanceByIdSuccess(state, action) {
      state.employeeAdvance = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setLoadingData(state, action) {
      state.loadingData = action.payload;
    },

    cleanAdvanceState() {
      return initialState;
    },
  },
});

export default slice.reducer;

export function getAdvanceList(queryString: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get("/api/advances" + queryString);
      dispatch(slice.actions.getAdvanceSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function getAdvanceById(id: any) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get("/api/advances/" + id);
      dispatch(slice.actions.getAdvanceByIdSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function getAdvanceByUserId(userId: string, queryString: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get(
        "/api/advances/employee/" + userId + queryString
      );
      dispatch(slice.actions.getAdvanceSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function postAdvance(advance: Advance) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.post("/api/advances", advance);
      dispatch(slice.actions.postAdvanceSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}
export function deleteAdvance(userId: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.delete(`/api/advances/${userId}`);
      dispatch(slice.actions.deleteAdvanceSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function putAdvance(advance: Advance) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.put("/api/advances", advance);
      dispatch(slice.actions.putAdvanceSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function getEmployeeAdvanceEligibility(userId: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.get(
        "/api/advances/advanceEligibility/" + userId
      );
      dispatch(
        slice.actions.getEmployeeAdvanceEligibilitySuccess(response.data)
      );
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function cleanAdvanceState() {
  return async () => {
    dispatch(slice.actions.cleanAdvanceState());
  };
}
