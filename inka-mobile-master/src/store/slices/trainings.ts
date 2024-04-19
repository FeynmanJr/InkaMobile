import axios from "../../utils/axios";
import { dispatch } from "../index";
import { createSlice } from "@reduxjs/toolkit";
import { DefaultRootStateProps } from "../../types";
import { Trainings } from "types/trainings";

const initialState: DefaultRootStateProps["trainings"] = {
  trainings: {
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
  addedTrainings: null,
  deletedTrainings: null,
  updatedTrainings: null,
};

const slice = createSlice({
  name: "trainings",
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },
    getTrainingsSuccess(state, action) {
      state.trainings = action.payload;
    },
    // ADD Trainings
    postTrainingsSuccess(state, action) {
      state.addedTrainings = action.payload;
    },
    // delete Trainings
    deleteTrainingsSuccess(state, action) {
      state.deletedTrainings = action.payload;
    },
    //edit Trainings
    putTrainingsSuccess(state, action) {
      state.updatedTrainings = action.payload;
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },
    setLoadingData(state, action) {
      state.loadingData = action.payload;
    },

    cleanTrainingsState() {
      return initialState;
    },
  },
});

export default slice.reducer;

export function getTrainingsList(queryString: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get("/api/trainings" + queryString);
      dispatch(slice.actions.getTrainingsSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function getTrainingsListByUserId(
  userId: string,
  queryString: string = ""
) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get(
        "/api/trainings/employee/" + userId + queryString
      );
      dispatch(slice.actions.getTrainingsSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function getTrainingsById(id: any) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get("/api/trainings/" + id);
      dispatch(slice.actions.getTrainingsSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function postTrainings(trainings: Trainings) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.post("/api/trainings", trainings);
      dispatch(slice.actions.postTrainingsSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function deleteTrainings(userId: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.delete(`/api/trainings/${userId}`);
      dispatch(slice.actions.deleteTrainingsSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function putTrainings(trainings: Trainings) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.put("/api/trainings", trainings);
      dispatch(slice.actions.putTrainingsSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function cleanTrainingsState() {
  return async () => {
    dispatch(slice.actions.cleanTrainingsState());
  };
}
