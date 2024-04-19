import axios from "../../utils/axios";
import { dispatch } from "../index";
import { createSlice } from "@reduxjs/toolkit";
import { DefaultRootStateProps } from "../../types";
import { Announcement } from "types/announcement";

const initialState: DefaultRootStateProps["announcement"] = {
  announcement: {
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
  addedAnnouncement: null,
  deletedAnnouncement: null,
  updatedAnnouncement: null,
};

const slice = createSlice({
  name: "announcement",
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },

    getAnnouncementSuccess(state, action) {
      state.announcement = action.payload;
    },
    // ADD Announcement
    postAnnouncementSuccess(state, action) {
      state.addedAnnouncement = action.payload;
    },
    // delete Announcement
    deleteAnnouncementSuccess(state, action) {
      state.deletedAnnouncement = action.payload;
    },
    //edit Announcement
    putAnnouncementSuccess(state, action) {
      state.updatedAnnouncement = action.payload;
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },
    setLoadingData(state, action) {
      state.loadingData = action.payload;
    },

    cleanAnnouncementState() {
      return initialState;
    },
  },
});

export default slice.reducer;

export function getAnnouncementList(queryString: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get("/api/announcements" + queryString);
      dispatch(slice.actions.getAnnouncementSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function postAnnouncement(announcement: Announcement) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.post("/api/announcements", announcement);
      dispatch(slice.actions.postAnnouncementSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}
export function deleteAnnouncement(id: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.delete(`/api/announcements/${id}`);
      dispatch(slice.actions.deleteAnnouncementSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}
export function putAnnouncement(announcement: Announcement) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.put("/api/announcements", announcement);
      dispatch(slice.actions.putAnnouncementSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function cleanAnnouncementState() {
  return async () => {
    dispatch(slice.actions.cleanAnnouncementState());
  };
}
