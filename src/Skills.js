import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { TextCenter } from "react-bootstrap-icons";

function Skills() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 5,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 4,
    },
  };
  return (
    <div id="skills">
      <section className="skill">
        <Container>
          <Row>
            <Col>
              <div className="skill-fix">
                <h2 className=" align-item-center text-center">
                  My Technical Skills
                </h2>
                <p className="align-item-center">
                  A brief summary of my primary technical skill set and tools is
                  provided below.
                </p>

                <section id="counter" class="sec-padding">
                  <div className="container">
                    <div className="row grid gap-2">
                      <div className="p-2 col-md-2 inner-div">
                        <div className="count responsive-md">
                          <img src="html-icon.webp" alt="Html" />
                          <h4>HTML5</h4>
                        </div>
                      </div>
                      <div className="p-2 col-md-2 inner-div">
                        <div className="count">
                          <img src="css-icon.png" alt="CSS" />
                          <h4>CSS</h4>
                        </div>
                      </div>
                      <div className="p-2 col-md-2 inner-div">
                        <div className="count">
                          <img src="c-program-icon.png" alt="C" />
                          <h4>C</h4>
                        </div>
                      </div>
                      <div className="p-2 col-md-2 inner-div ">
                        <div className="count">
                          <img src="sql-icon.png" alt="SQL" />
                          <h4>SQL</h4>
                        </div>
                      </div>
                      <div className="p-2 col-md-2 inner-div ">
                        <div className="count">
                          <img src="angular-icon.png" alt="Angular" />
                          <h4>Angular</h4>
                        </div>
                      </div>
                      <div className="p-2 col-md-2 inner-div ">
                        <div className="count">
                          <img src="bootstrap-5-icon.png" alt="Bootstrap" />
                          <h4>Bootstrap</h4>
                        </div>
                      </div>
                      <div className="p-2 col-md-2  inner-div">
                        <div className="count">
                          <img src="java-icon.png" alt="java" />
                          <h4>Java</h4>
                        </div>
                      </div>
                      <div className="p-2 col-md-2 inner-div">
                        <div className="count">
                          <img src="Spring_Boot.png" alt="springboot" />
                          <h4>SpringBoot</h4>
                        </div>
                      </div>
                      <div className="p-2 col-md-2 inner-div">
                        <div className="count">
                          <img src="react-js-icon.png" alt="ReactJS" />
                          <h4>ReactJS</h4>
                        </div>
                      </div>
                      <div className="p-2 col-md-2 inner-div">
                        <div className="count">
                          <img src="mysql.png" alt="MySql" />
                          <h4>MySQL</h4>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Skills;
