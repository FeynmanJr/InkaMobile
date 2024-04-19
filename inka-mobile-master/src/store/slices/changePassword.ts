import axios from "../../utils/axios";
import { dispatch } from "../index";
import { createSlice } from "@reduxjs/toolkit";
import { DefaultRootStateProps } from "../../types";
import { ChangePassword } from "types/changePassword";

const initialState: DefaultRootStateProps["changePassword"] = {
  error: null,
  loading: false,
  updatedChangePassword: null,
};

// TODO: AuthUser isimli bir slices açılacak ya da JWTContext içerisine taşınacak.
const slice = createSlice({
  name: "changePassword",
  initialState,
  reducers: {
    hasError(state, action) {
      state.error = action.payload;
    },

    putChangePasswordSuccess(state, action) {
      state.updatedChangePassword = action.payload;
    },

    setLoading(state, action) {
      state.loading = action.payload;
    },

    cleanChangePasswordState() {
      return initialState;
    },
  },
});

export default slice.reducer;

export function putChangePassword(changePassword: ChangePassword) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.put(
        "/api/users/changePassword",
        changePassword
      );
      dispatch(slice.actions.putChangePasswordSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function cleanChangePasswordState() {
  return async () => {
    dispatch(slice.actions.cleanChangePasswordState());
  };
}
