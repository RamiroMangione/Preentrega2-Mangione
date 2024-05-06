console.log("hola");
function compra(){
    let finCompra = false;
    let carrito = 0
   
    while(finCompra === false){
        const ingreso = parseInt( prompt("¿Que queres comprar hoy? \n1. Chocolate $100\n2. Agua $50\n3. Coca $80\n4. Pan $60\n5. Alfajor $110 \n\n0. Finalizar compra                                                  Carrito:$"+carrito));
        if (ingreso == 0){
            alert("Su total a pagar es:$"+carrito)
            finCompra = true;
            const volver = parseInt (prompt("Si quiere realizar otra compra ingrese 1"))
            if (volver == 1){
                compra()
            }
        }
        if (ingreso == 1){
            const cantidad = parseInt(prompt("Ingrese cuantas unidades quiere"))
            carrito = carrito+100*cantidad
        }
        if (ingreso == 2){
            const cantidad = parseInt(prompt("Ingrese cuantas unidades quiere"))
            carrito = carrito+50*cantidad
        }
        if (ingreso == 3){
            const cantidad = parseInt(prompt("Ingrese cuantas unidades quiere"))
            carrito = carrito+80*cantidad
        }
        if (ingreso == 4){
            const cantidad = parseInt(prompt("Ingrese cuantas unidades quiere"))
            carrito = carrito+60*cantidad
        }
        if (ingreso == 5){
            const cantidad = parseInt(prompt("Ingrese cuantas unidades quiere"))
            carrito = carrito+110*cantidad
        }
    }
};
compra();