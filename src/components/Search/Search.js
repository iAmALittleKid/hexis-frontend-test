import React, { Component } from "react";
import { connect } from "react-redux";
import { setUsername, setRepos, setOrgs } from "../../ducks/reducer";
import axios from "axios";
import "./Search.css";

export class Search extends Component {
  state = {
    username: "",
  };

  handleUsernameChange(e) {
    this.setState({ username: e.target.value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const BASE_URL = "https://api.github.com";
    const { username } = this.state;

    axios
      .all([
        axios.get(`${BASE_URL}/users/${username}/repos?per_page=250`),
        axios.get(`${BASE_URL}/users/${username}/orgs`),
      ])
      .then(([user, orgs]) => {
        this.props.setRepos(user.data);
        this.props.setOrgs(orgs.data);
        this.props.setUsername(this.state.username);
      })
      .catch((err) => {
        alert("User " + err.response.data.message);
      });
  };

  render() {
    return (
      <div className="Search">
        <h2>Search Users</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            id="username_input"
            placeholder="GitHub Username"
            onChange={(e) => this.handleUsernameChange(e)}
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

export default connect(null, { setUsername, setRepos, setOrgs })(Search);
