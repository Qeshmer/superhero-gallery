import React from "react";
import ReactDOM from "react-dom";

import "./scss/main.scss";

var Searchbar = React.createClass({
    render : function() {
        return (
            <h2>I think it works.</h2>
        );
    }
});

ReactDOM.render(<Searchbar />, document.querySelector(".entry-point"));