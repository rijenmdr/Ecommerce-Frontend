import React from 'react'
import { useNavigate } from 'react-router-dom';

import PropTypes from 'prop-types';

const FilterList = ({ title, list }) => {
    const navigate = useNavigate();
    const search = window.location.search;
    const archive = new URLSearchParams(search).get('archive');
    const category = new URLSearchParams(search).get('category');

    const filterList = (filter) => {
        let queryParams = '';
        const [filterType, filterValue] = filter.split("=") //returns filterType i.e category and filter-value ie food
        if (!archive && !category) {
            // for absolutely new filter
            queryParams = `${filter}`
        } else {
            if (filterType === "archive") {
                queryParams = `archive=${filterValue}${category ? `&category=${category}` : ''}`
            }
            else {
                queryParams = `${archive ? `archive=${archive}&` : ''}category=${filterValue}`
            }
        }
        navigate(`/blogs?${queryParams}`)
    }

    return (
        <div className="d-flex flex-column">
            <h4 className="mb-4">{title}</h4>
            {
                list.map((item, index) => (
                    <div className="mb-2 cursor-pointer" key={index} onClick={() => filterList(item.link)}>
                        <h5 className='text-secondary'>{item.name}</h5>
                    </div>
                ))
            }
        </div>
    )
}

FilterList.propTypes = {
    title: PropTypes.string.isRequired,
    list: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired
    }))
}

export default FilterList
