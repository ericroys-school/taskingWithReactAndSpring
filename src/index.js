import React from "react";
import App from "./App";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <PersistGate
      loading={<>.... loading ... </>}
      persistor={persistStore(store)}
    >
      <App />
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
