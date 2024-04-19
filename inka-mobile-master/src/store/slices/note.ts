import axios from "../../utils/axios";
import { dispatch } from "../index";
import { createSlice } from "@reduxjs/toolkit";
import { DefaultRootStateProps } from "../../types";
import { Note } from "types/note";

const initialState: DefaultRootStateProps["note"] = {
  note: {
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
  addedNote: null,
  deletedNote: null,
  updatedNote: null,
};

const slice = createSlice({
  name: "note",
  initialState,
  reducers: {
    // HAS ERROR
    hasError(state, action) {
      state.error = action.payload;
    },

    getNoteSuccess(state, action) {
      state.note = action.payload;
    },
    // ADD Note
    postNoteSuccess(state, action) {
      state.addedNote = action.payload;
    },
    // delete Note
    deleteNoteSuccess(state, action) {
      state.deletedNote = action.payload;
    },
    //edit Note
    putNoteSuccess(state, action) {
      state.updatedNote = action.payload;
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },
    setLoadingData(state, action) {
      state.loadingData = action.payload;
    },

    cleanNoteState() {
      return initialState;
    },
  },
});

export default slice.reducer;

export function getNoteList(queryString: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get("/api/employeeNotes" + queryString);
      dispatch(slice.actions.getNoteSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function getNoteListByUserId(userId: string, queryString: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get(
        "/api/employeeNotes/employee/" + userId + queryString
      );
      dispatch(slice.actions.getNoteSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function getNoteById(id: any, queryString: string) {
  return async () => {
    try {
      const response = await axios.get(
        "/api/employeeNotes/" + id + queryString
      );
      dispatch(slice.actions.getNoteSuccess(response.data));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export function postNote(note: Note) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.post("/api/employeeNotes", note);
      dispatch(slice.actions.postNoteSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}
export function deleteNote(userId: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.delete(`/api/employeeNotes/${userId}`);
      dispatch(slice.actions.deleteNoteSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}
export function putNote(note: Note) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.put("/api/employeeNotes", note);
      dispatch(slice.actions.putNoteSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function cleanNoteState() {
  return async () => {
    dispatch(slice.actions.cleanNoteState());
  };
}
