import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "app/store";
type User = {
  email: string;
  password: string;
  avatar: string;
};

interface IInitialState {
  isAuthenticated: boolean;
  user: null | Omit<User, "password">;
}

const initialState: IInitialState = {
  isAuthenticated: false,
  user: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<User>) => {
      const { password, ...user } = action.payload;

      state.isAuthenticated = true;
      state.user = user;
    },
    logout: (state) => {
      state = initialState;
    },
  },
});

export const { loginSuccess } = authSlice.actions;

export default authSlice.reducer;

export const selectAuth = (state: RootState) => state.auth;