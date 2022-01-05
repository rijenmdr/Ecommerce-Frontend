import React from 'react';
import { Col, Row } from 'react-bootstrap';

const ProductExtraInfo = ({ title, value }) => {
    return (
        <Row className='mb-3'>
            <Col lg="6" sm="3" className='text-dark-light'>
                <h5 className='mb-0'>{title}:</h5>
            </Col>
            <Col lg="6" sm="3">
                <h5 className='mb-0'>{value}</h5>
            </Col>
        </Row>
    )
}

export default ProductExtraInfo
