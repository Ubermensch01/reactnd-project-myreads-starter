import React from "react";

import "./App.css";
import Index from "./components/Index";
import {Route} from "react-router-dom";
import Create from "./components/Create";


class BooksApp extends React.Component {

    render() {
        return (
            <div>
                <Route exact path="/" component={Index}/>
                <Route path="/create" component={Create}/>
            </div>
        )
    }
}

export default BooksApp;
