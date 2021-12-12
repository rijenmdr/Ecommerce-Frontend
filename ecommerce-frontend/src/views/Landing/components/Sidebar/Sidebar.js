import React, { useState } from 'react'
import { Image, Dropdown } from 'react-bootstrap';
import PropTypes from 'prop-types';

import { navItems } from '../../../../constant/navItems';

//image
import logo from '../../../../assets/images/logo.svg';

//icon
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({ setShowSidebar }) => {
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

    const closeSidebar = () => {
        setShowSidebar(false)
    }
    return (
        <aside>
            <div onClick={closeSidebar} className="backdrop"></div>
            <div className="sidebar-items">
                <div className="d-flex align-items-center justify-content-between full-width">
                    <Image src={logo} width={150} />
                    <AiOutlineClose className="cursor-pointer" onClick={closeSidebar} size={24} />
                </div>
                <div className="side-item mt-5">
                    {
                        navItems.map(navItem => (
                            <Dropdown
                                key={navItem.id}
                                drop="down"
                                onMouseLeave={() => hideCategory(navItem.id)}
                                onMouseOver={() => showCategory(navItem.id)}
                            >
                                <Dropdown.Toggle
                                    className="nav-item mb-4"
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
                </div>
            </div>
        </aside>
    )
}

Sidebar.propTypes = {
    setShowSidebar: PropTypes.func.isRequired
}

export default Sidebar
