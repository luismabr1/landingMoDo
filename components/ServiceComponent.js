import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';

const ServiceComponent = () => {
    return (
        <div className='service-container-bg'>
            <Container className='service-container'>
                <Row>
                    <Col xs={12} md={4}>
                        <img className="img-fluid service-img" src="/assets/image-one.png" alt="" />
                        <h2>Best Offer In Town</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis unde minima saepe. Molestias hic odit alias. Optio nesciunt veniam neque, odio architecto dolorem blanditiis quo esse debitis nemo necessitatibus inventore?</p>
                    </Col>
                    <Col xs={12} md={4}>
                    <img className="img-fluid service-img" src="/assets/image-two.png" alt="" />
                        <h2>Fast Delivery</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis unde minima saepe. Molestias hic odit alias. Optio nesciunt veniam neque, odio architecto dolorem blanditiis quo esse debitis nemo necessitatibus inventore?</p>
                    </Col>
                    <Col xs={12} md={4}>
                    <img className="img-fluid service-img" src="/assets/image-three.png" alt="" />
                        <h2>Fast Delivery</h2>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis unde minima saepe. Molestias hic odit alias. Optio nesciunt veniam neque, odio architecto dolorem blanditiis quo esse debitis nemo necessitatibus inventore?</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default ServiceComponent;