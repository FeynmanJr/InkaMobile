import axios from "../../utils/axios";
import { dispatch } from "../index";
import { createSlice } from "@reduxjs/toolkit";
import { DefaultRootStateProps } from "../../types";
import { WorkExperience } from "types/workExperience";

const initialState: DefaultRootStateProps["workExperience"] = {
  workExperience: {
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
  addedWorkExperience: null,
  deletedWorkExperience: null,
  updatedWorkExperience: null,
};

const slice = createSlice({
  name: "workExperience",
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },

    getWorkExperienceSuccess(state, action) {
      state.workExperience = action.payload;
    },
    // ADD WorkExperience
    postWorkExperienceSuccess(state, action) {
      state.addedWorkExperience = action.payload;
    },
    // delete WorkExperience
    deleteWorkExperienceSuccess(state, action) {
      state.deletedWorkExperience = action.payload;
    },
    //edit WorkExperience
    putWorkExperienceSuccess(state, action) {
      state.updatedWorkExperience = action.payload;
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },
    setLoadingData(state, action) {
      state.loadingData = action.payload;
    },

    cleanWorkExperienceState() {
      return initialState;
    },
  },
});

export default slice.reducer;

export function getWorkExperienceList(queryString: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get("/api/workExperiences" + queryString);
      dispatch(slice.actions.getWorkExperienceSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function getWorkExperienceListByUserId(
  userId: string,
  queryString: string = ""
) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get(
        "/api/workExperiences/employee/" + userId + queryString
      );
      dispatch(slice.actions.getWorkExperienceSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function getWorkExperienceById(id: any) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get("/api/workExperiences" + id);
      dispatch(slice.actions.getWorkExperienceSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function postWorkExperience(workExperience: WorkExperience) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.post("/api/workExperiences", workExperience);
      dispatch(slice.actions.postWorkExperienceSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function deleteWorkExperience(userId: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.delete(`/api/workExperiences/${userId}`);
      dispatch(slice.actions.deleteWorkExperienceSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function putWorkExperience(workExperience: WorkExperience) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.put("/api/workExperiences", workExperience);
      dispatch(slice.actions.putWorkExperienceSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function cleanWorkExperienceState() {
  return async () => {
    dispatch(slice.actions.cleanWorkExperienceState());
  };
}
