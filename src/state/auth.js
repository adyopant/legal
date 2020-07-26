import { assign } from "xstate";

const signIn = async (context, event) => {
  const { username, password } = event.data;
  if (username !== "admin" && password !== "admin") {
    throw new Error("Please check your details and try again");
  }
  return { username, password };
};

export const auth = {
  states: {
    started: {
      invoke: {
        id: "signIn",
        src: signIn,
        onDone: {
          target: "success",
          actions: assign({ user: (context, event) => event.data }),
        },
        onError: {
          target: "fail",
          actions: assign({ error: (context, event) => event.data }),
        },
      },
    },
    success: {},
    fail: {},
  },
};
