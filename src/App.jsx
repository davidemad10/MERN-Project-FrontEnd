import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
import BooksList from "./components/BookList";
// import BookDetails from "./components/BookDetails";
// import "./styles/BookList.module.css";
import Home from "./components/Home";
import AuthorList from "./components/AuthorList";
import Login from "./components/Login";
import Signup from "./components/signup/Signup";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/books" element={<BooksList />} />
    //     <Route path="/books/:id" element={<BookDetails />} />
    //   </Routes>
    // </Router>

    // <BooksList></BooksList>

    // <AuthorList/>

  //   <Router>
  //   <Routes>
  //     <Route path="/login" element={<Login />} />
  //     <Route path="/dashboard" element={<h2>Dashboard</h2>} />
  //     <Route path="/signup" element={<h2>Sign Up</h2>} />
  //   </Routes>
    // </Router>
    

    <Routes>
    {user && <Route path="/" exact element={<Main />} />}
    <Route path="/signup" exact element={<Signup />} />
    {/* <Route path="/login" exact element={<Login />} /> */}
    <Route path="/" element={<Navigate replace to="/login" />} />
  </Routes>

  );
}

export default App;
