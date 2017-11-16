import React from "react";

import "./App.css";
import Index from "./components/Index";
import {Route, Switch} from "react-router-dom";
import Create from "./components/Create";


class BooksApp extends React.Component {

    state = {
        currentlyReading: [],
        wantToRead: [],
        read: []
    };

    getBookShelf(currentBook) {
        for (let book of this.state.currentlyReading) {
            if (book.id === currentBook.id) {
                return "currentlyReading";
            }
        }
        for (let book of this.state.wantToRead) {
            if (book.id === currentBook.id) {
                return "wantToRead";
            }
        }
        for (let book of this.state.read) {
            if (book.id === currentBook.id) {
                return "read";
            }
        }
        return "none";
    }

    updateShelves(currentlyReading, wantToRead, read) {
        this.setState({
            currentlyReading: currentlyReading,
            wantToRead: wantToRead,
            read: read
        });
    }

    render() {
        return (
            <div>
                <Switch>
                    <Route exact path="/">
                        <Index currentlyReading={this.state.currentlyReading}
                               wantToRead={this.state.wantToRead}
                               read={this.state.read}
                               updateShelves={this.updateShelves.bind(this)}
                               getBookShelf={this.getBookShelf.bind(this)}
                        />
                    </Route>
                    <Route path="/create">
                        <Create
                            getBookShelf={this.getBookShelf.bind(this)}
                        />
                    </Route>
                </Switch>
            </div>
        )
    }
}

export default BooksApp;
