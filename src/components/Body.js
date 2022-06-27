import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

import TipForm from './TipForm';

class Body extends Component {
    render() {
        return (
            <div className="calculator">
                <Container>
                   <TipForm />
                </Container>
            </div>
        )
    }
}
export default Body;