import React, { useState, useEffect } from 'react';
import { Pagination } from 'react-bootstrap';
import Breadcrumbs from '../../container/Breadcrumb';
import SearchedProducts from './container/SearchedProducts/SearchedProducts';
import SearchFilterList from './container/SearchFilterList/SearchFilterList';
import SearchHeader from './container/SearchHeader/SearchHeader';

//css
import './Search.scss';

const SearchProducts = () => {
    const [viewType, setViewType] = useState('grid');
    const [showFilter, setShowFilter] = useState(true);
    const [width, setWidth] = useState(window.innerWidth);
    const [currentPage] = useState(1);
    const [searchedProducts] = useState([
        {
            id: 1,
            title: "Iphone 13 pro",
            image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
            short_description: "Space for a small product description",
            price: 210000,
            prevPrice: 220000,
            discountedPercentage: 30
        },
        {
            id: 2,
            title: "Nike Trainer",
            image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
            short_description: "Space for a small product description",
            price: 2100,
        },
        {
            id: 3,
            title: "Mantra Guitar",
            image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
            short_description: "Space for a small product description",
            price: 1500,
        },
        {
            id: 4,
            title: "Vodka",
            image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
            short_description: "Space for a small product description",
            price: 1500,
        },
        {
            id: 5,
            title: "Iphone 13 pro",
            image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
            short_description: "Space for a small product description",
            price: 210000,
            prevPrice: 220000,
            discountedPercentage: 30
        },
        {
            id: 6,
            title: "Nike Trainer",
            image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
            short_description: "Space for a small product description",
            price: 2100,
        },
        {
            id: 7,
            title: "Mantra Guitar",
            image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
            short_description: "Space for a small product description",
            price: 1500,
        },
        {
            id: 8,
            title: "Vodka",
            image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
            short_description: "Space for a small product description",
            price: 1500,
        },
        {
            id: 9,
            title: "Iphone 13 pro",
            image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
            short_description: "Space for a small product description",
            price: 210000,
            prevPrice: 220000,
            discountedPercentage: 30
        },
        // {
        //     id: 10,
        //     title: "Iphone 13 pro",
        //     image_url: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cHJvZHVjdHxlbnwwfHwwfHw%3D&w=1000&q=80",
        //     short_description: "Space for a small product description",
        //     price: 210000,
        //     prevPrice: 220000,
        //     discountedPercentage: 30
        // }
    ])

    useEffect(() => {
        function handleResize() {
            setWidth(window.innerWidth);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize)
    }, [width])

    useEffect(() => {
        width < 992 && setViewType('grid')
    }, [width])

    useEffect(() => {
        width < 763 ? setShowFilter(false) : setShowFilter(true)
    }, [width])
    return (
        <div className="search-products">
            <Breadcrumbs />

            {/* Search Headers */}
            <SearchHeader
                viewType={viewType}
                setViewType={setViewType}
                showFilter={showFilter}
                setShowFilter={setShowFilter}
            />

            <div className='section-margin d-flex search-content'>
                {
                    showFilter && <SearchFilterList />
                }

                <SearchedProducts
                    viewType={viewType}
                    searchedProducts={searchedProducts}
                />
            </div>

            <div className='section-margin d-flex justify-content-end product-pagination'>
                <Pagination className='d-flex flex-wrap'>
                    <Pagination.Prev />
                    {Array.from(Array(Math.ceil((searchedProducts.length) / 9))).map((c, index) => (
                        <Pagination.Item active={currentPage === index + 1}>{index + 1}</Pagination.Item>
                    ))}
                    <Pagination.Next />
                </Pagination>
                {/* <Pagination.First />
                <Pagination.Prev />
                <Pagination.Item>{1}</Pagination.Item>
                <Pagination.Ellipsis />

                <Pagination.Item>{10}</Pagination.Item>
                <Pagination.Item>{11}</Pagination.Item>
                <Pagination.Item active>{12}</Pagination.Item>
                <Pagination.Item>{13}</Pagination.Item>
                <Pagination.Item disabled>{14}</Pagination.Item>

                <Pagination.Ellipsis />
                <Pagination.Item>{20}</Pagination.Item>
                <Pagination.Next />
                <Pagination.Last /> */}
            </div>
        </div>
    )
}

export default SearchProducts
