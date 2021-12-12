import React from 'react';

//containers
import CategoryMenu from './container/CategoryMenu/CategoryMenu';
import BestSellingProducts from './container/BestSellingProducts/BestSellingProducts';
import BestFromFarmers from './container/BestFromFarmers/BestFromFarmers';
import PopularProducts from './container/PopularProducts/PopularProducts';
import CustomerTestimony from './container/CustomerTestimony/CustomerTestimony';
import OurBlogs from './container/OurBlogs/OurBlogs';

import './Home.scss';

const Home = () => {
    return (
        <div className="home">
            {/* Category Menu */}
            <CategoryMenu/>

            {/* Best Selling Products */}
            <BestSellingProducts/>

            {/* Best From Farmers */}
            <BestFromFarmers/>

            {/* Customer Testimony */}
            <CustomerTestimony/>

            {/* Popular Products */}
            <PopularProducts/>

            {/* Our Blogs */}
            <OurBlogs/>
        </div>
    )
}

export default Home
