import React from 'react'
import { Suspense } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'

const LandingRoutes = () => {
    return (
        <Suspense fallback={<div>Loading</div>}>
            <Routes>
                <Route path="/home" name="home" element={<Home/>}/>
                <Route path="/" name="home" element={<Home/>}/>
            </Routes>
        </Suspense>
    )
}

export default LandingRoutes
