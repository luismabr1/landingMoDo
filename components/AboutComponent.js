import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const AboutComponent = () => {
    return (
        <div>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <img className='img-fluid' src="/assets/image-about.png" alt="" />
                    </Col>
                    <Col xs={12} md={6} className="about-details">
                        <div>
                            <h2>Best Offer Town</h2>
                            <b>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</b>
                            <p> Odit fugit placeat accusamus ad accusantium! Ratione placeat odit officia ab quaerat, cum voluptates ut ipsa possimus dicta earum praesentium? Necessitatibus, voluptate!</p>
                            <button className="btn btn-custom">Explore More!</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutComponent;<Container>
<Row>
    <Col>
    </Col>
</Row></Container>