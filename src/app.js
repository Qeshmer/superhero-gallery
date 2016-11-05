//React
import React from "react";
import ReactDOM from "react-dom";

//React components
import Header from "./components/Header.js"; 

//Styles
import "./scss/main.scss";

var Searchbar = React.createClass({
    render : function() {
        return (
            <h2>I think it works.</h2>
        );
    }
});

ReactDOM.render(<Header headerText="Superhero Gallery" />, document.querySelector(".site-wrapper"));