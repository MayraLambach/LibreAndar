

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

function mostrarMsj(evt) {
    evt.preventDefault()
    //console.log("Gracias por contartarse")
    document.getElementById('msg').innerText = "Mensaje recibido. Gracias por contartarse"
} 
//boton
const btnForm = document.getElementById("bt-form");

//no está cargando los datos
btnForm.addEventListener("click", validarForm())