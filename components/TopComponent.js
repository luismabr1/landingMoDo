import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const TopComponent = () => {
    return (
        <>
            <div className="background"></div>
            <div className="texture">
                <Container className='container-top'>
                    <Row className='section-top'>
                        <Col xs={12} md={6} className='section-top-left'>
                            <img className='img-fluid' src='/assets/mobile.png' alt="" />
                        </Col>
                        <Col xs={12} md={6} className='section-top-right shadow'>
                            <div className='plate-img-container'></div>
                            <h6>MoDo</h6>
                            <h2>Get your Food In</h2>
                            <h1>MoDo</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, provident corporis itaque minus ipsam eum nesciunt ipsa impedit voluptatibus, natus in fugit voluptas quos, sed dolorum! Totam obcaecati ex sed?</p>
                            <button className='btn btn-custom'>Download App</button>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};



export default TopComponent;
