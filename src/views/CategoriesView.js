import React, { Component } from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

import request from "../utilities/api-request";
import CategoriesList from "../components/category/CategoriesList";
import CategoryForm from "../components/category/CategoryForm";

class CategoriesView extends Component {
  state = {
    categories:[],
  };

  async componentDidMount() {
    // meaning execute an HTTP GET request at api-domain/categories
    const res = await request.get("/categories");
    const categories = res.data; // the response data is the category collection list

    this.setState({categories});
  }

  addToCategories = category =>
    this.setState(state => {
      const { categories } = state;
      return {categories:[category, ...categories]};
    });

  render() {
    const { categories } = this.state;
    return (
      <Container>
        <Row>
            <CategoryForm addCategory = {this.addToCategories} />
        </Row>
        <br />
        <Row>
            <CategoriesList categories = {categories} />
        </Row>
      </Container>
    );
  }
}

export default CategoriesView;