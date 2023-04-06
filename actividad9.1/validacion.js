const formulario = document.getElementById('formulario');

formulario.addEventListener('submit', function (event) {
    event.preventDefault();
    validarFormulario();
});

function validarRut(rut) {
    if (!/^\d{1,2}\.\d{3}\.\d{3}-[0-9kK]{1}$/.test(rut)) {
        return 'RUT inválido';
    }
    return '';
}

function validarNombre(nombre) {
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/.test(nombre)) {
        return 'Nombre inválido';
    }
    return '';
}

function validarDireccion(direccion) {
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9# ]+$/.test(direccion)) {
        return 'Dirección inválida';
    }
    return '';
}

function validarComuna(comuna) {
    if (!/^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+$/.test(comuna)) {
        return 'Comuna inválida';
    }
    return '';
}

function validarTelefono(telefono) {
    if (!/^[0-9]{9}$/.test(telefono)) {
        return 'Teléfono inválido';
    }
    return '';
}

function validarCampo(campo, mensajeError) {
    const error = mensajeError(campo.value);
    if (error !== '') {
        campo.setCustomValidity(error);
        campo.classList.add('invalido');
        const mensaje = campo.parentNode.querySelector('.mensaje-error');
        mensaje.textContent = error;
    } else {
        campo.setCustomValidity('');
        campo.classList.remove('invalido');
        const mensaje = campo.parentNode.querySelector('.mensaje-error');
        mensaje.textContent = '';
    }
}

function validarFormulario() {
    const rut = formulario.elements.rut;
    const nombre = formulario.elements.nombre;
    const direccion = formulario.elements.direccion;
    const comuna = formulario.elements.comuna;
    const telefono = formulario.elements.telefono;
    validarCampo(rut, validarRut);
    validarCampo(nombre, validarNombre);
    validarCampo(direccion, validarDireccion);
    validarCampo(comuna, validarComuna);
    validarCampo(telefono, validarTelefono);
}

formulario.addEventListener('change', function (event) {
    validarCampo(event.target, validarRut);
    validarCampo(event.target, validarNombre);
    validarCampo(event.target, validarDireccion);
    validarCampo(event.target, validarComuna);
    validarCampo(event.target, validarTelefono);
});
