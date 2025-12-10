import React from 'react';
import './App.css';
import Cabecalho from './components/Header/Cabecalho';
import Hero from './components/Hero/Hero';
import Sobre from './components/Sobre/sobre';
import Projetos from './components/Projetos/projetos';
import Rodape from './components/Rodape/rodape';
import Contato from './components/Contatos/contato';

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <main>
        <Hero />
        <Sobre />
        <Projetos />
        <Contato />
      </main>
      <Rodape />
    </div>
  );
}

export default App;
