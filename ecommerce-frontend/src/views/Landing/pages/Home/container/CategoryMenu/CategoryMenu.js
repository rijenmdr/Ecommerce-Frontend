import React from 'react';
import { Carousel, Button } from 'react-bootstrap';
import HeaderWithList from '../../../../components/HeaderWithList/HeaderWithList';

const category_menu = {
    title: "Category menu",
    list: [
        {
            name: "Bakery",
            link: "/"
        },
        {
            name: "Fruit and vegetable",
            link: "/"
        },
        {
            name: "Meat and fish",
            link: "/"
        },
        {
            name: "Drinks",
            link: "/"
        },
        {
            name: "Kitchen",
            link: "/"
        }
    ]
}

const carousel_list = [
    {
        id: 1,
        img_url:"https://png.pngtree.com/thumb_back/fh260/back_our/20190620/ourmid/pngtree-fashion-food-poster-background-image_159294.jpg"
    },
    {
        id: 2,
        img_url:"https://www.littlewoods.com/assets/static/2021/11/4thways/05-fitbit/fitbit-charge-banner-mb.png"
    },

]

const CategoryMenu = () => {
    return (
        <div className="section-margin home-top-content d-flex justify-content-between">
            <div className="d-flex category-menu flex-column">
                <HeaderWithList
                    title={category_menu.title}
                    list={category_menu.list}
                />
                <Button className="mt-5" variant="secondary">{`More categories >`}</Button>
            </div>
            <Carousel controls={false} className="w-75 corousel-slider">
                {
                    carousel_list.map(list=>(
                        <Carousel.Item key={list.id} className="border-4 item-corousel" style={{ height: "350px" }}>
                            <img
                                className="d-block w-100 h-100"
                                src= {list.img_url}
                                alt="First slide"
                                style={{
                                    borderRadius: "8px"
                                }}
                            />
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </div>
    )
}

export default CategoryMenu
