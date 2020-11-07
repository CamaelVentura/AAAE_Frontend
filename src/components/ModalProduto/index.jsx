import React from 'react';
import {Modal, Backdrop, Fade} from '@material-ui/core';

import './styles.css';

function ModalTest(props){
  return(
    <>
      <Modal
        open={props.open}
        onClose={props.onClose}
        disableScrollLock
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
            timeout: 500,
        }}
        className="modal-geral"
      >
      <Fade in={props.open}>
        <div className="portfolio-modal modal fade show" id="portfolioModal" tabIndex="-1" role="dialog" style={{display: 'block'}} aria-labelledby="#portfolioModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-xl" role="document">
            <div className="modal-content">
              <button className="close" type="button" data-dismiss="modal" aria-label="Close" onClick={props.onClose}><span aria-hidden="true"><i className="fas fa-times"></i></span></button>
              <div className="modal-body text-center">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-lg-8">
                      <h2 className="portfolio-modal-title text-secondary mb-0">{props.titulo}</h2>
                      <div className="divider-custom">
                        <div className="divider-custom-line"></div>
                        <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                        <div className="divider-custom-line"></div>
                      </div>
                      <img className="img-fluid rounded mb-5" src={props.imagem} alt={props.titulo}/>
                      <p className="mb-5">{props.descricao}</p>
                      <button className="btn btn-primary" href="#" data-dismiss="modal"  onClick={props.onClose}><i className="fas fa-times fa-fw"></i>Close Window</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Fade>
      </Modal>
    </>

  );
}

export default ModalTest;