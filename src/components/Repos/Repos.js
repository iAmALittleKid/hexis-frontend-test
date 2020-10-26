import React, { Component } from "react";
import { connect } from "react-redux";
import Repo from "./Repo";
import { ListGroup, ListGroupItem } from "reactstrap";

class Repos extends Component {
  render() {
    const { repos } = this.props;
    let repoList = repos.map((ele) => {
      return (
        <ListGroupItem>
          <Repo name={ele.name} key={ele.id} />
        </ListGroupItem>
      );
    });
    return <ListGroup>{repoList}</ListGroup>;
  }
}
function mapStateToProps(reduxState) {
  const { repos } = reduxState;
  return { repos };
}

export default connect(mapStateToProps)(Repos);
