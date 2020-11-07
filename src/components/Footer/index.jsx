import React from 'react';

import './styles.css';

function Footer(){
  return(
    <>
      <footer className="footer text-center">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="mb-4">ENDEREÇO</h4>
                    <p className="pre-wrap lead mb-0">Av. João Naves de Ávila, 2121<br />Universidade Federal de Uberlândia</p>
                </div>
                <div className="col-lg-4 mb-5 mb-lg-0">
                    <h4 className="mb-4">REDES SOCIAIS</h4><a className="btn btn-outline-light btn-social mx-1" href="https://www.facebook.com/AtleticadaEngenharia"><i className="fab fa-fw fa-facebook-f"></i></a><a className="btn btn-outline-light btn-social mx-1" href="https://discord.gg/bpWW8Tk6"><i className="fab fa-fw fa-discord"></i></a>
                </div>
                <div className="col-lg-4">
                    <h4 className="mb-4">SELETIVAS</h4>
                    <p className="pre-wrap lead mb-0">As seletivas ocorrem todo início de semestre, fique atento em nossas redes sociais para saber mais. Venha fazer parte da MAIOR atlética de Minas Gerais.</p>
                </div>
            </div>
          </div>
        </footer>
        <section className="copyright py-4 text-center text-white">
          <div className="container"><small className="pre-wrap">Copyright © AAAE 2020 </small></div>
        </section>
    </>
  );
}

export default Footer;