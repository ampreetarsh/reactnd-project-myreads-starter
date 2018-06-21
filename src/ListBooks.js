import React from "react";
import { Link } from "react-router-dom";
import BookShelf from "./BookShelf";
import "./App.css";

class ListBooks extends React.Component {
  
  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <BookShelf
            key="currentlyReading"
            books={this.props.booksOnShelf.filter(book => book.shelf === "currentlyReading")}
            onChangeShelf={this.props.handleChange}
            shelftitle="Currently Reading"
          />
          <BookShelf
            key="wantToRead"
            books={this.props.booksOnShelf.filter(book => book.shelf === "wantToRead")}
            onChangeShelf={this.props.handleChange}
            shelftitle="Want to Read"
          />
          <BookShelf
            key="read"
            books={this.props.booksOnShelf.filter(book => book.shelf === "read")}
            onChangeShelf={this.props.handleChange}
            shelftitle="Read"
          />
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    );
  }
}
export default ListBooks;