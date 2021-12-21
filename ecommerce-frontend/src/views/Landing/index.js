import React from 'react';
import Footer from './container/Footer';
import Header from './container/Header';
import Nav from './container/Nav';
import LandingRoutes from './LandingRoutes';

import '../../assets/scss/component.scss';

const LandingLayout = () => {
    return (
        <div>
            <Header/>
            <Nav/>
            <LandingRoutes/>
            <Footer/>
        </div>
    )
}

export default LandingLayout;
