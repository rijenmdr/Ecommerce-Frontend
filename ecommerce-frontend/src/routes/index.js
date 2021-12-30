import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Loading from '../views/Landing/components/Loading';

const LandingLayout = React.lazy(()=>
    import('../views/Landing')
);
 
const AppRoutes = () => {
    return (
        <Suspense fallback={<Loading/>}>
            <Routes>
                <Route path="/*" element={<LandingLayout/>}/>
            </Routes>
        </Suspense>
    )
}

export default AppRoutes
