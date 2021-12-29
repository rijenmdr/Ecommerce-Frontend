import React from 'react';
import { ReactQueryDevtools } from 'react-query/devtools';
import { toast, ToastContainer } from 'react-toastify';

import AppRoutes from './routes';

//css
import './App.scss';
import './assets/scss/layout.scss';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
    return (
        <>
            <div className="App">
                <AppRoutes/>
                <ToastContainer
                    position={toast.POSITION.TOP_RIGHT}
                    autoClose={5000}
                    hideProgressBar={false}
                    closeOnClick={true}
                    pauseOnHover
                />
            </div>
            <ReactQueryDevtools initialIsOpen={false}/>
        </>
    )
}

export default App
