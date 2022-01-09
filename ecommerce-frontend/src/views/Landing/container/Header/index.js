import React, { useState } from 'react';
import { Form, Image, InputGroup } from 'react-bootstrap';
//icons
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { BiMenuAltLeft } from "react-icons/bi";

//image
import Logo from '../../../../assets/images/logo.svg';
import Account from '../../../../assets/images/icons/ic-actions-user.svg';
import Search from '../../../../assets/images/icons/ic-actions-search.svg';
import Cart from '../../../../assets/images/icons/ic-ecommerce-cart.svg';
import Sidebar from '../../components/Sidebar/Sidebar';
import { useNavigate } from 'react-router-dom';
import { useQuery } from 'react-query';
import axios from '../../../../helper/axios';

const fetchAllCategories = () => {
    const data = axios.get('/category/get-categories');
    return data;
}

function Header() {
    const navigate = useNavigate();

    const [showSidebar, setShowSidebar] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [categories, setCategories] = useState([
        {
            _id: "1",
            name: "Food"
        },
        {
            _id: "2",
            name: "Technology"
        }
    ])
    const [selectedCategory, setSelectedCategory] = useState({
        name: "allCategory",
        _id: '0'
    });

    const changeCategory = (e) => {
        const data = e.target.value
        console.log(data)
        setSelectedCategory({
            _id: data,
            name: data !== "0" ? categories.find(category => category._id === data).name : "allCategory"
        })
    }

    const handleSearchTerm = (e) => {
        setSearchTerm(e.target.value)
    }

    const searchProducts = () => {
        console.log(selectedCategory)
        let navString = ''
        if (searchTerm.trim() !== "" && selectedCategory?._id !== '0') {
            navString = `/products?page=1&search=${searchTerm}&category=${selectedCategory?._id}`
        } else if (searchTerm.trim() !== "") {
            navString = `/products?page=1&search=${searchTerm}`
        } else if (selectedCategory._id !== '0') {
            navString = `/products?page=1&category=${selectedCategory?._id}`
        } else {
            navString = '/products?page=1'
        }
        // setSearchTerm('')
        // setSelectedCategory({
        //     _id:"0",
        //     name:"allCategory"
        // })
        navigate(navString, {
            state: {
                selectedCategory
            }
        });
    }

    const handleKeyDown = (e) => {
        if (e.code === "Enter" || e.code === "NumpadEnter") {
            searchProducts();
        }
    }

    useQuery('categories', fetchAllCategories, {
        retry: false,
        refetchOnWindowFocus: false,
        onSuccess: (res) => {
            setCategories(res.data.categories)
        }
    })

    return (
        <header>
            <div className="header-contact d-flex justify-content-between align-items-center">
                <div className="d-flex">
                    <p className="text-secondary mr-xl mb-0">Chat with us</p>
                    <p className="mr-xl text-primary mb-0">+420 336 775 664</p>
                    <p className="text-primary mb-0">info@freshnesecom.com</p>
                </div>
                <div>
                    <FaFacebook className={"text-secondary mr-md"} />
                    <FaTwitter className={"text-secondary mr-md"} />
                    <FaInstagram className={"text-secondary"} />
                </div>
            </div>

            <div className="header-separator" />

            <div
                className="header-main d-flex full-width justify-content-between align-items-center">
                <BiMenuAltLeft onClick={() => setShowSidebar(true)} className="menu cursor-pointer" size={32} />
                <Image 
                    className="cursor-pointer ml-sm" 
                    src={Logo} 
                    onClick={ ()=>navigate('/') }
                />
                <InputGroup className="d-flex search-bar-first search-bar w-50 p-0" size="sm">
                    <Form.Select
                        size="sm"
                        className="category-select border-0 m-2 flex-1 bg-transparent box-shadow-none"
                        onChange={(e) => changeCategory(e)}
                        value={selectedCategory._id}
                    >
                        <option value="0">All categories</option>
                        {
                            categories && categories.length !== 0 &&
                            categories.map((category, index) => (
                                <option
                                    key={category._id}
                                    value={category._id}
                                >
                                    {category.name}
                                </option>
                            ))
                        }
                    </Form.Select>
                    <div className="border-vertical" />
                    <Form.Control
                        className="search-text border-0 p-1 m-2 flex-3 bg-transparent box-shadow-none"
                        size="sm"
                        type="text"
                        placeholder="Search Products ..."
                        value={searchTerm}
                        onKeyDown={(e) => handleKeyDown(e)}
                        onChange={(e) => handleSearchTerm(e)}
                    />
                    <InputGroup.Text 
                        className="border-0 bg-transparent cursor-pointer"
                    >
                        <Image 
                            className="image-icon m-2" 
                            src={Search} 
                            onClick={searchProducts}
                        />
                    </InputGroup.Text>
                </InputGroup>
                <div>
                    <Image className="image-icon cursor-pointer" src={Account} />
                    <Image className="image-icon cart-icon ml-lg cursor-pointer" src={Cart} />
                </div>
            </div>

            <InputGroup className="d-flex search-bar search-bar-second w-100 p-0" size="sm">

                <Form.Select
                    size="sm"
                    className="category-select border-0 m-2 flex-1 bg-transparent box-shadow-none"
                    onChange={(e) => changeCategory(e)}
                    value={selectedCategory._id}
                >
                    <option value="0">All categories</option>
                    {
                        categories && categories.length !== 0 &&
                        categories.map((category, index) => (
                            <option
                                key={category._id}
                                value={category._id}
                            >
                                {category.name}
                            </option>
                        ))
                    }
                </Form.Select>

                <div className="border-vertical" />
                <Form.Control 
                    className="search-text border-0 p-1 m-2 flex-3 bg-transparent box-shadow-none" 
                    size="sm" 
                    type="text" 
                    placeholder="Search Products ..." 
                    value={searchTerm}
                    onKeyDown={(e) => handleKeyDown(e)}
                    onChange={(e) => handleSearchTerm(e)}
                />
                <InputGroup.Text 
                    className="border-0 bg-transparent cursor-pointer"
                >
                    <Image 
                        className="image-icon m-2" 
                        src={Search}
                        onClick={searchProducts}
                    />
                </InputGroup.Text>
            </InputGroup>
            {showSidebar &&
                <Sidebar
                    setShowSidebar={setShowSidebar}
                />
            }
        </header>
    )
}

export default Header
