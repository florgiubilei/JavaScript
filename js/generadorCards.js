/////////////////// DECLARO LAS FUNCIONES ////////////////

// Función creadora de mis cards de productos en el HTML

const generarCardsHTML = (arrayARecorrer) => {
    let acumulador = ``;
    arrayARecorrer.forEach((producto) => {
        acumulador += `
        <div class="col-12 col-md-6">
        <div class="py-3 border-bottom">
            <div class="row">
                <div class="col-3 align-self-center">
                    <!-- Image -->
                    <div class="ratio ratio-1x1">
                        <img class="object-fit-cover" src="${producto.imagen}" alt="...">
                    </div>
                </div>
                <div class="col-7">
                    <!-- Heading -->
                    <h5 class="mb-2">${producto.nombre}</h5>
                    <!-- Text -->
                    <p class="mb-0">${producto.descripcion}</p>
                </div>
                <div class="col-2">
                    <!-- Price -->
                    <div class="fs-4 font-serif text-center text-black">
                        $${producto.precio}
                    </div>
                    <button id="agregar"
                    onclick="agregarAlCarrito(${producto.id})"
                    class="btn btn btn-dark" href="#">
                    Pedir
                    </button>
                </div>
            </div>
        </div>
    </div>`
    });
    agregarCardsEnHTML(acumulador);
}

// Función que inserta el contenido de cada card en el HTML

function agregarCardsEnHTML(cards) {
document.getElementById("grupo-de-cards").innerHTML = cards;
};