import React from "react";
import ReactDOM from "react-dom";

var SearchBar = React.createClass({
    propTypes : {
        searchButtonClicked : React.PropTypes.func.isRequired
    },
    searchButtonClicked : function() {
        var searchValue = this.refs.searchTerm.value;
        if (searchValue === "")
            searchValue = null;
        this.props.searchButtonClicked(searchValue);
    },
    render : function() {
        return (
            <div className="grid-container">
                <div className="search-wrapper centered">
                    <div className="search-text column-12 medium-6">
                        <input ref="searchTerm" type="text" placeholder="Search images here"/>
                    </div>
                    <div className="search-button">
                        <button onClick={this.searchButtonClicked}>Search</button>
                    </div>
                </div>
            </div>
        );
    },
});

export default SearchBar;
