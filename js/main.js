
const cabeza = document.head;
const cuerpo = document.body;
const title = document.createElement("title");
title.innerHTML = "Kiosco Digital";
cabeza.appendChild(title);
const h1 = document.createElement("h1");
h1.innerHTML = "Kiosco Digital";
cuerpo.appendChild(h1)
h1.classList.add("titulo")
const contenedor = document.createElement("div");
cuerpo.appendChild(contenedor);
contenedor.classList.add("gondola")


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
]
let count = 0
total = 0


for (producto of arraydeproductos){
    const linea = document.createElement("div");
    contenedor.appendChild(linea);
    linea.classList.add("linea")
    const articulos = document.createElement("div");
    linea.appendChild(articulos);
    articulos.innerHTML = `${producto.nombre}`;
    const precios = document.createElement("div");
    linea.appendChild(precios);
    precios.innerHTML = `${producto.precio}`
    articulos.classList.add("precio")
    const boton = document.createElement("button");
    linea.appendChild(boton);
    boton.innerHTML = "Agregar";
    boton.classList.add("boton")
    boton.id = `${producto.nombre}`
    boton.addEventListener("click",agregar)
    cantidades = document.createElement("div");
    linea.appendChild(cantidades);
    cantidades.innerHTML = `${producto.cantidad}`
    const boton2 = document.createElement("button");
    linea.appendChild(boton2);
    boton2.innerHTML = "Quitar";
    boton2.classList.add("boton2")
    boton2.id = `${producto.nombre + "2"}`
    boton2.addEventListener("click",quitar)
    function agregar(){
        count ++
        total = total + parseInt(precios.innerHTML)
        console.log(total)
        console.log(articulos.innerHTML)
        localStorage.setItem("total",total)
        localStorage.setItem("cantidad de objetos",count)
    }
        function quitar(){
            console.log(count)
            if (count > 0){
                count --
                total = total - parseInt(precios.innerHTML)
                localStorage.setItem ("cantidad de objetos",count)
                localStorage.setItem("total",total)
            }
    }
}