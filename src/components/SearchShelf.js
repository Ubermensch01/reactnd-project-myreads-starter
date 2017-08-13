import React, {Component} from "react";
import Book from "./Book";

class SearchShelf extends Component {

    render() {
        return (
            <div className="search-books-results" key="search-results">
                <ol className="books-grid">
                    {this.props.books.map((book) => <Book
                        content={book}
                        key={book.id}
                        updateShelf={this.props.updateShelf.bind(this)}/>)}
                </ol>
            </div>

        )
    }
}

export default SearchShelf;