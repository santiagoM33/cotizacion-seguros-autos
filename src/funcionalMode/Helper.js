
export function obtenerDiferenciaAnio(year) {
    return new Date().getFullYear() - year;
 }
 
 export function calcularMarca( modelo ) {
     let incremento;
 
     switch (modelo) {
         case 'europeo':
             incremento = 1.30;
             break;
         case 'americano':
             incremento = 1.15;
             break;
         case 'asiatico':
             incremento = 1.05;
             break;
         default:
             break;
     }
 
     return incremento;
 }
 export function obtenerPlan( plan ) {
     return (plan === 'basico') ? 1.20 : 1.50;
 }
 export function primeraMayuscula(texto) {
     return texto.charAt(0).toUpperCase() + texto.slice(1);
 }

 export function fetchData(marca, year, plan) {
     const promise = new Promise((response, reject) => {
        setTimeout(() => {
            let montoBase = 3000;
            let diferenciaYear = obtenerDiferenciaAnio(year);
            montoBase -= ((diferenciaYear * 3) * montoBase) /100;
            montoBase = calcularMarca(marca) * montoBase;
            let agregarPlan = obtenerPlan(plan);
            let resultado = parseFloat(agregarPlan * montoBase);
            
            response({
                data:{
                    monto: Number(resultado)
                }
            });
        }, 3000);
     })
     return promise;
 }