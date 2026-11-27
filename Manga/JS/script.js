const productos = {
    P001: {
        nombre: "MIS 100 NOVIAS QUE ME QUIEREN MUCHO MUCHO - Tomo 1",
        precio: "$52.900",
        descripcion: "Autor: Rikito Nakamura - Editorial: IVREA Argentina",
        imagen: "//ebisumanga.com/cdn/shop/files/MIS100NOVIASQUEMEQUIERENMUCHOMUCHO1.jpg?v=1750029634 497w"
    },
    P002: {
        nombre: "MIS 100 NOVIAS QUE ME QUIEREN MUCHO MUCHO - Tomo 2",
        precio: "$52.900",
        descripcion: "Autor: Rikito Nakamura - Editorial: IVREA Argentina",
        imagen: "//ebisumanga.com/cdn/shop/files/MIS100NOVIASQUEMEQUIERENMUCHOMUCHO2.jpg?v=1750029634 500w"
    },
    P003: {
        nombre: "MIS 100 NOVIAS QUE ME QUIEREN MUCHO MUCHO - Tomo 3",
        precio: "$52.900",
        descripcion: "Autor: Rikito Nakamura - Editorial: IVREA Argentina",
        imagen: "//ebisumanga.com/cdn/shop/files/MIS100NOVIASQUEMEQUIERENMUCHOMUCHO3.jpg?v=1750029634 500w"
    },
    P004: {
        nombre: "MIS 100 NOVIAS QUE ME QUIEREN MUCHO MUCHO - Tomo 4",
        precio: "$52.900",
        descripcion: "Autor: Rikito Nakamura - Editorial: IVREA Argentina",
        imagen: "//ebisumanga.com/cdn/shop/files/MIS100NOVIASQUEMEQUIERENMUCHOMUCHO4.jpg?v=1750029634 500w"
    },
    P005: {
        nombre: "MISS KOBAYASHIS MAID DRAGON - Tomo 1",
        precio: "$52.900",
        descripcion: "Autor: COOLKYOUSINNJYA - Editorial: IVREA Argentina",
        imagen: "//ebisumanga.com/cdn/shop/files/KOBAYASHIMAIDDRAGONARGENTINA1.jpg?v=1750101409 400w"
    },
    P006: {
        nombre: "MISS KOBAYASHIS MAID DRAGON - Tomo 2",
        precio: "$52.900",
        descripcion: "Autor: COOLKYOUSINNJYA - Editorial: IVREA Argentina",
        imagen: "//ebisumanga.com/cdn/shop/files/KOBAYASHIMAIDDRAGONARGENTINA2.jpg?v=1750101409 498w"
    },
    P007: {
        nombre: "LOVE IS WAR - Tomo 4",
        precio: "$42.900",
        descripcion: "Autor: Aka Akasaka - Editorial: PANINI MANGA México",
        imagen: "https://paninitienda.com/cdn/shop/files/123141.jpg?v=1734622609&width=1000"
    },
    P008: {
        nombre: "LOVE IS WAR - Tomo 10",
        precio: "$42.900",
        descripcion: "Autor: Aka Akasaka - Editorial: PANINI MANGA México",
        imagen: "https://paninitienda.com/cdn/shop/files/9786075685687_b5c363ab-1014-4c50-a515-26c484e8ee8c.jpg?v=1759443217&width=1000"
    },
    P009: {
        nombre: "ONE PIECE - Tomo 8",
        precio: "$37.900",
        descripcion: "Autor: Eiichiro Oda - Editorial: PANINI MANGA México",
        imagen: "https://paninitienda.com/cdn/shop/products/10000_90da1b16-395a-4309-813d-6008b01aa5aa.jpg?v=1626723405&width=1000"
    },
    P0010: {
        nombre: "ONE PIECE - Tomo 9",
        precio: "$37.900",
        descripcion: "Autor: Eiichiro Oda - Editorial: PANINI MANGA México",
        imagen: "https://paninitienda.com/cdn/shop/products/10001_ec6c2eea-ceaa-4ab8-aab4-4a13239865ab.jpg?v=1626723407&width=1000"
    },
    P0011: {
        nombre: "GOODBYE, MY ROSE GARDEN - Tomo 1",
        precio: "$71.900",
        descripcion: "Autor: Dr. pepperco - Editorial: ARECHI MANGA",
        imagen: "//ebisumanga.com/cdn/shop/files/GOODBYEMYROSEGARDEN1.jpg?v=1748478718 496w"
    },
    P0012: {
        nombre: "UMAMUSUME PRETTY DERBY: STAR BLOSSOM - Tomo 1",
        precio: "$99.900",
        descripcion: "Autor: CyGames - Editorial: Desconocida",
        imagen: "IMG/Star_Blossom_cover1.webp"
    }
};

const contenedorProductos = document.getElementById('productos');

function crearTarjeta() {
    for (const dato in productos) {
        const claveProducto = productos[dato];

        // Tarjeta principal
        const tarjeta = document.createElement('article');
        tarjeta.classList.add('tarjeta-producto');

        // Contenedor de imagen
        const divImagen = document.createElement('div');
        divImagen.classList.add('contenedor-imagen');

        const imagen = document.createElement('img');
        imagen.src = claveProducto.imagen;
        imagen.alt = claveProducto.nombre;
        divImagen.appendChild(imagen);

        // Contenedor de información textual
        const divInfo = document.createElement('div');
        divInfo.classList.add('info-producto');

        const nombreProducto = document.createElement('h3');
        nombreProducto.textContent = claveProducto.nombre;

        const descripcion = document.createElement('p');
        descripcion.textContent = claveProducto.descripcion;
        descripcion.classList.add('descripcion-producto');

        const precio = document.createElement('p');
        precio.textContent = claveProducto.precio;
        precio.classList.add('precio-producto');

        const boton = document.createElement('button');
        boton.textContent = 'Agregar';
        boton.classList.add('boton-producto');

        // Evento opcional al hacer clic en Agregar
        boton.addEventListener('click', () => {
            alert(`Agregaste "${claveProducto.nombre}" al carrito.`);
        });

        divInfo.append(nombreProducto, descripcion, precio, boton);
        tarjeta.append(divImagen, divInfo);
        contenedorProductos.appendChild(tarjeta);
    }
}

document.addEventListener('DOMContentLoaded', crearTarjeta);