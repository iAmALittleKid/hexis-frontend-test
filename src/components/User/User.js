import React, { Component } from "react";
import { connect } from "react-redux";
import "./User.css";
import axios from "axios";

export class User extends Component {
  state = {
    name: "",
    pic: "",
    username: "",
  };

  getUserInfo(username) {
    axios.get(`https://api.github.com/users/${username}`).then((res) => {
      this.setState({
        name: res.data.name,
        pic: res.data.avatar_url,
        username: this.state.username,
      });
    });
  }

  render() {
    return (
      <div className="User">
        <h2>User</h2>
        {this.state.pic === "" ? null : (
          <img src={this.state.pic} alt="Avatar_Pic"></img>
        )}
        {this.state.name === "" ? null : <h3>{this.state.name}</h3>}
        {this.props.username === "" ? (
          <div>
            <h3>No User Available</h3>
          </div>
        ) : (
          <h4>{this.props.username}</h4>
        )}
      </div>
    );
  }

  componentDidUpdate() {
    if (this.props.username !== this.state.username) {
      this.getUserInfo(this.props.username);
    }
  }
}
function mapStateToProps(reduxState) {
  const { username } = reduxState;
  return { username };
}

export default connect(mapStateToProps)(User);
