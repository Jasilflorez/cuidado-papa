import'./styleHeader.css'
function Busqueda() {
    return(
        <div className="buscador-wikipedia">
            <article className='Contenedor-vitas'>
            <a className='vinculo-vistas' href="">Leer</a>
            <a className='vinculo-vistas' href="">Ver código fuente</a>
            <a className='vinculo-vistas' href="">Ver historial</a>
            </article>
            <article className='Contenido-Busqueda'>
                <input  placeholder='Buscar' className='Imput-Busqueda'type="search" name="" id="" />
                <button className="Boton-Buscar">Buscar</button>
            </article>
        </div>
    )
}
export default Busqueda