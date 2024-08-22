import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BooksList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Registration from "./components/Registeration/Registration";
import Categories from "./components/categories";
import CategoriesDetails from "./components/categoriesDetails";
import "./styles/BookList.module.css";
import Login from "./components/Login/Login";
import axios from "axios";
// import { Toaster } from "react-hot-toast";

axios.defaults.baseURL = "http://localhost:5000";
axios.defaults.withCredentials = true;

function App() {
  return (
    <>
      {/* <Toaster position="bottom" toastOptions={{duration:2000}} /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<BooksList />} />
        <Route path="/books/:id" element={<BookDetails />} />
        <Route path="/users/register" element={<Registration />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/categories/:id" element={<CategoriesDetails />} />
      </Routes>
    </>
  );
}

export default App;
