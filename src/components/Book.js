import React, {Component} from "react";


class Book extends Component {

    state =
        {
            content: this.props.content,
            updateShelf: this.props.updateShelf,
        };

    update(event) {
        this.props.updateShelf(this.state.content, event.target.value);
    }

    render() {
        return (
            <li>
                <div className="book">
                    <div className="book-top">
                        <div className="book-cover" style={{
                            backgroundImage: `url(${this.props.content.imageLinks.smallThumbnail})`
                        }}/>
                        <div className="book-shelf-changer">
                            <select value={this.props.content.shelf ? this.props.content.shelf : "none"}
                                    onChange={this.update.bind(this)}>
                                <option value="" disabled>Move to...</option>
                                <option value="currentlyReading">
                                    Currently Reading
                                </option>
                                <option value="wantToRead">
                                    Want to Read
                                </option>
                                <option value="read">
                                    Read
                                </option>
                                <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                    <div className="book-title">{this.props.content.title}</div>
                    {this.props.content.authors && this.props.content.authors.map((author) =>
                        <div key={author} className="book-authors">{author}</div>
                    )}
                </div>
            </li>
        )
    }
}

export default Book;