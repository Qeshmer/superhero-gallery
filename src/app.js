//React
import React from "react";
import ReactDOM from "react-dom";

//React components
import Header from "./components/Header.js";

//Styles
import "./scss/main.scss";

function Image(props) {

    return (
        <a className="image-link column-4" href="#">
            <div className="inner-wrapper">
                <img src={props.url} alt="" />
            </div>
        </a>
    );
}
Image.propTypes = {
    url : React.PropTypes.string.isRequired
};


var Gallery = React.createClass({
    propTypes : {
        photos : React.PropTypes.array.isRequired
    },
    render : function() {
        return (
            <div className="image-gallery">
                <div className="grid-container">
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

var Application = React.createClass({

    getInitialState : function() {
        return {
          loading : true,
          photos : []
        };
    },
    componentDidMount: function() {
        console.log("Application initialized");

        var xhr = new XMLHttpRequest();
        var flickrApiKey = "1020fa4e42882ee2e1a144a48e55499d";
        var flickrAPI = "https://api.flickr.com/services/rest/?method=flickr.photos.search&safe_search=1&tags=batman&per_page=10&api_key=" + flickrApiKey + "&format=json&nojsoncallback=1";

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var data = JSON.parse(xhr.responseText)
                var photoResult = data.photos.photo;

                this.setState({ photos: photoResult });
            }
        }.bind(this);
        xhr.open("GET", flickrAPI);
        xhr.send();
    },
    render: function() {
        return (
            <div className="site-wrapper">
                <Header headerText="Superhero Gallery" />
                <section className="block">
                    <Gallery photos={this.state.photos}/>
                </section>
            </div>
        );
    }
});

ReactDOM.render(<Application />, document.querySelector(".container"));
