import React from "react";
import Header from "./component/Header";

import "./component/style.css";
import BrowseBook from "./component/BrowseBook";
import { Outlet } from "react-router-dom";
import Categoriesedbook from "./component/Categoriesedbook";

function App() {
  return(
    <>
    <Header/>
    <main>
    <Outlet/>
    </main>
    </>
  )
}

export default App;