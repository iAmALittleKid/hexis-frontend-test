import React, { Component } from "react";
import { connect } from "react-redux";
import Repo from "./Repo";
import "./Repos.css";

class Repos extends Component {
  render() {
    const { repos } = this.props;
    let repoList = repos.map((ele) => {
      return <Repo name={ele.name} key={ele.id} />;
    });
    return (
      <div className="Repos">
        <h2>Repos</h2>
        <div id="repo_list">{repoList}</div>
      </div>
    );
  }
}
function mapStateToProps(reduxState) {
  const { repos } = reduxState;
  return { repos };
}

export default connect(mapStateToProps)(Repos);
