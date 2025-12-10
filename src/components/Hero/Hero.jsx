import React from 'react';
import styles from './Hero.module.css';
import Perfil from '/src/assets/perfil.jpg';

const Hero = () => {
  return (
    <section id="inicio" className={styles.hero}>
      <div className="container">
        <div className={styles.conteudoHero}>
          <div className={styles.textoHero}>
            <h1 className={styles.tituloPrincipal}>
              Olá, eu sou <span className={styles.destaque}>Luis Vinicius</span>
            </h1>
            <h2 className={styles.subtitulo}>Desenvolvedor Full Stack</h2>
            <p className={styles.descricao}>
              Crio experiências digitais incríveis com tecnologias modernas.
            </p>
            <div className={styles.botoesHero}>
              <a href="#projetos" className="botao botao-primario">
                Ver Projetos
              </a>
              <a href="#contato" className="botao botao-secundario">
                Entrar em Contato
              </a>
            </div>
          </div>
          <div className={styles.imagemHero}>
            <div className={styles.containerImagem}>
              <div className={styles.imagemPerfil}>
                <img src={Perfil} alt="Perfil" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
