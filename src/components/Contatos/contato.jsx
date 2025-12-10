import React from 'react';
import styles from './Contato.module.css';
import perfil from '../../assets/Contato3.svg';
import curriculoPdf from '../../assets/Curriculo/curriculoLuis.pdf';

const Contato = () => {
  return (
    <section id="contato" className={`secao ${styles.contato}`}>
      <div className="container">
        <div className={styles.conteudoContato}>
          <div className={styles.colunaFoto}>
            <div className={styles.containerFoto}>
              <img
                src={perfil}
                alt="Luis Vinicius - Desenvolvedor Full Stack"
                className={styles.fotoPerfil}
              />
            </div>
            <a
              href={curriculoPdf}
              download="CurriculoLuis.pdf"
              className={styles.botaoCurriculo}
            >
              Baixar Currículo
            </a>
          </div>

          <div className={styles.colunaInformacoes}>
            <h3 className={styles.tituloInformacoes}>Informações de Contato</h3>

            <div className={styles.infoItem}>
              <strong className={styles.rotuloInfo}>Email</strong>
              <a
                href="mailto:luislucasinter13@hotmail.com"
                className={styles.valorInfo}
              >
                luislucasinter13@hotmail.com
              </a>
            </div>

            <div className={styles.infoItem}>
              <strong className={styles.rotuloInfo}>Localização</strong>
              <span className={styles.valorInfo}>
                Rio Grande do Sul, Brasil
              </span>
            </div>

            <div className={styles.redesSociais}>
              <strong className={styles.rotuloInfo}>Redes Sociais</strong>
              <div className={styles.linksRedes}>
                <a
                  href="https://github.com/Luis-Vinicius-Severo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkRede}
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/luisviniciussevero"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkRede}
                >
                  LinkedIn
                </a>
                <a
                  href="https://www.instagram.com/z_luisvinicius"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.linkRede}
                >
                  Instagram
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
