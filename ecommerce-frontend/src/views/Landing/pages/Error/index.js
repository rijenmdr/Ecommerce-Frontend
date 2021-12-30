import React from 'react';
import { Button, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

//image
import Error404 from '../../../../assets/images/components/404.svg';

const Error = () => {
    const navigate = useNavigate();
    return (
        <div className='error-page d-flex justify-content-center align-items-center flex-column section-margin'>
            <Image
                src={Error404}
                width={800}
            />
            <div>
                <Button 
                    onClick={()=>navigate('/')} 
                    size = 'sm'
                    className='mt-4 d-block'
                >
                    Go to Home
                </Button>
            </div>
            
        </div>
    )
}

export default Error
