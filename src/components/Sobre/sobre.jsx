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
              Sou <strong>Luis Vinicius</strong>, estudante de Análise e
              Desenvolvimento de Sistemas com formação técnica em Mecatrônica.
              Meu primeiro contato com a programação aconteceu durante o curso
              técnico, o que despertou minha curiosidade e motivação para seguir
              na área de tecnologia.
            </p>

            <p className={styles.paragrafo}>
              Atuei anteriormente com manutenção mêcanica, onde desenvolvi
              habilidades como <strong>resolução de problemas</strong>,
              <strong> trabalho em equipe</strong> e{' '}
              <strong>atuação sob pressão</strong>. Essas experiências foram
              importantes na minha transição de carreira para o desenvolvimento
              de software.
            </p>

            <p className={styles.paragrafo}>
              Atualmente, estudo tecnologias modernas e participei do programa
              <strong> Geração Caldeira 2025</strong>, na trilha de Java, onde
              aprimorei minha lógica, meu conhecimento em{' '}
              <strong>back-end</strong> e minhas soft skills por meio de{' '}
              <strong>projetos em equipe</strong> e{' '}
              <strong>metodologias ágeis. </strong>
              Meu objetivo é seguir evoluindo como desenvolvedor Full Stack,
              criando soluções eficientes e de qualidade.
            </p>

            <div className={styles.tecnologias}>
              <div className={styles.gridTecnologias}>
                <div className={styles.colunaTecnologia}>
                  <h4>Front-end</h4>
                  <div className={styles.tagsTecnologia}>
                    <span className={styles.tag}>React.js</span>
                    <span className={styles.tag}>JavaScript</span>
                    <span className={styles.tag}>HTML</span>
                    <span className={styles.tag}>CSS</span>
                    <span className={styles.tag}>Delphi</span>
                  </div>
                </div>

                <div className={styles.colunaTecnologia}>
                  <h4>Back-end</h4>
                  <div className={styles.tagsTecnologia}>
                    <span className={styles.tag}>Java</span>
                    <span className={styles.tag}>Delphi</span>
                    <span className={styles.tag}>Spring boot</span>
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
