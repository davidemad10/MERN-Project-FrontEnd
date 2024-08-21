import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BooksList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import "./styles/BookList.module.css";
import Registration from "./components/Registration";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BooksList />} />
      <Route path="/books/:id" element={<BookDetails />} />
      <Route path="/users/register" element={<Registration />}/>
    </Routes>
  );
}

export default App;
