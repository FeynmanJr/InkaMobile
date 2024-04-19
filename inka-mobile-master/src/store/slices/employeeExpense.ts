import axios from "../../utils/axios";
import { dispatch } from "../index";
import { createSlice } from "@reduxjs/toolkit";
import { DefaultRootStateProps } from "../../types";
import { Expense } from "types/expense";

const initialState: DefaultRootStateProps["employeeExpense"] = {
  employeeExpense: null,
  employeeExpenses: {
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
  addedExpense: null,
  deletedExpense: null,
  updatedExpense: null,
};

const slice = createSlice({
  name: "expense",
  initialState,
  reducers: {
    hasError(state, action) {
      state.error = action.payload;
    },

    getExpenseSuccess(state, action) {
      state.employeeExpenses = action.payload;
    },

    postExpenseSuccess(state, action) {
      state.addedExpense = action.payload;
    },

    deleteExpenseSuccess(state, action) {
      state.deletedExpense = action.payload;
    },

    putExpenseSuccess(state, action) {
      state.updatedExpense = action.payload;
    },
    getExpenseByIdSuccess(state, action) {
      state.employeeExpense = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setLoadingData(state, action) {
      state.loadingData = action.payload;
    },

    cleanExpenseState() {
      return initialState;
    },
  },
});

export default slice.reducer;

export function getExpenseList(queryString: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get("/api/expenses" + queryString);
      dispatch(slice.actions.getExpenseSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function getExpenseById(id: any) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get("/api/expenses/" + id);
      dispatch(slice.actions.getExpenseByIdSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function getExpenseByUserId(userId: string, queryString: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoadingData(true));
      const response = await axios.get(
        "/api/expenses/employee/" + userId + queryString
      );
      dispatch(slice.actions.getExpenseSuccess(response.data));
      dispatch(slice.actions.setLoadingData(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoadingData(false));
    }
  };
}

export function postExpense(expense: Expense) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.post("/api/expenses", expense);
      dispatch(slice.actions.postExpenseSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}
export function deleteExpense(userId: string) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.delete(`/api/expenses/${userId}`);
      dispatch(slice.actions.deleteExpenseSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function putExpense(expense: Expense) {
  return async () => {
    try {
      dispatch(slice.actions.setLoading(true));
      const response = await axios.put("/api/expenses", expense);
      dispatch(slice.actions.putExpenseSuccess(response.data));
      dispatch(slice.actions.setLoading(false));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
      dispatch(slice.actions.setLoading(false));
    }
  };
}

export function cleanExpenseState() {
  return async () => {
    dispatch(slice.actions.cleanExpenseState());
  };
}
