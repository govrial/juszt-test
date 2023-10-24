import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Provider} from "react-redux";
import {store} from "./redux";
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import LoadingScreen from "./components/shared/loading-screen/LoadingScreen.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<LoadingScreen />}/>
    </Provider>
  </React.StrictMode>,
)
