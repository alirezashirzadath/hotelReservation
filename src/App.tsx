import React from 'react';
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Main from "./pages/main/Main";
import {ThemeProvider} from "@mui/material";
import {theme} from "./constans/constans";
import {Provider} from "react-redux";
import {store} from "./services/redux/store";

function App() {
  return (
  <Provider store={store}>
      <ThemeProvider theme={theme}>
          <BrowserRouter>
              <Routes>
                  <Route element={<Main />} path={"/"}>

                  </Route>
              </Routes>
          </BrowserRouter>
      </ThemeProvider>
  </Provider>
  );
}

export default App;
