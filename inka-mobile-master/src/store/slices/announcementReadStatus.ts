import axios from "../../utils/axios";
import { dispatch } from "../index";
import { createSlice } from "@reduxjs/toolkit";
import { DefaultRootStateProps } from "../../types";
import { AnnouncementReadStatus } from "types/announcementReadStatus";

const initialState: DefaultRootStateProps["announcementReadStatus"] = {
  announcementReadStatus: {
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
  addedAnnouncementReadStatus: null,
  deletedAnnouncementReadStatus: null,
  updatedAnnouncementReadStatus: null,
};

const slice = createSlice({
  name: "announcementReadStatus",
  initialState,
  reducers: {
    hasError(state, action) {
      state.error = action.payload;
    },

    getAnnouncementReadStatusSuccess(state, action) {
      state.announcementReadStatus = action.payload;
    },
    postAnnouncementReadStatusSuccess(state, action) {
      state.addedAnnouncementReadStatus = action.payload;
    },
    deleteAnnouncementReadStatusSuccess(state, action) {
      state.deletedAnnouncementReadStatus = action.payload;
    },
    putAnnouncementReadStatusSuccess(state, action) {
      state.updatedAnnouncementReadStatus = action.payload;
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },
    setLoadingData(state, action) {
      state.loadingData = action.payload;
    },

    cleanAnnouncementReadStatusState() {
      return initialState;
    },
  },
});

export default slice.reducer;

export function getAnnouncementReadStatusList(queryString: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get(
        "/api/announcementReadStatus" + queryString
      );
      dispatch(slice.actions.getAnnouncementReadStatusSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function postAnnouncementReadStatus(
  announcementReadStatus: AnnouncementReadStatus
) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.post(
        "/api/announcementReadStatus",
        announcementReadStatus
      );
      dispatch(slice.actions.postAnnouncementReadStatusSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}
export function deleteAnnouncementReadStatus(id: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.delete(`/api/announcementReadStatus/${id}`);
      dispatch(
        slice.actions.deleteAnnouncementReadStatusSuccess(response.data)
      );
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}
export function putAnnouncementReadStatus(
  announcementReadStatus: AnnouncementReadStatus
) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.put(
        "/api/announcementReadStatus",
        announcementReadStatus
      );
      dispatch(slice.actions.putAnnouncementReadStatusSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function cleanAnnouncementReadStatusState() {
  return async () => {
    dispatch(slice.actions.cleanAnnouncementReadStatusState());
  };
}
