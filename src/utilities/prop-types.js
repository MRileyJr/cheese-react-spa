import PropTypes from 'prop-types';

const entityBaseShape = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export const categoryType = PropTypes.shape(entityBaseShape);

export const cheeseType = PropTypes.shape({
  ...entityBaseShape,
  category: categoryType.isRequired,
  description: PropTypes.string.isRequired,
});

export const menuType = PropTypes.shape(entityBaseShape);


  