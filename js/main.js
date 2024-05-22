console.log("hola");
class producto{
    constructor (nombre, precio,){
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=0;
    }
    agregar(pedido){
        this.cantidad=this.cantidad+pedido
    }
}
function compra(){
    let finCompra = false;
    let total = 0

    const chocolate = new producto("Chocolate",100,0);
    const agua = new producto("Agua",50,0);
    const coca = new producto("Coca",80,0);
    const pan = new producto("Pan",60,0);
    const alfajor = new producto("Alfajor",110,0);
    let carrito=[chocolate,agua,coca,pan,alfajor];

    while(finCompra === false){
        const ingreso = parseInt( prompt("¿Que queres comprar hoy? \n1. Chocolate $100\n2. Agua $50\n3. Coca $80\n4. Pan $60\n5. Alfajor $110 \n\n0. Finalizar compra"));
        if (ingreso == 0){
            for (let i = 0; i < carrito.length; i++) {
            total = total + (carrito[i].precio*carrito[i].cantidad)
        }
            alert("Su total a pagar es:$"+total)
            finCompra = true;
            const volver = parseInt (prompt("Si quiere realizar otra compra ingrese 1"))
            if (volver == 1){
                compra()
            }
        }
        if (ingreso == 1){
            const cantidad = parseInt(prompt("Ingrese cuantas unidades quiere"))
            chocolate.agregar(cantidad)
        }
        if (ingreso == 2){
            const cantidad = parseInt(prompt("Ingrese cuantas unidades quiere"))
            agua.agregar(cantidad)
        }
        if (ingreso == 3){
            const cantidad = parseInt(prompt("Ingrese cuantas unidades quiere"))
            coca.agregar(cantidad)
        }
        if (ingreso == 4){
            const cantidad = parseInt(prompt("Ingrese cuantas unidades quiere"))
            pan.agregar(cantidad)
        }
        if (ingreso == 5){
            const cantidad = parseInt(prompt("Ingrese cuantas unidades quiere"))
            alfajor.agregar(cantidad)
        }
    }
    console.log("detalle de su pedido")
    for (let i = 0; i < carrito.length; i++) {
        console.log(carrito[i].nombre+"  $"+carrito[i].precio+"  "+carrito[i].cantidad)
    }
};
    compra();