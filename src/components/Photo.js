import React from "react";
import ReactDOM from "react-dom";

var Photo = React.createClass({
    propTypes: {
        url : React.PropTypes.string.isRequired
    },
    enlarge : function(event) {
        event.preventDefault();
        console.log(event.target);
    },
    render: function(){
        return(
            <a onClick={this.enlarge} className="image-link column-4 medium-3" href="#">
                <div className="inner-wrapper">
                    <img src={this.props.url} alt="" />
                </div>
            </a>
        );
    }
});

export default Photo;
