import React from 'react'
import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'

const Home = React.lazy(() =>
    import('./pages/Home')
);

const Search = React.lazy(() =>
    import('./pages/Search')
);

const Blogs = React.lazy(() =>
    import('./pages/Blogs')
);

const BlogDetail = React.lazy(() =>
    import('./pages/BlogDetail')
);

const LandingRoutes = () => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Routes>
                <Route path="/blogs/:id" name="blog-detail" element={<BlogDetail />} />
                <Route path="/blogs" name="blogs" element={<Blogs />} />
                <Route path="/search" name="search" element={<Search />} />
                <Route path="/home" name="home" element={<Home />} />
                <Route path="/" name="home" element={<Home />} />
            </Routes>
        </Suspense>
    )
}

export default LandingRoutes
