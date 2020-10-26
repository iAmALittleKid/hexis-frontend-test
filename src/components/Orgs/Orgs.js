import React, { Component } from "react";
import { connect } from "react-redux";
import Org from "./Org";
import "./Orgs.css";

class Orgs extends Component {
  render() {
    const { orgs } = this.props;
    let orgList = orgs.map((ele) => {
      return <Org name={ele.login} key={ele.id} />;
    });
    return (
      <div className="Orgs">
        <div id="org_list">{orgList}</div>
      </div>
    );
  }
}

function mapStateToProps(reduxState) {
  const { orgs } = reduxState;
  return { orgs };
}

export default connect(mapStateToProps)(Orgs);
