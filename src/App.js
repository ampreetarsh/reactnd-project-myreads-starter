import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom";
import ListBooks from "./ListBooks";
import SearchPage from './SearchPage.js'
class BooksApp extends React.Component {
  state = {
    books:[]
  }

  componentDidMount(){
    this.fetchBooks();
  }
  fetchBooks() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
    });
  }

  handleChangeShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
    this.fetchBooks();
    });
  };
  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <ListBooks handleChange={this.handleChangeShelf} booksOnShelf={this.state.books} />} />
        <Route
          path="/search"
          render={() =>
            <SearchPage onChangeShelf={this.handleChangeShelf} booksOnShelf={this.state.books} />}
        />
      </div>
    )
  }
}

export default BooksApp
