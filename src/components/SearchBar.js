import React from "react";
import ReactDOM from "react-dom";

function SearchBar(props) {
    return (
        <div className="grid-container">
            <div className="search-wrapper centered">
                <div className="search-text column-12 medium-6">
                    <input type="text" placeholder="Search images here"/>
                </div>
                <div className="search-button">
                    <button onClick={props.searchButtonClicked}>Search</button>
                </div>
            </div>
        </div>
    );
}
SearchBar.propTypes = {
    searchButtonClicked : React.PropTypes.func.isRequired
};

export default SearchBar;
