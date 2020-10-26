import React, { Component } from "react";
import { connect } from "react-redux";
import Org from "./Org";
import { ListGroup, ListGroupItem } from "reactstrap";

class Orgs extends Component {
  render() {
    const { orgs } = this.props;
    let orgList = orgs.map((ele) => {
      return (
        <ListGroupItem>
          <Org name={ele.login} key={ele.id} />
        </ListGroupItem>
      );
    });

    return <ListGroup>{orgList}</ListGroup>;
  }
}

function mapStateToProps(reduxState) {
  const { orgs } = reduxState;
  return { orgs };
}

export default connect(mapStateToProps)(Orgs);
