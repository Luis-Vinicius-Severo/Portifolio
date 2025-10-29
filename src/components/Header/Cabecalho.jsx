import React, { useState } from 'react';
import styles from './Cabecalho.module.css';

const Cabecalho = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  const fecharMenu = () => {
    setMenuAberto(false);
  };

  return (
    <header className={styles.cabecalho}>
      <nav className={`${styles.navegacao} container`}>
        <a href="#inicio" className={styles.logo} onClick={fecharMenu}>
          Luis Vinicius
        </a>

        <div className={`${styles.menu} ${menuAberto ? styles.menuAberto : ''}`}>
          <a href="#inicio" className={styles.link} onClick={fecharMenu}>
            Início
          </a>
          <a href="#sobre" className={styles.link} onClick={fecharMenu}>
            Sobre
          </a>
          <a href="#projetos" className={styles.link} onClick={fecharMenu}>
            Projetos
          </a>
          <a href="#contato" className={styles.link} onClick={fecharMenu}>
            Contato
          </a>
        </div>

        <button
          className={styles.botaoMenu}
          onClick={() => setMenuAberto(!menuAberto)}
          aria-label="Alternar menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </nav>
    </header>
  );
};

export default Cabecalho;
