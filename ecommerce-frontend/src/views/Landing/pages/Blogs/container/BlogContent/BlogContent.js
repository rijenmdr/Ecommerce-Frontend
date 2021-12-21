import React, { useState } from 'react'
import { Button, Col, Pagination, Row } from 'react-bootstrap'
import SecondaryBlog from '../../../../components/Blog/SecondaryBlog'
import TextInput from '../../../../components/TextInput/TextInput'
import FilterList from '../../components/FilterList/FilterList'

const archive = {
    title: "Archive",
    list: [
        {
            name: "March 2021",
            link: "archive=march2021"
        },
        {
            name: "April 2021",
            link: "archive=april2021"
        },
        {
            name: "May 2021",
            link: "archive=may2021"
        },
        {
            name: "June 2021",
            link: "archive=june2021"
        },
        {
            name: "July 2021",
            link: "archive=july2021"
        }
    ]
}

const category = {
    title: "Category",
    list: [
        {
            name: "Food",
            link: "category=food"
        },
        {
            name: "Chef specialities",
            link: "category=chef-specialities"
        },
        {
            name: "Vegetable",
            link: "category=vegetable"
        },
        {
            name: "Meat",
            link: "category=meat"
        },
        {
            name: "Music",
            link: "category=music"
        }
    ]
}
const BlogContent = () => {
    const [email, setEmail] = useState('');
    const [currentPage] = useState(1);
    const [blogs] = useState([
        {
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
        },
        {
            id: 2,
            title: "Our chef tips for a great and tasty dinner ready in 20 minutes",
            cover_url: "https://www.golokaso.com/wp-content/uploads/2018/06/vietnamese-fish-tacos-recipe-3w.jpg",
            tag: {
                name: "Vegetable",
                link: "/"
            },
            avatar: 'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg',
            author: "Rijen Manandhar",
            published_date: "15. 6. 2020"
        },
        {
            id: 3,
            title: "Our chef tips for a great and tasty dinner ready in 20 minutes",
            cover_url: "https://www.golokaso.com/wp-content/uploads/2018/06/vietnamese-fish-tacos-recipe-3w.jpg",
            tag: {
                name: "Vegetable",
                link: "/"
            },
            avatar: 'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg',
            author: "Rijen Manandhar",
            published_date: "15. 6. 2020"
        },
        {
            id: 4,
            title: "Our chef tips for a great and tasty dinner ready in 20 minutes",
            cover_url: "https://www.golokaso.com/wp-content/uploads/2018/06/vietnamese-fish-tacos-recipe-3w.jpg",
            tag: {
                name: "Vegetable",
                link: "/"
            },
            avatar: 'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg',
            author: "Rijen Manandhar",
            published_date: "15. 6. 2020"
        },
        {
            id: 5,
            title: "Our chef tips for a great and tasty dinner ready in 20 minutes",
            cover_url: "https://www.golokaso.com/wp-content/uploads/2018/06/vietnamese-fish-tacos-recipe-3w.jpg",
            tag: {
                name: "Vegetable",
                link: "/"
            },
            avatar: 'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg',
            author: "Rijen Manandhar",
            published_date: "15. 6. 2020"
        },
        {
            id: 6,
            title: "Our chef tips for a great and tasty dinner ready in 20 minutes",
            cover_url: "https://www.golokaso.com/wp-content/uploads/2018/06/vietnamese-fish-tacos-recipe-3w.jpg",
            tag: {
                name: "Vegetable",
                link: "/"
            },
            avatar: 'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg',
            author: "Rijen Manandhar",
            published_date: "15. 6. 2020"
        },
        {
            id: 7,
            title: "Our chef tips for a great and tasty dinner ready in 20 minutes",
            cover_url: "https://www.golokaso.com/wp-content/uploads/2018/06/vietnamese-fish-tacos-recipe-3w.jpg",
            tag: {
                name: "Vegetable",
                link: "/"
            },
            avatar: 'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg',
            author: "Rijen Manandhar",
            published_date: "15. 6. 2020"
        },
        {
            id: 8,
            title: "Our chef tips for a great and tasty dinner ready in 20 minutes",
            cover_url: "https://www.golokaso.com/wp-content/uploads/2018/06/vietnamese-fish-tacos-recipe-3w.jpg",
            tag: {
                name: "Vegetable",
                link: "/"
            },
            avatar: 'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg',
            author: "Rijen Manandhar",
            published_date: "15. 6. 2020"
        },
        {
            id: 9,
            title: "Our chef tips for a great and tasty dinner ready in 20 minutes",
            cover_url: "https://www.golokaso.com/wp-content/uploads/2018/06/vietnamese-fish-tacos-recipe-3w.jpg",
            tag: {
                name: "Vegetable",
                link: "/"
            },
            avatar: 'https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg',
            author: "Rijen Manandhar",
            published_date: "15. 6. 2020"
        }]
    )
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
            <Col xl="8" lg="12">
                <Row>
                    {
                        blogs.map(blog => (
                            <Col className='mb-4 justify-content-between' key={blog.id} xl="4" lg="4" md="6">
                                <SecondaryBlog
                                    blog={blog}
                                />
                            </Col>
                        ))
                    }
                </Row>
            </Col>
            <div className='d-flex justify-content-end product-pagination mt-5'>
                <Pagination className='d-flex flex-wrap'>
                    <Pagination.Prev />
                    {Array.from(Array(Math.ceil((blogs.length) / 9))).map((c, index) => (
                        <Pagination.Item active={currentPage === index + 1}>{index + 1}</Pagination.Item>
                    ))}
                    <Pagination.Next />
                </Pagination>
            </div>
        </Row>
    )
}

export default BlogContent
