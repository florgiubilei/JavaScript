const productosSeleccionados = [2 , 3 , 4, 5, 6];

for (let i = 0; i < 1; i++){
    if (productosSeleccionados[i] > 1 ){
        console.log(`Tienes ${productosSeleccionados[i]} productos en el carrito!`);
        document.write(`Tienes ${productosSeleccionados[i]} productos en el carrito`);
        } else{
            console.log(`No tienes productos en el carrito ${productosSeleccionados[i]}`);
            document.write(`No tienes productos en el carrito ${productosSeleccionados[i]}`);
        }
}
const listaCursos = [];
let cantidad = 6;

do{
    let entrada = prompt ("Ingresa el curso");
    listaCursos.push(entrada.toUpperCase());
    console.log(listaCursos.length);
}while(listaCursos.length != cantidad)

const cursos = [{ id: 1, producto: "Pan Masa madre" },
                {id: 2, producto: "Curso Tortas"},
                {id: 3, producto: "Curso Budines"},
                {id: 4, producto: "Curso Postres"},
                {id: 5, producto: "Curso Postres 2"},
                {id: 6, producto: "Curso Muffins"}];

for (const producto of cursos){
    console.log(producto.id);
    console.log(producto.producto);
}