//Crear todas las validaciones de campo, input, select, etc.

//Validacion de Correo
export const validateEmail = (email)=>{
    const regex = /\S+@\S+\.\S+/
    return regex.test(email) 
}

//Validacion de Nombre de Usuario
export const validateUsername = (username)=>{
    const regex = /^\S{3,8}$/
    return regex.test(username)
}

//Validacion de la Contrasenia
export const validatePassword = (password)=>{
    const regex = /^\S{6,12}$/
    return regex.test(password)
}

//Validacion de confirmacion de la Contrasenia
export const validatePassConfirm = (password, passConfirm)=>{
    return password === passConfirm
}

//Mensajes generales de validacion
export const emailValidationMessage = 'Por favor ingrese un correo valido'
export const usernameValidationMessage = 'El nombre de usuario debe contener entre 3 y 8 caracteres'
export const passwordValidationMessage = 'La contraseña debe contener entre 6 y 12 caracteres'
export const passConfirmValidationMessage = 'Ingrese la misma contraseña anterior'