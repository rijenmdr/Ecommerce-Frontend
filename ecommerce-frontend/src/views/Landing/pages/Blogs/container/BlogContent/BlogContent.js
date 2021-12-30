import React, { useEffect, useState } from 'react';
import { Button, Col, Pagination, Row } from 'react-bootstrap';
import SecondaryBlog from '../../../../components/Blog/SecondaryBlog';
import TextInput from '../../../../components/TextInput/TextInput';
import FilterList from '../../components/FilterList/FilterList';

import NoData from '../../../../components/NoData';
import Loading from '../../../../components/Loading';

const archive = {
    title: "Archive",
    list: [
        {
            name: "September 2021",
            link: "archive=09-2021"
        },
        {
            name: "October 2021",
            link: "archive=10-2021"
        },
        {
            name: "November 2021",
            link: "archive=11-2021"
        },
        {
            name: "December 2021",
            link: "archive=12-2021"
        },
        {
            name: "January 2022",
            link: "archive=01-2022"
        }
    ]
}

const category = {
    title: "Category",
    list: [
        {
            name: "Food",
            link: "category=61c5e2df649e325820ffaf19"
        },
        {
            name: "Technology",
            link: "category=61c5e31c649e325820ffaf1f"
        },
        {
            name: "Vegetable",
            link: "category=61c5e325649e325820ffaf22"
        },
        {
            name: "Clothes",
            link: "category=61c5e340649e325820ffaf25"
        },
        {
            name: "Furniture",
            link: "category=61c5e347649e325820ffaf28"
        }
    ]
}

const BlogContent = ({
    blogs,
    setBlogs,
    blogCount,
    setBlogCount,
    currentPage,
    setCurrentPage,
    status
}) => {
    const [email, setEmail] = useState('');

    console.log(blogs.length)

    const changeCurrentPage = (index) => {
        if (currentPage === index + 1) {
            return;
        }
        setCurrentPage(index + 1)
    }

    const prevPage = () => {
        setCurrentPage(prevVal => prevVal - 1);
    }

    const nextPage = () => {
        setCurrentPage(prevVal => prevVal + 1);
    }

    useEffect(() => {
        window.scrollTo(0, 830)
    }, [currentPage])

    return (
        <Row>
            <Col className='d-flex flex-column mr-xl mb-5' xl="3" lg="6">
                <div>
                    <FilterList
                        title={archive.title}
                        list={archive.list}
                    />
                </div>
                <div className='mt-4'>
                    <FilterList
                        title={category.title}
                        list={category.list}
                    />
                </div>
                <div className='mt-4'>
                    <h4 className='mb-4'>Join out list</h4>
                    <h5 className='text-dark-light w-80'>
                        Signup to be the first to hear about exclusive deals, special offers, recepies from our masters and others.
                    </h5>
                    <div className='w-80'>
                        <TextInput
                            label=""
                            placeholder={"Your Email Address"}
                            value={email}
                            setValue={setEmail}
                            type="text"
                        />
                        <div className='d-flex justify-content-end'>
                            <Button size="sm">Subscribe</Button>
                        </div>
                    </div>
                </div>
            </Col>

            {
                status === "loading" &&
                <Col xl="8" lg="12">
                    <Row>
                        <Loading/>
                    </Row>
                </Col>
            }

            {
                status === "error" &&
                <Col xl="8" lg="12">
                    <Row>
                        <NoData/>
                    </Row>
                </Col>
            }

            {status === "success" &&
                <>
                    <Col xl="8" lg="12">
                        <Row>
                            {
                                blogs.length !== 0 ? blogs.map(blog => (
                                    <Col className='mb-4 justify-content-between' key={blog._id} xl="4" lg="4" md="6">
                                        <SecondaryBlog
                                            blog={blog}
                                        />
                                    </Col>
                                )) :
                                <NoData/>
                            }
                        </Row>
                    </Col>
                    <div className='d-flex justify-content-end product-pagination mt-5'>
                        <Pagination className='d-flex flex-wrap'>
                            {
                                currentPage !== 1 &&
                                <Pagination.Prev
                                    onClick={prevPage}
                                />
                            }
                            {Array.from(Array(Math.ceil((blogCount) / 9))).map((c, index) => (
                                <Pagination.Item
                                    onClick={() => changeCurrentPage(index)}
                                    active={currentPage === index + 1}
                                >
                                    {index + 1}
                                </Pagination.Item>
                            ))}
                            {
                                currentPage !== Math.ceil((blogCount) / 9) &&
                                <Pagination.Next
                                    onClick={nextPage}
                                />
                            }
                        </Pagination>
                    </div>
                </>
            }
        </Row>
    )
}

export default BlogContent
