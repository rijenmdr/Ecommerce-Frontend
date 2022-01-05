import React from 'react'
import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Error from './pages/Error';
import Loading from './components/Loading';

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

const ProductDetail = React.lazy(() =>
    import('./pages/ProductDetail')
);

const LandingRoutes = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <Routes>
                <Route path="/blogs/:id" name="blog-detail" element={<BlogDetail />} />
                <Route path="/blogs" name="blogs" element={<Blogs />} />
                <Route path="/products/:id" name="product-detail" element={<ProductDetail />} />
                <Route path="/products" name="search" element={<Search />} />
                <Route path="/home" name="home" element={<Home />} />
                <Route path="/" name="home" element={<Home />} />
                <Route path = '*' name="error" element={<Error/>}/>
            </Routes>
        </Suspense>
    )
}

export default LandingRoutes
