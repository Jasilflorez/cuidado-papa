import'./styleHeader.css'
import Busqueda from '../Header/Buscador'
import {GiExitDoor} from 'react-icons/gi';
import {AiOutlineMenu} from 'react-icons/ai';
function Botones() {
    return(
        <div className="Header-inpervinculo">
            <a className='inpervinculos' href=""><span>Inicio</span></a>
            <a className='inpervinculos' href=""><span>Busqueda</span></a>
            <a className='inpervinculos' href=""><span>Acceder</span></a>
            <a className='inpervinculos' href=""><span> <AiOutlineMenu className='inconos-a'/>Menu</span></a>
            <a className='inpervinculos' href=""><span> <GiExitDoor className='inconos-a'/>Salir</span></a>
        <Busqueda/>
        </div>
    )
}
export default Botones