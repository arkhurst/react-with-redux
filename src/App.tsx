import React from "react";
import AppNavigator from "./navigation/router-config";
import ReduxProvider from "./services/context";
import { Toaster } from "react-hot-toast";

const toasterOptions = {
  className: "",
  style: {
    margin: "40px",
    background: "#1A202C",
    color: "#fff",
    zIndex: 1,
  },
  duration: 3000,
  success: {
    duration: 3000,
    theme: {
      primary: "green",
      secondary: "black",
    },
  },
  error: {
    style: {
      background: "#f44336",
    },
    duration: 3000,
  },
};

function App() {
  return (
    <React.Fragment>
      <Toaster
        position={"top-center"}
        reverseOrder={false}
        toastOptions={toasterOptions}
      />
      <ReduxProvider>
        <AppNavigator />
      </ReduxProvider>
    </React.Fragment>
  );
}

export default App;
