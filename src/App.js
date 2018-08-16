import React, { Component } from "react";
import BookShelve from "./BookShelve";
import Booksearch from "./booksearch";
import * as BooksAPI from "./BooksAPI";
import { Route } from "react-router-dom";

import "./App.css";

class App extends Component {
  state = {
    book: []
  };

  componentDidMount() {
    BooksAPI.getAll().then(book => {
      this.setState({ book });
    });
  }
  updateBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(book => {
      BooksAPI.getAll().then(book => {
        this.setState({ book });
        
      });
    });
  };

  render() {
    

    return (
      <div>
        <Route
          exact
          path="/"
          render={() => (
            <BookShelve book={this.state.book} onUpdate={this.updateBook}/>
          )}
        />
        <Route
          path="/search"
          render={({ history }) => (
            <Booksearch data={this.state.book} onUpdate={this.updateBook} />
          )}
        />
      </div>
    );
  }
}

export default App;
