import React, {Component} from 'react';

import Menu from '../../components/Menu';
import Header from '../../components/Header';
import Portfolio from '../../components/Portfolio';
import About from '../../components/About';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

class PaginaInicial extends Component {  
  componentDidMount() {
    window.addEventListener('scroll', this.listenToScroll);    
  }
  componentWillMount(){
    window.removeEventListener('scroll', this.listenToScroll);
  }
  listenToScroll = () => {
    let portfolio = document.getElementById("portfolio");
    let about = document.getElementById("about");
    let contact = document.getElementById("contact");

    var n = document.getElementsByClassName("nav-link");
    for(let i = 0; i<n.length;i++){
      n[i].classList.remove('active');
    }

    if (window.scrollY > 100) {
      document.getElementById("mainNav").classList.add("navbar-shrink");
    } else {
      document.getElementById("mainNav").classList.remove("navbar-shrink");
    }
    if(window.scrollY > (portfolio.offsetTop - 71) && window.scrollY < (about.offsetTop - 75)){
      n[0].classList.add('active');
    }
    if(window.scrollY > (about.offsetTop - 75) && window.scrollY < (contact.offsetTop - 75)){
      n[1].classList.add('active');
    }
    if(window.scrollY > (contact.offsetTop - 75)){
      n[2].classList.add('active');
    }
  }

  render(){
    return (
      <>
        <Menu />
        <Header />
        <Portfolio />
        <About />          
        <Contact />
        <Footer />  
      </>
    );
  }
}

export default PaginaInicial;
