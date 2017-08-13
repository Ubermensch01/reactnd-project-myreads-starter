import React, {Component} from "react";
import {Route} from "react-router-dom";
import Shelf from "../components/Shelf";

class IndexRoute extends Component {
    render() {
        return (<Route exact path='/' render={({history}) => (
            <div className="app" key="myReads">
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <Shelf title="Currently Reading"
                       books={this.state.currentBooks}
                       updateShelf={this.updateShelf.bind(this)}/>
                <Shelf title="Want to Read"
                       books={this.state.booksToRead}
                       updateShelf={this.updateShelf.bind(this)}/>
                <Shelf title="Read"
                       books={this.state.read}
                       updateShelf={this.updateShelf.bind(this)}/>
                <div className="open-search">
                    <Link to="/create">Add a book</Link>
                </div>
            </div>
        )}/>)
    }
}

export default IndexRoute;