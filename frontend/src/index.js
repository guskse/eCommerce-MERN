import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";

//bootstrap
import "./assets/styles/bootstrap.custom.css";
//css
import "./assets/styles/index.css";

//react-router-dom
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

//redux
import { Provider } from "react-redux";
import store from "./store";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/products/:id" element={<ProductScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
