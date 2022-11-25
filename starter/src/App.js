import "./App.css";
import { useState , useEffect } from "react";
import { Routes , Route } from "react-router-dom"
import Search from "./components/Search";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import *as BooksAPI from "./BooksAPI";
function App() {
  // Start states
  const [books , setBooks] = useState([])
  // End states
  // Start functions
  const getBooks = async() =>{
    const res = await BooksAPI.getAll();
    setBooks(res)
  }
  useEffect(()=>{
    getBooks();
  },[])
  const updateBookShelf = (book , shelf) =>{
    BooksAPI.update(book , shelf).then(()=>{
      book.shelf = shelf;
      setBooks(books.filter((bk) => bk.id !== book.id).concat(book));
    });
  }
  // End functions
  return (
    <div className="app">
      <Routes>
        <Route path="*" element = {<NotFound />}/>
        <Route 
          exact 
          path="/" 
          element={
          <Home books = {books} updateBookShelf = {updateBookShelf}/>
          }
        />
        <Route 
          path="/search" 
          element={
          <Search updateBookShelf = {updateBookShelf} books = {books}/>
          } 
        />
      </Routes>
    </div>
  );
}

export default App;
