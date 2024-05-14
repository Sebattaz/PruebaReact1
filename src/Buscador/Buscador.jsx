import React from 'react'

const Buscador = ({handlerSearch}) => {

    
  return (
    <div className="input-group">
        <div className="form-outline">
         <input type="search" id="form1" className="form-control" placeholder='Busqueda' onChange={handlerSearch} />
        </div>
        <button type="button" className="btn btn-primary" >
      
        </button>
  </div>
  )
}

export default Buscador
