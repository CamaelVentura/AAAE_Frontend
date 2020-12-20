import React from 'react';

import logoAtletica from '../../assets/images/Logo atletica site.png';
import './styles.css';

function Menu(){
  const manageCollapse = () => {
    if(document.getElementById("navbarResponsive").classList.contains("collapse")){
      document.getElementById("navbarResponsive").classList.remove("collapse");
    }
    else{
      document.getElementById("navbarResponsive").classList.add("collapse");
    }
  } 

  return(
    <nav className="navbar navbar-expand-lg bg-secondary fixed-top" id="mainNav">
      <div className="container">
        <a className="navbar-brand js-scroll-trigger" href="/#page-top">
          <img id="brandImage" src={logoAtletica} alt="" />
        </a>
        <button className="navbar-toggler navbar-toggler-right font-weight-bold bg-primary text-white rounded" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation" onClick={manageCollapse}>Menu <i className="fas fa-bars"></i></button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" onClick={manageCollapse} href="/#portfolio">PRODUTOS</a>
                </li>
                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" onClick={manageCollapse} href="/#about">SOBRE</a>
                </li>
                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" onClick={manageCollapse} href="/#contact">FALE COM A GENTE</a>
                </li>
                <li className="nav-item mx-0 mx-lg-1"><a className="nav-link py-3 px-0 px-lg-3 rounded js-scroll-trigger" href="/busao/">BUSÃO</a>
                </li>
            </ul>
        </div>
      </div>
    </nav>
  );
}

export default Menu;