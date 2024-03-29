import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

function Projects() {
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [showModal3, setShowModal3] = useState(false);

  const handleClose = (modalNumber) => {
    switch (modalNumber) {
      case 1:
        setShowModal1(false);
        break;
      case 2:
        setShowModal2(false);
        break;
      case 3:
        setShowModal3(false);
        break;
      default:
        break;
    }
  };

  const handleShow = (modalNumber) => {
    switch (modalNumber) {
      case 1:
        setShowModal1(true);
        break;
      case 2:
        setShowModal2(true);
        break;
      case 3:
        setShowModal3(true);
        break;
      default:
        break;
    }
  };

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div id="projects">
      <section className="skill" id="skills">
        <div className="container  ">
          <div className="row">
            <div className="col-12 ">
              <div className="skill-fix wow zoomIn ">
                <h2>Projects</h2>
                <p>
                Below are the projects that I have completed, showcasing my skills and knowledge in various areas.
                </p>
                <Carousel
                  responsive={responsive}
                  infinite={true}
                  className="owl-carousel owl-theme skill-slider"
                >
                  <div className="item" onClick={() => handleShow(1)}>
                    <img src="girl.jpg" alt="Image" />
                    <h5>Hotel Room Booking (DreamStay)</h5>
                  </div>
                  <div className="item" onClick={() => handleShow(2)}>
                    <img src="MyPortfolio.png" alt="Image" />
                    <h5>Portfolio Website</h5>
                  </div>
                  <div className="item" onClick={() => handleShow(3)}>
                    <img src="FPDB.png" alt="Image" />
                    <h5>Fake product Identification System using Blockchain</h5>
                  </div>
                  {/* <div className="item">
                                <img src="girl.jpg" alt="Image" />
                                <h5>Web Development</h5>
                            </div> */}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
        {/* <img className="background-image-left" src="CIcon.png" alt="Image" /> */}
      </section>

      {/* Modal*/}

      {/* <Modal show={show} onHide={handleClose}  size="lg"
      aria-labelledby="contained-modal-title-v
      center"
      centered
      className="custom-modal" >
        <Modal.Header closeButton>
          <Modal.Title>Fake product Identification System using Blockchain</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-body'> 
          <h6> This is my project from last year, which uses blockchain technology to identify counterfeit products. This project is being developed using Solidity, Truffle, Metamask, and ReactJS.
          This system enhances product authentication, provides end-to-end supply chain transparency, empowers consumers to make informed choices, promotes global collaboration, and enables data-driven decision-making. With increased trust, security, and efficiency, this system helps create a safer marketplace for both businesses and consumers.
          </h6>
          <img src="FPDB.png" alt="fake Product Identification"  className='modal-img' />

      </Modal.Body>
        <Modal.Footer className='navbar-text'>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
         
        </Modal.Footer>
      </Modal> */}

      <Modal
        show={showModal1}
        onHide={() => handleClose(1)}
        size="lg"
        centered
        className="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Hotel Room Booking System (DreamStay)</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <h6>
            {" "}
            A DreamStay website facilitates users in finding and reserving
            accommodations. Built a complete application using Angular for the
            user interface ,SpringBoot for backend logic and MySQL for data
            storage ,demonstrating expertise in end-to-end development.The
            website aims to provide a user-friendly interface for efficient
            browsing, selection, and booking of hotel rooms, enhancing the
            overall experience for both guests and hotel operators.Developed
            with Angular, SpringBoot, RestAPI, MySQL.
            <div className="social-icon s-margin">
            <a href="https://github.com/thoratv712/fake-product-identification-system" target="_blank">
              <img src="github.png" alt="Github" className="github" />
            </a>
            </div>
           
          </h6>

          <img src="girl.jpg" alt="DreamStay" className="modal-img" />
        </Modal.Body>
        <Modal.Footer className="navbar-text">
          <Button variant="secondary" onClick={() => handleClose(1)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showModal2}
        onHide={() => handleClose(2)}
        size="lg"
        centered
        className="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>Portfolio Website</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <h6>
          {" "}
            Built and designed a user interface that is responsive. Developed
            with ReactJs, HTML, CSS, Javascript.
            <div className="social-icon s-margin">
            <a href="https://github.com/thoratv712/TV-Portfolio" target="_blank">
              <img src="github.png" alt="Github" className="github" />
            </a>
            </div>
          </h6>
          <img src="MyPortfolio.png" alt="DreamStay" className="modal-img" width={'500px'}/>
        </Modal.Body>
        <Modal.Footer className="navbar-text">
          <Button variant="secondary" onClick={() => handleClose(2)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={showModal3}
        onHide={() => handleClose(3)}
        size="lg"
        centered
        className="custom-modal"
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Fake product Identification System using Blockchain
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <h6>
            {" "}
            This is my project from last year, which uses blockchain technology
            to identify counterfeit products. This project is being developed
            using Solidity, Truffle, Metamask, and ReactJS. This system enhances
            product authentication, provides end-to-end supply chain
            transparency, empowers consumers to make informed choices, promotes
            global collaboration, and enables data-driven decision-making. With
            increased trust, security, and efficiency, this system helps create
            a safer marketplace for both businesses and consumers.
            <div className="social-icon s-margin">
            <a href="https://github.com/thoratv712/fake-product-identification-system" target="_blank">
              <img src="github.png" alt="Github" className="github" />
            </a>
            </div>
          </h6>
          <img
            src="FPDB.png"
            alt="fake Product Identification"
            className="modal-img"
          />
        </Modal.Body>
        <Modal.Footer className="navbar-text">
          <Button variant="secondary" onClick={() => handleClose(3)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Projects;
