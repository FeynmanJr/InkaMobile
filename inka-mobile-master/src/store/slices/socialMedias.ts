import axios from "../../utils/axios";
import { dispatch } from "../index";
import { createSlice } from "@reduxjs/toolkit";
import { DefaultRootStateProps } from "../../types";
import { SocialMedias } from "types/socialMedias";

const initialState: DefaultRootStateProps["socialMedias"] = {
  socialMedias: {
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
  addedSocialMedias: null,
  deletedSocialMedias: null,
  updatedSocialMedias: null,
};

const slice = createSlice({
  name: "socialMedias",
  initialState,
  reducers: {
    hasError(state, action) {
      state.error = action.payload;
    },
    getSocialMediasSuccess(state, action) {
      state.socialMedias = action.payload;
    },
    postSocialMediasSuccess(state, action) {
      state.addedSocialMedias = action.payload;
    },
    deleteSocialMediasSuccess(state, action) {
      state.deletedSocialMedias = action.payload;
    },
    putSocialMediasSuccess(state, action) {
      state.updatedSocialMedias = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setLoadingData(state, action) {
      state.loadingData = action.payload;
    },

    cleanSocialMediasState() {
      return initialState;
    },
  },
});

export default slice.reducer;

export function getSocialMediasList(queryString: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get("/api/socialMedias" + queryString);
      dispatch(slice.actions.getSocialMediasSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function getSocialMediasListByUserId(
  userId: string,
  queryString: string
) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get(
        "/api/socialMedias/employee/" + userId + queryString
      );
      dispatch(slice.actions.getSocialMediasSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function postSocialMedias(socialMedias: SocialMedias) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.post("/api/socialMedias", socialMedias);
      dispatch(slice.actions.postSocialMediasSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}
export function deleteSocialMedias(userId: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.delete(`/api/socialMedias/${userId}`);
      dispatch(slice.actions.deleteSocialMediasSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}
export function putSocialMedias(socialMedias: SocialMedias) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.put("/api/socialMedias", socialMedias);
      dispatch(slice.actions.putSocialMediasSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function cleanSocialMediasState() {
  return async () => {
    dispatch(slice.actions.cleanSocialMediasState());
  };
}
