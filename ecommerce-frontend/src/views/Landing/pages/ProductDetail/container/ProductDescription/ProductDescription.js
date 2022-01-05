import React from 'react';
import ReactHtmlParser from 'react-html-parser';

const ProductDescription = ({ description }) => {
    return (
        <div className='content-description'>
            {ReactHtmlParser(description)}
        </div>
    )
}

export default ProductDescription
