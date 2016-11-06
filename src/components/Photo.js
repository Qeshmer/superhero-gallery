import React from "react";
import ReactDOM from "react-dom";

var Photo = React.createClass({
    propTypes: {
        url : React.PropTypes.string.isRequired
    },
    render: function(){
        return(
            <a className="image-link column-4 medium-3" href="#">
                <div className="inner-wrapper">
                    <img src={this.props.url} alt="" />
                </div>
            </a>
        );
    }
});


export default Photo;
