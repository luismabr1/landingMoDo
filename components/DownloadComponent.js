import React from 'react';
import { Container } from 'react-bootstrap';

const DownloadComponent = () => {
    return (
        <div className='download-container-bg'>
            <Container className='download-container'>
                <h3>Get Food With MoDo</h3>
                <h3>Download App</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            </Container>
            <Container className='img-download'>
                <img className='img-fluid' src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="" />
                <img className='img-fluid' src="https://i2.wp.com/mofc.unic.ac.cy/wp-content/uploads/revslider/decentralized-2020-home-slider1-12/get-it-on-app-store.png?ssl=1" alt="" />
            </Container>
        </div>
    );
}; 

export default DownloadComponent;