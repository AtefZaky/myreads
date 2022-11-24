import React from "react";
import Book from "./Book";
// Shelf component
const Shelf = ({ shelfTitle , books , shelf , updateBookShelf }) => {
  // Start functions
  const bookShelf = books.filter((book) => book.shelf === shelf)
  // End functions
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {bookShelf.map((book)=>{
              return <Book key={book.id} book = {book} updateBookShelf = {updateBookShelf}/>
            })}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Shelf;
