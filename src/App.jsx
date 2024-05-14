import './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import MiApi from './MiApi/MiApi';
import Buscador from './Buscador/Buscador';


function App() {
  const [dataApi, setDataApi] = useState([])
  const [loading, setLoading] = useState(false) 
  const [filter, setFilter] = useState("")
  const [encontrado, setEncontrado] = useState([])

  const getApi = async ()=>{ 
    setLoading(true)
    const res = await axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
    setDataApi(res.data.categories);
    setLoading(false)
  }

  useEffect(() => {
    getApi();
  }, [])
  
  useEffect(() => {
    if (encontrado.length > 0) {
      setDataApi(encontrado);
    }else{
      getApi();
    }
  }, [encontrado])
  
  const handlerSearch =(e)=>{
      const searchTearm =(e.target.value.toLowerCase())
      setFilter(searchTearm)

      setEncontrado(
        dataApi.filter((res)=>
          Object.values(res).some((en)=>
            en.toLowerCase().includes(searchTearm)
          )  
        )        
      )
      console.log(encontrado)
  }

  return (
    <div className='container'>
        <header className='text-center'><h1 className='display-4'>Categorias de Comidas</h1> </header>
        <div className='row'> 
        <Buscador handlerSearch={handlerSearch}/>
          <p>{filter}</p> 
        {loading?       
          <div className="d-flex justify-content-center">
          <div className="spinner-border text-info" role="status">
            <span className="sr-only"></span>
          </div>
        </div>
          :
          <>
          <MiApi dataApi={dataApi} />
          </>
        }
        </div>
    </div>
  )
}

export default App
