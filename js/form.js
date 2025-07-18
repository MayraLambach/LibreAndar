

//función que informa al usuario si hay un error
function mostrarError(fieldId, message){
    const errorMsg = document.getElementById(fieldId + '-error')
    errorMsg.textContent = "❌ " + message;
    errorMsg.style.display ='block';
}
function ocultarError(fieldId){
    const errorMsg = document.getElementById(fieldId + '-error')
    errorMsg.style.display ='none';
}

function validarForm(){
    //campos
    const formName = document.getElementById('name-form').value;
    const formMsg = document.getElementById('msg-form').value;
    const formMail = document.getElementById('mail-form').value;
    let esValido = true //si una validación falla, será false

    if (formMsg.trim() === '') {
        mostrarError('empty-msg','Por favor escriba un mensaje')
        esValido=false;
    } else {
        ocultarError('empty-msg');
    }

    if (!formMail.includes('@') || !formMail.includes('.')){
        mostrarError('msg-mail','Por favor ingrese un mail válido')
        esValido=false;
    } else {
        ocultarError('msg-mail');
    }
    return esValido
}

//boton
const btnForm = document.getElementById("bt-form");

//Validar datos al clickear el botón
btnForm.addEventListener("click", function(event){
    event.preventDefault;
    if (validarForm()) {
        const msg = document.getElementById('msg')
        msg.textContent = "Mensaje recibido. ¡Gracias por contartarse!"
        msg.style.display ='block';
    } else {
        errorMsg.style.display ='none';
    }
}) 
