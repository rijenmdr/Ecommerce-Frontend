import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import SecondaryBlog from '../../../../components/Blog/SecondaryBlog'

const RelatedBlogs = () => {
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
        }]
    )
    return (
        <>
            <div className='d-flex justify-content-between'>
                <h3>Related Blogs</h3>
                <h5 className="cursor-pointer ml-md">View More <span className="text-secondary ml-sm">{'>'}</span></h5>
            </div>
            <Row>
                {
                    blogs.map(blog => (
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
