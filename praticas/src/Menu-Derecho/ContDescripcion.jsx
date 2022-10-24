import React from 'react'
import {Descripcio} from './Descripcio';


export const ContDescripcion = (props) => {
const {nombre}=props ;
  return (
    <article className='lista'>
        {nombre.map ((descri) =>(
            <Descripcio Descripcion ={descri.Descripcion} />
    ) )}
    </article> 
  );
};


