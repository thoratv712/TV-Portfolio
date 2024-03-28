import React from 'react'
import { Col, Container, Modal, Row } from 'react-bootstrap';

function Footer() {
  return (
    <>
      <div className='align-item-center f-container'  >
        <Row >
            <Col className='logo'>
               <img src="plogo.png" alt="LOGO"  />
            </Col>
           
        </Row>
        <Row>
            <Col >
                <div className="linklist">
                    <a href="#banner">Home   </a> |
                    <a href="#skills"> Skills   </a> |
                    <a href="#projects"> Projects   </a> |
                    <a href="#contact"> Contact   </a>
                </div>
            </Col>
        </Row>
        <Row className=' social-icon-list ' >
            <Col>
            <div className=" f-social-icon "  >
            <a href="https://www.linkedin.com/in/vaishnavithorat/" target='_blank'> <img src='LinkedInLogo.png'/> </a>
                <a href="https://wa.me/9325042123" target='_blank'><img src='whatsappLogo.png'/></a>
                <a href="mailto:thoratv795@gmail.com" target='_blank'><img src='EmailLogo.png'/></a>
                <a href="https://t.me/TVaishnavi" target="_blank"><img src="t-icon.png" alt="Telegram" /></a>

               
            </div>
            </Col>
        </Row>
        <Row>
            <Col>
                <p>Copyright ©2024 All rights Reserved| This template is made by Vaishnavi Thorat</p>
            </Col>
        </Row>
      
      </div>
    </>
  )
}

export default Footer;
