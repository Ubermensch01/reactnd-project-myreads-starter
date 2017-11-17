import React, {Component} from "react";
import Book from "./Book";

class Shelf extends Component {

    render() {
        return (
            <div className="list-books-content">
                <div className="bookshelf" key={this.props.title}>
                    <h2 className="bookshelf-title">{this.props.title}</h2>
                    <ol className="books-grid">
                        {this.props.books.map((book) => <Book
                            content={book}
                            key={book.id}
                            updateShelf={this.props.updateShelf}
                            getBookShelf={this.props.getBookShelf}
                        />)}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Shelf;