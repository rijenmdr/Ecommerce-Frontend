import React from 'react';
import { Image } from 'react-bootstrap';

//image
import NoData from '../../../../assets/images/components/nodata.svg';

const Error = () => {
    return (
        <div className='error-page d-flex justify-content-center align-items-center flex-column'>
            <Image
                src={NoData}
                width={500}
            />
        </div>
    )
}

export default Error
