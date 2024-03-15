import logo from "./logo.svg";
import "./App.css";
import Sidebar from "./Comoponent/Sidebar/Sidebar";
import Dashboard from "./Comoponent/Dashboard/Dashboard";
import Navbar from "./Comoponent/Navbar/Navbar";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import React, { Fragment, Suspense, useEffect, useState } from "react";
import Management from "./Pages/Movie/index";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Provider } from "react-redux";
import store from "./redux/store";
import Project from "./Pages/ProjectPro";

function App() {
  const location = useLocation();

  // Check if current route is '/project'
  const isProjectPage = location.pathname === '/project';

  return (
    <Fragment>
      <ToastContainer />
      <Provider store={store}>
        {!isProjectPage && <Sidebar />}
        {!isProjectPage && <Navbar />}
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/movie" element={<Management />} />
          <Route path="/project" element={<Project />} />
        </Routes>
      </Provider>
    </Fragment>
  );
}

export default App;
