//Manejar la logica de la respuesta del API
import React, { useState } from 'react'
import { registerRequest } from '../../services/api'
import toast from 'react-hot-toast'

export const useRegister = () => {
    //Ver si aun esta cargando la respuesta al API
  const [isLoading, setIsLoading] = useState(false)
  //Saber si la consulta al API trae errores
  const [error, setError] = useState(false)
  //Funcion que consulta 
    const register = async(email, username, password)=>{
        setIsLoading(true)
        const user = {
            email, 
            username,
            password
        }
        //Consulta del API mediante la funcion del api.js
        const response = await registerRequest(user)
        setIsLoading(false)

        //Logica de lo que respondio el back
        if(response.error){
            setError(true)
            if(response?.err?.response?.data?.errors){
                let arrayErrors = response?.err?.response?.data?.errors
                for (const error of arrayErrors) {
                    return toast.error(error.msg)
                }
            }
            return toast.error(
                response?.err?.response?.data?.msg ||
                response?.err?.data?.msg ||
                'Error general al intentar registrar el usuario.'
            )
        }
        setError(false)
        return toast.success('TODO GOOD')
    }
  return {
    register,
    isLoading,
    error,
    setError
    }
}
