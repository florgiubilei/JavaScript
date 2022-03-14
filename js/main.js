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