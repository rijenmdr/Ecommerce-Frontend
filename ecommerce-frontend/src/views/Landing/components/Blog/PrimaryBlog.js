import React from 'react'
import { Card, CardImg, Image } from 'react-bootstrap'
import Tag from '../Tag/Tag'

const PrimaryBlog = ({ blog }) => {
    return (
        <Card className="cursor-pointer position-relative primary-blog-card">
            <CardImg
                className="blog1-img"
                src={blog.cover_url} />
            <div className="position-absolute blog-tag">
                <Tag
                    tag={blog.tag}
                    primary={true}
                />
            </div>
            <div className="position-absolute blog-details">
                <h3 className="text-light blog-title">
                    {blog.title}
                </h3>
                <div className="d-flex align-items-center blog-add">
                    <Image
                        className="avatar"
                        src={blog.avatar}
                        width={40}
                        height={40}
                        roundedCircle
                    />
                    <h6 className="text-light ml-xl">{blog.author}</h6>
                    <h6 className="ml-xl text-light">{blog.published_date}</h6>
                </div>
            </div>
        </Card>
    )
}

export default PrimaryBlog
