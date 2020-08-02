import { assign } from "xstate";
import axios from "axios";

const signIn = async (context, event) => {
  const { username, password } = event.data;
  if (username !== "admin@mail.com" && password !== "admin") {
    throw new Error("Sorry your credentials are incorrect, please try again");
  }
  return { username, password };
};

const signUp = async (context, event) => {
  const { firstName, middleName, file } = event.data;
  const formData = new FormData();
  for (var i = 0; i < File.length; i++) {
    formData.append("file", file);
  }
  formData.append("firstName", firstName);
  formData.append("middleName", middleName);
  const config = {
    headers: {
      "content-type": "multipart/form-data",
    },
  };
  axios
    .post("http://localhost:8000/api/upload", formData, config, {
      // receive two parameter endpoint url ,form data
    })
    .then((res) => {
      alert("Upload successful!");
      // then print response status
      console.log(res.statusText);
    })
    .catch((error) => {
      console.log(error);
    });
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

export const signup = {
  states: {
    started: {
      invoke: {
        id: "signUp",
        src: signUp,
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
