import React from 'react'
import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = React.lazy(() =>
    import('./pages/Home')
);

const Search = React.lazy(() =>
    import('./pages/Search')
);

const LandingRoutes = () => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Routes>
                <Route path="/search" name="home" element={<Search />} />
                <Route path="/home" name="home" element={<Home />} />
                <Route path="/" name="home" element={<Home />} />
            </Routes>
        </Suspense>
    )
}

export default LandingRoutes
