import { useState } from "react";
import Home from './Pages/home';
import Contact from "./Pages/contact.js";
import Header from './Component/header';
import Footer from './Component/footer';
import './Component/header.css';
import './Component/footer.css';
import './App.css';
import './Component/PersonalizedBtn.css';
import PersonalizedBtn from './Component/PersonalizedBtn';

function App() {
  let [currentPage, setCurrentPage] = useState('home');
  let switchPage = () => {setCurrentPage(previousPage => (previousPage === 'home' ? 'contact' : 'home'));};
  let Page = currentPage === 'home' ? < Home/> : <Contact/>;
  
  // NAv effect 
  const navLinks = document.querySelectorAll("header ul li");
  navLinks.forEach((link) => {
  if (link.textContent.toLowerCase() === currentPage) {
    link.classList.add("underline");
  } else {
    link.classList.remove("underline"); 
  }
  });
  // add Color changer
  return (
    <div className="App">
        <Header />
        <div className="App-content">
            {Page}
            <PersonalizedBtn onClick={switchPage} Name="Click Me" BgColor={"rgba(224, 2, 102, 0.902)"} className = "btn"/> 
        </div>
        <Footer />
    </div>
  );
}

export default App;
