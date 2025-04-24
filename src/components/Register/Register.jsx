import React, { useState } from 'react'
import { Input } from '../Input/Input'
import { useRegister } from '../../shared/hooks/useRegister'
import { emailValidationMessage, passConfirmValidationMessage, passwordValidationMessage, usernameValidationMessage, validateEmail, validatePassConfirm, validatePassword, validateUsername } from '../../shared/validators/validator'

export const Register = () => {
    const form = {
        email: {
            value: '',
            isValid: false,
            showError: false,
        },
        username: {
            value: '',
            isValid: false,
            showError: false,  
        },
        password: {
            value: '',
            isValid: false,
            showError: false,
        },
        passwordConfirm: {
            value: '',
            isValid: false,
            showError: false,
        }
    }
    const [formData, setFormData] = useState(form)
    const { register } = useRegister()

    const isSubmitButtonDisabled = !formData.email.isValid ||
    !formData.username.isValid ||
    !formData.password.isValid ||
    !formData.passwordConfirm.isValid 

    //Todas las funciones o acciones comienzan con Handle
    const handleSubmit = (event)=>{
        event.preventDefault()
        //const input = document.getElementById('name')
        console.log(formData)
        register(
            formData.email.value,
            formData.username.value,
            formData.password.value
        )
    }

    //handleValidationOnBlur: para validar si el valor es correcto

    const handleValidationOnBlur = (value, field)=>{
        let isValid = false
        switch (field) {
            case 'email':
                isValid = validateEmail(value)    
                break;
            case 'username':
                isValid = validateUsername(value)
                break;
            case 'password':
                isValid = validatePassword(value) 
                break;
            case 'passwordConfirm':
                isValid = validatePassConfirm(formData.password.value, value)
                break;  
            default:
                break;
        }
        setFormData((prevData)=>(
            {
                ...prevData,
                //Inyeccion de nuevo valor:
                [field]: {
                    ...prevData[field],
                    isValid,
                    showError: !isValid
                }
            }
        ))
    }

    //handleValueChange: para cambiar el valor del formData
                         //nuevo valor, input que cambio       
    const handleValueChange = (value, field)=>{
        setFormData((prevData)=>(
            {
                ...prevData,
                //Inyeccion de nuevo valor:
                [field]: {
                    ...prevData[field],
                    value
                }
            }
        ))
    }


  return (
    <div className='register-container'>
        {/* Formularios controlados (Recomendable en REACT) (Virtual DOM)*/}
        {/* Formularios no controlados (DOM) */}
        <form 
        className='auth-form' 
        action=''
        onSubmit={handleSubmit}>
            <Input 
                field='email' //tiene que llamarse igual que el form data
                label='Email'
                value={formData.email.value}
                onChangeHandler={handleValueChange}
                placeholder={formData.email.value}
                type='email'
                onBlurHandler={handleValidationOnBlur}
                showErrorMessage={formData.email.showError}
                validationMessage={emailValidationMessage}
            />
            <Input 
                field='username'
                label='Username'
                value={formData.username.value}
                onChangeHandler={handleValueChange}
                placeholder={formData.username.value}
                type='text'
                onBlurHandler={handleValidationOnBlur}
                showErrorMessage={formData.username.showError}
                validationMessage={usernameValidationMessage}                
            />            
            <Input 
                field='password'
                label='Password'
                value={formData.password.value}
                onChangeHandler={handleValueChange}
                type='password'
                onBlurHandler={handleValidationOnBlur}
                showErrorMessage={formData.password.showError}
                validationMessage={passwordValidationMessage}                   
            />         
            <Input 
                field='passwordConfirm'
                label='Password Confirmation'
                value={formData.passwordConfirm.value}
                onChangeHandler={handleValueChange}
                type='password'
                onBlurHandler={handleValidationOnBlur}
                showErrorMessage={formData.passwordConfirm.showError}
                validationMessage={passConfirmValidationMessage}                   
            />                        
{/*         <label htmlFor=''>Nombre</label>
            <input placeholder={name} name='name' onChange={handleChange} type="text" /> */}
            <button disabled={isSubmitButtonDisabled} type='submit'>Enviar</button>
        </form>
    </div>
  )
}
