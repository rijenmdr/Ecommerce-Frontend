import React from 'react';
import { Card, Image } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';
// import moment from 'moment';

const ProductReviewCard = () => {
    return (
        <Card className='p-2 m-2'>
            <div className='commenter-info d-flex align-items-center'>
                <Image
                    src={"https://www.nicepng.com/png/detail/136-1366211_group-of-10-guys-login-user-icon-png.png"}
                    roundedCircle={true}
                    className='avatar'
                    width={40}
                    height={40}
                />
                <div className='d-flex justify-content-between align-items-center w-100'>
                    <div className='commenter-info-text d-flex flex-column ml-md'>
                        <h5 className='mb-0'>Ram Prasad</h5>
                        <StarRatings
                            rating={4}
                            starRatedColor="#FDBC15"
                            starDimension='15'
                            starSpacing='5'
                            numberOfStars={5}
                        />
                    </div>
                    <h6 className='text-dark-light mb-0'>
                        {/* {moment('2021-02-11').startOf('seconds').fromNow()} */}
                        2021-01-22
                    </h6>
                </div>

            </div>
            <div className='commenter-comment mt-4 px-4'>
                <h5>Lights ekdum ramro laagyo. Battery ko life kati samma tikxa che tha vayena.
                    Just started using. At least 2 din mai sidine che hoina.
                </h5>
            </div>
        </Card>
    )
}

export default ProductReviewCard
