import React from "react";
import ReactDOM from "react-dom";

import Photo from "./Photo.js";

var Gallery = React.createClass({
    propTypes : {
        photos : React.PropTypes.array.isRequired
    },
    render : function() {
        return (
            <div className="grid-container">
            <div className="results-count">
                {this.props.photos.length} photos found.
            </div>
                <div className="image-gallery">
                    {this.props.photos.map(function(photo, index) {
                        return (
                            <Photo url= {"https://farm" + photo.farm + ".staticflickr.com/" + photo.server + "/" + photo.id + "_" + photo.secret + ".jpg"} key={index} />
                        );
                    })}
                </div>
            </div>
        );
    }
});
export default Gallery;
