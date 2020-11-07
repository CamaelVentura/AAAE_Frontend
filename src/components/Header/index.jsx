import React from 'react';

import './styles.css';

import logoAtletica2 from '../../assets/images/Logo atletica 2.png';

function Header(){
  return(
    <header className="masthead bg-primary text-white text-center">
        <div className="container d-flex align-items-center flex-column">
            <img className="masthead-avatar mb-5" src={logoAtletica2} alt="" />
            <h1 className="masthead-heading mb-0">ATLÉTICA ENGENHARIA</h1>
            <div className="divider-custom divider-light">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            <p className="pre-wrap masthead-subheading font-weight-light mb-0">A MAIOR ATLÉTICA DE MINAS GERAIS</p>
        </div>
    </header>
  );
}

export default Header;