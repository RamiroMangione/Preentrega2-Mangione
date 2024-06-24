const cabeza = document.head;
const cuerpo = document.body;
const title = document.createElement("title");
title.innerHTML = "Kiosco Digital";
cabeza.appendChild(title);

const h1 = document.createElement("h1");
h1.innerHTML = "Kiosco Digital";
cuerpo.appendChild(h1);
h1.classList.add("titulo");

const contenedor = document.createElement("div");
cuerpo.appendChild(contenedor);
contenedor.classList.add("gondola");

const arraydeproductos = [
    {
        nombre: "Chocolate",
        precio: 100,
        cantidad: 0,
        imagen: ""
    },
    {
        nombre: "Agua",
        precio: 50,
        cantidad: 0,
        imagen: ""
    },
    {
        nombre: "Coca",
        precio: 80,
        cantidad: 0,
        imagen: ""
    },
    {
        nombre: "Pan",
        precio: 60,
        cantidad: 0,
        imagen: ""
    },
    {
        nombre: "Alfajor",
        precio: 110,
        cantidad: 0,
        imagen: ""
    }
];

let count = 0;
total = 0;

for (let i = 0; i < localStorage.length; i++) {
    let clave = localStorage.key(i);
    let valor = localStorage.getItem(clave);
    if (clave == "total") {
        total = JSON.parse(valor);
    }
    const productoEncontrado = arraydeproductos.find(producto => producto.nombre == clave);
    if (productoEncontrado) {
        productoEncontrado.cantidad = valor;
    }
}

async function consumirApi() {
    for (let producto of arraydeproductos) {
        const apiUrl = `https://api.mercadolibre.com/sites/MLA/search?q=${producto.nombre}`;
        const respuesta = await fetch(apiUrl);
        const data = await respuesta.json();
        const datos = data.results;
        if (datos.length > 0) {
            producto.imagen = datos[0].thumbnail;
        }
    }
    generarHTML(); }
function generarHTML() {
    for (let producto of arraydeproductos) {
        const { nombre, precio, cantidad, imagen } = producto;

        const linea = document.createElement("div");
        contenedor.appendChild(linea);
        linea.classList.add("linea");

        if (imagen) {
            const img = document.createElement("img");
            img.src = imagen; 
            img.alt = nombre;
            img.classList.add("imagen-producto");
            linea.appendChild(img);
        }

        const articulos = document.createElement("div");
        linea.appendChild(articulos);
        articulos.innerHTML = nombre;
        articulos.classList.add("productos");

        const precios = document.createElement("div");
        linea.appendChild(precios);
        precios.innerHTML = `$${precio}`;

        const boton = document.createElement("button");
        linea.appendChild(boton);
        boton.innerHTML = "Agregar";
        boton.classList.add("boton");
        boton.id = nombre;

        const cantidades = document.createElement("div");
        linea.appendChild(cantidades);
        cantidades.innerHTML = cantidad;
        cantidades.classList.add("cantidades");

        const boton2 = document.createElement("button");
        linea.appendChild(boton2);
        boton2.innerHTML = "Quitar";
        boton2.classList.add("boton2");
        boton2.id = `${nombre}2`;

        boton.addEventListener("click", function () {
            agregar(producto, cantidades);
            Toastify({
                text: nombre + " agregado",
                className: "info",
                gravity: "bottom",
                position: "right",
                style: {
                    background: "linear-gradient(to right, #00b09b, #96c93d)",
                }

            }).showToast();
        });

        boton2.addEventListener("click", function () {
            if (producto.cantidad > 0) {
                Toastify({
                    text: nombre + " eliminado",
                    className: "info",
                    gravity: "bottom",
                    position: "right",
                    style: {
                        background: "linear-gradient(90deg, rgba(121,9,9,1) 66%, rgba(255,0,0,1) 100%)",
                    }

                }).showToast();
            } else {
                Toastify({
                    text: "No hay " + nombre.toLowerCase() + " en el carrito",
                    className: "info",
                    gravity: "bottom",
                    position: "right",
                    style: {
                        background: "linear-gradient(black, grey)",
                    }

                }).showToast();
            }
            quitar(producto, cantidades);
        });
    }

    const totales = document.createElement("div");
    cuerpo.appendChild(totales);
    totales.innerHTML = `Total: $${total}`;
    totales.classList.add("totales");
}

function agregar(producto, cantidades) {
    count++;
    total += producto.precio;
}
