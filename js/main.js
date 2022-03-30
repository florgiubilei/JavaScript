
//Cursos
const productosSeleccionados = [2, 3, 4, 5, 6];

for (let i = 0; i < 1; i++) {
    if (productosSeleccionados[i] > 1) {
        console.log(`Tienes ${productosSeleccionados[i]} productos en el carrito!`);
        document.write(`Tienes ${productosSeleccionados[i]} productos en el carrito`);
    } else {
        console.log(`No tienes productos en el carrito ${productosSeleccionados[i]}`);
        document.write(`No tienes productos en el carrito ${productosSeleccionados[i]}`);
    }
}
const listaCursos = [];
let cantidad = 6;

do {
    let entrada = prompt("Ingresa el curso");
    listaCursos.push(entrada.toUpperCase());
    console.log(listaCursos.length);
} while (listaCursos.length != cantidad)

const cursos = [{ id: 1, producto: "Pan Masa madre" },
{ id: 2, producto: "Curso Tortas" },
{ id: 3, producto: "Curso Budines" },
{ id: 4, producto: "Curso Postres" },
{ id: 5, producto: "Curso Postres 2" },
{ id: 6, producto: "Curso Muffins" }];

for (const producto of cursos) {
    console.log(producto.id);
    console.log(producto.producto);
}



//Ingresar


let logueado = document.getElementsByClassName("form-check-label")
console.log(logueado.innerText)

logueado.innerText = "Aceptaste los terminos y condiciones!"
console.log(logueado.innerText)

let formulario = document.getElementsByClassName("row needs-validation");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    console.log("Logueaste con exito!")
}

//Tienda

const pedido = [{ id: 1, pedido: "Plato principal 1", precio: 15 },
                { id: 2, pedido: "Plato principal 2", precio: 20 },
                { id: 2, pedido: "Plato principal 3", precio: 20 },
                { id: 2, pedido: "Plato principal 4", precio: 20 },
                { id: 2, pedido: "Plato principal 5", precio: 20 },
                { id: 2, pedido: "Plato principal 6", precio: 20 },
                { id: 2, pedido: "Brunch 1", precio: 20 },
                { id: 2, pedido: "Brunch 2", precio: 20 },
                { id: 2, pedido: "Brunch 3", precio: 20 },
                { id: 2, pedido: "Brunch 4", precio: 20 },
                { id: 2, pedido: "Brunch 5", precio: 20 },
                { id: 2, pedido: "Brunch 6", precio: 20 },
                { id: 2, pedido: "Cena gourmet", precio: 20 },
                { id: 2, pedido: "Cena gourmet 2", precio: 20 },
                { id: 2, pedido: "Cena gourmet 3", precio: 20 },
                { id: 2, pedido: "Cena gourmet 4", precio: 20 },
                { id: 2, pedido: "Cena gourmet 5", precio: 20 },
                { id: 2, pedido: "Cena gourmet 6", precio: 20 },
                { id: 2, pedido: "Tragos", precio: 20 },
                { id: 2, pedido: "Tragos 2", precio: 20 },
                { id: 2, pedido: "Tragos 3", precio: 20 },
                { id: 2, pedido: "Tragos 4", precio: 20 },
                { id: 2, pedido: "Tragos 5", precio: 20 },
                { id: 2, pedido: "Tragos 6", precio: 20 }];

function agregarPedidos(clave, valor) { localStorage.setItem(clave, valor); }
agregarPedidos(pedidos.id, JSON.stringify(producto));

let pedidos = []
let pedidosEnLS = JSON.stringify(localStorage.getItem("pedidos"))
if (pedidosEnLS) {
    pedidos = pedidosEnLS
}
renderPedidos(pedidos)

