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
        cantidad: 0
    },
    {
        nombre: "Agua",
        precio: 50,
        cantidad: 0
    },
    {
        nombre: "Coca",
        precio: 80,
        cantidad: 0
    },
    {
        nombre: "Pan",
        precio: 60,
        cantidad: 0
    },
    {
        nombre: "Alfajor",
        precio: 110,
        cantidad: 0
    }
];

let count = 0;
total = 0;

for (let i = 0; i < localStorage.length; i++)
    {
    let clave = localStorage.key(i);
    let valor = localStorage.getItem(clave);
    if (clave == "total"){
        total = JSON.parse(valor); 
    }
    const productoEncontrado = arraydeproductos.find(producto => producto.nombre == clave);
    if(productoEncontrado){
        productoEncontrado.cantidad = valor;
    }
}


for (let producto of arraydeproductos) {
    const { nombre, precio, cantidad } = producto; // Desestructuración de objeto

    const linea = document.createElement("div");
    contenedor.appendChild(linea);
    linea.classList.add("linea");

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

    boton.addEventListener("click", function() {
        agregar(producto, cantidades);
    });

    boton2.addEventListener("click", function() {
        quitar(producto, cantidades);
    });
}

function agregar(producto, cantidades) {
    count++;
    total += producto.precio;
    producto.cantidad++;
    cantidades.innerHTML = `${producto.cantidad}`;
    localStorage.setItem("total", total);
    localStorage.setItem(producto.nombre, producto.cantidad);
    totales.innerHTML = `Total: $${total}`;
}

function quitar(producto, cantidades) {
    if (producto.cantidad > 0) {
        count--;
        total -= producto.precio;
        producto.cantidad--;
        cantidades.innerHTML = `${producto.cantidad}`;
        localStorage.setItem("total", total);
        localStorage.setItem(producto.nombre, producto.cantidad);
        totales.innerHTML = `Total: $${total}`;
    }
}

const totales = document.createElement("div");
cuerpo.appendChild(totales);
totales.innerHTML = `Total: $${total}`;
totales.classList.add("totales");