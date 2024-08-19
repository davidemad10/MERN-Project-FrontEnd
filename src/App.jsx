import { useState } from "react";
import Home from "./components/Home";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import BooksList from "./components/BookList";

function App() {
  return (
    <>
      {/* <Home></Home> */}
      <BooksList/>
    </>
  );
}

export default App;
