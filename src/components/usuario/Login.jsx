/* eslint-disable no-undef */
import axios from "axios"
import { useState } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import "./Login.css"

const Login = () => {

  const navigation = useNavigate()

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const [cargando, setCargando] = useState(false)

  const [error, setError] = useState()

  const submit = (e) => {
    e.preventDefault()
    setError(null)
    setCargando(true)
    axios.post(`https://reqres.in/api/login`, user)
    .then(data => {
      setCargando(false)
      localStorage.setItem("tokenEDmarket", data.data.token);
      navigation("/")
    })
    .catch(e => {
      setCargando(false)
      console.table(e)
      setError(e.response.data.error)
    })
  }

  //Redirigir a home si ya está loggeada en intenta navegar a login
  if (localStorage.getItem("tokenEDmarket")) return <Navigate to="/"/>

  return(
    <div className="login-container">
      <h1>Iniciar sesión</h1>
      <form onSubmit={submit}>
        <div className="field">
          <label htmlFor="email">Correo Electrónico</label>
          <input 
            onChange={(e) => {
              setUser({
                ...user,
                email: e.target.value
              })
            }}
            type="email" 
            name="email"
            required
          />
        </div>
        <div className="field">
          <label htmlFor="password">Contraseña</label>
          <input 
            onChange={(e) => {
              setUser({
                ...user,
                password: e.target.value
              })
            }}
            type="password" 
            name="password"
            required
          />
        </div>
        <div className="submit">
          <input
            className="link" 
            type="submit" 
            value={cargando ? "cargando..." : "Ingresar"}
          />
        </div>
      </form>
      {
        error && <span className="error">Error: {error}</span>
      }
    </div>
  )
}
export default Login