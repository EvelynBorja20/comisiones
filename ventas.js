const VENTAS_BASE = 5 ;


function calcularComision(numeroVentas, PrecioProducto){
    let comision =0;

    if(numeroVentas>VENTAS_BASE){
        let ventasExtra = numeroVentas-VENTAS_BASE;
        comision = ventasExtra*(PrecioProducto*0.10);
    }

    return comision;

}

function calcular(){

    //RECUPERAMOS PROPIEDADES DE LAS CAJAS DE TEXTO
    let componenteSueloBase = document.getElementById("txtSueldoBase");
    let componenteVentas = document.getElementById("txtVentas");
    let componentePrecio = document.getElementById("txtPrecio");


    //RECUPERAR  EL VALOR DE LAS CAJAS DE TEXTO 
    let sueldoBaseStr = componenteSueloBase.value;
    let numeroVentasStr = componenteVentas.value;
    let PrecioProductoStr = componentePrecio.value;


    //CONVERTIMOS EL TEXTO A NUMEROS 
    let sueldoBase = parseFloat(sueldoBaseStr);
    let numeroVentas =parseFloat(numeroVentasStr);
    let PrecioProducto = parseFloat(PrecioProductoStr);

    let comision = calcularComision(numeroVentas,PrecioProducto);

    let total = sueldoBase + comision;

    let spSueldoBase = document.getElementById("spSueldoBase");
    let spComision = document.getElementById("spComision");
    let spTotal = document.getElementById("spTotal");

    spSueldoBase.textContent = sueldoBase;
    spComision.textContent = comision;
    spTotal.textContent = total;
}
