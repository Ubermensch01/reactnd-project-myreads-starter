import React, {Component} from "react";
import {Link, Route} from "react-router-dom";
import SearchShelf from "../components/SearchShelf";


class CreateRoute extends Component {
    render() {
        return (<Route path='/create' render={() => (<div className="search-books">
            <div className="search-books-bar">
                <Link className='close-search' to="/">Close</Link>
                <div className="search-books-input-wrapper">
                    <input type="text" placeholder="Search by title or author"
                           onChange={(event) => this.search(event.target.value, 10)}/>
                </div>
            </div>
            <SearchShelf books={this.state.searchResults} updateShelf={this.updateShelf.bind(this)}/>
        </div>)}/>);
    }
}

export default CreateRoute;
