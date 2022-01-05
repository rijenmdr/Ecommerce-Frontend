import React, { useState } from 'react'
import { Button } from 'react-bootstrap'
import Tag from '../../../../components/Tag/Tag';
import TextAreaInput from '../../../../components/TextAreaInput/TextAreaInput';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
// import moment from 'moment';

const ProductQuestionAnswer = ({ reply }) => {
    const [isReply, setIsReply] = useState(false);
    const [replies, setReplies] = useState()

    const handleBlur = () => {

    }
    return (
        <>
            <div className='p-2 m-2'>
                <div className='commenter-info d-flex align-items-center'>
                    <h1 className='mb-0'>Q</h1>
                    <div className='d-flex justify-content-between align-items-center w-100'>
                        <div className='commenter-info-text d-flex flex-column ml-md'>
                            <h5 className='mb-0'>Ram Prasad</h5>
                            <h6 className='text-dark-light mb-0'>
                                {/* {moment('2021-02-11').startOf('seconds').fromNow()} */}
                                2021-01-22
                            </h6>
                        </div>

                    </div>

                </div>
                <div className='commenter-comment mt-4 pl-lg'>
                    <h5>Lights ekdum ramro laagyo. Battery ko life kati samma tikxa che tha vayena.
                        Just started using. At least 2 din mai sidine che hoina.
                    </h5>
                </div>
                {
                    reply &&
                    <>
                        <h5
                            onClick={() => setIsReply(prev => !prev)}
                            className='text-secondary cursor-pointer pl-lg mb-0'
                        >
                            Reply
                            {
                                !isReply ?
                                    <span className='ml-sm'><FaChevronDown /></span>
                                    :
                                    <span className='ml-sm'><FaChevronUp /></span>
                            }
                        </h5>
                        {
                            isReply &&
                            <div className='ml-lg'>
                                <TextAreaInput
                                    name="reply"
                                    row={5}
                                    value={replies}
                                    handleChange={(e) => setReplies(e.target.value)}
                                    handleBlur={handleBlur}
                                    placeholder='Answer this question'
                                />
                                <Button
                                    size="sm"
                                >
                                    Reply
                                </Button>
                            </div>
                        }
                    </>

                }
            </div>
            {!reply &&
                <div className='p-2 overflow-none ml-xl'>
                    <div className='commenter-info d-flex align-items-center'>
                        <h1 className='mb-0'>A</h1>
                        <div className='d-flex justify-content-between align-items-center w-100'>
                            <div className='commenter-info-text d-flex flex-column ml-md'>
                                <h5 className='mb-0'>Ram Prasad
                                    <Tag
                                        value="Merchant"
                                        primary={true}
                                    />
                                </h5>
                                <h6 className='text-dark-light mb-0'>
                                    {/* {moment('2021-02-11').startOf('seconds').fromNow()} */}
                                    2021-01-22
                                </h6>
                            </div>

                        </div>

                    </div>
                    <div className='commenter-comment mt-4 pl-xl'>
                        <h5>Lights ekdum ramro laagyo. Battery ko life kati samma tikxa che tha vayena.
                            Just started using. At least 2 din mai sidine che hoina.
                        </h5>
                    </div>
                </div>
            }
            <div className='divider'></div>
        </>
    )
}

export default ProductQuestionAnswer
