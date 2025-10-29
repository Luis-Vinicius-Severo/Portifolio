import React from 'react';
import styles from './Sobre.module.css';

const Sobre = () => {
  return (
    <section id="sobre" className={`secao ${styles.sobre}`}>
      <div className="container">
        <h2 className="titulo-secao">Sobre</h2>
        <div className={styles.conteudoSobre}>
          <div className={styles.textoSobre}>
            <p className={styles.paragrafo}>
              Sou <strong>Luis Vinicius</strong>, estudante de Análise e Desenvolvimento de Sistemas com formação técnica em Mecatrônica.
              Meu primeiro contato com a programação aconteceu durante o curso técnico, o que despertou minha curiosidade
              e motivação para seguir na área de tecnologia.
            </p>

            <p className={styles.paragrafo}>
              Atuei anteriormente com manutenção mêcanica, onde desenvolvi habilidades como <strong>resolução de problemas</strong>,
              <strong> trabalho em equipe</strong> e <strong>atuação sob pressão</strong>. Essas experiências foram importantes na minha
              transição de carreira para o desenvolvimento de software.
            </p>

            <p className={styles.paragrafo}>
              Atualmente, estou me dedicando ao estudo de tecnologias modernas e como participante do <strong>Instituto Caldeira </strong>
              na trilha de Java, estou aprofundando meus conhecimentos técnicos e desenvolvendo minhas <strong>soft skills </strong>
              para os desafios do mercado de tecnologia. Meu objetivo é me tornar um <strong>desenvolvedor Full Stack</strong>,
              construindo soluções práticas e eficientes.
            </p>

            <div className={styles.tecnologias}>
              <div className={styles.gridTecnologias}>
                <div className={styles.colunaTecnologia}>
                  <h4>Front-end</h4>
                  <div className={styles.tagsTecnologia}>
                    <span className={styles.tag}>React.js</span>
                    <span className={styles.tag}>JavaScript</span>
                    <span className={styles.tag}>HTML5</span>
                    <span className={styles.tag}>CSS3</span>
                    <span className={styles.tag}>Delphi</span>
                  </div>
                </div>

                <div className={styles.colunaTecnologia}>
                  <h4>Back-end</h4>
                  <div className={styles.tagsTecnologia}>
                    <span className={styles.tag}>Java</span>
                    <span className={styles.tag}>Delphi</span>
                  </div>
                </div>

                <div className={styles.colunaTecnologia}>
                  <h4>Banco de Dados</h4>
                  <div className={styles.tagsTecnologia}>
                    <span className={styles.tag}>MySQL</span>
                    <span className={styles.tag}>PostgreSQL</span>
                    <span className={styles.tag}>Firebird</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
