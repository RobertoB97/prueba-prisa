var imagenes = document.getElementsByClassName("imagen")

console.log(imagenes)

    for (let i = 0; i < imagenes.length; i++) {
        imagenes[i].dentro = "NO"
        imagenes[i].fuera = "SI"
        let cosa;
        let tiempo = 0;
        window.addEventListener("scroll" ,()=>{

        if((imagenes[i].height * imagenes[i].width) >= 40000 ){


            var caja = imagenes[i].getBoundingClientRect();
            var mitadcaja = (((imagenes[i].height) / 2) * - 1)
            var mitadcajabot = ((imagenes[i].height) / 2)
           

            if(caja.top >= mitadcaja && (caja.bottom - mitadcajabot)  <= window.innerHeight){
                if(imagenes[i].dentro == "NO"){
                    imagenes[i].dentro = "SI"
                    
                    cosa = setInterval(() => {
                        console.log("esta visible " + imagenes[i].name +"  "+ imagenes[i].dentro + " Tiempo en segundos: " + tiempo)
                        // console.log()
                        tiempo += 1;
                    }, 1000);
                }
                imagenes[i].fuera = "NO"     

            }else{
                imagenes[i].dentro = "NO"
                if(imagenes[i].fuera == "NO"){
                    imagenes[i].fuera = "SI"
                    console.log("Ha salido la " + imagenes[i].name)
                    clearInterval(cosa)
                    
                }
                
                
            }


        }
   
})


}