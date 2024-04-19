// project imports
import axios from "../../utils/axios";
import { dispatch } from "../index";
import { createSlice } from "@reduxjs/toolkit";
import { DefaultRootStateProps } from "../../types";

const initialState: DefaultRootStateProps["employeeDailyTimeOff"] = {
  employeeDailyTimeOff: {
    count: null,
    hasNext: null,
    hasPrevious: null,
    index: null,
    items: [],
    pages: null,
    size: null,
  },
  loadingEmployeeDailyTimeOff: false,
  specialDays: {
    count: null,
    hasNext: null,
    hasPrevious: null,
    index: null,
    items: [],
    pages: null,
    size: null,
  },
  loadingSpecialDays: false,
  hiringDate: {
    count: null,
    hasNext: null,
    hasPrevious: null,
    index: null,
    items: [],
    pages: null,
    size: null,
  },
  loadingHiringDate: false,
  error: null,
};

const slice = createSlice({
  name: "employeeDailyTimeOff",
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },
    getEmployeeDailyTimeOffSuccess(state, action) {
      state.employeeDailyTimeOff = action.payload;
    },
    setLoadingEmployeeDailyTimeOff(state, action) {
      state.loadingEmployeeDailyTimeOff = action.payload;
    },
    getSpecialDaysSuccess(state, action) {
      state.specialDays = action.payload;
    },
    setLoadingSpecialDays(state, action) {
      state.loadingSpecialDays = action.payload;
    },
    getHiringDateSuccess(state, action) {
      state.hiringDate = action.payload;
    },
    setLoadingHiringDate(state, action) {
      state.loadingHiringDate = action.payload;
    },

    cleanEmployeeState() {
      return initialState;
    },

    cleanSpecialDaysState(state) {
      return {
        ...state,
      };
    },

    cleanHiringDateState(state) {
      return {
        ...state,
      };
    },
  },
});

export default slice.reducer;

export function getEmployeeDailyTimeOff(queryString: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingEmployeeDailyTimeOff(true));
      const response = await axios.get(
        "/api/dashboards/employeeDailyTimeOff" + queryString
      );
      dispatch(slice.actions.getEmployeeDailyTimeOffSuccess(response.data));
      dispatch(slice.actions.setLoadingEmployeeDailyTimeOff(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingEmployeeDailyTimeOff(false));
    }
  };
}

export function getSpecialDays(queryString: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingSpecialDays(true));
      const response = await axios.get(
        "/api/dashboards/specialDays" + queryString
      );
      dispatch(slice.actions.getSpecialDaysSuccess(response.data));
      dispatch(slice.actions.setLoadingSpecialDays(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingSpecialDays(false));
    }
  };
}

export function getHiringDate(queryString: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingHiringDate(true));
      const response = await axios.get(
        "/api/dashboards/hiringDate" + queryString
      );
      dispatch(slice.actions.getHiringDateSuccess(response.data));
      dispatch(slice.actions.setLoadingHiringDate(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingHiringDate(false));
    }
  };
}

export function cleanEmployeeState() {
  return async () => {
    dispatch(slice.actions.cleanEmployeeState());
  };
}

export function cleanSpecialDaysState() {
  return async () => {
    dispatch(slice.actions.cleanSpecialDaysState());
  };
}

export function cleanHiringDateState() {
  return async () => {
    dispatch(slice.actions.cleanHiringDateState());
  };
}
