import React from "react";
import {Link, Route} from "react-router-dom";

import "./App.css";
import * as BooksAPI from "./BooksAPI";
import IndexRoute from "./routes/IndexRoute";
import CreateRoute from "./routes/CreateRoute";


class BooksApp extends React.Component {
    state = {
        showSearchPage: false,
        allBooks: [],
        currentBooks: [],
        booksToRead: [],
        read: [],
        searchResults: [],
        query: ""
    };

    componentDidMount() {
        BooksAPI.getAll().then((currentBooks) => {
            this.setState({allBooks: currentBooks});
        })
    }

    search(query, maxResults) {
        if (query.length > 0) {
            BooksAPI.search(query, maxResults).then((results) => {
                results.length > 0 && this.setState({searchResults: results});
                results.error && this.setState({searchResults: []});
            })
        } else if (query.length === 0 && this.state.searchResults.length !== 0) {
            this.setState({searchResults: []});
        }
    }

    updateShelf(book, shelf) {
        book.shelf = shelf;

        BooksAPI.update(book, shelf).then(() => {
            let books = state.allBooks.filter(currentBook => currentBook.id !== book.id).concat([book]);
            this.setState(state => ({
                allBooks: books,
                currentBooks: books
                    .filter(currentBook => currentBook.shelf === 'currentlyReading'),
                booksToRead: books
                    .filter(currentBook => currentBook.shelf === 'wantToRead'),
                read: books
                    .filter(currentBook => currentBook.shelf === 'read')
                // removes the book form the search results
            }));
        });
    }

    render() {
        return (
            <div>
                <IndexRoute/>
                <CreateRoute/>
            </div>
        )
    }
}

export
default
BooksApp;
