import React from "react";

import "./App.css";
import IndexRoute from "./routes/IndexRoute";
import CreateRoute from "./routes/CreateRoute";


class BooksApp extends React.Component {

    render() {
        return (
            <div>
                <IndexRoute />
                <CreateRoute />
            </div>
        )
    }
}

export
default
BooksApp;
