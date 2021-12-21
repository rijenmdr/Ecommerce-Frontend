import React from 'react'
import { Card, CardImg } from 'react-bootstrap'
import Tag from '../Tag/Tag'

const SecondaryBlog = ({ blog }) => {
    return (
        <div className='cursor-pointer'>
            <Card>
                <CardImg src={blog.cover_url} />
            </Card>
            <div className="d-flex flex-column mt-2">
                <div>
                    <Tag
                        tag={blog.tag}
                        primary={true}
                    />
                </div>
                <h4 className="mt-1">
                    {blog.title}
                </h4>
                <div className="d-flex mt-2">
                    <h6>{blog.author}</h6>
                    <h6 className="ml-xl">{blog.published_date}</h6>
                </div>
            </div>
        </div>
    )
}

export default SecondaryBlog
