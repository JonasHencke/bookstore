import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import Snackbar from "./Snackbar";

export default function Layout(props) {
  return (
    <div className="page-layout">
      <Header />
      <Snackbar
        SnackbarShow={props.SnackbarShow}
        SnackbarMessage={props.SnackbarMessage}
      />
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}
