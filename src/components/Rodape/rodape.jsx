import React from 'react';
import styles from './Rodape.module.css';

const Rodape = () => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className={styles.rodape}>
      <div className="container">
        <div className={styles.conteudoRodape}>
          <div className={styles.textoRodape}>
            <p>&copy; {anoAtual} Luis Vinicius. Todos os direitos reservados.</p>
          </div>
          <div className={styles.linksRodape}>
            <a href="#inicio" className={styles.linkRodape}>Início</a>
            <a href="#sobre" className={styles.linkRodape}>Sobre</a>
            <a href="#projetos" className={styles.linkRodape}>Projetos</a>
            <a href="#contato" className={styles.linkRodape}>Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Rodape;
