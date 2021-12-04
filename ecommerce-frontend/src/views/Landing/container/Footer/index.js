import React from 'react';
import { Link } from 'react-router-dom';

//staticData
import { footerItems } from '../../../../constant/footerItem';
import { tagLists } from '../../../../constant/tagLists';

//component
import Tag from '../../components/Tag/Tag'

const Footer = () => {
    return (
        <footer className="section-padding d-flex flex-column">
            <div className="footer-nav d-flex full-width justify-content-between">
                {
                    footerItems.map(footerItem => (
                        <div key={footerItem.id} className="footer-nav-item d-flex flex-column">
                            <h4 className="mb-4">{footerItem.title}</h4>
                            {
                                footerItem.sub_titles.map((item, index) => (
                                    <Link className="mb-2" key={index} to={item.link}><h5>{item.name}</h5></Link>
                                ))
                            }
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
