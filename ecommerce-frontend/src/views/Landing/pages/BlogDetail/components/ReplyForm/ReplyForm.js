import React, { useState } from 'react';
import { Button, Col, Form, Row, Spinner } from 'react-bootstrap';
import { useMutation } from 'react-query';
import { Link } from 'react-router-dom';
import axiosInstances from '../../../../../../helper/axios';
import TextAreaInput from '../../../../components/TextAreaInput/TextAreaInput';
import { toast } from 'react-toastify';
import { Formik } from 'formik';

import TextInput from '../../../../components/TextInput/TextInput';
import PropTypes from 'prop-types';

//validation
import { replyFormValidation } from './ReplyFormValidation';

const ReplyForm = ({ blogId, blogComments, setBlogComments }) => {
    const [isLoading, setLoading] = useState(false);

    const mutation = useMutation(async (postData) => {
        console.log(postData)
        return await axiosInstances.post('/blog/add-comment', postData)
    }, {
        onSuccess: (res) => {
            const newComment = res.data.comment;
            setBlogComments([newComment, ...blogComments]);
            toast.success("Comment added successfully");
            setLoading(false);
        },
        onError: () => {
            toast.error("Error while Commenting");
            setLoading(false)
        }
    });

    return (
        <div className='reply-form'>
            <h3>Leave a reply</h3>
            <h5>Already have an account? <Link to='/signin'>Sign in</Link> to leave a reply.</h5>
            <Formik
                initialValues={{ name: "", email: "", comment: "" }}
                validationSchema={replyFormValidation}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    setLoading(true);
                    const postData = {
                        name: values.name,
                        email: values.email,
                        commentBody: values.comment,
                        blogId
                    }
                    mutation.mutate(postData);
                    resetForm();
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }
                ) => (
                    <Form onSubmit={handleSubmit}>
                        <Row className='mt-4'>
                            <Col xl="6">
                                <TextInput
                                    name="name"
                                    label="Name"
                                    type="text"
                                    value={values.name}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    placeholder={"Name"}
                                    disabled={isLoading}
                                    touched={touched.name}
                                    errors={errors.name}
                                />
                            </Col>

                            <Col xl="6">
                                <TextInput
                                    name="email"
                                    label="Email"
                                    type="text"
                                    value={values.email}
                                    handleChange={handleChange}
                                    handleBlur={handleBlur}
                                    placeholder={"Email"}
                                    disabled={isLoading}
                                    touched={touched.email}
                                    errors={errors.email}
                                />
                            </Col>
                        </Row>
                        <Row className='mt-2' xl="12">
                            <TextAreaInput
                                name="comment"
                                label="Comment"
                                row={5}
                                value={values.comment}
                                disabled={isLoading}
                                handleChange={handleChange}
                                handleBlur={handleBlur}
                                placeholder={"Comment"}
                                touched={touched.comment}
                                errors={errors.comment}
                            />
                        </Row>
                        <div className="w-30 send-btn mt-2">
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
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

ReplyForm.propTypes = {
    blogId: PropTypes.string.isRequired,
    blogComments: PropTypes.array.isRequired,
    setBlogComments: PropTypes.func
}

export default ReplyForm
