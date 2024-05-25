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