import React, { Component } from "react";
import "./aboutstyle.css";

class About extends Component {
  render() {
    return (
      <div className="container">
        <div id="main">
          <h1 id="maintitle"> About Devbuddy</h1>
          <p id="description">
            <span id="firstword"> Learning</span> how to code can be a daunting
            task when you first start. However, we have all come from different
            educational backgrounds and managed to become full MERN stack web
            developers as well as created this site you see now. Learn more
            about how we got started!
          </p>
          {/* <div className="saved">
            {/* <h1 className="saved-section">PRESS PLAY</h1> */}
          <div className="videoWrapper">
            <iframe
              title="Video"
              width="560"
              height="349"
              src="https://www.youtube-nocookie.com/embed/j_LWYsWUvps?rel=0"
              frameBorder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          {/* </div> */}
        </div>
        <div className="maincontainer">
          <div className="container">
            <h1 id="maintitle"> Meet the Team!</h1>

            <div className="teamdev">
              <div id="ateam" className="teammembers">
                <div className="memberimage col-2">
                  <img
                    className="team-img"
                    src="/asset/images/ab.png"
                    width="300px"
                    alt=""
                  />
                </div>
                <div className="member-info col-8">
                  <h1 className="member-section">Abdulrahman Said</h1>
                  <p className="abouttext">
                    Graduated from Ryerson with a Bachelor of Commerce. Getting
                    ready to jump start my career as a new Dev! Started with
                    taking a Full Stack Development course at UTM focusing on
                    the MERN (Mongo, React, Express, Node.js) stack. 6 months
                    later, I've created multiple projects using different
                    technologies that I am really proud of.
                  </p>
                </div>
              </div>
              <div id="zteam" className="teammembers">
                <div className="memberimage col-2">
                  <img
                    className="team-img"
                    src="/asset/images/zteam.png"
                    width="300px"
                    alt=""
                  />
                </div>
                <div className="member-info col-8">
                  <h1 className="member-section">Zeinab Farag</h1>
                  <p className="abouttext">
                    Started off in life sciences and not so quickly realized it
                    wasn't for me. Began to study coding on my own and after
                    watching countless youtube videos and doing a lot of
                    tutorials, I realized this is what I want to be doing. Have
                    now completed a 6 month bootcamp course and ready to start
                    my career in web development.
                  </p>
                </div>
              </div>
              <div id="cteam" className="teammembers">
                <div className="memberimage col-2">
                  <img
                    className="team-img"
                    src="/asset/images/al.png"
                    width="300px"
                    alt=""
                  />
                </div>
                <div className="member-info col-8">
                  <h1 className="member-section">Alejandra Juarez</h1>
                  <p className="abouttext">
                    Graduate from Computer Science. 11 years of IT experience in
                    mainframe with Cobol. Decided to update my skills with a
                    Business Analyst and Coding Bootcamp from UTM. Eager to
                    demonstrate my acquired knowledge on new challenges.{" "}
                  </p>
                </div>
              </div>
              <div id="adteam" className="teammembers">
                <div className="memberimage col-2">
                  <img
                    className="team-img"
                    src="/asset/images/r.png"
                    width="300px"
                    alt=""
                  />
                </div>
                <div className="member-info col-8">
                  <h1 className="member-section">Ruby Gill</h1>
                  <p className="abouttext">
                    Background in digital marketing and research. I look forward
                    to applying best practices learned in the UTM Full Stack
                    Bootcamp in future projects.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
