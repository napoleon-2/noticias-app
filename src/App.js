import React, {Fragment} from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {
  return (
    <div >
      <Fragment>
        <Header 
          titulo='Buscador de Noticias'
        />
        <div className="container white ">
          <Formulario />
        </div>
      </Fragment>
        
    </div>
  );
}

export default App;
