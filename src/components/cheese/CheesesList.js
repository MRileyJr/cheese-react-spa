import React from 'react';
import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { cheeseType } from '../../utilities/prop-types';

const createCheeseRow = (cheese, removeCheese) => (
    <tr key={cheese.id}>
      {
        removeCheese &&(
          <td style={{ width: '32px', border: 'none' }}>
            <Button
              size='sm'
              variant='outline-danger'
              onClick={ () => removeCheese(cheese.id)}
            >
              remove
            </Button>
          </td>
        )
      }
        <td>{cheese.name}</td>
        <td>{cheese.category && cheese.category.name}</td>
        <td>{cheese.description}</td>

    </tr>
)

const CheesesList = (props) => {
  const { cheeses, removeCheese } = props;

  return (
    <Container>
      <h3 className='text-center'>Cheeses</h3>
      <Table responsive striped bordered size='lg'>
        <thead>
          <tr>
            {/* only render blank column if [remove] button should render */}
            {removeCheese && <th style={{ border: 'none' }}></th>}
            <th>Name</th>
            <th>Category</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
            {cheeses.map(cheese => createCheeseRow(cheese, removeCheese))}
        </tbody>
      </Table>
    </Container>
  );
};

CheesesList.propTypes = {
    removeCheese: PropTypes.oneOfType([PropTypes.bool, PropTypes.func]).isRequired,
    cheeses: PropTypes.arrayOf(cheeseType).isRequired,
};

export default CheesesList;