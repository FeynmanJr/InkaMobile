// project imports
import axios from "../../utils/axios";
import { dispatch } from "../index";
import { createSlice } from "@reduxjs/toolkit";
import { DefaultRootStateProps } from "../../types";

const initialState: DefaultRootStateProps["client"] = {
  parameter: [],
  parameterGroup: [],
  menu: [],
  menuItems: [],
  holiday: [],
  error: null,
  loading: false,
  menuLoading: false,
};

const slice = createSlice({
  name: "client",
  initialState,
  reducers: {
    hasError(state, action) {
      state.error = action.payload;
    },

    getClientSuccess(state, action) {
      state.parameter = action.payload.parameters;
      state.parameterGroup = action.payload.parameterGroups;
      state.holiday = action.payload.holidays;
    },

    getMenusSuccess(state, action) {
      state.menu = action.payload.menus;
    },

    setMenuItemsSuccess(state, action) {
      state.menuItems = action.payload;
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },

    setMenuLoading(state, action) {
      state.menuLoading = action.payload;
    },

    cleanClientState() {
      return initialState;
    },
  },
});

export default slice.reducer;

export function getClients() {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.get("/api/clients");
      dispatch(slice.actions.getClientSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function setMenuItems(items: any[]) {
  return async () => {
    try {
      dispatch(slice.actions.setMenuItemsSuccess(items));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function getMenus() {
  return async () => {
    try {
      dispatch(slice.actions.setMenuLoading(true));
      const response = await axios.get("/api/clients/menus");
      dispatch(slice.actions.getMenusSuccess(response.data));
      dispatch(slice.actions.setMenuLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setMenuLoading(false));
    }
  };
}

export function cleanClientState() {
  return async () => {
    dispatch(slice.actions.cleanClientState());
  };
}
