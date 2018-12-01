import React, { Component } from "react";
import axios from "axios";

import "./Video.css";

const api = process.env.REACT_APP_API_KEY

class Video extends Component {
  state = {
    result: []
  };

  // When this component mounts, search for the movie "The Matrix"
  componentDidMount() {
    if (this.props.query !== undefined) {
      this.searchYoutube(this.props.query);
    } else {
      this.searchYoutube("web development");
    }
  }

  searchYoutube = query => {
    axios
      .get(
        " https://www.googleapis.com/youtube/v3/search?q=" +
        query +
        "&maxResults=8&part=snippet&key=" + api
      )
      .then(res => {
        let result = res.data.items.map(
          video => "https://www.youtube.com/embed/" + video.id.videoId
        );
        this.setState({ result });
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div>
        {this.state.result.map(link => {
          let frame = (
            <div key={link}>
              <iframe
                className="video"
                title="youtube"
                width="200"
                height="200"
                src={link}
                frameBorder="0"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          );
          return frame;
        })}

        {this.frame}
      </div>
    );
  }
}

export default Video;
