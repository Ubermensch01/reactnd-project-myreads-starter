import React, {Component} from "react";
import {Link} from "react-router-dom";
import SearchShelf from "../components/SearchShelf";
import * as BooksAPI from "../BooksAPI";


class Create extends Component {
    state = {
        searchResults: []
    };

    search(query, maxResults) {
        if (query.length > 0) {
            BooksAPI.search(query, maxResults).then((results) => {
                results.length > 0 && this.setState({
                    searchResults: results
                });
                results.error && this.setState({searchResults: []});
            })
        } else if (query.length === 0 && this.state.searchResults.length !== 0) {
            this.setState({searchResults: []});
        }
    }

    update(book, shelf) {
        book.shelf = shelf;
        BooksAPI.update(book, shelf).then(() => {
        });
        this.setState({
            searchResults: this.state.searchResults.filter(currentBook =>
                currentBook.id !== book.id
            )
        });
    }

    render() {
        return (<div className="search-books">
            <div className="search-books-bar">
                <Link className='close-search' to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author"
                           onChange={(event) => this.search(event.target.value, 10)}/>
                </div>
            </div>
            <SearchShelf books={this.state.searchResults}
                         updateShelf={this.update.bind(this)}
                         getBookShelf={this.props.getBookShelf}/>
        </div>);
    }
}

export default Create;
