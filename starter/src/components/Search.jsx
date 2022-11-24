import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import {DebounceInput} from 'react-debounce-input';
import *as BooksAPI from "../BooksAPI";
import Book from "./Book";
// Search component
const Search = ({ updateBookShelf , books }) => {
  // Start states
  const [query , setQuery] = useState("")
  const [searchBooks , setSearchBooks] = useState([])
  // End states
  // start functions
  const handelSearch = async(e) =>{
    const query = e.target.value
    setQuery(query)
    if(query.trim()){
      const res = await BooksAPI.search(query);
      if (res.error){
        setSearchBooks([])
      }else{
        setSearchBooks(res.map((book)=>{
          const findBook = books.find(hBook => hBook.id === book.id)
          findBook ? book.shelf = findBook.shelf : book.shelf = "none"
          return book
        }));
      }
    }else{setSearchBooks([])}
  // End funcitons
  }
  return (
    <div>
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <DebounceInput
              type="text"
              placeholder="Search by title, author, or ISBN" 
              debounceTimeout={300}
              onChange={handelSearch}
              value = {query}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {searchBooks.map((book)=>{
              return <Book key={book.id} book = {book} updateBookShelf = {updateBookShelf}/>
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Search;
