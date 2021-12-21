import React, { useState } from 'react'
import { Col, Image, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import PrimaryBlog from '../../../../components/Blog/PrimaryBlog';
import SecondaryBlog from '../../../../components/Blog/SecondaryBlog';

const OurBlogs = () => {
    const [blog] = useState({
        id: 1,
        title: "Our chef tips for a great and tasty dinner ready in 20 minutes",
        cover_url: "https://www.golokaso.com/wp-content/uploads/2018/06/vietnamese-fish-tacos-recipe-3w.jpg",
        tag: {
            name: "Vegetable",
            link: "/"
        },
        avatar: 'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg',
        author: "Rijen Manandhar",
        published_date: "15. 6. 2020"
    })
    // const tag = {
    //     name: "Vegetable",
    //     link: "/"
    // }
    return (
        <div className="section-margin our-blogs d-flex flex-column mt-5">
            <div className="our-blog-header d-flex justify-content-between align-items-center">
                <h3 className="">Read our Blog posts</h3>
                <Link
                    to="/blogs"
                    className="cursor-pointer ml-md d-flex align-items-baseline">
                    View More
                    <h5 className="text-secondary ml-sm">{'>'}</h5>
                </Link>
            </div>
            <Row className="our-blog-list mt-4">
                <Col className="our-blog-first" lg="6" md="6">
                    <PrimaryBlog
                        blog={blog}
                    />
                </Col>
                <Col className='blog-list-second cursor-pointer' lg="3" md="6">
                    <SecondaryBlog
                        blog={blog}
                    />
                </Col>
                <Col className='last-row-blogs' lg="3" md="12">
                    <Row className='last-row-blog cursor-pointer'>
                        <div className="d-flex justify-content-between">
                            <div className="w-50 blog-desc">
                                <h5 className="desc">
                                    Salat is good start to your routines
                                </h5>
                                <div className="d-flex mt-2">
                                    <h6>Author</h6>
                                    <h6 className="ml-xl">15. 6. 2020</h6>
                                </div>
                            </div>
                            <Image
                                width={100}
                                src="https://www.golokaso.com/wp-content/uploads/2018/06/vietnamese-fish-tacos-recipe-3w.jpg"
                                rounded />
                        </div>
                    </Row>
                    <Row className='last-row-blog cursor-pointer'>
                        <div className="d-flex justify-content-between mt-5">
                            <div className="w-50 blog-desc">
                                <h5 className="desc">
                                    Salat is kinda good start to your routines
                                </h5>
                                <div className="d-flex mt-2">
                                    <h6>Author</h6>
                                    <h6 className="ml-xl">15. 6. 2020</h6>
                                </div>
                            </div>
                            <Image
                                width={100}
                                src="https://www.golokaso.com/wp-content/uploads/2018/06/vietnamese-fish-tacos-recipe-3w.jpg"
                                rounded />
                        </div>
                    </Row>
                    <Row className='last-row-blog cursor-pointer'>
                        <div className="d-flex justify-content-between mt-5">
                            <div className="w-50 blog-desc">
                                <h5 className="desc">
                                    Salat is good start to your routines
                                </h5>
                                <div className="d-flex mt-2">
                                    <h6>Author</h6>
                                    <h6 className="ml-xl">15. 6. 2020</h6>
                                </div>
                            </div>
                            <Image
                                width={100}
                                src="https://www.golokaso.com/wp-content/uploads/2018/06/vietnamese-fish-tacos-recipe-3w.jpg"
                                rounded />
                        </div>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default OurBlogs
