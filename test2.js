var imagenes = document.getElementsByTagName("img")
// var tiempos = [];
var contador = 0;

console.log(imagenes)

// Comprobar que hay imagenes
if(imagenes){
    for (let i = 0; i < imagenes.length; i++) {
/**
 * Inicializar atributos y variables
 */
        imagenes[i].dentro = "NO"
        imagenes[i].fuera = "SI"
        let temp;
        let tiempo = 0;
        var area = imagenes[i].height * imagenes[i].width;
/**
 * Evento Scroll
 */
        window.addEventListener("scroll" ,()=>{

/**
 * Comprobar si el area de la imagen tiene mas de 40.000 pixeles
 */

            if(imagenes[i] && imagenes[i].height && (imagenes[i].height * imagenes[i].width) >= 40000 ){ // && imagenes[i].style.display != "none"
                //Calculos para la hubicacion de las img
                var caja = imagenes[i].getBoundingClientRect();
                var mitadcaja = (((imagenes[i].height) / 2) * - 1)
                var mitadcajabot = ((imagenes[i].height) / 2)
           
/**
 * Comprobar si la img esta dentro del viewport y que no este oculta
 */
                if(caja.top >= mitadcaja && (caja.bottom - mitadcajabot)  <= window.innerHeight && caja.top != 0 && caja.bottom != 0){
                    //Comprobaciones y cambios para los metadatos
                    if(imagenes[i].dentro == "NO"){
                        //Si la imagen entra al View se cambia el atributo (para que no se active continuamente)
                        // y comienza un intervalo que suma de forma incremental los segundos de exposicion
                        imagenes[i].dentro = "SI"
                    
                        temp = setInterval(() => {
                            // Info en consola
                            console.log("esta visible " + imagenes[i].alt +"  "+ imagenes[i].dentro + " Tiempo en segundos: " + tiempo + " - " + (imagenes[i].height * imagenes[i].width))
                        
                            imagenes[i].tiempo = tiempo;
                            tiempo += 1;
                        }, 1000);
                    // contador++
                    }
                    //cambio del atributo fuera para marcar q esta dentro
                    imagenes[i].fuera = "NO"     

                }else{
                    //marco para decir que ya no esta dentro
                    imagenes[i].dentro = "NO"
                    //conpruebo que ya este fuera y limpio intervalo
                    if(imagenes[i].fuera == "NO"){
                        imagenes[i].fuera = "SI"
                        console.log("Ha salido la " + imagenes[i].name)
                        clearInterval(temp)
                    }
                }
            }
        })
    }
}



// var boton = document.getElementById("boton");
// boton.addEventListener("click" , ()=>{
//     vertiempos()
// })


/**
 * Funcion para ver las imagenes que se han visto al menos 1 segundo
 */
function vertiempos() {
    var arr = [];
    for (let i = 0; i < imagenes.length; i++) {
        if(imagenes[i].tiempo){
            arr.push({
                "nombre" : imagenes[i].alt ,
                 "tiempo" : imagenes[i].tiempo,
                 "tamaño": (imagenes[i].width * imagenes[i].height)
                })
            // console.log("La imagen " + imagenes[i].name + " ha estado " +imagenes[i].tiempo)
        }
    }
    console.log(arr)
}
