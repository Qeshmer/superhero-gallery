import React from "react";
import ReactDOM from "react-dom";

function Header(props) {
    return (
        <div className="header">
            <div className="grid-container centered">
                <a href="#" className="header-logo"><h1>{props.headerText}</h1></a>
            </div>
        </div>
    );
}
Header.propTypes= {
    headerText : React.PropTypes.string.isRequired
};

export default Header;