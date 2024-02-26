
//variaveis da escala cromatica com sustenidos, dobrados sustenidos, bemois e dobrado bemois. 
var acessanotas = document.getElementsByClassName('a')
var stringcromatica = "C n, C s, C ss, D bb, D b, D n, D s, D ss, E bb, E b, E n, E s, E ss, F b, F n, F s, F ss, G bb, G b, G n, G s, G ss, A bb, A b, A n, A s, A ss, B bb, B b, B n, B s, C bb, C b"
var cromatica = stringcromatica.split(",");

//array criada fora das functions para usar nos algoritmos de intervalos 

var elementodesejadoArray = [];

console.log(cromatica)


//vars para facilitar o argumento das funções com o indice da escala cromatica setada para o nome da nota 

var C = 0;
var Cs = 1;
var Db = 4;
var D = 5;
var Ds = 6;
var Eb = 9;
var E = 10;
var Es = 11;
var F = 14;
var Fs = 15
var Gb = 18;
var G = 19;
var Gs = 20;
var Ab = 23;
var A = 24;
var As = 25;
var Bb = 28;
var B = 29;
var Bs = 30;
var Cb = 32;




function escurecerNotas(){

var acessanotas = document.getElementsByClassName("a")

   for(i=0; i<acessanotas.length; i++){
        
    acessanotas[i].addEventListener('touchstart', function(event){


    event.preventDefault();
    this.style.filter ="brightness(0.5)" 
        })

    acessanotas[i].addEventListener('mousedown', function(event){
      event.preventDefault();
      this.style.cursor = "pointer"
      this.style.filter ="brightness(0.5)" 
      
    })

   

   } 

   
   for(i=0; i<acessanotas.length; i++){
        
    acessanotas[i].addEventListener('touchend', function(){

    
    this.style.filter ="brightness(1)" 

   
      



   

        


    })

    acessanotas[i].addEventListener('mouseup', function(){
      
      this.style.cursor = "default"
      this.style.filter ="brightness(1)" 

    })

   } 
   
  
  



};

escurecerNotas()






//function teste para mostrar todas notas
function resetinverso(){

    var acessanotas = document.getElementsByClassName("a")
     
    
    for(i=0; i<acessanotas.length;i++){

        acessanotas[i].style.display = "block"
    }


}

//function que reseta o braço da guitarra e apaga todas as notass
function reset(){

    var acessanotas = document.getElementsByClassName("a")
     
    
    for(i=0; i<acessanotas.length;i++){

        acessanotas[i].style.display = "none"
    }


}

//function que mostra só corda um 

function resettodasmenosUm(){

    for(i=2; i<7; i++ ) {
     var acessanotas = document.getElementsByClassName(`${i}`)
      
     
     for(j=0; j<acessanotas.length;j++){
 
         if(acessanotas[j].style.display="block"){acessanotas[j].style.display="none"}
     }
 
 }
 }
 

//loop para mostrar notas do algoritmo do intervalo 

function mostraElemento(notas , corda){

    if(corda == undefined){ corda = ""}
    
    for(i=0; i<notas.length;i++){
    
    
        var acessanotas = document.getElementsByClassName(`${notas[i]}  ${corda}`)
    
       for(l=0;l<acessanotas.length;l++){
    
        acessanotas[l].style.display = "Block"
       }
    }
    }

//aloritmos para os intervalos

function Fundamental(tonica){

    let j = tonica;
    var intervalo = cromatica[j];

    



    elementodesejadoArray = intervalo.split(",");

    console.log(elementodesejadoArray)
   


}

function segundaMenor(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {




        if (i = 1) {


            if (j < 29) { j = j + 4 } 
            else {


                if (j >= 29) { j = j - 29 }


            }

        }

        intervalo =  cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
   

}

function segundaMaior(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

        if (i = 1) {

            if (j < 28) { j = j + 5 } 
            else {
                    if (j >= 28) { j = j - 28 }
}
 }

        intervalo =  cromatica[j];




    }

    elementodesejadoArray =  intervalo.split(",");


   // console.log(elementodesejadoArray)



    

}

function segundaAumentada(tonica) {

  let j = tonica;
  var intervalo = cromatica[j];

  for (i = 0; i < 2; i++) {

      if (i = 1) {

          if (j < 27) { j = j + 6 } 
          else {
                  if (j >= 27) { j = j - 27 }
}
}

      intervalo =  cromatica[j];




  }

  elementodesejadoArray =  intervalo.split(",");


  //console.log(elementodesejadoArray)



  

}

function terçaMenor(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

        




        if (i = 1) {


            if (j < 24) { j = j + 9 } 
            else {


                if (j >= 24) { j = j - 24 }


            }

        }

        intervalo =  cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
   
}

function terçaMaior(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

        
        if (i = 1) {


            if (j < 23) { j = j + 10 } 
            else {


                if (j >= 23) { j = j - 23 }


            }

        }

        intervalo =  cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
 

  
}

function quartaJusta(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

       




        if (i = 1) {


            if (j < 19) { j = j + 14 } 
            else {


                if (j >= 19) { j = j - 19 }


            }

        }

        intervalo =  cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
   
    
 
  
}

function quartaAumentada(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

     




        if (i = 1) {


            if (j < 15) { j = j + 15 } 
            else {


                if (j == 15) { j = j - 15 }
                else{

                    if(j>15){j = j - 18}



                }


            }

        }

        intervalo =    cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
   
    
 
  
}

function quintaDiminuta(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

     




        if (i = 1) {


            if (j < 15) { j = j + 18 }else{
           
            if(j>=15){j = j -15}

            }
                

        }

        intervalo =   cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

   
   //console.log(elementodesejadoArray)
    
 
  
}


function quintaJusta(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

        




        if (i = 1) {


            if (j < 14) { j = j + 19 } 
            else {


                if (j >= 14) { j = j - 14 }


            }

        }

        intervalo = cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
   
    
  
  
}

function quintaAumentada(tonica) {

   

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

        




        if (i = 1) {

            
            if (j < 11) { j = j + 20 } 
            else {


                if (j == 11) { j = 1 }else{
                    if(j>13 & j<30){j=j-13}else{

                        if(j==30){j=20}else{
                            if(j==32)(j=19)
                        }
                    }
                }


            }

        }

        intervalo =  cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
    //console.log(intervalo)
    
  
  
}

function sextaMenor(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

       




        if (i = 1) {


            if (j < 10) { j = j + 23 } 
            else {


                if (j >= 10) { j = j - 10 }


            }

        }

        intervalo =  cromatica[j];

        


    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
      //console.log(intervalo)
    

  
}

function sextaMaior(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

       




        if (i = 1) {


            if (j < 9) { j = j + 24 } 
            else {


                if (j >= 9) { j = j - 9 }


            }

        }

        intervalo =  cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
  
    

  
}
function setimaDiminuta(tonica) {

  let j = tonica;
  var intervalo = cromatica[j];

  for (i = 0; i < 2; i++) {

     




      if (i = 1) {

        if(j==18){j=9}else{
          if (j < 6) { j = j + 27 } 
          else {


              if (j >= 6) { j = j - 6 }


          }}

      }

      intervalo =  cromatica[j];




  }

  elementodesejadoArray = intervalo.split(",");

  //console.log(elementodesejadoArray)
  // console.log(intervalo)


}
function setimaMenor(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

       




        if (i = 1) {


            if (j < 5) { j = j + 28 } 
            else {


                if (j >= 5) { j = j - 5 }


            }

        }

        intervalo =  cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)
    // console.log(intervalo)
 
  
}
function setimaMaior(tonica) {

    let j = tonica;
    var intervalo = cromatica[j];

    for (i = 0; i < 2; i++) {

       




        if (i = 1) {


            if (j < 4) { j = j + 29 } 
            else {


                if (j >= 4) { j = j - 4 }


            }

        }

        intervalo =  cromatica[j];




    }

    elementodesejadoArray = intervalo.split(",");

    //console.log(elementodesejadoArray)

 
  
}






//escalas


//diatonica

function diatonica(tonica){

    reset();

    //intervalo
    Fundamental(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray);
    //intervalo  
    segundaMaior(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray);
      //intervalo 
    terçaMaior(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray);
      //intervalo 
    quartaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray);
      //intervalo 
    quintaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray);
      //intervalo 
    sextaMaior(tonica); 
    //mostra intervalo
    mostraElemento(elementodesejadoArray);
      //intervalo 
    setimaMaior(tonica); 
     //mostra intervalo
    mostraElemento(elementodesejadoArray);

  

};

//diatonica por corda 

function diatonicaCordaUm(tonica){

    reset();

    //intervalo
    Fundamental(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 1);
    //intervalo  
    segundaMaior(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 1);
      //intervalo 
    terçaMaior(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 1);
      //intervalo 
    quartaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 1);
      //intervalo 
    quintaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 1);
      //intervalo 
    sextaMaior(tonica); 
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 1);
      //intervalo 
    setimaMaior(tonica); 
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 1);

  

};

function diatonicaCordaDois(tonica){

    reset();

    //intervalo
    Fundamental(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 2);
    //intervalo  
    segundaMaior(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 2);
      //intervalo 
    terçaMaior(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 2);
      //intervalo 
    quartaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 2);
      //intervalo 
    quintaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 2);
      //intervalo 
    sextaMaior(tonica); 
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 2);
      //intervalo 
    setimaMaior(tonica); 
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 2);

  

};

function diatonicaCordaTres(tonica){

    reset();

    //intervalo
    Fundamental(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 3);
    //intervalo  
    segundaMaior(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 3);
      //intervalo 
    terçaMaior(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 3);
      //intervalo 
    quartaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 3);
      //intervalo 
    quintaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 3);
      //intervalo 
    sextaMaior(tonica); 
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 3);
      //intervalo 
    setimaMaior(tonica); 
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 3);

  

};

function diatonicaCordaQuatro(tonica){

    reset();

    //intervalo
    Fundamental(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 4);
    //intervalo  
    segundaMaior(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 4);
      //intervalo 
    terçaMaior(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 4);
      //intervalo 
    quartaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 4);
      //intervalo 
    quintaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 4);
      //intervalo 
    sextaMaior(tonica); 
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 4);
      //intervalo 
    setimaMaior(tonica); 
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 4);

  

};

function diatonicaCordaCinco(tonica){

    reset();

    //intervalo
    Fundamental(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 5);
    //intervalo  
    segundaMaior(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 5);
      //intervalo 
    terçaMaior(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 5);
      //intervalo 
    quartaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 5);
      //intervalo 
    quintaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 5);
      //intervalo 
    sextaMaior(tonica); 
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 5);
      //intervalo 
    setimaMaior(tonica); 
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 5);

  

};

function diatonicaCordaSeis(tonica){

    reset();

    //intervalo
    Fundamental(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 6);
    //intervalo  
    segundaMaior(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 6);
      //intervalo 
    terçaMaior(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 6);
      //intervalo 
    quartaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 6);
      //intervalo 
    quintaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 6);
      //intervalo 
    sextaMaior(tonica); 
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 6);
      //intervalo 
    setimaMaior(tonica); 
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 6);

  

};


//diatonica duas cordas

function diatonicaCordaUmDois(tonica){
   
    reset();

    //intervalo
    Fundamental(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 1);
    mostraElemento(elementodesejadoArray, 2);
    //intervalo  
    segundaMaior(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 1);
    mostraElemento(elementodesejadoArray, 2);
      //intervalo 
    terçaMaior(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 1);
    mostraElemento(elementodesejadoArray, 2);
      //intervalo 
    quartaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 1);
    mostraElemento(elementodesejadoArray, 2);
      //intervalo 
    quintaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 1);
    mostraElemento(elementodesejadoArray, 2);
      //intervalo 
    sextaMaior(tonica); 
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 1);
    mostraElemento(elementodesejadoArray, 2);
      //intervalo 
    setimaMaior(tonica); 
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 1);
    mostraElemento(elementodesejadoArray, 2);
    
}

function diatonicaCordaDoisTres(tonica){

    reset();

    //intervalo
    Fundamental(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 3);
    mostraElemento(elementodesejadoArray, 2);
    //intervalo  
    segundaMaior(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 3);
    mostraElemento(elementodesejadoArray, 2);
      //intervalo 
    terçaMaior(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 3);
    mostraElemento(elementodesejadoArray, 2);
      //intervalo 
    quartaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 3);
    mostraElemento(elementodesejadoArray, 2);
      //intervalo 
    quintaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 3);
    mostraElemento(elementodesejadoArray, 2);
      //intervalo 
    sextaMaior(tonica); 
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 3);
    mostraElemento(elementodesejadoArray, 2);
      //intervalo 
    setimaMaior(tonica); 
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 3);
    mostraElemento(elementodesejadoArray, 2);

}

function diatonicaCordaTresQuatro(tonica){

    reset();

    //intervalo
    Fundamental(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 3);
    mostraElemento(elementodesejadoArray, 4);
    //intervalo  
    segundaMaior(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 3);
    mostraElemento(elementodesejadoArray, 4);
      //intervalo 
    terçaMaior(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 3);
    mostraElemento(elementodesejadoArray, 4);
      //intervalo 
    quartaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 3);
    mostraElemento(elementodesejadoArray, 4);
      //intervalo 
    quintaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 3);
    mostraElemento(elementodesejadoArray, 4);
      //intervalo 
    sextaMaior(tonica); 
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 3);
    mostraElemento(elementodesejadoArray, 4);
      //intervalo 
    setimaMaior(tonica); 
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 3);
    mostraElemento(elementodesejadoArray, 4);


}

function diatonicaCordaQuatroCinco(tonica){

    reset();

    //intervalo
    Fundamental(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 5);
    mostraElemento(elementodesejadoArray, 4);
    //intervalo  
    segundaMaior(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 5);
    mostraElemento(elementodesejadoArray, 4);
      //intervalo 
    terçaMaior(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 5);
    mostraElemento(elementodesejadoArray, 4);
      //intervalo 
    quartaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 5);
    mostraElemento(elementodesejadoArray, 4);
      //intervalo 
    quintaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 5);
    mostraElemento(elementodesejadoArray, 4);
      //intervalo 
    sextaMaior(tonica); 
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 5);
    mostraElemento(elementodesejadoArray, 4);
      //intervalo 
    setimaMaior(tonica); 
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 5);
    mostraElemento(elementodesejadoArray, 4);

}

function diatonicaCordaCincoSeis(tonica){

    
    reset();

    //intervalo
    Fundamental(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 5);
    mostraElemento(elementodesejadoArray, 6);
    //intervalo  
    segundaMaior(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 5);
    mostraElemento(elementodesejadoArray, 6);
      //intervalo 
    terçaMaior(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 5);
    mostraElemento(elementodesejadoArray, 6);
      //intervalo 
    quartaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 5);
    mostraElemento(elementodesejadoArray, 6);
      //intervalo 
    quintaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 5);
    mostraElemento(elementodesejadoArray, 6);
      //intervalo 
    sextaMaior(tonica); 
    //mostra intervalo
    mostraElemento(elementodesejadoArray, 5);
    mostraElemento(elementodesejadoArray, 6);
      //intervalo 
    setimaMaior(tonica); 
     //mostra intervalo
    mostraElemento(elementodesejadoArray, 5);
    mostraElemento(elementodesejadoArray, 6);

}




//CAGED DIATONICA

function diatonicaCAGEDC(tonica){

     reset();

     Fundamental(tonica)
     mostraElemento(elementodesejadoArray, 5 )
     mostraElemento(elementodesejadoArray, 2 )


     segundaMaior(tonica);
     mostraElemento(elementodesejadoArray, 4 )
     mostraElemento(elementodesejadoArray, 2 )

     terçaMaior(tonica)
     mostraElemento(elementodesejadoArray , 6)
     mostraElemento(elementodesejadoArray, 4)
     mostraElemento(elementodesejadoArray , 1)

     quartaJusta(tonica)
     mostraElemento(elementodesejadoArray , 6)
     mostraElemento(elementodesejadoArray, 4)
     mostraElemento(elementodesejadoArray , 1)

     quintaJusta(tonica)
     mostraElemento(elementodesejadoArray , 6)
     mostraElemento(elementodesejadoArray, 3)
     mostraElemento(elementodesejadoArray , 1)

     sextaMaior(tonica)
     mostraElemento(elementodesejadoArray, 5 )
     mostraElemento(elementodesejadoArray, 3 )

     setimaMaior(tonica)
     mostraElemento(elementodesejadoArray, 5 )
     mostraElemento(elementodesejadoArray, 2 )

};

function diatonicaCAGEDA(tonica){

    reset();

    Fundamental(tonica)
    mostraElemento(elementodesejadoArray, 5 )
    mostraElemento(elementodesejadoArray, 3 )


    segundaMaior(tonica);
    mostraElemento(elementodesejadoArray, 5 )
    mostraElemento(elementodesejadoArray, 2 )

    terçaMaior(tonica)
    
    mostraElemento(elementodesejadoArray, 4)
    mostraElemento(elementodesejadoArray , 2)

    quartaJusta(tonica)
    mostraElemento(elementodesejadoArray, 4)
    mostraElemento(elementodesejadoArray , 2)

    quintaJusta(tonica)
    mostraElemento(elementodesejadoArray , 6)
    mostraElemento(elementodesejadoArray, 4)
    mostraElemento(elementodesejadoArray , 1)

    sextaMaior(tonica)
    mostraElemento(elementodesejadoArray, 6 )
    mostraElemento(elementodesejadoArray, 3 )
    mostraElemento(elementodesejadoArray , 1)

    setimaMaior(tonica)
    mostraElemento(elementodesejadoArray, 5 )
    mostraElemento(elementodesejadoArray, 3 )

};


function diatonicaCAGEDG(tonica){

    reset();

    Fundamental(tonica)
    mostraElemento(elementodesejadoArray, 6 )
    mostraElemento(elementodesejadoArray, 3 )
    mostraElemento(elementodesejadoArray, 1 )


    segundaMaior(tonica);
    mostraElemento(elementodesejadoArray, 5 )
    mostraElemento(elementodesejadoArray, 3 )

    terçaMaior(tonica)
    
    mostraElemento(elementodesejadoArray, 5)
    mostraElemento(elementodesejadoArray , 2)

    quartaJusta(tonica)
    mostraElemento(elementodesejadoArray, 5)
    mostraElemento(elementodesejadoArray , 2)

    quintaJusta(tonica)
    mostraElemento(elementodesejadoArray, 4)
    mostraElemento(elementodesejadoArray , 2)

    sextaMaior(tonica)
    mostraElemento(elementodesejadoArray, 6 )
    mostraElemento(elementodesejadoArray, 4 )
    mostraElemento(elementodesejadoArray , 1)

    setimaMaior(tonica)
    mostraElemento(elementodesejadoArray, 6 )
    mostraElemento(elementodesejadoArray, 3 )
    mostraElemento(elementodesejadoArray, 1 )

};

function diatonicaCAGEDE(tonica){

    reset();

    Fundamental(tonica)
    mostraElemento(elementodesejadoArray, 6 )
    mostraElemento(elementodesejadoArray, 4 )
    mostraElemento(elementodesejadoArray, 1 )


    segundaMaior(tonica);
    mostraElemento(elementodesejadoArray, 6 )
    mostraElemento(elementodesejadoArray, 1 )
    mostraElemento(elementodesejadoArray, 3 )

    terçaMaior(tonica)
    
    mostraElemento(elementodesejadoArray, 5)
    mostraElemento(elementodesejadoArray , 3)

    quartaJusta(tonica)
    mostraElemento(elementodesejadoArray, 5)
    mostraElemento(elementodesejadoArray , 3)

    quintaJusta(tonica)
    mostraElemento(elementodesejadoArray, 5)
    mostraElemento(elementodesejadoArray , 2)

    sextaMaior(tonica)
    mostraElemento(elementodesejadoArray, 4 )
    mostraElemento(elementodesejadoArray , 2)

    setimaMaior(tonica)
    mostraElemento(elementodesejadoArray, 6 )
    mostraElemento(elementodesejadoArray, 4 )
    mostraElemento(elementodesejadoArray, 1 )

};

function diatonicaCAGEDD(tonica){

    reset();

    Fundamental(tonica)
     mostraElemento(elementodesejadoArray, 4 )
    mostraElemento(elementodesejadoArray, 2 )


    segundaMaior(tonica);
    mostraElemento(elementodesejadoArray, 6 )
    mostraElemento(elementodesejadoArray, 1 )
    mostraElemento(elementodesejadoArray, 4 )

    terçaMaior(tonica)
    mostraElemento(elementodesejadoArray, 6)
    mostraElemento(elementodesejadoArray , 3)
    mostraElemento(elementodesejadoArray , 1)

    quartaJusta(tonica)
    mostraElemento(elementodesejadoArray, 6)
    mostraElemento(elementodesejadoArray , 3)
    mostraElemento(elementodesejadoArray , 1)

    quintaJusta(tonica)
    mostraElemento(elementodesejadoArray, 5)
    mostraElemento(elementodesejadoArray , 3)

    sextaMaior(tonica)
    mostraElemento(elementodesejadoArray, 5 )
    mostraElemento(elementodesejadoArray , 2)

    setimaMaior(tonica)
   
    mostraElemento(elementodesejadoArray, 4 )
    mostraElemento(elementodesejadoArray, 2 )

};


//sete desenhos

function diatonicaSetedesenhosUm(tonica){
    reset();

    Fundamental(tonica)
    mostraElemento(elementodesejadoArray, 6 )
    mostraElemento(elementodesejadoArray, 4 )
    mostraElemento(elementodesejadoArray, 2 )


    segundaMaior(tonica);
    mostraElemento(elementodesejadoArray, 6 )
    mostraElemento(elementodesejadoArray, 1 )
    mostraElemento(elementodesejadoArray, 4 )

    terçaMaior(tonica)
    mostraElemento(elementodesejadoArray, 6)
    mostraElemento(elementodesejadoArray , 3)
    mostraElemento(elementodesejadoArray , 1)

    quartaJusta(tonica)
    mostraElemento(elementodesejadoArray, 5)
    mostraElemento(elementodesejadoArray , 3)
    mostraElemento(elementodesejadoArray , 1)

    quintaJusta(tonica)
    mostraElemento(elementodesejadoArray, 5)
    mostraElemento(elementodesejadoArray , 3)

    sextaMaior(tonica)
    mostraElemento(elementodesejadoArray, 5 )
    mostraElemento(elementodesejadoArray , 2)

    setimaMaior(tonica)
   
    mostraElemento(elementodesejadoArray, 4 )
    mostraElemento(elementodesejadoArray, 2 )
}
function diatonicaSetedesenhosDois(tonica){
    
    reset();

    Fundamental(tonica)
     mostraElemento(elementodesejadoArray, 4 )
    mostraElemento(elementodesejadoArray, 2 )


    segundaMaior(tonica);
    mostraElemento(elementodesejadoArray, 6 )
    mostraElemento(elementodesejadoArray, 2 )
    mostraElemento(elementodesejadoArray, 4 )

    terçaMaior(tonica)
    mostraElemento(elementodesejadoArray, 6)
    mostraElemento(elementodesejadoArray , 4)
    mostraElemento(elementodesejadoArray , 1)

    quartaJusta(tonica)
    mostraElemento(elementodesejadoArray, 6)
    mostraElemento(elementodesejadoArray , 3)
    mostraElemento(elementodesejadoArray , 1)

    quintaJusta(tonica)
    mostraElemento(elementodesejadoArray, 5)
    mostraElemento(elementodesejadoArray , 3)
    mostraElemento(elementodesejadoArray , 1)

    sextaMaior(tonica)
    mostraElemento(elementodesejadoArray, 5 )
    mostraElemento(elementodesejadoArray , 3)

    setimaMaior(tonica)
   
    mostraElemento(elementodesejadoArray, 5 )
    mostraElemento(elementodesejadoArray, 2 )
}

function diatonicaSetedesenhosTres(tonica){
    reset();

    Fundamental(tonica)
    mostraElemento(elementodesejadoArray, 5 )
    mostraElemento(elementodesejadoArray, 2 )


    segundaMaior(tonica);
    mostraElemento(elementodesejadoArray, 4 )
    mostraElemento(elementodesejadoArray, 2 )

    terçaMaior(tonica)
    mostraElemento(elementodesejadoArray , 6)
    mostraElemento(elementodesejadoArray, 4)
    mostraElemento(elementodesejadoArray , 2)

    quartaJusta(tonica)
    mostraElemento(elementodesejadoArray , 6)
    mostraElemento(elementodesejadoArray, 4)
    mostraElemento(elementodesejadoArray , 1)

    quintaJusta(tonica)
    mostraElemento(elementodesejadoArray , 6)
    mostraElemento(elementodesejadoArray, 3)
    mostraElemento(elementodesejadoArray , 1)

    sextaMaior(tonica)
    mostraElemento(elementodesejadoArray, 5 )
    mostraElemento(elementodesejadoArray, 3 )
    mostraElemento(elementodesejadoArray, 1 )

    setimaMaior(tonica)
    mostraElemento(elementodesejadoArray, 5 )
    mostraElemento(elementodesejadoArray, 3 )

}


function diatonicaSetedesenhosQuatro(tonica){
    reset();

    Fundamental(tonica)
    mostraElemento(elementodesejadoArray, 5 )
    mostraElemento(elementodesejadoArray, 3 )


    segundaMaior(tonica);
    mostraElemento(elementodesejadoArray, 5 )
    mostraElemento(elementodesejadoArray, 2 )

    terçaMaior(tonica)
    mostraElemento(elementodesejadoArray, 4)
    mostraElemento(elementodesejadoArray , 2)

    quartaJusta(tonica)
    mostraElemento(elementodesejadoArray , 6)
    mostraElemento(elementodesejadoArray, 4)
    mostraElemento(elementodesejadoArray , 2)

    quintaJusta(tonica)
    mostraElemento(elementodesejadoArray , 6)
    mostraElemento(elementodesejadoArray, 4)
    mostraElemento(elementodesejadoArray , 1)

    sextaMaior(tonica)
    mostraElemento(elementodesejadoArray, 6 )
    mostraElemento(elementodesejadoArray, 3 )
    mostraElemento(elementodesejadoArray, 1 )

    setimaMaior(tonica)
    mostraElemento(elementodesejadoArray, 5 )
    mostraElemento(elementodesejadoArray, 3 )
    mostraElemento(elementodesejadoArray, 1 )

}

function diatonicaSetedesenhosCinco(tonica){

    reset();

    Fundamental(tonica)
    mostraElemento(elementodesejadoArray, 5 )
    mostraElemento(elementodesejadoArray, 3 )
    mostraElemento(elementodesejadoArray, 1 )


    segundaMaior(tonica);
    mostraElemento(elementodesejadoArray, 5 )
    mostraElemento(elementodesejadoArray, 3 )

    terçaMaior(tonica)
    
    mostraElemento(elementodesejadoArray, 5)
    mostraElemento(elementodesejadoArray , 2)

    quartaJusta(tonica)
    mostraElemento(elementodesejadoArray, 4)
    mostraElemento(elementodesejadoArray , 2)

    quintaJusta(tonica)
    mostraElemento(elementodesejadoArray, 6)
    mostraElemento(elementodesejadoArray, 4)
    mostraElemento(elementodesejadoArray , 2)

    sextaMaior(tonica)
    mostraElemento(elementodesejadoArray, 6 )
    mostraElemento(elementodesejadoArray, 4 )
    mostraElemento(elementodesejadoArray , 1)

    setimaMaior(tonica)
    mostraElemento(elementodesejadoArray, 6 )
    mostraElemento(elementodesejadoArray, 3 )
    mostraElemento(elementodesejadoArray, 1 )


}

function diatonicaSetedesenhosSeis(tonica){

    reset();

    Fundamental(tonica)
    mostraElemento(elementodesejadoArray, 6 )
    mostraElemento(elementodesejadoArray, 3 )
    mostraElemento(elementodesejadoArray, 1 )


    segundaMaior(tonica);
    mostraElemento(elementodesejadoArray, 5 )
    mostraElemento(elementodesejadoArray, 3 )
    mostraElemento(elementodesejadoArray, 1 )

    terçaMaior(tonica)
    
    mostraElemento(elementodesejadoArray, 5)
    mostraElemento(elementodesejadoArray , 3)

    quartaJusta(tonica)
    mostraElemento(elementodesejadoArray, 5)
    mostraElemento(elementodesejadoArray , 2)

    quintaJusta(tonica)
    mostraElemento(elementodesejadoArray, 4)
    mostraElemento(elementodesejadoArray , 2)

    sextaMaior(tonica)
    mostraElemento(elementodesejadoArray, 6 )
    mostraElemento(elementodesejadoArray, 4 )
    mostraElemento(elementodesejadoArray , 2)

    setimaMaior(tonica)
    mostraElemento(elementodesejadoArray, 6 )
    mostraElemento(elementodesejadoArray, 4 )
    mostraElemento(elementodesejadoArray, 1 )


}


function diatonicaSetedesenhosSete(tonica){

    reset();

    Fundamental(tonica)
    mostraElemento(elementodesejadoArray, 6 )
    mostraElemento(elementodesejadoArray, 4 )
    mostraElemento(elementodesejadoArray, 1 )


    segundaMaior(tonica);
    mostraElemento(elementodesejadoArray, 6 )
    mostraElemento(elementodesejadoArray, 1 )
    mostraElemento(elementodesejadoArray, 3 )

    terçaMaior(tonica)
    
    mostraElemento(elementodesejadoArray, 5)
    mostraElemento(elementodesejadoArray , 3)
    mostraElemento(elementodesejadoArray , 1)

    quartaJusta(tonica)
    mostraElemento(elementodesejadoArray, 5)
    mostraElemento(elementodesejadoArray , 3)

    quintaJusta(tonica)
    mostraElemento(elementodesejadoArray, 5)
    mostraElemento(elementodesejadoArray , 2)

    sextaMaior(tonica)
    mostraElemento(elementodesejadoArray, 4 )
    mostraElemento(elementodesejadoArray , 2)

    setimaMaior(tonica)
    mostraElemento(elementodesejadoArray, 6 )
    mostraElemento(elementodesejadoArray, 4 )
    mostraElemento(elementodesejadoArray, 2 )

   

}





//penta

function pentatonica(tonica){

    reset();

    //intervalo
    Fundamental(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray);
    //intervalo  
    segundaMaior(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray);
      //intervalo 
    terçaMaior(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray);
    //intervalo 
    quintaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray);
      //intervalo 
    sextaMaior(tonica); 
    //mostra intervalo
    mostraElemento(elementodesejadoArray);
     

  

};

//penta blues

function pentaBlues(tonica){

    reset();

    //intervalo
    Fundamental(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray);
    //intervalo  
    segundaMaior(tonica);
    //mostra intervalo
    mostraElemento(elementodesejadoArray);

         //intervalo 
         segundaAumentada(tonica);
         //mostra intervalo
        mostraElemento(elementodesejadoArray);

      //intervalo 
    terçaMaior(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray);
    //intervalo 
    quintaJusta(tonica);
     //mostra intervalo
    mostraElemento(elementodesejadoArray);
      //intervalo 
    sextaMaior(tonica); 
    //mostra intervalo
    mostraElemento(elementodesejadoArray);
     

  

};

//menor harmonica

function menorHarmonica(tonica){
    reset()
    Fundamental(tonica)
    mostraElemento(elementodesejadoArray)

    segundaMaior(tonica)
    mostraElemento(elementodesejadoArray)

    terçaMenor(tonica)
    mostraElemento(elementodesejadoArray)

    quartaJusta(tonica)
    mostraElemento(elementodesejadoArray)

    quintaJusta(tonica)
    mostraElemento(elementodesejadoArray)

    sextaMenor(tonica)
    mostraElemento(elementodesejadoArray)

    setimaMaior(tonica)
    mostraElemento(elementodesejadoArray)
}

//menor melodica

function menorMelodica(tonica){
    reset()
    Fundamental(tonica)
    mostraElemento(elementodesejadoArray)

    segundaMaior(tonica)
    mostraElemento(elementodesejadoArray)

    terçaMenor(tonica)
    mostraElemento(elementodesejadoArray)

    quartaJusta(tonica)
    mostraElemento(elementodesejadoArray)

    quintaJusta(tonica)
    mostraElemento(elementodesejadoArray)

    sextaMaior(tonica)
    mostraElemento(elementodesejadoArray)

    setimaMaior(tonica)
    mostraElemento(elementodesejadoArray)
}

//escala diminuta

function escalaDiminuta(tonica){

    reset();

    Fundamental(tonica);
    mostraElemento(elementodesejadoArray);

    segundaMaior(tonica);
    mostraElemento(elementodesejadoArray);

    terçaMenor(tonica);
    mostraElemento(elementodesejadoArray);

    quartaJusta(tonica);
    mostraElemento(elementodesejadoArray);

    quintaDiminuta(tonica);
    mostraElemento(elementodesejadoArray);

    sextaMenor(tonica);
    mostraElemento(elementodesejadoArray);

    setimaDiminuta(tonica);
    mostraElemento(elementodesejadoArray);

    setimaMaior(tonica);
    mostraElemento(elementodesejadoArray);
}

//tons inteiros 
function tonsInteiros(tonica){
   
    reset()
    
    Fundamental(tonica);
    mostraElemento(elementodesejadoArray);

    segundaMaior(tonica);
    mostraElemento(elementodesejadoArray);

    terçaMaior(tonica);
    mostraElemento(elementodesejadoArray);

    quartaAumentada(tonica);
    mostraElemento(elementodesejadoArray);

    quintaAumentada(tonica);
    mostraElemento(elementodesejadoArray);

    setimaMenor(tonica);
    mostraElemento(elementodesejadoArray);

}
//escala aumentada

function escalaAumentada(tonica){
  reset()

  Fundamental(tonica);
  mostraElemento(elementodesejadoArray);

  segundaAumentada(tonica);
  mostraElemento(elementodesejadoArray);

  terçaMaior(tonica);
  mostraElemento(elementodesejadoArray);

  quintaJusta(tonica);
  mostraElemento(elementodesejadoArray);

  sextaMenor(tonica);
  mostraElemento(elementodesejadoArray);

  setimaMaior(tonica);
  mostraElemento(elementodesejadoArray);
}

//triades

function triadeMaior(tonica){

    reset();
    
    Fundamental(tonica);
    mostraElemento(elementodesejadoArray);

    terçaMaior(tonica);
    mostraElemento(elementodesejadoArray);

    quintaJusta(tonica);
    mostraElemento(elementodesejadoArray);
}

function triadeAumentada(tonica){

    reset();
    
    Fundamental(tonica);
    mostraElemento(elementodesejadoArray);

    terçaMaior(tonica);
    mostraElemento(elementodesejadoArray);

    quintaAumentada(tonica);
    mostraElemento(elementodesejadoArray);
}

function triadeMenor(tonica){

    reset();
    
    Fundamental(tonica);
    mostraElemento(elementodesejadoArray);

    terçaMenor(tonica);
    mostraElemento(elementodesejadoArray);

    quintaJusta(tonica);
    mostraElemento(elementodesejadoArray);
}

function triadeDiminuta(tonica){

    reset();
    
    Fundamental(tonica);
    mostraElemento(elementodesejadoArray);

    terçaMenor(tonica);
    mostraElemento(elementodesejadoArray);

    quintaDiminuta(tonica);
    mostraElemento(elementodesejadoArray);
}

//tetrades

//maj7

function tetradeMaiorcomSetimaMaior(tonica){

    reset();
    
    Fundamental(tonica);
    mostraElemento(elementodesejadoArray);

    terçaMaior(tonica);
    mostraElemento(elementodesejadoArray);

    quintaJusta(tonica);
    mostraElemento(elementodesejadoArray);

    setimaMaior(tonica);
    mostraElemento(elementodesejadoArray);
}

//maj7#5
function tetradeMaiorcomSetimaMaioreQuintaAumentada(tonica){

    reset();
    
    Fundamental(tonica);
    mostraElemento(elementodesejadoArray);

    terçaMaior(tonica);
    mostraElemento(elementodesejadoArray);

    quintaAumentada(tonica);
    mostraElemento(elementodesejadoArray);

    setimaMaior(tonica);
    mostraElemento(elementodesejadoArray);
}

//7

function tetradeMaiorcomSetimaMenor(tonica){

    reset();
    
    Fundamental(tonica);
    mostraElemento(elementodesejadoArray);

    terçaMaior(tonica);
    mostraElemento(elementodesejadoArray);

    quintaJusta(tonica);
    mostraElemento(elementodesejadoArray);

    setimaMenor(tonica);
    mostraElemento(elementodesejadoArray);
}

//6

function tetradeMaiorcomSexta(tonica){

    reset();
    
    Fundamental(tonica);
    mostraElemento(elementodesejadoArray);

    terçaMaior(tonica);
    mostraElemento(elementodesejadoArray);

    quintaJusta(tonica);
    mostraElemento(elementodesejadoArray);

    sextaMaior(tonica);
    mostraElemento(elementodesejadoArray);
}

//mMaj7

function tetradeMenorcomSetimaMaior(tonica){

    reset();
    
    Fundamental(tonica);
    mostraElemento(elementodesejadoArray);

    terçaMenor(tonica);
    mostraElemento(elementodesejadoArray);

    quintaJusta(tonica);
    mostraElemento(elementodesejadoArray);

    setimaMaior(tonica);
    mostraElemento(elementodesejadoArray);
}

//m7

function tetradeMenorcomSetimaMenor(tonica){

    reset();
    
    Fundamental(tonica);
    mostraElemento(elementodesejadoArray);

    terçaMenor(tonica);
    mostraElemento(elementodesejadoArray);

    quintaJusta(tonica);
    mostraElemento(elementodesejadoArray);

    setimaMenor(tonica);
    mostraElemento(elementodesejadoArray);
}

//m6

function tetradeMenorcomSexta(tonica){

    reset();
    
    Fundamental(tonica);
    mostraElemento(elementodesejadoArray);

    terçaMenor(tonica);
    mostraElemento(elementodesejadoArray);

    quintaJusta(tonica);
    mostraElemento(elementodesejadoArray);

    sextaMaior(tonica);
    mostraElemento(elementodesejadoArray);
}

//m7b5
function tetradeMeioDiminuta(tonica){

    reset();
    
    Fundamental(tonica);
    mostraElemento(elementodesejadoArray);

    terçaMenor(tonica);
    mostraElemento(elementodesejadoArray);

    quintaDiminuta(tonica);
    mostraElemento(elementodesejadoArray);

    setimaMenor(tonica);
    mostraElemento(elementodesejadoArray);
}

//dim

function tetradeDiminuta(tonica){

    reset();
    
    Fundamental(tonica);
    mostraElemento(elementodesejadoArray);

    terçaMenor(tonica);
    mostraElemento(elementodesejadoArray);

    quintaDiminuta(tonica);
    mostraElemento(elementodesejadoArray);

    setimaDiminuta(tonica);
    mostraElemento(elementodesejadoArray);
}


//Acordes Caged triades

function triadeMaiorCAGEDC(tonica){

     reset();

     Fundamental(tonica);
     mostraElemento(elementodesejadoArray, 5)
     mostraElemento(elementodesejadoArray, 2)

     terçaMaior(tonica);
     mostraElemento(elementodesejadoArray, 4)
     mostraElemento(elementodesejadoArray, 1)

     quintaJusta(tonica);
     mostraElemento(elementodesejadoArray, 3)

}
function triadeMaiorCAGEDA(tonica){

    reset();

    Fundamental(tonica);
    mostraElemento(elementodesejadoArray, 5)
    mostraElemento(elementodesejadoArray, 3)
   

    terçaMaior(tonica);
   
    mostraElemento(elementodesejadoArray, 2)

    quintaJusta(tonica);
    mostraElemento(elementodesejadoArray, 4)
    mostraElemento(elementodesejadoArray, 1)

}

function triadeMaiorCAGEDG(tonica){

    reset();

    Fundamental(tonica);
    mostraElemento(elementodesejadoArray, 6)
    mostraElemento(elementodesejadoArray, 3)
    mostraElemento(elementodesejadoArray, 1)

    terçaMaior(tonica);
    mostraElemento(elementodesejadoArray, 5)
    mostraElemento(elementodesejadoArray, 2)

    quintaJusta(tonica);
    mostraElemento(elementodesejadoArray, 4)

}

function triadeMaiorCAGEDE(tonica){
    reset();

    Fundamental(tonica);
    mostraElemento(elementodesejadoArray, 6)
    mostraElemento(elementodesejadoArray, 4)
    mostraElemento(elementodesejadoArray, 1)

    terçaMaior(tonica);
    mostraElemento(elementodesejadoArray, 3)
   

    quintaJusta(tonica);
    mostraElemento(elementodesejadoArray, 5)
    mostraElemento(elementodesejadoArray, 2)
    
}

function triadeMaiorCAGEDD(tonica){
    reset();

    Fundamental(tonica);
    mostraElemento(elementodesejadoArray, 4)
    mostraElemento(elementodesejadoArray, 2)

    terçaMaior(tonica);
    mostraElemento(elementodesejadoArray, 1)
   

    quintaJusta(tonica);
    mostraElemento(elementodesejadoArray, 3)
   
    
}




function triadeMenorCAGEDA(tonica){

    reset();

    Fundamental(tonica);
    mostraElemento(elementodesejadoArray, 5)
    mostraElemento(elementodesejadoArray, 3)
   

    terçaMenor(tonica);
   
    mostraElemento(elementodesejadoArray, 2)

    quintaJusta(tonica);
    mostraElemento(elementodesejadoArray, 4)
    mostraElemento(elementodesejadoArray, 1)

}

function triadeMenorCAGEDE(tonica){
    reset();

    Fundamental(tonica);
    mostraElemento(elementodesejadoArray, 6)
    mostraElemento(elementodesejadoArray, 4)
    mostraElemento(elementodesejadoArray, 1)

    terçaMenor(tonica);
    mostraElemento(elementodesejadoArray, 3)
   

    quintaJusta(tonica);
    mostraElemento(elementodesejadoArray, 5)
    mostraElemento(elementodesejadoArray, 2)
    
}

function triadeMenorCAGEDD(tonica){
    reset();

    Fundamental(tonica);
    mostraElemento(elementodesejadoArray, 4)
    mostraElemento(elementodesejadoArray, 2)

    terçaMenor(tonica);
    mostraElemento(elementodesejadoArray, 1)
   

    quintaJusta(tonica);
    mostraElemento(elementodesejadoArray, 3)
   
    
}



//acordes caged tetrades




//x7

function x7CAGEDA(tonica){

  reset();

  Fundamental(tonica);
 
  mostraElemento(elementodesejadoArray, 5)
  mostraElemento(elementodesejadoArray, 6)
 

  terçaMaior(tonica);

  mostraElemento(elementodesejadoArray, 2)
  mostraElemento(elementodesejadoArray, 3)


  quintaJusta(tonica);

  mostraElemento(elementodesejadoArray, 4)
  mostraElemento(elementodesejadoArray, 5)

  setimaMenor(tonica);
 
  mostraElemento(elementodesejadoArray, 3)
  mostraElemento(elementodesejadoArray, 4)




}

//inversões

function x7CAGEDAinv1(tonica){

  reset();

  Fundamental(tonica);
  mostraElemento(elementodesejadoArray, 3)
  mostraElemento(elementodesejadoArray, 4)
 
 

  terçaMaior(tonica);
  mostraElemento(elementodesejadoArray, 5)
  mostraElemento(elementodesejadoArray, 6)
 
  


  quintaJusta(tonica);
  mostraElemento(elementodesejadoArray, 2)
  mostraElemento(elementodesejadoArray, 3)

  setimaMenor(tonica);
  mostraElemento(elementodesejadoArray, 4)
  mostraElemento(elementodesejadoArray, 5)




}

function x7CAGEDAinv2(tonica){

  reset();

  Fundamental(tonica);
  mostraElemento(elementodesejadoArray, 4)
  mostraElemento(elementodesejadoArray, 5)


  terçaMaior(tonica);
  mostraElemento(elementodesejadoArray, 3)
  mostraElemento(elementodesejadoArray, 4)

 
   quintaJusta(tonica);
  mostraElemento(elementodesejadoArray, 5)
  mostraElemento(elementodesejadoArray, 6)


 

  setimaMenor(tonica);
 mostraElemento(elementodesejadoArray, 2)
  mostraElemento(elementodesejadoArray, 3)
  




}

function x7CAGEDAinv3(tonica){

  reset();

  Fundamental(tonica);
  mostraElemento(elementodesejadoArray, 2)
  mostraElemento(elementodesejadoArray, 3)
  


  terçaMaior(tonica);
  mostraElemento(elementodesejadoArray, 4)
  mostraElemento(elementodesejadoArray, 5)

 

 
   quintaJusta(tonica);
   mostraElemento(elementodesejadoArray, 3)
   mostraElemento(elementodesejadoArray, 4)



 

  setimaMenor(tonica);
  mostraElemento(elementodesejadoArray, 5)
  mostraElemento(elementodesejadoArray, 6)
  




}

//xMaj7

function xMaj7CAGEDA(tonica){

  reset();

  Fundamental(tonica);
 
  mostraElemento(elementodesejadoArray, 5)
  mostraElemento(elementodesejadoArray, 6)
 

  terçaMaior(tonica);

  mostraElemento(elementodesejadoArray, 2)
  mostraElemento(elementodesejadoArray, 3)


  quintaJusta(tonica);

  mostraElemento(elementodesejadoArray, 4)
  mostraElemento(elementodesejadoArray, 5)

  setimaMaior(tonica);
 
  mostraElemento(elementodesejadoArray, 3)
  mostraElemento(elementodesejadoArray, 4)




}

//inversões

function xMaj7CAGEDAinv1(tonica){

  reset();

  Fundamental(tonica);
  mostraElemento(elementodesejadoArray, 3)
  mostraElemento(elementodesejadoArray, 4)
 
 

  terçaMaior(tonica);
  mostraElemento(elementodesejadoArray, 5)
  mostraElemento(elementodesejadoArray, 6)
 
  


  quintaJusta(tonica);
  mostraElemento(elementodesejadoArray, 2)
  mostraElemento(elementodesejadoArray, 3)

  setimaMaior(tonica);
  mostraElemento(elementodesejadoArray, 4)
  mostraElemento(elementodesejadoArray, 5)




}

function xMaj7CAGEDAinv2(tonica){

  reset();

  Fundamental(tonica);
  mostraElemento(elementodesejadoArray, 4)
  mostraElemento(elementodesejadoArray, 5)


  terçaMaior(tonica);
  mostraElemento(elementodesejadoArray, 3)
  mostraElemento(elementodesejadoArray, 4)

 
   quintaJusta(tonica);
  mostraElemento(elementodesejadoArray, 5)
  mostraElemento(elementodesejadoArray, 6)


 

  setimaMaior(tonica);
 mostraElemento(elementodesejadoArray, 2)
  mostraElemento(elementodesejadoArray, 3)
  




}

function xMaj7CAGEDAinv3(tonica){

  reset();

  Fundamental(tonica);
  mostraElemento(elementodesejadoArray, 2)
  mostraElemento(elementodesejadoArray, 3)
  


  terçaMaior(tonica);
  mostraElemento(elementodesejadoArray, 4)
  mostraElemento(elementodesejadoArray, 5)

 

 
   quintaJusta(tonica);
   mostraElemento(elementodesejadoArray, 3)
   mostraElemento(elementodesejadoArray, 4)



 

  setimaMaior(tonica);
  mostraElemento(elementodesejadoArray, 5)
  mostraElemento(elementodesejadoArray, 6)
  




}


//xm7

function xm7CAGEDA(tonica){

  reset();

  Fundamental(tonica);
 
  mostraElemento(elementodesejadoArray, 5)
  mostraElemento(elementodesejadoArray, 6)
 

  terçaMenor(tonica);

  mostraElemento(elementodesejadoArray, 2)
  mostraElemento(elementodesejadoArray, 3)


  quintaJusta(tonica);

  mostraElemento(elementodesejadoArray, 4)
  mostraElemento(elementodesejadoArray, 5)

  setimaMenor(tonica);
 
  mostraElemento(elementodesejadoArray, 3)
  mostraElemento(elementodesejadoArray, 4)




}

//inversões

function xm7CAGEDAinv1(tonica){

  reset();

  Fundamental(tonica);
  mostraElemento(elementodesejadoArray, 3)
  mostraElemento(elementodesejadoArray, 4)
 
 

  terçaMenor(tonica);
  mostraElemento(elementodesejadoArray, 5)
  mostraElemento(elementodesejadoArray, 6)
 
  


  quintaJusta(tonica);
  mostraElemento(elementodesejadoArray, 2)
  mostraElemento(elementodesejadoArray, 3)

  setimaMenor(tonica);
  mostraElemento(elementodesejadoArray, 4)
  mostraElemento(elementodesejadoArray, 5)




}

function xm7CAGEDAinv2(tonica){

  reset();

  Fundamental(tonica);
  mostraElemento(elementodesejadoArray, 4)
  mostraElemento(elementodesejadoArray, 5)


  terçaMenor(tonica);
  mostraElemento(elementodesejadoArray, 3)
  mostraElemento(elementodesejadoArray, 4)

 
   quintaJusta(tonica);
  mostraElemento(elementodesejadoArray, 5)
  mostraElemento(elementodesejadoArray, 6)


 

  setimaMenor(tonica);
 mostraElemento(elementodesejadoArray, 2)
  mostraElemento(elementodesejadoArray, 3)
  




}

function xm7CAGEDAinv3(tonica){

  reset();

  Fundamental(tonica);
  mostraElemento(elementodesejadoArray, 2)
  mostraElemento(elementodesejadoArray, 3)
  


  terçaMenor(tonica);
  mostraElemento(elementodesejadoArray, 4)
  mostraElemento(elementodesejadoArray, 5)

 

 
   quintaJusta(tonica);
   mostraElemento(elementodesejadoArray, 3)
   mostraElemento(elementodesejadoArray, 4)



 

  setimaMenor(tonica);
  mostraElemento(elementodesejadoArray, 5)
  mostraElemento(elementodesejadoArray, 6)
  




}







//terças e setimas 


function terçaMenorSetimaMenor(tonica,c1,c2){

  reset();

  terçaMenor(tonica);
  mostraElemento(elementodesejadoArray,c1)
  mostraElemento(elementodesejadoArray,c2)

  setimaMenor(tonica);
  mostraElemento(elementodesejadoArray,c1)
  mostraElemento(elementodesejadoArray,c2)


}

function terçaMaiorSetimaMaior(tonica,c1,c2){

  reset();

  terçaMaior(tonica);
  mostraElemento(elementodesejadoArray,c1)
  mostraElemento(elementodesejadoArray,c2)

  setimaMaior(tonica);
  mostraElemento(elementodesejadoArray,c1)
  mostraElemento(elementodesejadoArray,c2)


}

function terçaMaiorSetimaMenor(tonica,c1,c2){

  reset();

  terçaMaior(tonica);
  mostraElemento(elementodesejadoArray,c1)
  mostraElemento(elementodesejadoArray,c2)

  setimaMenor(tonica);
  mostraElemento(elementodesejadoArray,c1)
  mostraElemento(elementodesejadoArray,c2)


}


//função Secreta 



function GiantSteps (tempo){

  
  
  
  function GiantStepsMaj7(tonica){
      
    setTimeout(() => {

      terçaMaiorSetimaMaior(tonica,4,3)
      
    }, timeout = j);
    
    j=j+tempo


  }

  function GiantStepsm7(tonica){
      
    setTimeout(() => {

      terçaMenorSetimaMenor(tonica,4,3)
      
    }, timeout = j);
    
    j=j+tempo


  }

  function GiantSteps7(tonica){
      
    setTimeout(() => {

      terçaMaiorSetimaMenor(tonica,4,3)
      
    }, timeout = j);
    
    j=j+tempo


  }

    let j = tempo

  
GiantStepsMaj7(B)
GiantSteps7(D)
GiantStepsMaj7(G)
GiantSteps7(Bb)
GiantStepsMaj7(Eb)

GiantStepsm7(A)
GiantSteps7(D)

GiantStepsMaj7(G)
GiantSteps7(Bb)
GiantStepsMaj7(Eb)
GiantSteps7(Fs)
GiantStepsMaj7(B)

GiantStepsm7(F)
GiantSteps7(Bb)
GiantStepsMaj7(Eb)

GiantStepsm7(A)
GiantSteps7(D)
GiantStepsMaj7(G)


GiantStepsm7(Cs)
GiantSteps7(Fs)
GiantStepsMaj7(B)

GiantStepsm7(F)
GiantSteps7(Bb)
GiantStepsMaj7(Eb)


GiantStepsm7(Cs)
GiantSteps7(Fs)












 





    
  }



  /*Esse código abaixo permite que eu use animações longas com recurso settimeout, caso eu recarregue a pagina, antes de recarregar, esse código 
  irá interromper os timeout disparados, evitando possiveis erros ao recarregar a página */

  window.addEventListener('beforeunload' , clearTimeout())



  //começando desenvolver som das notas 

//variaveis para puxar as notas genericamente   




var notasC = document.getElementsByClassName("C  ");

var notasD = document.getElementsByClassName("D");

var notasE = document.getElementsByClassName("E  ");

var notasF = document.getElementsByClassName("F  ");

var notasG = document.getElementsByClassName("G  ");

var notasA = document.getElementsByClassName("A  ");

var notasB= document.getElementsByClassName("B  ");

var notas = document.getElementsByClassName('a')

//function que age dentro do for para puxar a nota e atribuir o som 


function tocaNota(nota,acidente,oitava,notasom){

  if(notas[i].classList[3] == nota ){
    
    if(notas[i].classList[1]==acidente){

      if(notas[i].classList[5]==oitava ){
  
        notas[i].addEventListener("mousedown" , ()=>{ 
          
          if(audioTocado){
            audioTocado.pause();
            audioTocado.load();
          };
      
          notasom.play();
      
       
       audioTocado = notasom
      
        })

        notas[i].addEventListener("touchstart" , ()=>{ 
          
          if(audioTocado){
            audioTocado.pause();
            audioTocado.load();
          };
      
          notasom.play();
      
       
       audioTocado = notasom
      
        })


        
      
      }

      
  
      
  
  
  
  
    }


  }

 
}


//essa variavel é responsavel por gerar o comportamento dentro do for, que permite que eu interrompa o som de uma nota para tocar outra 
let audioTocado = null


//esse for abaixo é responsavel por gerar as notas E  para cada oitava e acidente  ao longo do braço 

function atribuiSomANota(){

for(i=0;i<notas.length;i++){

//naturais 
tocaNota("E", "n", "8va2",E2)
tocaNota("F", "n", "8va2",F2)
tocaNota("G", "n", "8va2",G2)
tocaNota("A", "n", "8va2",A2)
tocaNota("B", "n", "8va2",B2)


tocaNota("C", "n", "8va3",C3)
tocaNota("D", "n", "8va3",D3)
tocaNota("E", "n", "8va3",E3)
tocaNota("F", "n", "8va3",F3)
tocaNota("G", "n", "8va3",G3)
tocaNota("A", "n", "8va3",A3)
tocaNota("B", "n", "8va3",B3)

tocaNota("C", "n", "8va4",C4)
tocaNota("D", "n", "8va4",D4)
tocaNota("E", "n", "8va4",E4)
tocaNota("F", "n", "8va4",F4)
tocaNota("G", "n", "8va4",G4)
tocaNota("A", "n", "8va4",A4)
tocaNota("B", "n", "8va4",B4)

tocaNota("C", "n", "8va5",C5)
tocaNota("D", "n", "8va5",D5)
tocaNota("E", "n", "8va5",E5)
tocaNota("F", "n", "8va5",F5)
tocaNota("G", "n", "8va5",G5)
tocaNota("A", "n", "8va5",A5)
tocaNota("B", "n", "8va5",B5)

tocaNota("C", "n", "8va6",C6)
tocaNota("D", "n", "8va6",D6)



//sustenido


tocaNota("E", "s", "8va2",F2)
tocaNota("F", "s", "8va2",Fs2)
tocaNota("G", "s", "8va2",Gs2)
tocaNota("A", "s", "8va2",As2)
tocaNota("B", "s", "8va2",C3)


tocaNota("C", "s", "8va3",Cs3)
tocaNota("D", "s", "8va3",Ds3)
tocaNota("E", "s", "8va3",F3)
tocaNota("F", "s", "8va3",Fs3)
tocaNota("G", "s", "8va3",Gs3)
tocaNota("A", "s", "8va3",As3)
tocaNota("B", "s", "8va3",C4)

tocaNota("C", "s", "8va4",Cs4)
tocaNota("D", "s", "8va4",Ds4)
tocaNota("E", "s", "8va4",F4)
tocaNota("F", "s", "8va4",Fs4)
tocaNota("G", "s", "8va4",Gs4)
tocaNota("A", "s", "8va4",As4)
tocaNota("B", "s", "8va4",C5)

tocaNota("C", "s", "8va5",Cs5)
tocaNota("D", "s", "8va5",Ds5)
tocaNota("E", "s", "8va5",F5)
tocaNota("F", "s", "8va5",Fs5)
tocaNota("G", "s", "8va5",Gs5)
tocaNota("A", "s", "8va5",As5)
tocaNota("B", "s", "8va5",C6)

tocaNota("C", "s", "8va6",Cs6)



//bemois


tocaNota("F", "b", "8va2",E2)
tocaNota("G", "b", "8va2",Fs2)
tocaNota("A", "b", "8va2",Gs2)
tocaNota("B", "b", "8va2",As2)


tocaNota("C", "b", "8va3",B2)
tocaNota("D", "b", "8va3",Cs3)
tocaNota("E", "b", "8va3",Ds3)
tocaNota("F", "b", "8va3",E3)
tocaNota("G", "b", "8va3",Fs3)
tocaNota("A", "b", "8va3",Gs3)
tocaNota("B", "b", "8va3",As3)

tocaNota("C", "b", "8va4",B3)
tocaNota("D", "b", "8va4",Cs4)
tocaNota("E", "b", "8va4",Ds4)
tocaNota("F", "b", "8va4",E4)
tocaNota("G", "b", "8va4",Fs4)
tocaNota("A", "b", "8va4",Gs4)
tocaNota("B", "b", "8va4",As4)

tocaNota("C", "b", "8va5",B4)
tocaNota("D", "b", "8va5",Cs5)
tocaNota("E", "b", "8va5",Ds5)
tocaNota("F", "b", "8va5",E5)
tocaNota("G", "b", "8va5",Fs5)
tocaNota("A", "b", "8va5",Gs5)
tocaNota("B", "b", "8va5",As5)

tocaNota("C", "b", "8va6",B5)
tocaNota("D", "b", "8va6",Cs6)


//dobrado bemol

tocaNota("G", "bb", "8va2",F2)
tocaNota("A", "bb", "8va2",G2)
tocaNota("B", "bb", "8va2",A2)



tocaNota("C", "bb", "8va3",As2)
tocaNota("D", "bb", "8va3",C3)
tocaNota("E", "bb", "8va3",D3)
tocaNota("G", "bb", "8va3",F3)
tocaNota("A", "bb", "8va3",G3)
tocaNota("B", "bb", "8va3",A3)

tocaNota("C", "bb", "8va4",As3)
tocaNota("D", "bb", "8va4",C4)
tocaNota("E", "bb", "8va4",D4)
tocaNota("G", "bb", "8va4",F4)
tocaNota("A", "bb", "8va4",G4)
tocaNota("B", "bb", "8va4",A4)

tocaNota("C", "bb", "8va5",As4)
tocaNota("D", "bb", "8va5",C5)
tocaNota("E", "bb", "8va5",D5)
tocaNota("G", "bb", "8va5",F5)
tocaNota("A", "bb", "8va5",G5)
tocaNota("B", "bb", "8va5",A5)

tocaNota("C", "bb", "8va6",As5)
tocaNota("D", "bb", "8va6",C6)
tocaNota("E", "bb", "8va6",D6)





//dobrado sustenido


tocaNota("D", "ss", "8va2",E2)
tocaNota("E", "ss", "8va2",Fs2)
tocaNota("F", "ss", "8va2",G2)
tocaNota("G", "ss", "8va2",A2)
tocaNota("A", "ss", "8va2",B2)

tocaNota("C", "ss", "8va3",D3)
tocaNota("D", "ss", "8va3",E3)
tocaNota("E", "ss", "8va3",Fs3)
tocaNota("F", "ss", "8va3",G3)
tocaNota("G", "ss", "8va3",A3)
tocaNota("A", "ss", "8va3",B3)

tocaNota("C", "ss", "8va4",D4)
tocaNota("D", "ss", "8va4",E4)
tocaNota("E", "ss", "8va4",Fs4)
tocaNota("F", "ss", "8va4",G4)
tocaNota("G", "ss", "8va4",A4)
tocaNota("A", "ss", "8va4",B4)

tocaNota("C", "ss", "8va5",D5)
tocaNota("D", "ss", "8va5",E5)
tocaNota("E", "ss", "8va5",Fs5)
tocaNota("F", "ss", "8va5",G5)
tocaNota("G", "ss", "8va5",A5)
tocaNota("A", "ss", "8va5",B5)

tocaNota("C", "ss", "8va6",D6)





 


}

}


atribuiSomANota()






// functions testes

/*
function mostraMostra(nota,acidente,corda){

  reset();

  var acessanotas = document.getElementsByClassName(`${nota} ${acidente} ${corda}`);

  for(i=0;i<acessanotas.length;i++){

    acessanotas[i].style.display="block"
  }




}

mostraMostra("ss","","");

*/






//testes das funções de elementos
//maior 
/*
Fundamental(C);
Fundamental(G);
Fundamental(D);
Fundamental(A);
Fundamental(E);
Fundamental(B);
Fundamental(Fs);
Fundamental(F);
Fundamental(Bb);
Fundamental(Eb);
Fundamental(Ab);
Fundamental(Db);
Fundamental(Gb);

console.log('cauabanda')

Fundamental(A);
Fundamental(E);
Fundamental(B);
Fundamental(Fs);
Fundamental(Cs);
Fundamental(Gs);
Fundamental(Ds);
Fundamental(D);
Fundamental(G);
Fundamental(C);
Fundamental(F);
Fundamental(Bb);
Fundamental(Eb);
*/