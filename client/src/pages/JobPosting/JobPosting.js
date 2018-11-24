import React, { Component } from 'react';
import Search from '../../components/JobPosts/Search';
import JobList from '../../components/JobPosts/JobList';
import JobDesc from '../../components/JobPosts/JobDes';



class JobPosting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Jobs: [],
      selectedJob: null,

    };
  }

  //search funtion logic 

  jobSearch(keyword, location) {
    {/* use of fetch method to utilize github API, the parameters set are Keyword (the job the user will be searching) and Location*/ }
    fetch(`https://jobs.github.com/positions.json?description=${keyword}&location=${location}`)
      .then(res => res.json())
      .then(json => {
        this.setState({
          Jobs: json,
          selectedJob: json[1]
        })
      });
    console.log(this.state.Jobs);
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className={this.state.FullSearch}>
                <Search onJobSubmit={(keyword, location) => this.jobSearch(keyword, location)} />
              </div>
            </div>
          </div>

          <div className="row data">
            <div className="col-sm-5">
              <JobList
                onJobSelect={selectedJob => this.setState({ selectedJob })}
                jobs={this.state.Jobs}
              />
            </div>
            <div className="col-sm-6" >
              <div className="sticky-top">
                <JobDesc job={this.state.selectedJob} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default JobPosting;