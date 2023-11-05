let valorTicket         = 200;
let descuentoEstudiante = 80;
let descuentoTrainee    = 50;
let descuentoJunior     = 15;


let nombre              = document.getElementById("nombre");
//let divErrorNombre      = document.getElementById("memsajeErrorNombre");
let apellido            = document.getElementById("apellido");
//let divErrorApellido    = document.getElementById("memsajeErrorApellido");
let mail                = document.getElementById("mail");
//let divErrorEmail       = document.getElementById("memsajeErrorEmail");
let cantidadTickets     = document.getElementById("cantidadTickets");
//let divErrorCantidad    = document.getElementById("memsajeErrorCantidad");
let categoria           = document.getElementById("categoriaSelect");
//let divErrorCategoria   = document.getElementById("memsajeErrorCategoria");


const quitarClaseError = () => {
    let listaNodos = document.querySelectorAll(".form-control, .form-select");
    for (let i = 0; i < listaNodos.length; i++) {  
    listaNodos[i].classList.remove('is-invalid')
    }
    //let listaNodosdiv = document.querySelectorAll(".invalid-feedback");
    //for (let i = 0; i < listaNodosdiv.length; i++) {
        //listaNodosdiv[i].classList.remove("mostrarError");
    //}
}

const totalAPagar = () => {
    quitarClaseError();
    if(nombre.value === "") {
        nombre.classList.add("is-invalid");
        //divErrorNombre.classList.add("mostrarError");
        nombre.focus();
        return;
    }
    if(apellido.value === ""){
        apellido.classList.add("is-invalid");
        //divErrorApellido.classList.add("mostrarError");
        apellido.focus();
        return;
    }
    if (mail.value === ""){
        mail.classList.add("is-invalid");
        //divErrorEmail.classList.add("mostrarError");
        mail.focus();
        return;
    }
    const emailValido = mail => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
    }
    if (!emailValido(mail.value)) {
        mail.classList.add("is-invalid");  
        //divErrorEmail.classList.add("mostrarError");
        mail.focus();
        return;
    }
    if ((cantidadTickets.value < 1) || (isNaN(cantidadTickets.value))) {
        cantidadTickets.classList.add("is-invalid");
        //divErrorCantidad.classList.add("mostrarError");
        cantidadTickets.focus();
        return;
    }
    if (categoria.value == "") {
        categoria.classList.add("is-invalid");
        //divErrorCategorias.classList.add("mostrarError");
        categorias.focus();
        return;
    }
    let totalValorTickets = (cantidadTickets.value) * valorTicket;

    switch (categoria.value) {
        case "0":
            totalValorTickets = totalValorTickets;
            break;
        case "1":
            totalValorTickets = totalValorTickets - (descuentoEstudiante / 100 * totalValorTickets);
            break;
        case "2":
            totalValorTickets = totalValorTickets - (descuentoTrainee / 100 * totalValorTickets);
            break;
        case "3":
            totalValorTickets = totalValorTickets - (descuentoJunior / 100 * totalValorTickets);
            break;
    }
    totalPago.innerHTML = totalValorTickets;
}

btnResumen.addEventListener('click', totalAPagar);

const resetTotalAPagar = () => {
    quitarClaseError();
    totalPago.innerHTML = "";
}
btnBorrar.addEventListener('click', resetTotalAPagar);
