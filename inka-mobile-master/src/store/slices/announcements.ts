import axios from "../../utils/axios";
import { dispatch } from "../index";
import { createSlice } from "@reduxjs/toolkit";
import { DefaultRootStateProps } from "../../types";

const initialState: DefaultRootStateProps["announcements"] = {
  announcements: {
    count: null,
    hasNext: null,
    hasPrevious: null,
    index: null,
    items: [],
    pages: null,
    size: null,
  },
  error: null,
  loadingAnnouncements: false,
};

const slice = createSlice({
  name: "announcements",
  initialState,
  reducers: {
    hasError(state, action) {
      state.error = action.payload;
    },

    getAnnouncementsSuccess(state, action) {
      state.announcements = action.payload;
    },

    setLoadingAnnouncements(state, action) {
      state.loadingAnnouncements = action.payload;
    },

    cleanAnnouncementsState() {
      return initialState;
    },
  },
});

export default slice.reducer;

export function getAnnouncementsListByUserId(
  userId: string,
  queryString: string
) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingAnnouncements(true));
      const response = await axios.get(
        "/api/announcements/employee/" + userId + queryString
      );
      dispatch(slice.actions.getAnnouncementsSuccess(response.data));
      dispatch(slice.actions.setLoadingAnnouncements(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingAnnouncements(false));
    }
  };
}

export function cleanAnnouncementsState() {
  return async () => {
    dispatch(slice.actions.cleanAnnouncementsState());
  };
}
