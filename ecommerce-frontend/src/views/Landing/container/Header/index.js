import React, { useState } from 'react';
import { Form, Image, InputGroup } from 'react-bootstrap';
//icons
import {FaFacebook, FaTwitter, FaInstagram} from 'react-icons/fa';
import { BiMenuAltLeft } from "react-icons/bi";

//image
import Logo from '../../../../assets/images/logo.svg';
import Account from '../../../../assets/images/icons/ic-actions-user.svg';
import Search from '../../../../assets/images/icons/ic-actions-search.svg';
import Cart from '../../../../assets/images/icons/ic-ecommerce-cart.svg';
import Sidebar from '../../components/Sidebar/Sidebar';

function Header() {
    const [showSidebar, setShowSidebar] = useState(false);
    return (
        <header>
           <div className="header-contact d-flex justify-content-between align-items-center">
                <div className="d-flex">
                    <p className="text-secondary mr-xl mb-0">Chat with us</p>
                    <p className="mr-xl text-primary mb-0">+420 336 775 664</p>
                    <p className="text-primary mb-0">info@freshnesecom.com</p>
                </div>
                <div>
                    <FaFacebook className={"text-secondary mr-md"}/>
                    <FaTwitter className={"text-secondary mr-md"}/>
                    <FaInstagram className={"text-secondary"}/>
                </div>
           </div>
           
           <div className="header-separator"/>

           <div
                className="header-main d-flex full-width justify-content-between align-items-center">
                    <BiMenuAltLeft onClick={()=>setShowSidebar(true)} className="menu cursor-pointer" size={32}/>
                    <Image className="cursor-pointer ml-sm" src={Logo}/>
                    <InputGroup className="d-flex search-bar-first search-bar w-50 p-0" size="sm">
                        <Form.Select size="sm" className="category-select border-0 m-2 flex-1 bg-transparent box-shadow-none">
                            <option>All categories</option>
                        </Form.Select>
                        <div className="border-vertical"/>
                        <Form.Control className="search-text border-0 p-1 m-2 flex-3 bg-transparent box-shadow-none" size="sm" type="text" placeholder="Search Products, categories ..."/>
                        <InputGroup.Text className="border-0 bg-transparent cursor-pointer"><Image className="image-icon m-2" src={Search}/></InputGroup.Text>
                    </InputGroup>
                <div>
                    <Image className="image-icon cursor-pointer" src={Account}/>
                    <Image className="image-icon cart-icon ml-lg cursor-pointer" src={Cart}/>
                </div>
           </div>

           <InputGroup className="d-flex search-bar search-bar-second w-100 p-0" size="sm">

            <Form.Select size="sm" className="category-select border-0 m-2 flex-1 bg-transparent box-shadow-none">
                <option>All categories</option>
            </Form.Select>

            <div className="border-vertical"/>
            <Form.Control className="search-text border-0 p-1 m-2 flex-3 bg-transparent box-shadow-none" size="sm" type="text" placeholder="Search Products, categories ..."/>
            <InputGroup.Text className="border-0 bg-transparent cursor-pointer"><Image className="image-icon m-2" src={Search}/></InputGroup.Text>
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
