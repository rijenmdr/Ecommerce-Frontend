import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import PrimaryBlog from '../../../../components/Blog/PrimaryBlog';

import { capitalize } from '../../../../../../helper/capitalize';

const BlogHeader = ({ blog, search, archive, category }) => {
    const [filterString, setFilterString] = useState('');

    useEffect(() => {
        if (archive || category) {
            setFilterString(`for ${archive && category ?
                `Archive "${capitalize(archive)}" and Category "${capitalize(category)}"`
                : archive ? `Archive "${capitalize(archive)}"` : `Category "${capitalize(category)}"`}`)
        } else {
            setFilterString('')
        }
        window.scrollTo(0, 0);
    }, [archive,category])


    // const removeFilter = (filter) => {
    //     console.log(queryParams.toString())
    //     queryParams.delete('category');
    // }

    return (
        <>
            <h1 className='mb-4'>{`Blogs ${filterString}`}</h1>
            {/* { filterList.length!==0 &&
                <div className='filter-blog-list d-flex align-items-baseline mb-4'>
                    <h5 className='mr-lg'>Filter List: </h5>
                    <div className='d-flex'>
                        {
                            filterList && filterList.map((list,index)=>(
                                <ClosableTag
                                    key={index}
                                    tag={list}
                                    removeTag={removeFilter}
                                />
                            ))
                        }
                    </div>
                </div>
            } */}
            <Row className=''>
                <Col lg="6" md="6">
                    <PrimaryBlog
                        blog={blog}
                    />
                </Col>
                <Col lg="6" md="6">
                    <PrimaryBlog
                        blog={blog}
                    />
                </Col>
            </Row>
        </>
    )
}

export default BlogHeader
