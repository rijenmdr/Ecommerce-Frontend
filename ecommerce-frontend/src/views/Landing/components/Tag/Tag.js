import React from 'react';
import { useNavigate } from 'react-router-dom';

const Tag = ({tag}) => {
    const navigate= useNavigate();

    const navigateToTag = (link) => {
        navigate(link)
    }

    return (
        <div onClick={()=>navigateToTag(tag.link)} 
            className="product-tag mr-md mt-3 cursor-pointer">
           <h6>{tag.name}</h6> 
        </div>
    )
}

export default Tag
