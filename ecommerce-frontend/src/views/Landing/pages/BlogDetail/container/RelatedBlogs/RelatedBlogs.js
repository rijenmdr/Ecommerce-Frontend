import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import SecondaryBlog from '../../../../components/Blog/SecondaryBlog'

const RelatedBlogs = ({ blogs }) => {
    const navigate = useNavigate();
    return (
        <>
            <div className='d-flex justify-content-between'>
                <h3>Related Blogs</h3>
                <h5 onClick={() => navigate('/blogs')} className="cursor-pointer ml-md">
                    View More <span className="text-secondary ml-sm">{'>'}</span>
                </h5>
            </div>
            <Row>
                {
                    blogs?.map(blog => (
                        <Col className='mb-4 justify-content-between' key={blog.id} xl="3" lg="4" md="6">
                            <SecondaryBlog
                                blog={blog}
                            />
                        </Col>
                    ))
                }
            </Row>
        </>
    )
}

export default RelatedBlogs
