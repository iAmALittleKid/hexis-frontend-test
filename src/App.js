import React, { useState } from "react";
import "./App.css";
import Search from "./components/Search/Search";
import Repos from "./components/Repos/Repos";
import Orgs from "./components/Orgs/Orgs";
import User from "./components/User/User";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
} from "reactstrap";
import classnames from "classnames";

function App(props) {
  const [activeTab, setActiveTab] = useState("1");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  return (
    <Container>
      <Row className="row">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <h1>Search for GitHub User</h1>
        </Col>
      </Row>
      <Row className="row">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Search />
        </Col>
      </Row>
      <Row className="row">
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Nav tabs>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "1" })}
                onClick={() => {
                  toggle("1");
                }}
              >
                User
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("2");
                }}
              >
                Organizations
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classnames({ active: activeTab === "2" })}
                onClick={() => {
                  toggle("3");
                }}
              >
                Repositories
              </NavLink>
            </NavItem>
          </Nav>
          <TabContent className="content" activeTab={activeTab}>
            <TabPane tabId="1">
              <User />
            </TabPane>
            <TabPane tabId="2">
              <Orgs />
            </TabPane>
            <TabPane tabId="3">
              <Repos />
            </TabPane>
          </TabContent>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
