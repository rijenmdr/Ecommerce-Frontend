import React from 'react'
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';

const HeaderWithList = ({title, list}) => {
    return (
        <div className="d-flex flex-column">
            <h4 className="mb-4">{title}</h4>
                {
                    list.map((item, index) => (
                        <Link className="mb-2" key={index} to={item.link}><h5>{item.name}</h5></Link>
                    ))
                }
        </div>
    )
}

HeaderWithList.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        link:PropTypes.string.isRequired
    }))
}

export default HeaderWithList
