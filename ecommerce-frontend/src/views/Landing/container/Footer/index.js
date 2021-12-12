import React from 'react';

//staticData
import { footerItems } from '../../../../constant/footerItem';
import { tagLists } from '../../../../constant/tagLists';
import HeaderWithList from '../../components/HeaderWithList/HeaderWithList';

//component
import Tag from '../../components/Tag/Tag'

const Footer = () => {
    return (
        <footer className="section-padding d-flex flex-column">
            <div className="footer-nav d-flex full-width justify-content-between">
                {
                    footerItems.map(footerItem => (
                        <div key={footerItem.id} className="footer-nav-item d-flex flex-column">
                            <HeaderWithList
                                title= {footerItem.title}
                                list= {footerItem.sub_titles}
                            />
                        </div>
                    ))
                }
            </div>
            <div className="footer-tags mt-5">
                <h4>Product tags</h4>
                <div className="tags d-flex justify-content-start flex-wrap mt-2">
                    {
                        tagLists.map((tagList, index) => (
                            <Tag
                                key={index}
                                tag={tagList}
                            />
                        ))
                    }
                </div>
            </div>
            <div className="footer-copyright mt-5">
                <h5>Copyright © 2020 petrbilek.com</h5>
            </div>
        </footer>
    )
}

export default Footer
