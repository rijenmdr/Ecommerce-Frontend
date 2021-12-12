import React from 'react'
import { Card, Image } from 'react-bootstrap'

const TestimonyCard = () => {
    return (
        <Card className="pt-5 testimony-card pb-4 px-5 w-30 position-relative mr-xl">
            <Card.Text>
                <h5 className="text-center">
                    {`“ This is an super space for your customers qoute. Don’t worry 
                    it works smooth as pie. You will get all what you need by writiing 
                    a text here “`}
                </h5>
                <h6 className="text-dark-light text-center mt-4">
                    Rijen Manandhar
                </h6>
            </Card.Text>
            <Image 
                className="position-absolute" 
                style={{
                    objectFit: "cover",
                    bottom: -50,
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                }}
                src="https://www.whatsappprofiledpimages.com/wp-content/uploads/2021/08/Profile-Photo-Wallpaper.jpg" 
                width={50}
                height={50}
                roundedCircle 
            />
        </Card>
    )
}

export default TestimonyCard
