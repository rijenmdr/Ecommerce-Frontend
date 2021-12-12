import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

import { navItems } from '../../../../constant/navItems';

const Nav = () => {
    const [showDropdown, setShowDropdown] = useState(false);
    const [showCategoryId, setShowCategoryId] = useState(null);

    const showCategory = (id) => {
        console.log(id)
        setShowDropdown(true);
        setShowCategoryId(id);
    }

    const hideCategory = (id) => {
        setShowDropdown(false);
    }

    return (
        <nav className="nav-bar d-flex justify-content-between">
            {
                navItems.map(navItem => (
                    <Dropdown
                        key={navItem.id}
                        onMouseLeave={() => hideCategory(navItem.id)}
                        onMouseOver={() => showCategory(navItem.id)}
                    >
                        <Dropdown.Toggle
                            className="nav-item"
                            variant="dark"
                        >
                            {navItem?.category_name}
                        </Dropdown.Toggle>
                        <Dropdown.Menu show={showDropdown && navItem.id === showCategoryId}>
                            {
                                navItem.sub_categories.map((category, index) => (
                                    <Dropdown.Item className="category-item" key={index} href={category.link}>
                                        {category.name}
                                    </Dropdown.Item>
                                ))
                            }
                        </Dropdown.Menu>
                    </Dropdown>
                ))
            }
        </nav>
    )
}

export default Nav
