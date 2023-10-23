// comunicacion entre componentes
// props

import Typed from 'prop-types';

 export const SegundoComponente = ({ titulo, subtitulo, fecha }) => 
 {
    console.log(titulo);
    console.log(subtitulo);
  return (
   <>
        <h1>Comunicacion y Props</h1>
        <h2>{titulo}</h2>
        <h3>{subtitulo}</h3>
        <h4>{fecha}</h4>
   </>
  );
};

SegundoComponente.propTypes = {
    titulo: Typed.string.isRequired,
    subtitulo: Typed.string.isRequired,
    fecha: Typed.number.isRequired,
};

SegundoComponente.defaultProps = {
        titulo: "Clase React",
        subtitulo: "Vite 2023",
        fecha: new Date().getFullYear(),
}


