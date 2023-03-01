import { PayloadAction } from "@reduxjs/toolkit";
import { Client } from "../../../types";
import { clientReducer } from "./clientSlice";

describe("Given the client reducer", () => {
  describe("When it recieves the actual client state,", () => {
    describe("And lluis loged in as payload", () => {
      test("Then it should return lluis loged in", () => {
        const currentClientState: Client = {
          userName: "",
          isLogged: false,
        };

        const payload: PayloadAction<Client> = {
          payload: { isLogged: true, userName: "Lluis" },
          type: "client/loginClient",
        };

        const expectedResult = payload.payload;

        const result = clientReducer(currentClientState, payload);

        expect(result).toStrictEqual(expectedResult);
      });
    });
    describe("And any user loged out as payload", () => {
      test("Then it should return an empty name logged out", () => {
        const currentClientState: Client = {
          isLogged: true,
          userName: "Lluis",
        };

        const payload: PayloadAction<Client> = {
          payload: {
            userName: "",
            isLogged: false,
          },
          type: "client/logOutClient",
        };

        const expectedResult = payload.payload;

        const result = clientReducer(currentClientState, payload);

        expect(result).toStrictEqual(expectedResult);
      });
    });
  });
});
