import React from 'react'
import { Card, Image } from 'react-bootstrap'

const ProductImageSection = ({ images }) => {
    return (
        <>
            {
                images.map((image, index) => (
                    <Card className='mb-4' key={index}>
                        <Image
                            className='cursor-pointer'
                            src={image}
                        />
                    </Card>
                ))
            }
        </>
    )
}

export default ProductImageSection
