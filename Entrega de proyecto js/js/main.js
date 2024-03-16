const catalogoProductos = {
    "Camisa": 25,
    "Pantalón": 40,
    "Chaqueta": 50,
    "Zapatos": 35
};
function mostrarCatalogoProductos() {
    let catalogoDiv = document.createElement('div');
    catalogoDiv.innerHTML = "<h3>Catálogo de productos:</h3>";
    for (let producto in catalogoProductos) {
        catalogoDiv.innerHTML += `<p>${producto}: $${catalogoProductos[producto]}</p>`;
    }
    document.body.appendChild(catalogoDiv);
}

function calcularTotalCompra(carrito) {
    let total = 0;
    for (let producto in carrito) {
        total += catalogoProductos[producto] * carrito[producto];
    }
    return total.toFixed(2);
}

function obtenerSeleccionUsuario() {
    let carrito = {};
    while (true) {
        let producto = prompt("Ingrese el nombre del producto que desea comprar (o escriba 'listo' para finalizar la compra):");
        if (producto.toLowerCase() === "listo") {
            break;
        }
        if (catalogoProductos.hasOwnProperty(producto)) {
            let cantidad = parseInt(prompt(`Ingrese la cantidad de ${producto} que desea comprar:`));
            if (!isNaN(cantidad) && cantidad > 0) {
                carrito[producto] = cantidad;
            } else {
                alert("La cantidad ingresada no es válida. Inténtelo de nuevo.");
            }
        } else {
            alert("Producto no encontrado en el catálogo. Inténtelo de nuevo.");
        }
    }
    return carrito;
}

function mostrarResultado(resultado) {
    let resultadoDiv = document.createElement('div');
    resultadoDiv.innerHTML = `<h3>Total de la compra: $${resultado}</h3>`;
    document.body.appendChild(resultadoDiv);
}

function realizarCompra() {
    mostrarCatalogoProductos();
    let carrito = obtenerSeleccionUsuario();
    let totalCompra = calcularTotalCompra(carrito);
    mostrarResultado(totalCompra);
}

realizarCompra();


