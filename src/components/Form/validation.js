const validation = function(data) {
    let errors = {};

    if(!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(data.email)){
        errors.e1 = 'Debe ingresar una cuenta válida de email'
    }
    if(!data.email){
        errors.e2 = 'Ingrese email'
    }
    if(data.email.length > 35){
        errors.e3 = 'El email debe tener menos de 35 caracteres'
    }
    if(!/\d/.test(data.password)){
        errors.p1 = 'Al menos debe tener un numero'
    }
    if(data.password.length < 6 || data.password.length > 10){
        errors.p2 = 'La contraseña debe tener entre 6 y 10 caracteres'
    }
    return errors
};

export default validation