import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialStateClient } from "../../../data/client";
import { Client } from "../../../types";

const clientSlice = createSlice({
  name: "client",
  initialState: initialStateClient,
  reducers: {
    loginClient: (
      currentClientState: Client,
      action: PayloadAction<Client>
    ) => ({
      ...currentClientState,
      userName: action.payload.userName,
      isLogged: true,
    }),
    logOutClient: (currentClientState: Client) => ({
      ...currentClientState,
      userName: "",
      isLogged: false,
    }),
  },
});

export const {
  loginClient: loginClientActionCreator,
  logOutClient: logOutClientActionCreator,
} = clientSlice.actions;

export const clientReducer = clientSlice.reducer;
