import React from 'react'
import { Register } from '../../components/Register/Register'
import './AuthPage.css'

//Exportacion de tipo Named
export const AuthPage = () => {
  return (
    <div>
        Esta es la pagina donde se podra logear o registrar el usuario.
        <Register />
    </div>
  )
}
