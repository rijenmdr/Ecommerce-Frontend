import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';

import App from './App';

//css
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';  

const queryClient = new QueryClient();

const app = (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </QueryClientProvider>
   
)

ReactDOM.render(app,document.getElementById('root'))