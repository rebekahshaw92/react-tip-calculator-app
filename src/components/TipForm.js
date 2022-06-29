import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

import TipDisplay from './TipDisplay';

const TipForm = () => {

    const defaultState = {
        bill: 0,
        people: 0,
        tip: 0,
    }

    const [state, setState] = useState(defaultState);
    const [inputIsValid, setInputIsValid] = useState(true);
    const [buttonIsDisabled, setButtonIsDisabled] = useState(true);

    const [tipPerPerson, setTipPerPerson] = useState(0);
    const [totalPerPerson, setTotalPerPerson] = useState(0);

    const tipPercentage = [5, 10, 15, 20, 50];

    const handleInputChange = (e) => {
        const inputValue = e.target.value;
        const inputName = e.target.name;
    

    if (inputName === 'people' && inputValue === 0) {
        setInputIsValid(false);
    } else if (inputName === 'people' && inputValue !== 0) {
        setInputIsValid(true);
    }

    }
        return (
            <Row>
            <Col lg={6}>
                <Row>
                    <Col xs={7} lg={8}>
                        <h5 className="billTitle">Bill</h5>
                    </Col>
                    <Col xs={5} lg={4}>
                        <p className="errorBill"></p>
                    </Col>
                </Row>
                <Form.Group className="billInput mb-2">
                    <Form.Control type="text" className="bill form-control" placeholder="0.00" aria-label="0.00" aria-describedby="dollarIcon" />
                </Form.Group>
                <h5 className="tipTitle">Select Tip %</h5>
                <Row gap={0} className="d-flex">
                    <Col xs={5} lg={4}>
                        <Button className="btn percentage" value="5">5%</Button>
                    </Col>

                    <Col xs={5} lg={4}>
                        <Button className="btn percentage" value="10">10%</Button>
                    </Col>

                    <Col xs={5} lg={4}>
                        <Button className="btn percentage" value="15">15%</Button>
                    </Col>
                    <Col xs={5} lg={4}>
                        <Button className="btn percentage" value="25">25%</Button>
                    </Col>
                    <Col xs={5} lg={4}>
                        <Button className="btn percentage" value="50">50%</Button>
                    </Col>
                    <Col xs={4}>
                    <Form.Control type="text" className="custom form-control" placeholder="Custom" />
                    </Col>
                </Row>
                <Row>
                    <Col lg={8}>
                        <h5 className="numberTitle">Number of People</h5>
                    </Col>
                    <Col lg={4}>
                        <p className="errorPeople"></p>
                    </Col>
                </Row>

                <Form.Group className="peopleInput mb-2">
                <Form.Control type="text" className="people form-control" placeholder="5" aria-label="5" aria-describedby="dollarIcon" /> 
                </Form.Group>
            </Col>
            <TipDisplay />
    </Row>
        )
    }

export default TipForm;