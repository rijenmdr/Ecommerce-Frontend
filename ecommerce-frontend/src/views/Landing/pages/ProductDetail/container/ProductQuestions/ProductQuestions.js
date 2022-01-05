import React, { useState } from 'react'
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import TextAreaInput from '../../../../components/TextAreaInput/TextAreaInput';
import ProductQuestionAnswer from '../../components/ProductQuestionAnswer/ProductQuestionAnswer';

const ProductQuestions = () => {
    const [isLoggedIn] = useState(true);
    const [question, setQuestion] = useState('');

    const handleBlur = () => {

    }
    return (
        <div className='product-questions w-100'>
            <div className='product-questions-header'>
                {
                    !isLoggedIn ?
                        <h5><Link to="/login">Login</Link> or <Link to="/register">Register</Link> to ask question</h5>
                        :
                        <Row className='w-100 align-items-center'>
                            <Col lg="9">
                                <TextAreaInput
                                    name="question"
                                    label='Ask Any question about the product'
                                    row={5}
                                    value={question}
                                    handleChange={(e) => setQuestion(e.target.value)}
                                    handleBlur={handleBlur}
                                    placeholder='Ask any Question'
                                />
                            </Col>
                            <Col lg="3">
                                <Button
                                    size="sm"
                                >
                                    Ask Question
                                </Button>
                            </Col>
                        </Row>
                }
            </div>
            <div className='divider'></div>
            <div className='product-question-list mt-4'>
                <h3>Questions and Answer(10)</h3>
                <Row className='w-100 mt-4'>
                    <ProductQuestionAnswer />
                    <ProductQuestionAnswer
                        reply={true}
                    />
                    <ProductQuestionAnswer
                        reply={true}
                    />
                </Row>
            </div>
        </div>
    )
}

export default ProductQuestions
