import React, { useState } from 'react';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import axiosInstances from '../../../../../../helper/axios';
import TextAreaInput from '../../../../components/TextAreaInput/TextAreaInput';
import { toast } from 'react-toastify';

import TextInput from '../../../../components/TextInput/TextInput';

const ReplyForm = ({ blogId }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');
    const [isLoading, setLoading] = useState(false);

    const mutation = useMutation(async (postData) => {
        console.log(postData)
        return await axiosInstances.post('/blog/add-comment', postData)
    }, {
        onSuccess: () => {
            toast.success("Comment added successfully");
            setLoading(false);
            resetForm();
        },
        onError: () => {
            toast.error("Error while Commenting");
            setLoading(false)
        }
    });

    const resetForm = () => {
        setComment('');
    }

    const submitHandler = async (e) => {
        e.preventDefault();
        setLoading(true);
        const postData = {
            name,
            email,
            commentBody: comment,
            blogId
        }
        mutation.mutate(postData)
    }

    return (
        <div className='reply-form'>
            <h3>Leave a reply</h3>
            <h5>Already have an account? <Link to='/signin'>Sign in</Link> to leave a reply.</h5>
            <Form onSubmit={submitHandler}>
                <Row className='mt-4'>
                    <Col xl="6">
                        <TextInput
                            label="Name"
                            type="text"
                            value={name}
                            setValue={setName}
                            placeholder={"Name"}
                            disabled={isLoading}
                        />
                    </Col>

                    <Col xl="6">
                        <TextInput
                            label="Email"
                            type="text"
                            value={email}
                            setValue={setEmail}
                            placeholder={"Email"}
                            disabled={isLoading}
                        />
                    </Col>
                </Row>
                <Row className='mt-2' xl="12">
                    <TextAreaInput
                        label="Comment"
                        row={5}
                        value={comment}
                        disabled={isLoading}
                        setValue={setComment}
                        placeholder={"Comment"}
                    />
                </Row>
                <Row className="w-30 send-btn mt-2">
                    <Button
                        type="submit"
                        size='sm'
                        disabled={isLoading}
                    >
                        {
                            isLoading ?
                                <Spinner
                                    variant='light'
                                    animation='border'
                                    size='sm'
                                /> :
                                'Send Comment'
                        }
                    </Button>
                </Row>
            </Form>
        </div>
    )
}

export default ReplyForm
