import React from 'react';

function Contact(){
  return(
    <section className="page-section" id="contact">
      <div className="container">
          <div className="text-center">
              <h2 className="page-section-heading text-secondary d-inline-block mb-0">FALE COM A GENTE</h2>
          </div>
          <div className="divider-custom">
              <div className="divider-custom-line"></div>
              <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
              <div className="divider-custom-line"></div>
          </div>
          <div className="row justify-content-center">
              <div className="col-lg-4">
                  <div className="d-flex flex-column align-items-center">
                      <div className="icon-contact mb-3"><i className="far fa-envelope"></i></div>
                      <div className="text-muted">Email</div><a className="lead font-weight-bold" href="mailto:aaaeufu@gmail.com">aaaeufu@gmail.com</a>
                  </div>
              </div>
          </div>
      </div>
    </section>
  );
}

export default Contact;