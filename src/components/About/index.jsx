import React from 'react';

function About(){
  return(
    <section className="page-section bg-primary text-white mb-0" id="about">
      <div className="container">
          <div className="text-center">
              <h2 className="page-section-heading d-inline-block text-white">SOBRE</h2>
          </div>
          <div className="divider-custom divider-light">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
              <div className="divider-custom-line"></div>
          </div>
          <div className="row">
              <div className="col-lg-4 ml-auto">
                  <p className="pre-wrap lead">Fundada em 1972, a Associação Atlética Acâdemica da Faculdade Federal de Engenharia da Universidade de Uberlândia (AAAFFEUU) representa esportivamente todos os discentes matriculados nos cursos de graduação e pós graduação da UFU em Uberlândia.</p>
              </div>
              <div className="col-lg-4 mr-auto">
                  <p className="pre-wrap lead">A Atlética da Engenharia acumula muitas vitórias em campeonatos esportivos ao longo de sua história. Atual pentacampeã invicta da Copa Inter Atléticas, também conta com 20 títulos da Olimpíada Universitária da UFU e muitos outros! Visite a sede no bloco 1B para saber mais sobre a nossa história.</p>
              </div>
          </div>
      </div>
    </section>
  );
}

export default About;