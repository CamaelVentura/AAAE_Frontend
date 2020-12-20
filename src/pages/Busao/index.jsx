import React, {Component} from 'react';
import api from '../../services/api';
import Menu from '../../components/Menu';

import maiorAtletica from '../../assets/images/a maior atletica na cia.png';
import './styles.css';
import ModalBusao from '../../components/ModalBusao';

import { Form } from 'react-bootstrap';

class Busao extends Component { 

  constructor(props) {
    super(props);
    this.state = {
        name: '',
        tel: '',
        cpf: '',
        bus: '',
        show: false,
        hideConfirm: true,        
        tituloModal: "Titulo",
        textoModal: "Corpo",
        cancelModal: "Cancelar",
        okModal: "Ok",      
    };
  }

  setNome = e => {
    this.setState({name : e.target.value});
  }

  setTelefone = e => {
    this.setState({tel : e.target.value});
  }

  setCPF = e => {
    this.setState({cpf : e.target.value});
  }

  setBusao = (busao) => {
    this.setState({bus : busao});
  }

  sendValues = async (ok) => {
     if(this.state.bus !== ""){
      try {
        await api.put('/onibus', {
          cpf:this.state.cpf,
          name: this.state.name,
          tel: this.state.tel,
          bus:this.state.bus,
          ok: ok,
        }); 
        const message = this.state.name+", você está agora no "+this.state.bus+"."; 
        this.setState({
          show:true,
          tituloModal: "Cadastro efetuado",
          textoModal: message,
          cancelModal: "Fechar",
          name: '',
          tel: '',
          cpf: '',
          bus: '',
        });
      }
      catch(error){
        this.setState({show:true}); 
        var message = error.response.data.error;
        if(message === "CPF já cadastrado em outro busão!"){
          message = message + " Deseja trocar de busão?";
          this.setState({
            show:true,
            tituloModal: "Erro no envio",
            textoModal: message,
            cancelModal: "Fechar",
            okModal: "Confirmar",
            hideConfirm: false,
          });
        }
        if(message === "CPF não encontrado!"){
          this.setState({
            show:true,
            tituloModal: "Erro no envio",
            textoModal: message,
            cancelModal: "Fechar",
          });
        }
      }
    }
    else {
      const message = "Você precisa escolher um Busão.";
      this.setState({
        show:true,
        tituloModal: "Erro no envio",
        textoModal: message,
        cancelModal: "Fechar",
      });
    }
  }

  resendValues = () => {
    this.sendValues(true);
    this.setState({
      hideConfirm:true
    });
  }

  setVisible = () => {
    this.setState({show: !this.state.show});
  }

  render(){
    return (
      <>
        <Menu />
            
        <div className="busao">
            <div className="container">                  
                <h2> Passo 1:</h2>
                <p> Escolha um busão </p>               
                <div className="row mb-5">
                    <div className="col ml-auto centralizando lg-5-responsive">                        
                        <button className="botao"  onClick={() => this.setBusao('Busao do Antonio')}>Busao do Antonio</button>
                    </div>
                    <div className="col-lg-5 centralizando lg-5-responsive">
                        <button className="botao" onClick={() => this.setBusao('Busao do Arthur')}>Busao do Arthur</button>
                    </div>
                </div>
                <div className="row mb-5 text-center">
                    <div className="col lg-5-responsive">
                        <button className="botao" onClick={() => this.setBusao('Busao do Bernardo')}>Busao do Bernardo</button>
                    </div>
                </div>
                <div className="row mb-5">
                    <div className="col ml-auto centralizando lg-5-responsive">
                        <button className="botao" onClick={() => this.setBusao('Busao do Camael')}>Busao do Camael</button>
                    </div>
                    <div className="col-lg-5 centralizando lg-5-responsive">
                        <button className="botao" onClick={() => this.setBusao('Busao do Izabella')}>Busao da Izabella</button>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                          <h2>Passo 2:</h2>
                          <p>Complete com suas informações</p>
                          <div className="mb-4">
                            <Form.Label>Nome:</Form.Label>
                            <Form.Control 
                                className="txtNome" 
                                value={this.state.name}
                                onChange={this.setNome}
                                placeholder="Digite o seu nome" />
                          </div>
                          <div className="mb-4">
                            <Form.Label>Telefone:</Form.Label>
                            <Form.Control 
                                className="txtTelefone" 
                                value={this.state.tel}
                                onChange={this.setTelefone}
                                placeholder="Digite o seu telefone" />
                          </div>
                          <div className="mb-4">
                          <Form.Label>CPF:</Form.Label>
                            <Form.Control 
                                className="txtCPF" 
                                value={this.state.cpf}
                                onChange={this.setCPF}
                                placeholder="Digite o seu CPF" />  
                          </div>
                          <button style={{ width: '150px', margin: '2px', float: 'left'}}
                            onClick={() => this.sendValues(false)}>Confirmar</button>                        
                    </div>
                    <div className="col ">
                          <img width={575} src={maiorAtletica} sizes={2} alt="Maior atlética na CIA"/>
                    </div>
                </div>                    
            </div>
          </div>


          <ModalBusao 
            showModal={this.state.show} 
            setVisible={this.setVisible} 
            hideConfirm={this.state.hideConfirm} 
            tituloModal={this.state.tituloModal}
            textoModal={this.state.textoModal}
            cancelModal={this.state.cancelModal}
            okModal={this.state.okModal}
            resendValues={this.resendValues} 
            />
        </>          
    );
  }

}

export default Busao;