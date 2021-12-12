import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const Tag = ({tag, value, primary}) => {
    const navigate= useNavigate();

    const navigateToTag = (link) => {
        navigate(link)
    }

    return (
        <div onClick={()=>!value && navigateToTag(tag.link)} 
            className={`product-tag mr-md mt-3 cursor-pointer`}>
           <h6 className={`${primary && 'text-secondary'}`}>{value ? value :tag.name}</h6> 
        </div>
    )
}

Tag.propTypes = {
    tag:PropTypes.shape({
        name:PropTypes.string.isRequired,
        link:PropTypes.string.isRequired
    }),
    value: PropTypes.string,
    primary: PropTypes.bool
}

export default Tag
