/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import Cripto from "./cripto/Cripto"
import "./Cuadricula.css"
import usePetition from "../hooks/usePetition"

function Cuadricula() {

  const [criptos, cargando] = usePetition("assets")

  if(cargando) return <span>Cargando...</span>

  return (
    <div className="app-container">
      <h1>Lista de criptomonedas</h1>
      <div className="cripto-container">
        {
          criptos.map(({id,name,priceUsd,symbol,changePercent24Hr}) => (
            <Cripto 
              key = {id} 
              name = {name} 
              priceUsd = {priceUsd} 
              symbol = {symbol}
              changePercent24Hr = {changePercent24Hr}
              id = {id}
            />
          ))
        }
      </div>
    </div>
  )
}

export default Cuadricula
