import React from 'react';
import { Card, CardImg } from 'react-bootstrap';
import moment from 'moment';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

import Tag from '../Tag/Tag';
import { ellipse } from '../../../../helper/ellipse';

const SecondaryBlog = ({ blog }) => {
    const navigate = useNavigate();

    const navigateToBlogDetail = (id) => {
        navigate(`/blogs/${id}`)
    }

    return (
        <div onClick={() => navigateToBlogDetail(blog?._id)} className='cursor-pointer'>
            <Card>
                <CardImg style={{ height: "216px" }} src={blog?.previewImg} />
            </Card>
            <div className="d-flex flex-column mt-2">
                <div>
                    <Tag
                        value={blog?.categoryId?.name}
                        primary={true}
                    />
                </div>
                <h4 className="mt-1">
                    {ellipse(blog?.title, 40)}
                </h4>
                <div className="d-flex mt-2 justify-content-between">
                    <h6>{blog?.authorId?.name}</h6>
                    <h6 className="ml-xl">{moment(blog?.createdAt).format('ll')}</h6>
                </div>
            </div>
        </div>
    )
}

SecondaryBlog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default SecondaryBlog
