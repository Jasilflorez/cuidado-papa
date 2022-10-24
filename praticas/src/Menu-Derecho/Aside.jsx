import './Barra.css'
import Imagen from '../Menu-Derecho/Imagen'
import { ContDescripcion } from './ContDescripcion';
function Aside(){
    const conte = [
        {Descripcion: "PERDIDO"},
        {Descripcion: "WEB.COM"},
        {Descripcion: "NO SE QUE PONER"},
        {Descripcion: "OTRA VEZ PERDIDO"},
        {Descripcion: "WEY NAH "},
        {Descripcion: "NI POR AHI"},
        {Descripcion: "QUE AHI AQUI"},
        {Descripcion: "PERDIDO WEB"},
        {Descripcion: "PERDIDO.COM"},
        {Descripcion: "CHAO WEY"},
        {Descripcion: "BAJA.MAS"},
        {Descripcion: "BAJA.MENOS"},
        {Descripcion: "BUSCA.MUCHO"},
        {Descripcion: "ESTA.PERDIDO"},
        {Descripcion: "riomarblack"},
        {Descripcion: "preguntame"},
    ]
return (
    <div className='aside'>
        <Imagen/>
        <article className='articulo'>
            <ContDescripcion nombre= {conte}/>
        </article>
    </div>
)
}
export default Aside;