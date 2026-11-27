//alert("Hola")
const productos = [
    { nombre: "Monkey D. Luffy Gear 5", anime: "One Piece", imagen: "https://m.media-amazon.com/images/I/717usaR1ElL.jpg", precio: 185000, cantidad: 25, minimo: 10 },
    { nombre: "Naruto Uzumaki Modo Sabio", anime: "Naruto", imagen: "https://m.media-amazon.com/images/I/51YnUx-22DL.jpg", precio: 165000, cantidad: 3, minimo: 5 },
    { nombre: "Goku Ultra Instinto", anime: "Dragon Ball Super", imagen: "https://m.media-amazon.com/images/I/71FesoTQDKL.jpg", precio: 210000, cantidad: 0, minimo: 8 },
    { nombre: "Tanjiro Kamado", anime: "Demon Slayer", imagen: "https://m.media-amazon.com/images/I/51FPJ+dd5UL.jpg ", precio: 145000, cantidad: 8, minimo: 4 },
    { nombre: "Eren Yeager Titán Atacante", anime: "Attack on Titan", imagen: "https://m.media-amazon.com/images/I/817aLxCFzhL._AC_UF894,1000_QL80_.jpg", precio: 175000, cantidad: 2, minimo: 6 },
    { nombre: "Satoru Gojo", anime: "Jujutsu Kaisen", imagen: "https://m.media-amazon.com/images/I/71CGktXH45L.jpg", precio: 195000, cantidad: 15, minimo: 10 },
    { nombre: "Izuku Midoriya", anime: "My Hero Academia", imagen: "https://m.media-amazon.com/images/I/51GWhYEKYhL._AC_UF894,1000_QL80_.jpg", precio: 138000, cantidad: 4, minimo: 5 },
    { nombre: "Edward Elric", anime: "Fullmetal Alchemist", imagen: "https://m.media-amazon.com/images/I/41OHm6Loh9L.jpg", precio: 155000, cantidad: 4, minimo: 3 }

]

const cuerpoTabla = document.getElementById("cuerpo-tabla")
const resumen = document.getElementById("resumen")

function mostrarInventario(){
    cuerpoTabla.innerHTML = ""
    resumen.innerHTML = ""

    let totalAgotados = 0
    let totalBajoStock = 0
    let unidadesAPedir = 0
    let valorInventario = 0

    let mayorSubtotal = -1
    let filaMayor = null
    let nombreMayor = ""

    for (let i = 0;i<productos.length;i++){
        const producto = productos[i]
        const subtotal = producto.precio * producto.cantidad

        const fila = document.createElement("tr")
        
        const tdNombre = document.createElement("td")
        tdNombre.textContent = producto.nombre

        const tdAnime = document.createElement("td")
        const etiqueta = document.createElement("span")
        etiqueta.textContent = producto.anime
        etiqueta.classList.add("etiquta")

        tdAnime.appendChild(etiqueta)

        const tdImg = document.createElement("td")
        const img = document.createElement("img")
        img.src = producto.imagen
        img.alt = producto.nombre
        img.width = 70
        img.style.borderRadius = "8px"
        img.style.objectFit = "cover"
        tdImg.appendChild(img)

        const tdPrecio = document.createElement("td")
        tdPrecio.textContent = "$" + producto.precio.toLocaleString("es-Co")


        if(producto.precio > 10000){
            tdPrecio.style.fontWeight = "bold";
        }

        const tdCantidad = document.createElement("td");
        const btnMenos = document.createElement("button");
        btnMenos.textContent = "-";
        btnMenos.classList.add("btn", "btn-menos");

        if(producto.cantidad === 0){
            btnMenos.disabled = true;
        }

        btnMenos.addEventListener("click", function(){
            if(productos[i].cantidad > 0){
                productos[i].cantidad--;
                mostrarInventario();
            }
        });

        const numero = document.createElement("span");
        numero.textContent = producto.cantidad;
        numero.classList.add("numero");

        const btnMas = document.createElement("button");
        btnMas.textContent = "+";
        btnMas.classList.add("btn", "btn-mas");

        btnMas.addEventListener("click", function(){
            productos[i].cantidad++;
            mostrarInventario();
        });

        tdCantidad.appendChild(btnMenos);
        tdCantidad.appendChild(numero);
        tdCantidad.appendChild(btnMas);

        const tdMinimo = document.createElement("td");
        tdMinimo.textContent = producto.minimo;

        const tdSubtotal = document.createElement("td");
        tdSubtotal.textContent = "$" + subtotal.toLocaleString("es-CO");

        const tdEstado = document.createElement("td");

        if(producto.cantidad === 0){
            fila.classList.add("agotado");
            const faltan = producto.minimo;
            tdEstado.textContent = "AGOTADO - pedir " + faltan;
            tdEstado.style.color = "#dc3545";
            tdEstado.style.fontWeight = "bold";
            totalAgotados++;
            unidadesAPedir += faltan;
        }
        else if(producto.cantidad < producto.minimo){
            fila.classList.add("bajo-stock");
            const faltan = producto.minimo - producto.cantidad;
            tdEstado.textContent = "BAJO STOCK - pedir " + faltan;
            totalBajoStock++;
            unidadesAPedir += faltan;
        }
        else{
            fila.classList.add("en-stock");
            tdEstado.textContent = "OK";
        }
        valorInventario += subtotal;

        if(subtotal > mayorSubtotal){
            mayorSubtotal = subtotal;
            filaMayor = fila;
            nombreMayor = producto.nombre;
        }

        fila.appendChild(tdNombre);
        fila.appendChild(tdAnime);
        fila.appendChild(tdImg);
        fila.appendChild(tdPrecio);
        fila.appendChild(tdCantidad);
        fila.appendChild(tdMinimo);
        fila.appendChild(tdSubtotal);
        fila.appendChild(tdEstado);

        cuerpoTabla.appendChild(fila);
    }

    filaMayor.classList.add("destacado");
    const pMayor = document.createElement("p");
    pMayor.textContent = "Producto con mayor valor: " + nombreMayor + " ( $" + mayorSubtotal.toLocaleString("es-CO") + " )";

    const pAgotados = document.createElement("p");
    pAgotados.textContent = "Productos agotados: " + totalAgotados;

    const pBajo = document.createElement("p");
    pBajo.textContent = "Productos con bajo stock: " + totalBajoStock;

    const pPedir = document.createElement("p");
    pPedir.textContent = "Unidades a pedir: " + unidadesAPedir;

    const pValor = document.createElement("p");
    pValor.textContent = "Valor total del inventario: $" + valorInventario.toLocaleString("es-CO");
    pValor.style.fontWeight = "bold";

    resumen.appendChild(pAgotados);
    resumen.appendChild(pBajo);
    resumen.appendChild(pPedir);
    resumen.appendChild(pValor);
    resumen.appendChild(pMayor);
}

document.addEventListener("DOMContentLoaded", mostrarInventario);
