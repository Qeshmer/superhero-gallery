import React from "react";
import ReactDOM from "react-dom";

var Gallery = React.createClass({
    propTypes : {
        photos : React.PropTypes.array.isRequired
    },
    render : function() {
        return (
            <div className="grid-container">
                <div className="image-gallery">
                    {this.props.photos.map(function(photo, index) {
                        return (
                            <Image url= {"https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg"} key={index} />
                        );
                    })}
                </div>
            </div>
        );
    }
});

var Image = React.createClass({
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

export default Gallery;
