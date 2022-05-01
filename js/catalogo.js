// Función constructura de productos para mi catálogo

class Producto {
    constructor(nombre, id, marca, categoria, descripcion, precio, stock, imagen, cantidadEnCarrito) {
        this.nombre = nombre;
        this.id = id;
        this.marca = marca;
        this.categoria = categoria;
        this.descripcion = descripcion;
        this.precio = precio;
        this.stock = stock;
        this.imagen = imagen;
        this.cantidadEnCarrito = cantidadEnCarrito;
    };
}

// Listado de productos de mi catálogo

const PLAT_COD_1 = new Producto(
    'Plato Principal 1',
    1,
    'Principales',
    'menu',
    'Exquisito plato principal elaborado por nuestro chef',
    15,
    10,
    '../img/plato.jpg',
    0
);


const PLAT_COD_2 = new Producto(
    'Plato Principal 2',
    2,
    'Principales',
    'menu',
    'Exquisito plato principal elaborado por nuestro chef',
    23,
    5,
    '../img/plato1.jpg',
    0
);

const PLAT_COD_3 = new Producto(
    'Plato Principal 3',
    3,
    'Principales',
    'menu',
    'Exquisito plato principal elaborado por nuestro chef',
    16,
    2,
    '../img/plato2.jpg',
    0
);

const PLAT_COD_4 = new Producto(
    'Plato Principal 4',
    4,
    'Principales',
    'menu',
    'Exquisito plato principal elaborado por nuestro chef',
    15,
    20,
    '../img/plato3.jpg',
    0
);

const PLAT_COD_5 = new Producto(
    'Plato Principal 5',
    5,
    'Principales',
    'menu',
    'Exquisito plato principal elaborado por nuestro chef',
    23,
    7,
    '../img/plato4.jpg',
    0
);


const PLAT_COD_6 = new Producto(
    'Plato Principal 6',
    6,
    'Principales',
    'menu',
    'Exquisito plato principal elaborado por nuestro chef',
    16,
    12,
    '../img/plato6.jpg',
    0
);

const BRU_COD_1 = new Producto(
    'Brunch 1',
    7,
    'Brunch',
    'menu',
    'Exquisito brunch elaborado por nuestro chef.',
    23,
    2,
    '../img/plato7.jph.jpg',
    0
);

const BRU_COD_2 = new Producto(
    'Brunch 2',
    8,
    'Brunch',
    'menu',
    'Exquisito brunch elaborado por nuestro chef.',
    15,
    3,
    '../img/plato9.jpg',
    0
);

const BRU_COD_3 = new Producto(
    'Brunch 3',
    9,
    'Brunch',
    'menu',
    'Exquisito brunch elaborado por nuestro chef.',
    15,
    8,
    '../img/plato10.jpg',
    0
);

const BRU_COD_4 = new Producto(
    'Brunch 4',
    10,
    'Brunch',
    'menu',
    'Exquisito brunch elaborado por nuestro chef.',
    16,
    9,
    '../img/plato12.jpg',
    0
);

const BRU_COD_5 = new Producto(
    'Brunch 5',
    11,
    'Brunch',
    'menu',
    'Exquisito brunch elaborado por nuestro chef.',
    16,
    15,
    '../img/plato18.jpg',
    0
);

const BRU_COD_6 = new Producto(
    'Brunch 6',
    12,
    'Brunch',
    'menu',
    'Exquisito brunch elaborado por nuestro chef.',
    23,
    17,
    '../img/plato13.jpg',
    0
);

const CEN_COD_1 = new Producto(
    'Cena Gourmet',
    13,
    'Cena',
    'menu',
    'Exquisita cena gourmet elaborado por nuestro chef.',
    16,
    16,
    '../img/plato5.jpg',
    0
);

const CEN_COD_2 = new Producto(
    'Cena gourmet 2',
    14,
    'Cena',
    'menu',
    'Exquisita cena gourmet elaborado por nuestro chef.',
    15,
    5,
    '../img/plato19.jpg',
    0
);

const CEN_COD_3 = new Producto(
    'Cena gourmet 3',
    15,
    'Cena',
    'menu',
    'Exquisita cena gourmet elaborado por nuestro chef.',
    15,
    2,
    '../img/plato20.jpg',
    0
);

const CEN_COD_4 = new Producto(
    'Cena gourmet 4',
    16,
    'Cena',
    'menu',
    'Exquisita cena gourmet elaborado por nuestro chef.',
    23,
    9,
    '../img/plato16.jpg',
    0
);


const CEN_COD_5 = new Producto(
    'Cena gourmet 5',
    17,
    'Cena',
    'menu',
    'Exquisita cena gourmet elaborado por nuestro chef.',
    23,
    20,
    '../img/plato14.jpg',
    0
);

const CEN_COD_6 = new Producto(
    'Cena gourmet 6',
    18,
    'Cena',
    'menu',
    'Exquisita cena gourmet elaborado por nuestro chef.',
    16,
    25,
    '../img/plato11.jpg',
    0
);

const BEB_COD_1 = new Producto(
    'Tragos',
    19,
    'Tragos',
    'bebidas',
    'Exquisito tragos elaborados por nuestro bartender.',
    15,
    4,
    '../img/bebida.jpg',
    0
);

const BEB_COD_2 = new Producto(
    'Tragos 2',
    20,
    'Tragos',
    'bebidas',
    'Exquisitos tragos elaborado por nuestro bartender.',
    10,
    50,
    '../img/bebida1.jpg',
    0
);

const BEB_COD_3 = new Producto(
    'Tragos 3',
    21,
    'Tragos',
    'bebidas',
    'Exquisitos tragos elaborado por nuestro bartender.',
    15,
    17,
    '../img/bebida2.jpg',
    0
);

const BEB_COD_4 = new Producto(
    'Tragos 4',
    22,
    'Tragos',
    'bebidas',
    'Exquisitos tragos elaborado por nuestro bartender.',
    15,
    12,
    '../img/bebida3.jpg',
    0
);

const BEB_COD_5 = new Producto(
    'Limonada',
    23,
    'Jugos',
    'bebidas',
    'Exquisita limonada elaborada por nuestro bartender.',
    5,
    32,
    '../img/bebida4.jpg',
    0
);

const BEB_COD_6 = new Producto(
    'Ice Coffee',
    24,
    'Cafe',
    'bebidas',
    'Exquisito cafe helado elaborado por la casa.',
    10,
    25,
    '../img/bebida5.jpg',
    0
);

// Declaración de array de todos mis Productos

const productos = [PLAT_COD_1, PLAT_COD_2, PLAT_COD_3, PLAT_COD_4, PLAT_COD_5, PLAT_COD_6, BRU_COD_1, BRU_COD_2, BRU_COD_3, BRU_COD_4, BRU_COD_5, BRU_COD_6, CEN_COD_1, CEN_COD_2, CEN_COD_3, CEN_COD_4, CEN_COD_5, CEN_COD_6, BEB_COD_1, BEB_COD_2, BEB_COD_3, BEB_COD_4, BEB_COD_5, BEB_COD_6];
