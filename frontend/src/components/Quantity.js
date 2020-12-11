import React from 'react';

import { ListGroup, Row, Col, Form } from 'react-bootstrap';

const iconStyle = {
  cursor: 'pointer',
};

const Quantity = ({ qty, onValueChange, max }) => {
  const onClickInc = () => {
    const value = qty + 1;
    if (value >= max) {
      onValueChange(max);
    } else {
      onValueChange(value);
    }
  };

  const onClickDec = () => {
    if (qty === 0) {
      onValueChange(0);
    } else {
      onValueChange(qty - 1);
    }
  };

  return (
    <ListGroup.Item>
      <Row>
        <Col xs={6} sm={6} md={4}>
          Qty
        </Col>
        <Col xs={6} sm={6} md={8} className='d-flex'>
          <i
            className='fas fa-minus-square fa-2x'
            style={iconStyle}
            onClick={(e) => onClickDec()}
          ></i>
          <Form.Control
            type='number'
            pattern='[0-9]*'
            size='sm'
            value={qty}
            style={{ margin: '0 5px' }}
            readOnly={true}
          >
            {/* {[...Array(product.countInStock).keys()].map((q) => {
                return (
                  <option key={q + 1} value={q + 1}>
                    {q + 1}
                  </option>
                );
              })} */}
          </Form.Control>
          <i
            className='fas fa-plus-square fa-2x'
            style={iconStyle}
            onClick={(e) => onClickInc()}
          ></i>
        </Col>
      </Row>
    </ListGroup.Item>
  );
};

export default Quantity;
