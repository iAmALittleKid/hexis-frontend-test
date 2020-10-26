import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import './User.css';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardTitle,
  CardSubtitle,
} from "reactstrap";
import searchImage from '../../Assets/Img/search.svg';

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
      <div>
        <Card>
          {this.state.pic === "" ? null : (
            <CardImg
              top
              width="40%"
              src={this.state.pic}
              alt="Card image cap"
            />
          )}
          {this.state.name === "" ? null : (
            <CardTitle>{this.state.name}</CardTitle>
          )}
          {this.props.username === "" ? (
            <Container className="user">
              <Row>
                <Col>
                  <img width="150px" alt="Search Button" src={searchImage} />
                </Col>
              </Row>
              <Row>
                <Col>
                  <h3>Enter a login, name or a company you are looking for.</h3>
                </Col>
              </Row>
            </Container>
          ) : (
            <CardSubtitle>{this.props.username}</CardSubtitle>
          )}
        </Card>
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
