import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";

function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Full Stack Developer", "Web Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <div id="banner">
      <section className="banner" id="home">
        <Container>
          <Row className="align-item-center">
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to My Portfolio</span>
              <h2>Hi I am</h2>
              <h1>
                {" "}
                <span> Vaishnavi Thorat</span>
              </h1>
              <h2>
                <span className="wrap"> {text}</span>
              </h2>
              <p>
                Hi there, I'm Vaishnavi Thorat, and I enjoy creating things that
                live on internet. After completing a Full Stack Development
                course lately, I'm excited to start a career where I can use my
                talents, provide value to projects that are dynamic, and acquire
                priceless industry experience. Devoted to lifelong learning and
                the adoption of modern technologies, I am excited about the
                chance to develop and flourish in a challenging and innovative
                atmosphere.
              </p>
              <a href="/resume.pdf" download className="btn ">
                <i class="bi bi-download"></i> Resume
              </a>
              <button onClick={() => alert("Connect using social media")}>
                Let's Connect <ArrowRightCircle size={25} />{" "}
              </button>
            </Col>
            <Col xs={12} md={6} xl={5} className="profile">
            {/* <div class="blob"></div> */}
          

            
              <img src="Mypic2.jpg" alt="img"  />
             
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default Banner;
