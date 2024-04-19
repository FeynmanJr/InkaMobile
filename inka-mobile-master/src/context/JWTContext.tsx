import React, { createContext, useEffect, useReducer } from "react";
import { LOADING, LOGIN, LOGOUT } from "../store/actions";
import accountReducer from "../store/accountReducer";
import axios from "../utils/axios";
import { InitialLoginContextProps } from "../types";
import { AuthUser, JWTContextType } from "../types/auth";
import { cleanClientState } from "../store/slices/client";
import { useDispatch } from "../store";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState: InitialLoginContextProps = {
  isLoggedIn: false,
  isInitialized: false,
  authUser: null,
  loading: false,
};

const verifyToken: (st: string) => boolean = (token) => {
  if (!token) {
    return false;
  }
  return true;
};

const jwtDecodeToUser: (data: AuthUser) => AuthUser = (data) => {
  const authUser: AuthUser = {
    ...data,
    fullName: data?.fullName,
  };

  return authUser;
};

const setSession = async (
  token?: string | null,
  refreshToken?: string | null
) => {
  if (token) {
    await AsyncStorage.setItem("token", token);
    await AsyncStorage.setItem("refreshToken", refreshToken ?? "");
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    await AsyncStorage.removeItem("token");
    await AsyncStorage.removeItem("refreshToken");
    delete axios.defaults.headers.common.Authorization;
  }
};

const JWTContext = createContext<JWTContextType | null>(null);

export const JWTProvider = ({ children }: { children: React.ReactElement }) => {
  const [state, dispatch] = useReducer(accountReducer, initialState);
  const storeDispatch = useDispatch();

  useEffect(() => {
    const init = async () => {
      try {
        const token = await AsyncStorage.getItem("token");
        const refreshToken = await AsyncStorage.getItem("refreshToken");

        if (token && verifyToken(token)) {
          await setSession(token, refreshToken);

          const responseAccount = await axios.get("/api/auth/account");
          const authUser = jwtDecodeToUser(responseAccount.data);

          dispatch({
            type: LOGIN,
            payload: {
              isLoggedIn: true,
              loading: false,
              authUser,
            },
          });
        } else {
          dispatch({
            type: LOGOUT,
          });
        }
      } catch (err) {
        console.error(err);
        dispatch({
          type: LOGOUT,
        });
      }
    };

    init();
  }, []);

  const login = async (email: string, password: string) => {
    dispatch({
      type: LOADING,
      payload: {
        loading: true,
        isLoggedIn: false,
      },
    });
    try {
      const response = await axios.post("/api/Auth/Login", {
        email,
        password,
      });

      await setSession(
        response.data.accessToken.token,
        response.data.refreshToken
      );

      const responseAccount = await axios.get("/api/auth/account");
      const authUser = jwtDecodeToUser(responseAccount.data);

      dispatch({
        type: LOGIN,
        payload: {
          isLoggedIn: true,
          loading: false,
          authUser,
        },
      });
    } catch (error: any) {
      console.error(error);

      dispatch({
        type: LOADING,
        payload: {
          loading: false,
          isLoggedIn: false,
        },
      });
    }
  };

  const register = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    const response = await axios.post("/api/account/register", {
      email,
      password,
      firstName,
      lastName,
    });
    let users = response.data;

    if (
      (await AsyncStorage.getItem("users")) !== undefined &&
      AsyncStorage.getItem("users") !== null
    ) {
      const localUsers = await AsyncStorage.getItem("users");
      users = [
        ...JSON.parse(localUsers!),
        {
          email,
          password,
          name: `${firstName} ${lastName}`,
        },
      ];
    }
    await AsyncStorage.setItem("users", JSON.stringify(users));
  };

  const logout = () => {
    setSession(null);
    dispatch({ type: LOGOUT });
    storeDispatch(cleanClientState());
  };

  const resetPassword = (email: string) => console.warn(email);

  const updateProfile = () => {};

  // if (state.isInitialized !== undefined && !state.isInitialized) {
  //   return <Loader />;
  // }

  return (
    <JWTContext.Provider
      value={{
        ...state,
        login,
        logout,
        register,
        resetPassword,
        updateProfile,
      }}
    >
      {children}
    </JWTContext.Provider>
  );
};

export default JWTContext;
