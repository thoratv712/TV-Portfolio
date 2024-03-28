import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Banner from './Banner';
import Skills from './Skills';
import Projects from './Projects';
import { Contact } from './Contact';
import Footer from './Footer';

function App() {
  return (
    <div className="App bg">
{/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}

<div className="navbar fixed-top" >
<NavBar/>
</div>
   
     <Banner/>
     <Skills/>
     <Projects/>
     <Contact/>
     <Footer/>
 </div>
  );
}

export default App;
