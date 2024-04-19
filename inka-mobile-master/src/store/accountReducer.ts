// action - state management
import { LOADING, LOGIN, LOGOUT, REGISTER } from "./actions";
import { InitialLoginContextProps } from "../types";

// ==============================|| ACCOUNT REDUCER ||============================== //

const initialState: InitialLoginContextProps = {
  isLoggedIn: false,
  isInitialized: false,
  authUser: null,
  loading: false,
};

interface AccountReducerActionProps {
  type: string;
  payload?: InitialLoginContextProps;
}

// eslint-disable-next-line
const accountReducer = (
  state = initialState,
  action: AccountReducerActionProps
) => {
  switch (action.type) {
    case REGISTER: {
      return {
        ...state,
      };
    }
    case LOGIN: {
      const { authUser } = action.payload!;
      return {
        ...state,
        isLoggedIn: true,
        isInitialized: true,
        authUser,
        loading: false,
      };
    }
    case LOGOUT: {
      return {
        ...state,
        isInitialized: true,
        isLoggedIn: false,
        authUser: null,
      };
    }
    case LOADING: {
      const { loading } = action.payload!;
      return {
        ...state,
        loading,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default accountReducer;
