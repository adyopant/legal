import { createContext } from "react";
import { Machine } from "xstate";
import { auth, signup } from "./auth";

export const MachineContext = createContext();

export const appMachine = Machine({
  id: "app",
  initial: "init",
  context: {
    user: undefined,
    error: undefined,
  },
  states: {
    init: {},

    auth,
    signup,
  },
  on: {
    LOGIN: {
      target: "auth.started",
    },
    SIGNUP: {
      target: "signup.started",
    },
  },
});
