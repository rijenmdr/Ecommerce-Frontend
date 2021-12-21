import React from 'react'
import { Card, CardImg, Col } from 'react-bootstrap'

const BlogDetailHeader = () => {
    return (
        <Card className='position-relative blog-header-card'>
            <CardImg
                className='blog-cover'
                src='https://img5.goodfon.com/wallpaper/nbig/5/de/denis-istomin-zakat-stolby-provoda-tishina.jpg'
            />
            <div className='position-absolute blog-header-info d-flex align-items-baseline w-100'>
                <div className='d-flex flex-column blog-extra-info w-20 mr-xl'>
                    <div className='d-flex justify-content-start'>
                        <Col><h5 className='text-dark-light'>Date:</h5></Col>
                        <Col className='w-50 text-light'><h5>22 . 6 . 2020</h5></Col>
                    </div>
                    <div className='d-flex justify-content-start'>
                        <Col><h5 className='text-dark-light'>Category:</h5></Col>
                        <Col className='w-50 text-light'><h5>Dinner</h5></Col>
                    </div>
                    <div className='d-flex justify-content-start'>
                        <Col><h5 className='text-dark-light'>Author:</h5></Col>
                        <Col className='w-50 text-light'><h5>Admin</h5></Col>
                    </div>
                </div>
                <div className='blog-title w-50 '>
                    <h1 className='text-light'>Space for your heading, can be larger so don’t worry - large heading looks better   </h1>
                </div>
            </div>
        </Card>
    )
}

export default BlogDetailHeader
