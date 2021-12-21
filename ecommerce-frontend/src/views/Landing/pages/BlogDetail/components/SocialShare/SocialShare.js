import React from 'react'
import { Image } from 'react-bootstrap'

//images 
import Facebook from '../../../../../../assets/images/brand/facebook.svg';
import Twitter from '../../../../../../assets/images/brand/twitter.svg';
import LinkedIn from '../../../../../../assets/images/brand/linkedin.svg';
import Pinterest from '../../../../../../assets/images/brand/pinterest.svg';

const SocialShare = () => {
    const social_medias = [
        {
            id: 1,
            name: "Facebook",
            link: "/facebook",
            Image: Facebook,
        },
        {
            id: 2,
            name: "Twitter",
            link: "/twitter",
            Image: Twitter,
        },
        {
            id: 3,
            name: "LinkedIn",
            link: "/linkedin",
            Image: LinkedIn,
        },
        {
            id: 4,
            name: "Pinterest",
            link: "/linkedin",
            Image: Pinterest
        },

    ]
    return (
        <div className="social-share d-flex justify-content-start align-items-center my-5">
            <h4 className='mr-xl'>Share</h4>
            <div className='d-flex share-tags flex-wrap justify-content-start w-100'>
                {
                    social_medias.map(social => (
                        <div className='d-flex share-tag align-items-start cursor-pointer mb-sm mr-xl' key={social.id}>
                            <Image src={social.Image} alt='facebook' />
                            <h6 className='mb-0 ml-sm'>{social.name}</h6>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default SocialShare
