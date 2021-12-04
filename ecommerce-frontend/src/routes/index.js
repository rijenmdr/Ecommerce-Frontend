import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom'

const LandingLayout = React.lazy(()=>
    import('../views/Landing')
);
 
const AppRoutes = () => {
    console.log("hello")
    return (
        <Suspense fallback={<div className="loading"></div>}>
            <Routes>
                <Route path="/*" element={<LandingLayout/>}/>
            </Routes>
        </Suspense>
    )
}

export default AppRoutes
