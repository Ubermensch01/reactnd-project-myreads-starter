import React, {Component} from "react";
import {Link} from "react-router-dom";
import Shelf from "../components/Shelf";
import * as BooksAPI from "../BooksAPI";

class Index extends Component {

    state = {
        currentlyReading: [],
        wantToRead: [],
        read: []
    };

    componentDidMount() {
        console.log("updating initial state");
        BooksAPI.getAll().then((currentBooks) => {
            this.setState({
                currentlyReading: currentBooks
                    .filter(currentBook => currentBook.shelf === 'currentlyReading'),
                wantToRead: currentBooks
                    .filter(currentBook => currentBook.shelf === 'wantToRead'),
                read: currentBooks
                    .filter(currentBook => currentBook.shelf === 'read')
            });
            console.log("update complete");
        });
    }

    update(book, shelf) {
        book.shelf = shelf;
        BooksAPI.update(book, shelf).then(() => {
            this.setState({
                currentlyReading: this.state.currentlyReading
                    .filter(currentBook => currentBook.id !== book.id),
                wantToRead: this.state.wantToRead
                    .filter(currentBook => currentBook.id !== book.id),
                read: this.state.read
                    .filter(currentBook => currentBook.id !== book.id),
            });
            console.log(shelf);
            switch (shelf) {
                case 'currentlyReading':
                    this.setState({currentlyReading: this.state.currentlyReading.concat([book])});
                    break;
                case 'wantToRead':
                    this.setState({wantToRead: this.state.wantToRead.concat([book])});
                    break;
                case 'read':
                    this.setState({read: this.state.read.concat([book])});
                    break;
                default:
                    break;
            }
        })
    }

    render() {
        return (
            <div className="app" key="myReads">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <Shelf title="Currently Reading"
                       books={this.state.currentlyReading}
                       updateShelf={this.update.bind(this)}/>
                <Shelf title="Want to Read"
                       books={this.state.wantToRead}
                       updateShelf={this.update.bind(this)}/>
                <Shelf title="Read"
                       books={this.state.read}
                       updateShelf={this.update.bind(this)}/>
                <div className="open-search">
                    <Link to="/create">Add a book</Link>
                </div>
            </div>
        )
    }
}

export default Index;