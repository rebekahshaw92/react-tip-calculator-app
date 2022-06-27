import React, { Component } from 'react';
import { Row, Col, Button } from 'react-bootstrap';

class TipDisplay extends Component {
    render(){
        return (
            <Col lg={6}>
                <div className="tipAmount">
                    <Row>
                        <Col xs={8}>
                            <h6 className="tipAmountTitle">Tip Amount</h6>
                            <h7 className="person">/ person</h7>
                        </Col>
                        <Col xs={4}>
                            <h2 className="amount">$0.00</h2>
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={8}>
                        <h6 className="totalTitle">Total</h6>
                        <h7 className="person">/ person</h7>
                        </Col>
                        <Col xs={4}>
                        <h2 className="amount totalAmount">$0.00</h2>
                        </Col>
                    </Row>
                   <Button className="btn reset">Reset</Button>
                    </div>
            </Col>
        )
    }
}

export default TipDisplay;