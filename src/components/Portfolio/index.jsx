import React from 'react';

import './styles.css';

import modeloGoleiro from '../../assets/images/portfolio/Modelo goleiro.png';
import modeloLinha from '../../assets/images/portfolio/modelo linha.png';
import modeloXadres from '../../assets/images/portfolio/Modelo Xadrez.png';

import ModalProduto from '../ModalProduto';


function Portfolio(){
    const [open_modal0, setOpenModal0] = React.useState(false);
    const [open_modal1, setOpenModal1] = React.useState(false);
    const [open_modal2, setOpenModal2] = React.useState(false);
    const handleOpenModal0 = () => {
        setOpenModal0(true);
    };
    const handleOpenModal1 = () => {
        setOpenModal1(true);
    };
    const handleOpenModal2 = () => {
        setOpenModal2(true);
    };

    const handleClose = () => {
        setOpenModal0(false);
        setOpenModal1(false);
        setOpenModal2(false);
    };


  return(
    <>
      <section className="page-section portfolio" id="portfolio">
        <div className="container">
            <div className="text-center">
                <h2 className="page-section-heading text-secondary mb-0 d-inline-block">PRODUTOS</h2>
            </div>
            <div className="divider-custom">
                <div className="divider-custom-line"></div>
                <div className="divider-custom-icon"><i className="fas fa-star"></i></div>
                <div className="divider-custom-line"></div>
            </div>
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal" onClick={handleOpenModal0}>
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div><img className="img-fluid" src={modeloGoleiro} alt="UNIFORME LANÇAMENTO - GOLEIRO"/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal"  onClick={handleOpenModal1}>
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div><img className="img-fluid" src={modeloLinha} alt="UNIFORME LANÇAMENTO"/>
                    </div>
                </div>
                <div className="col-md-6 col-lg-4 mb-5">
                    <div className="portfolio-item mx-auto" data-toggle="modal" data-target="#portfolioModal" onClick={handleOpenModal2}>
                        <div className="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
                            <div className="portfolio-item-caption-content text-center text-white"><i className="fas fa-plus fa-3x"></i></div>
                        </div><img className="img-fluid" src={modeloXadres} alt="UNIFORME XADREZ"/>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <ModalProduto onClose={handleClose} open={open_modal0} titulo='UNIFORME LANÇAMENTO - GOLEIRO' descricao='Camiseta de goleiro do novo uniforme lançado em 2020.' imagem={modeloGoleiro} />
    <ModalProduto onClose={handleClose} open={open_modal1} titulo='UNIFORME LANÇAMENTO' descricao='Nova camiseta de uniforme lançada em 2020.' imagem={modeloLinha} />
    <ModalProduto onClose={handleClose} open={open_modal2} titulo='UNIFORME XADREZ' descricao='Novo modelo do uniforme de Xadrez. Mais moderno, mais bonito, mais ENGENHARIA.' imagem={modeloXadres} />
    </>
  );
}

export default Portfolio;