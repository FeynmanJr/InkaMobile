import axios from "../../utils/axios";
import { dispatch } from "../index";
import { createSlice } from "@reduxjs/toolkit";
import { DefaultRootStateProps } from "../../types";
import { Education } from "types/education";

const initialState: DefaultRootStateProps["education"] = {
  education: {
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
  addedEducation: null,
  deletedEducation: null,
  updatedEducation: null,
};

const slice = createSlice({
  name: "education",
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },

    getEducationSuccess(state, action) {
      state.education = action.payload;
    },
    // ADD Education
    postEducationSuccess(state, action) {
      state.addedEducation = action.payload;
    },
    // delete Education
    deleteEducationSuccess(state, action) {
      state.deletedEducation = action.payload;
    },
    //edit Education
    putEducationSuccess(state, action) {
      state.updatedEducation = action.payload;
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },
    setLoadingData(state, action) {
      state.loadingData = action.payload;
    },

    cleanEducationState() {
      return initialState;
    },
  },
});

export default slice.reducer;

export function getEducationList(queryString: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get("/api/educations" + queryString);
      dispatch(slice.actions.getEducationSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function getEducationListByUserId(
  userId: string,
  queryString: string = ""
) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get(
        "/api/educations/employee/" + userId + queryString
      );
      dispatch(slice.actions.getEducationSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function getEducationById(id: any) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get("/api/educations/" + id);
      dispatch(slice.actions.getEducationSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function postEducation(education: Education) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.post("/api/educations", education);
      dispatch(slice.actions.postEducationSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function deleteEducation(userId: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.delete(`/api/educations/${userId}`);
      dispatch(slice.actions.deleteEducationSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function putEducation(education: Education) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.put("/api/educations", education);
      dispatch(slice.actions.putEducationSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function cleanEducationState() {
  return async () => {
    dispatch(slice.actions.cleanEducationState());
  };
}
