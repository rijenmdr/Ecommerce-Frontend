import React from 'react'
import { Image } from 'react-bootstrap'

const CommentSection = ({ comment }) => {
    return (
        <div className='comment-card mt-4'>
            <div className='commenter-info d-flex'>
                <Image
                    src={comment.profile_image}
                    roundedCircle={true}
                    className='avatar'
                    width={40}
                    height={40}
                />
                <div className='commenter-info-text d-flex flex-column ml-md'>
                    <h5 className='mb-0'>{comment.name}</h5>
                    <h6 className='text-dark-light mt-0'>
                        {comment.date}
                    </h6>
                </div>
            </div>
            <div className='commenter-comment mt-4'>
                {comment.comment}
            </div>
        </div>
    )
}

export default CommentSection
