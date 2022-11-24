import "./App.css";
import { useState , useEffect } from "react";
import { Routes , Route } from "react-router-dom"
import Search from "./components/Search";
import Home from "./components/Home";
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
  const updateBookShelf = async (book , shelf) =>{
    await BooksAPI.update(book , shelf);
    getBooks()
  }
  // End functions
  return (
    <div className="app">
      <Routes>
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
