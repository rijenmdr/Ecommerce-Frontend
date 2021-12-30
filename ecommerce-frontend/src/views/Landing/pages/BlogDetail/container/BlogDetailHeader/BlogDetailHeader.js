import React from 'react';
import { Card, CardImg, Col } from 'react-bootstrap';
import moment from 'moment';
import PropTypes from 'prop-types';

const BlogDetailHeader = ({ blog }) => {
    return (
        <Card className='position-relative blog-header-card'>
            <CardImg
                className='blog-cover'
                src={blog?.coverImg}
            />
            <div className='position-absolute blog-header-info d-flex align-items-baseline w-100'>
                <div className='d-flex flex-column blog-extra-info w-20 mr-xl'>
                    <div className='d-flex justify-content-start'>
                        <Col><h5 className='text-dark-light'>Date:</h5></Col>
                        <Col className='w-50 text-light'><h5>{moment(blog?.createdAt).format('ll')}</h5></Col>
                    </div>
                    <div className='d-flex justify-content-start'>
                        <Col><h5 className='text-dark-light'>Category:</h5></Col>
                        <Col className='w-50 text-light'><h5>{blog?.categoryId?.name}</h5></Col>
                    </div>
                    <div className='d-flex justify-content-start'>
                        <Col><h5 className='text-dark-light'>Author:</h5></Col>
                        <Col className='w-50 text-light'><h5>{blog?.authorId?.name}</h5></Col>
                    </div>
                </div>
                <div className='blog-title w-50 '>
                    <h1 className='text-light'>{blog?.title}</h1>
                </div>
            </div>
        </Card>
    )
}

BlogDetailHeader.propTypes = {
    blog: PropTypes.object.isRequired
}

export default BlogDetailHeader
