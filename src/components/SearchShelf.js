import React, {Component} from "react";
import Book from "./Book";

class SearchShelf extends Component {

    updateShelf() {

    }

    render() {
        return (
            <div className="search-books-results" key="search-results">
                <ol className="books-grid">
                    {this.props.books.map((book) => <Book
                        content={book}
                        key={book.id}
                        updateShelf={this.props.updateShelf.bind(this)}
                        getBookShelf={this.props.getBookShelf}
                    />)}
                </ol>
            </div>

        )
    }
}

export default SearchShelf;