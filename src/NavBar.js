import React, { useEffect, useState } from 'react';
import { Navbar ,Container,Nav } from 'react-bootstrap';


function NavBar() {
    const [activeLink ,setActiveLink] = useState('home');
    const [scrolled, setScrolled ] = useState(false);

    useEffect({} =() => {
        if(window.scrollY > 50){
            setScrolled(true);
        }else{
            setScrolled(false);
        }

          // Check if there's a hash in the URL
      if (window.location.hash) {
        // Extract the hash value (excluding the '#' symbol)
        const hash = window.location.hash.slice(1);
        // Update the active link based on the hash
        setActiveLink(hash);
    }
        window.addEventListener("scroll",onscroll);

        return () => window.removeEventListener("scroll"  , onscroll
        );
    },[])


    


    const onUpdateActiveLink = (value) =>{
        setActiveLink(value);
    }
  return (
    <div>
       <Navbar expand="lg" className={
        scrolled ? "scrolled" : ""
       } >
      <Container>
        <Navbar.Brand href="#home">
           <img src="plogo.png" alt="Logo"  />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className='pos-f-t  ' style={{border:"1px solid white"}} >
            <span className="navbar-toggle-icon "></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link  href="/" className = { activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink("home")}>Home</Nav.Link>
            <Nav.Link href="#skills"  className = { activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink("skills")}>Skills</Nav.Link>
            <Nav.Link href="#projects"  className = { activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink("projects")}>Projects</Nav.Link>
            {/* <Nav.Link href="#certificate"  className = { activeLink === 'certificate' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink("certificate")}>Certification</Nav.Link> */}
            <Nav.Link href="#contact"  className = { activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink("contact")}>Contact</Nav.Link> 
          </Nav>

          <span className="navbar-text">
            <div className="social-icon">
                <a href="https://www.linkedin.com/in/vaishnavithorat/" target='_blank' > <img src='LinkedInLogo.png'/> </a>
                <a href="https://wa.me/9325042123" target='_blank'><img src='whatsappLogo.png'/></a>
                <a href="mailto:thoratv795@gmail.com" target='_blank'><img src='EmailLogo.png'/></a>
                <a href="https://t.me/TVaishnavi" target="_blank"><img src="t-icon.png" alt="Telegram" /></a>
            </div>
            <button className='vvd' onClick={() => alert("connect")}>Lets Connect</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavBar;
