import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Button } from 'react-bootstrap';

// import TipDisplay from './TipDisplay';

const TipForm = () => {

 const [bill, setBill] = useState('');
 const [numberOfPeople, setNumberOfPeople] = useState ('');
 const [totalAmount, setTotalAmount] = useState ('');
 const [tipAmount, setTipAmount] = useState ('');
 const [percentage, setPercentage] = useState ('');

 const handleBill = (e) => {
    if (e.target.value <= 0) {
        setBill('');
    } else {
        setBill(e.target.value);
    }
 }

 const handleNumberOfPeople = (e) => {
    if (e.target.value <= 0){
        setNumberOfPeople('');
    } else {
        setNumberOfPeople(e.target.value);
    }
 }

 const handlePercent = (e) => {
    if (e.target.value <= 0){
        setPercentage('');
    } else {
        setPercentage(e.target.value);
    }
 }

 const handleButton = (e) => {
    e.preventDefault();
    setPercentage('');
    setPercentage(e.target.value);
 }

 const handleReset = (e) => {
    e.preventDefault();
    setBill('');
    setNumberOfPeople('');
    setPercentage('');
    setTipAmount('');
    setTotalAmount('');
  }

 useEffect(() => {
    if (bill > 0 && numberOfPeople > 0 && percentage > 0) {
        const totalTip = +bill * (+percentage / 100);
        const totalBill = +bill + +totalTip;
        setTipAmount((+totalTip / +numberOfPeople).toFixed(2));
        setTotalAmount((+totalBill / +numberOfPeople).toFixed(2));
    } else {
        setTipAmount('0.00');
        setTotalAmount('0.00');
    }
 }, [bill, numberOfPeople, percentage]);

        return (
                <Row>
                    <Col lg={6}>
                        <Row>
                            <Col xs={7} lg={8}>
                                <h5 className="billTitle">Bill</h5>
                            </Col>
                        </Row>
                        <Form.Group className="billInput mb-2">
                            <Form.Control type="text" onChange={handleBill} value={bill} className="bill form-control" placeholder="0.00" aria-label="0.00" aria-describedby="dollarIcon" />
                        </Form.Group>
                        <h5 className="tipTitle">Select Tip %</h5>
                        <Row gap={0} className="d-flex">
                            <Col xs={5} lg={4}>
                                <Button className="btn percentage" onClick={handleButton} value={5}>5%</Button>
                            </Col>

                            <Col xs={5} lg={4}>
                        <Button className="btn percentage" onClick={handleButton} value={10}>10%</Button>
                    </Col>
                    <Col xs={5} lg={4}>
                        <Button className="btn percentage" onClick={handleButton} value={15}>15%</Button>
                    </Col>
                    <Col xs={5} lg={4}>
                        <Button className="btn percentage" onClick={handleButton} value={25}>25%</Button>
                    </Col>
                    <Col xs={5} lg={4}>
                        <Button className="btn percentage" onClick={handleButton} value={50}>50%</Button>
                    </Col>
                    <Col xs={4}>
                        <Form.Control type="text" className="custom form-control" value={percentage} onChange={handlePercent} placeholder="Custom" />
                    </Col>
                </Row>
                <Row>
                    <Col lg={8}>
                        <h5 className="numberTitle">Number of People</h5>
                    </Col>
                </Row>
                <Form.Group className="peopleInput mb-2">
                    <Form.Control type="text" value={numberOfPeople} onChange={handleNumberOfPeople} className="people form-control" placeholder="5" aria-label="5" aria-describedby="dollarIcon" />
                </Form.Group>
            </Col> 
            {/* <TipDisplay /> */}

            <Col lg={6}>
                <div className="tipAmount">
                    <Row>
                        <Col xs={8}>
                            <h6 className="tipAmountTitle">Tip Amount</h6>
                            <h7 className="person">/ person</h7>
                        </Col>
                        <Col xs={4}>
                            <h2 className="amount">${tipAmount}</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={8}>
                        <h6 className="totalTitle">Total</h6>
                        <h7 className="person">/ person</h7>
                        </Col>
                        <Col xs={4}>
                        <h2 className="amount totalAmount">${totalAmount}</h2>
                        </Col>
                    </Row>
                   <Button onSubmit={handleReset} className="btn reset">Reset</Button>
                    </div>
            </Col>
    </Row>
        );
    }

export default TipForm;