import React from 'react';
import styles from './Projetos.module.css';
import Bike from '/src/assets/projeto-bikcraft.jpeg';
import Hamburgueria from '/src/assets/projeto-hamburguer.png';
import Localização from '/src/assets/projeto-informacoes.jpeg';

const Projetos = () => {
  const projetos = [
    {
      titulo: 'BikCraft',
      descricao:
        'Site completo para uma loja de bicicletas artesanais, com catálogo de produtos e informações da empresa.',
      imagem: Bike,
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Luis-Vinicius-Severo/bikcraft',
      demo: 'https://luis-vinicius-severo.github.io/bikcraft/',
    },
    {
      titulo: 'Hamburgueria',
      descricao:
        'Site para hamburgueria com cardápio interativo e design moderno para melhor experiência do usuário.',
      imagem: Hamburgueria,
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Luis-Vinicius-Severo/Hamburgueria',
      demo: '#',
    },
    {
      titulo: 'Informações Localização',
      descricao:
        'Sistema de informações geográficas para visualização e consulta de dados de localização.',
      imagem: Localização,
      tecnologias: ['JavaScript', 'HTML', 'CSS'],
      github: 'https://github.com/Luis-Vinicius-Severo/informacoes-locais',
      demo: 'https://luis-vinicius-severo.github.io/informacoes-locais',
    },
  ];

  return (
    <section id="projetos" className="secao">
      <div className="container">
        <h2 className="titulo-secao">Meus Projetos</h2>
        <div className={styles.gradeProjetos}>
          {projetos.map((projeto, index) => (
            <div key={index} className={styles.cartaoProjeto}>
              <div className={styles.imagemProjeto}>
                <a
                  href={projeto.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={projeto.imagem} alt={projeto.titulo} />
                </a>
                <div className={styles.overlayProjeto}>
                  <div className={styles.linksProjeto}>
                    <a
                      href={projeto.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkDemo}
                    >
                      Demo
                    </a>
                    <a
                      href={projeto.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.linkGitHub}
                    >
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
              <div className={styles.infoProjeto}>
                <h3 className={styles.tituloProjeto}>{projeto.titulo}</h3>
                <p className={styles.descricaoProjeto}>{projeto.descricao}</p>
                <div className={styles.tecnologiasProjeto}>
                  {projeto.tecnologias.map((tech, techIndex) => (
                    <span key={techIndex} className={styles.tagTecnologia}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projetos;
