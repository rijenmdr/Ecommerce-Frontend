import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import TextAreaInput from '../../../../components/TextAreaInput/TextAreaInput';

import TextInput from '../../../../components/TextInput/TextInput';

const ReplyForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [comment, setComment] = useState('');

    return (
        <div className='reply-form'>
            <h3>Leave a reply</h3>
            <h5>Already have an account? <Link to='/signin'>Sign in</Link> to leave a reply.</h5>
            <Form>
                <Row className='mt-4'>
                    <Col xl="6">
                        <TextInput
                            label="Name"
                            type="text"
                            value={name}
                            setValue={setName}
                            placeholder={"Name"}
                        />
                    </Col>

                    <Col xl="6">
                        <TextInput
                            label="Email"
                            type="text"
                            value={email}
                            setValue={setEmail}
                            placeholder={"Email"}
                        />
                    </Col>
                </Row>
                <Row className='mt-2' xl="12">
                    <TextAreaInput
                        label="Comment"
                        row={5}
                        value={comment}
                        setValue={setComment}
                        placeholder={"Comment"}
                    />
                </Row>
                <Row className="w-30 send-btn mt-2">
                    <Button size='sm'>Send Comment</Button>
                </Row>
            </Form>
        </div>
    )
}

export default ReplyForm
