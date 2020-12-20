import React, {Component} from 'react';

import {Modal,Button} from 'react-bootstrap';

class ModalBusao extends Component {
  constructor(props) {
    super(props);
    this.state ={};
  }
  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.setVisible}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.tituloModal}</Modal.Title>
          </Modal.Header>
          <Modal.Body>{this.props.textoModal}</Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.setVisible}>
              {this.props.cancelModal}
              </Button>
            <Button variant="primary" onClick={this.props.resendValues} hidden={this.props.hideConfirm}>
              {this.props.okModal}
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default ModalBusao;