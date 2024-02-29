/* eslint-disable no-unused-vars */
import axios from "axios"
import { useEffect, useState } from "react"

const usePetition = (endpoint) => {
  
  const API_URL = import.meta.env.VITE_API_URL

  const [state, setState] = useState([])
  const [cargando, setCargando] = useState(false)

  useEffect(() => {
    setCargando(true)
    axios.get(`${API_URL}${endpoint}`)
    .then( data => {
      setState(data.data.data)
      setCargando(false)
    })
    .catch(e => {
      console.error(e)
      setCargando(false)
    })
  }, [])

  return [state, cargando]
}

export default usePetition