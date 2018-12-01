import React, { Component } from "react";
import { Redirect } from "react-router";
import axios from "axios";
import { Link } from "react-router-dom";

import "./Articles.css";

const apiKey = "5a7b3ff72dcb4898b5c6ee2013105946";

class Articles extends Component {
  state = {
    redirect: false,
    articleswdev: [],
    articlesjs: [],
    articlestech: [],
    articleswdes: []
  };

  componentDidMount() {
    this.callAxios();
  }

  callAxios = () => {
    axios
      .all([
        axios.get(
          "https://newsapi.org/v2/everything?q=web%20development&totalResults=15&apiKey=" +
          apiKey
        ),
        axios.get(
          "https://newsapi.org/v2/everything?q=javascript&totalResults=15&apiKey=" +
          apiKey
        ),
        axios.get(
          "https://newsapi.org/v2/everything?q=tech&totalResults=15&apiKey=" +
          apiKey
        ),
        axios.get(
          "https://newsapi.org/v2/everything?q=web%20design&totalResults=15&apiKey=" +
          apiKey
        )
      ])
      .then(
        axios.spread((resdev, resjs, restech, resdes) => {
          this.setState({
            articleswdev: resdev.data.articles,
            articlesjs: resjs.data.articles,
            articlestech: restech.data.articles,
            articleswdes: resdes.data.articles
          });
        })
        // do something with both responses
        //   .catch(err => console.log(err));
      );
  };

  clickedToSave = (title, link) => {
    if (!this.props.login) {
      this.setState({ redirect: true });
    } else {
      let saveArticle = {
        title: title,
        link: link
      };

      axios
        .post(`/user/article/${this.props.username}`, saveArticle)
        .then(function (response) {
          console.log("success", response);
        })
        .catch(function (error) {
          console.log("error", error);
        });
    }
  };

  render() {
    if (this.state.redirect) {
      return <Redirect to="/login" />;
    }
    return (
      <div className="container">
        <div id="main">
          <h1 id="maintitle"> Articles</h1>
          <p id="description">
            <span id="firstword"> Reading</span> about the always advancing
            technologies in the programming world is important for web
            developers to educate themselves and stay aware of how to use these
            technologies to their advantage. Here are some articles to get you
            started!
          </p>
        </div>

        {this.props.login && (
          <Link to="/favourite">
            <button type="button" className="saved-articles-btn">
              Saved Articles
            </button>
          </Link>
        )}

        <div className="maincontainer">
          <div className="row">
            <div className="card articles">
              <h2 className="title"> Web Development</h2>

              {this.state.articleswdev.length ? (
                <div className="overflow">
                  {this.state.articleswdev.map(article => (
                    <div key={article.url}>
                      <a href={article.url}>
                        <strong>{article.title} </strong>
                      </a>
                      <span className="source"> by {article.source.name}</span>

                      <button
                        type="button"
                        className="btn btn-light"
                        onClick={this.clickedToSave.bind(
                          this.state,
                          article.title,
                          article.url
                        )}
                      >
                        save
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </div>

            <div className="card articles">
              <h2 className="title"> JavaScript</h2>

              {this.state.articlesjs.length ? (
                <div className="overflow">
                  {this.state.articlesjs.map(article => (
                    <div key={article.url}>
                      <a href={article.url}>
                        <strong>{article.title} </strong>
                      </a>
                      <span className="source"> by {article.source.name}</span>
                      <button
                        type="button"
                        className="btn btn-light"
                        onClick={this.clickedToSave.bind(
                          this.state,
                          article.title,
                          article.url
                        )}
                      >
                        save
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </div>
          </div>
          <div className="row">
            <div className="card articles">
              <h2 className="title"> Web Design</h2>

              {this.state.articleswdes.length ? (
                <div className="overflow">
                  {this.state.articleswdes.map(article => (
                    <div key={article.url}>
                      <a href={article.url}>
                        <strong>{article.title} </strong>
                      </a>
                      <span className="source"> by {article.source.name}</span>
                      <button
                        type="button"
                        className="btn btn-light"
                        onClick={this.clickedToSave.bind(
                          this.state,
                          article.title,
                          article.url
                        )}
                      >
                        save
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </div>

            <div className="card articles">
              <h2 className="title"> Tech</h2>

              {this.state.articlestech.length ? (
                <div className="overflow">
                  {this.state.articlestech.map(article => (
                    <div key={article.url}>
                      <a href={article.url}>
                        <strong>{article.title} </strong>
                      </a>
                      <span className="source"> by {article.source.name}</span>
                      <button
                        type="button"
                        className="btn btn-light"
                        onClick={this.clickedToSave.bind(
                          this.state,
                          article.title,
                          article.url
                        )}
                      >
                        save
                      </button>
                    </div>
                  ))}
                </div>
              ) : (
                  <h3>No Results to Display</h3>
                )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Articles;
