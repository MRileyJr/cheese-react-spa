import React from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";

import { categoryType } from "../../utilities/prop-types";

const propTypes = {
    categories: PropTypes.arrayOf(categoryType).isRequired,
    categoryID: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    handleChange: PropTypes.func.isRequired,
    firstOption: PropTypes.string,
 };

const defaultProps = {
   // makes the firstOption prop optional
   firstOption: "Select a Category",
 };

export const createCategoryOption = category => (
    <option 
      key ={category.id} 
      value= {category.id}
    >
      {category.name}
    </option>
  
);

const CheeseCategorySelector = props => {
  const { categoryID, categories, firstOption, handleChange } = props;

  return (
    <Form.Control
      as="select"
      name="categoryID"
      value={categoryID}
      onChange={handleChange}
    >
      <option value = "">{firstOption}</option>
      {categories.map(createCategoryOption)}
    </Form.Control>
  );
};

CheeseCategorySelector.propTypes = propTypes;
CheeseCategorySelector.defaultProps = defaultProps;

export default CheeseCategorySelector;