import { Navigate, Outlet } from "react-router-dom"
import Menu from "./menu/Menu"
import "./App.css"

const App = () => {

  //Evita que acceda a cualquier página si no está loggeado
  if (!localStorage.getItem("tokenEDmarket")) return <Navigate to="/login"/>

  return(
    <div className="app-container">
      <Menu />
      <div className="outlet-container">
        <Outlet />
      </div>
    </div>
  )
}

export default App