const precioTickets = 200;
const form = document.querySelector('#formulario');

const enviarDatos = (event) => {
    event.preventDefault();

    const {cantidad, categoria,resumenTotal} = event.target; //reestructuracion       
    const valorSinDescuento = cantidad.value * precioTickets;
    
    if(categoria.value === "Estudiante"){
        //const valorSinDescuento = cantidad.value * precioTickets;
        const valorConDescuento = valorSinDescuento - (valorSinDescuento * 0.8);
        return resumenTotal.placeholder = "Total a pagar: $ " + valorConDescuento;
    } else if(categoria.value === "Trainee"){
        const valorConDescuento = valorSinDescuento - (valorSinDescuento * 0.5);
        return resumenTotal.placeholder = "Total a pagar: $ " + valorConDescuento;
    } else if(categoria.value === "Junior"){
        const valorConDescuento = valorSinDescuento - (valorSinDescuento * 0.15);
        return resumenTotal.placeholder = "Total a pagar: $ " + valorConDescuento;                  
    } else {
        alert("debe seleccionar una categoria");
    }
}

form.addEventListener('submit', enviarDatos); 

const borrar = document.getElementById('idborrar');
borrar.addEventListener('click', ()=> {
    document.getElementById('idCantidad').value = "";
    document.getElementById('idNombre').value = "";
    document.getElementById('idApellido').value = "";
    document.getElementById('idCorreo').value = "";
    document.getElementById('idSelectCategoria').value = "";
})