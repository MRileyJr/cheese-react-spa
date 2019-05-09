import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import request from '../../utilities/api-request';
import { categoryType } from '../../utilities/prop-types';
import CheeseCategorySelector from "./CheeseCategorySelector";

const isFieldInvalid = (fieldName, value) =>{
  switch(fieldName) {
    case "name":
      return value.length < 3 ||  value.length > 15     // this is looking to see if this is true
    case "categoryID":
    case "description":
    default: 
      return value === ""
  }

}

const shouldDisable = fields => {
    let disabled = false;
  
    for (const [fieldName, value] of Object.entries(fields)) {
      if (isFieldInvalid(fieldName, value)) {
        disabled = true;
      }
    }
  
    return disabled;
  };

// we write the initial state object externally
// this way we can use it both to set initial state and when resetting the form
// single source of truth, DRY principles!
const initialState = {
    disabled: true,
    fields:{
        name: "",
        description: "",
        categoryID: "",
    }
}

class CheeseForm extends Component {
  state = initialState;

  // resets the form by setting state back to the initial state
  resetForm = () => this.setState(initialState);

  handleInputChange = event => {
    const { name, value } = event.target;
    
    this.setState(currentState => {
      const { fields } = currentState;
      
      const updatedFields = { ...fields };
      updatedFields[name] = value;
      
      const disabled = shouldDisable(updatedFields);
      
      return { fields: updatedFields, disabled };
    });
  }

  handleSubmit = async (event) => {
    event.preventDefault();
    const { fields } = this.state;
    const { addCheese } = this.props;

    const res = await request.post("/cheeses", fields);// use the correct request method, endpoint, and data
    const cheese = res.data;

    addCheese(cheese);

    this.resetForm();
  }

  render() {
    const { categories } = this.props;
    const { disabled, fields: { name, description, categoryID } } = this.state;

    return (
      <Form className="text-center">
        <h2>Create a Cheese</h2>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Cheese Name</Form.Label>
            <Form.Control
              name='name'
              value={name}
              minLength={3}
              maxLength={15}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Cheese Category</Form.Label>
                <CheeseCategorySelector
                    categories={categories}
                    categoryID={categoryID}
                    handleChange={this.handleInputChange}
                />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Cheese Description</Form.Label>
            <Form.Control
              name='description'
              value={description}
              onChange={this.handleInputChange}
            />
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Col>
            <Button
              type='submit'
              variant='primary'
              disabled ={disabled}
              onClick={this.handleSubmit}
            >
              Create Cheese
            </Button>
          </Col>
        </Form.Row>
      </Form>
    );
  }
}

CheeseForm.propTypes = {
    categories: PropTypes.arrayOf(categoryType).isRequired,
};

export default CheeseForm;