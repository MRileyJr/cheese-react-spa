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
    // meaning execute an HTTP GET request at api-domain/categories
    const menuRes = await request.get("/menus");
    const menus = menuRes.data; // the response data is the category collection list

    this.setState({menus});
  }

  addToMenus = newMenu => 
  this.setState(state => {
    const { menues } = state;
    return {menues: [newMenu, ...menues]};
  });

  render() {
    const { menus } = this.state;

    return (
      <Container>
        <Row>
          <Col>
            <MenuForm addToMenus = {this.addToMenus} />
          </Col>
        </Row>
        <hr />
        <Row>
          <Col>
            <MenusList menues = {menus} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MenusView;