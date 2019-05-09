import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

import request from "../utilities/api-request";
import MenusList from "../components/menu/MenusList";
import MenuForm from "../components/menu/MenuForm";

class MenusView extends Component {
  state = {
    menus: [],
  };

  async componentDidMount() {
    // TODO: request the menus from the API
    // TODO: update state with the menus
  }

  addToMenus = newMenu => {
    // TODO: implement this method
      // it should merge the new menu with the existing menus

    // which setState approach should you use?
    // are you using current state to set state?
  };

  render() {
    const { menus } = this.state;

    return (
      <Container>
        <Row>
          <Col>
            <MenuForm
              {/* TODO: complete the props for this component */}
            />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <MenusList
              {/* TODO: complete the props for this component */}
            />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MenusView;