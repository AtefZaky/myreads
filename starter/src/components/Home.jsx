import React from "react";
import Shelf from "./Shelf";
import { Link } from "react-router-dom";
// Home component
const Home = ({ books , updateBookShelf}) => {
  return (
    <div>
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf shelfTitle = "Currently Reading" books ={books} shelf = "currentlyReading" updateBookShelf = {updateBookShelf}/>
            <Shelf shelfTitle = "Want To Read" books ={books} shelf = "wantToRead" updateBookShelf = {updateBookShelf}/>
            <Shelf shelfTitle = "Read" books ={books} shelf = "read" updateBookShelf = {updateBookShelf}/>
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">
            Add a book
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
