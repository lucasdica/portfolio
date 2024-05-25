const tiposDeError = [
    "valueMissing",
    "patternMismatch",
    "typeMismatch",
    "tooShort",
];

const mensajes = {
    nombre: {
        valueMissing: "El campo nombre no puede estar vacío.",
        patternMismatch: "Por favor, ingrese un nombre válido.",
        tooShort: "Por favor, ingrese un nombre válido.",
    },
    email: {
        valueMissing: "El campo email no puede estar vacío.",
        typeMismatch: "Por favor, ingrese un email válido.",
        tooShort: "Por favor, ingrese un e-mail válido.",
    },
    asunto: {
        valueMissing: "El campo asunto no puede estar vacío.",
    },
    mensaje: {
        valueMissing: "El campo mensaje no puede estar vacío.",
    }
};
  
const camposDelFormulario = document.querySelectorAll("[required]")

camposDelFormulario.forEach((campo) => {
    campo.addEventListener("blur", () => verificarCampos(campo));
    campo.addEventListener("invalid", (evento) => evento.preventDefault());
});

function verificarCampos(campo){
    let mensaje= ""

    tiposDeError.forEach(error => {
        if(campo.validity[error]){
            mensaje = mensajes[campo.name][error];
        }
    })

    const mensajeError = campo.parentNode.querySelector(".mensaje-error")
    const validarInputs = campo.checkValidity()
    if(!validarInputs){
        mensajeError.textContent = mensaje
    } else {
        mensajeError.textContent = ""
    }
}

let form = document.querySelector("#formulario");
let btnEnviar = document.querySelector("#btn-enviar");

form.addEventListener("keyup", validarForm)

function validarForm (){
    let deshabilitar = false;
    if(form.nombre.value == ""){
        deshabilitar= true;
    }
    if(form.mail.value == ""){
        deshabilitar= true;
    }
    if(form.asunto.value == ""){
        deshabilitar= true;
    }
    if(form.message.value == ""){
        deshabilitar= true;
    }
    if(deshabilitar == true){
        btnEnviar.disabled = true;
    } else {
        btnEnviar.disabled = false;
        btnEnviar.style.backgroundColor= "#0d6efd";
    }
}