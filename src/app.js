//React
import React from "react";
import ReactDOM from "react-dom";

//React components
import Header from "./components/Header.js"; 
import Gallery from "./components/Gallery.js"; 

//Styles
import "./scss/main.scss";

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
        var flickrAPI = "https://api.flickr.com/services/rest/?method=flickr.photos.getRecent&per_page=10&api_key=" + flickrApiKey + "&format=json&nojsoncallback=1";

        xhr.onreadystatechange = function() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                var data = JSON.parse(xhr.responseText)
                console.dir(data);
            }
        };
        xhr.open("GET", flickrAPI);
        xhr.send();
    },
    render: function() {
        return (
            <div className="site-wrapper">
                <Header headerText="Superhero Gallery" />
                <section className="block">
                    <div className="grid-container">
                        
                    </div>
                </section>
            </div>
        );
    }
});


ReactDOM.render(<Application />, document.querySelector(".container"));