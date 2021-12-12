import React, { useRef } from 'react'
import { Image, Row } from 'react-bootstrap'
import TestimonyCard from '../../components/TestimonyCard/TestimonyCard';

//icons
import LeftIcon from '../../../../../../assets/images/icons/ic-chevron-left.svg';
import RightIcon from '../../../../../../assets/images/icons/ic-chevron-right.svg';

const CustomerTestimony = () => {
    const testimonyRef = useRef();

    const handleScroll = (direction) => {
        if (direction === "left") {
            testimonyRef.current.scrollLeft -= 380;
        } else {
            testimonyRef.current.scrollLeft += 380;
        }
    }

    return (
        <>
            <hr />
            <div className="customer-testimony position-relative">
                <div
                    onClick={() => handleScroll('left')}
                    className="position-absolute left-btn">
                    <Image
                        src={LeftIcon}
                        alt="left-icon"
                        width={30}
                        height={30}
                    />
                </div>
                <h3>Our customer says</h3>
                <Row
                    ref={testimonyRef}
                    className="d-flex customer-testimony-list flex-nowrap p-4 flex-row justify-content-between overflow-auto mt-5">
                    <TestimonyCard />
                    <TestimonyCard />
                    <TestimonyCard />
                    <TestimonyCard />
                    <TestimonyCard />
                </Row>
                <div
                    onClick={() => handleScroll('right')}
                    className="position-absolute right-btn">
                    <Image
                        src={RightIcon}
                        alt="right-icon"
                        width={30}
                        height={30}
                    />
                </div>
            </div>
            <hr />
        </>
    )
}

export default CustomerTestimony
