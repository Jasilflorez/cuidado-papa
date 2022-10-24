import './Barra.css'
import Imagen from '../Menu-Derecho/mundo.png'
function ContenidoImagen(){
return (
    <div className='Imagen'>
        <img className='logo-mundo' src={Imagen} alt="Mundo" />
    </div>
)
}
export default ContenidoImagen;