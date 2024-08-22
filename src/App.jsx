import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BooksList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Registration from "./components/Registration";
import Categories from "./components/categories";
import CategoriesDetails from "./components/categoriesDetails";
import "./styles/BookList.module.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BooksList />} />
      <Route path="/books/:id" element={<BookDetails />} />
      <Route path="/users/register" element={<Registration />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/categories/:id" element={<CategoriesDetails />} />
    </Routes>
  );
}

export default App;
