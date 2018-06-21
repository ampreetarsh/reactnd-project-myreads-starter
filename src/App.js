import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from "react-router-dom";
import ListBooks from "./ListBooks";
import SearchPage from './SearchPage.js'
class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
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
