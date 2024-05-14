import React, { useState } from 'react'
import './miApi.css'
const MiApi = ({dataApi}) => {

    

  return (
    <>
        
      {dataApi.map(cat => (
          <div className='col-md-3 mb-4' key={cat.idCategory}>
            <h2>{cat.strCategory}</h2>
            <img className='img-fluid' src={cat.strCategoryThumb} alt={cat.strCategory}/>
            <p>{cat.strCategoryDescription}</p>
          </div>
          ))}
    </>
  )
}
 
export default MiApi
