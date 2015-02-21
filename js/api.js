
jQuery(document).ready(function() {

var PrimerOperando =null;
var SegundoOperando =null;
var display;
var resultado;
var suma;
var uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, cero;
var operacion;
var sum = "suma";  


    console.log("se carga el js");
    
     $("#resultado").html( "0." );                

     $("button.7").click(function() {
        //console.log("7");	    
        if (PrimerOperando == null){
            PrimerOperando = 7;
            $("#resultado").html( PrimerOperando );            
            console.log(PrimerOperando);
    }else{
        SegundoOperando=7;
        $("#resultado").html(PrimerOperando + operacion + SegundoOperando);
        display = PrimerOperando;        
        PrimerOperando = null;
    }


     });
     $("button.8").click(function() {
         //console.log("8");	    
        if (PrimerOperando == null){
            PrimerOperando = 8;
            console.log(PrimerOperando);
            $("#resultado").html( PrimerOperando );            
        }else{
            SegundoOperando=8;
            $("#resultado").html( PrimerOperando + operacion + SegundoOperando);
            display = PrimerOperando;        
            PrimerOperando = null;
        }
     });

    $("button.9").click(function() {
         //console.log("9");	    
        if (PrimerOperando == null){
            PrimerOperando = 9;
            console.log(PrimerOperando);
            $("#resultado").html( PrimerOperando );                   
         }else{
            SegundoOperando=9;
            $("#resultado").html( PrimerOperando + operacion + SegundoOperando);
            display = PrimerOperando;        
            PrimerOperando = null;
        }
     });

    $("button.4").click(function() {
         //console.log("4");	    
        if (PrimerOperando == null){
            PrimerOperando = 4;
            $("#resultado").html(PrimerOperando);
            console.log(PrimerOperando);
        }else{
            SegundoOperando=4;
             $("#resultado").html(PrimerOperando + operacion + SegundoOperando);
            display = PrimerOperando;        
            PrimerOperando = null;
        }
     });

    $("button.5").click(function() {
         //console.log("5");	    
        if (PrimerOperando == null){
            PrimerOperando = 5;
            console.log(PrimerOperando);
             $("#resultado").html(PrimerOperando);
        }else{
            SegundoOperando=5;
             $("#resultado").html (PrimerOperando + operacion + SegundoOperando);
            display = PrimerOperando;        
            PrimerOperando = null;
        }
     });
    
    $("button.6").click(function() {
         //console.log("5");	    
        if (PrimerOperando == null){
            PrimerOperando = 6;
            console.log(PrimerOperando);
             $("#resultado").html(PrimerOperando);
        }else{
            SegundoOperando=6;
             $("#resultado").html( PrimerOperando + operacion + SegundoOperando);
            display = PrimerOperando;        
            PrimerOperando = null;
        }
     });

    $("button.1").click(function() {
         //console.log("5");	    
        if (PrimerOperando == null){
            PrimerOperando = 1;
            console.log(PrimerOperando);
            $("#resultado").html (PrimerOperando);
        }else{
            SegundoOperando=1;
           $("#resultado").html (PrimerOperando + operacion + SegundoOperando);
            display = PrimerOperando;        
            PrimerOperando = null;
        }
     });
    
    $("button.2").click(function() {
         //console.log("5");	    
        if (PrimerOperando == null){
            PrimerOperando = 2;
            console.log(PrimerOperando);
            $("#resultado").html(PrimerOperando);
        }else{
            SegundoOperando=2;
            $("#resultado").html (PrimerOperando + operacion + SegundoOperando);
            display = PrimerOperando;        
            PrimerOperando = null;
        }
     });

     $("button.3").click(function() {
         //console.log("5");	    
        if (PrimerOperando == null){
            PrimerOperando = 3;
            console.log(PrimerOperando);
            $("#resultado").html(PrimerOperando);
        }else{
            SegundoOperando=3;
            $("#resultado").html( PrimerOperando + operacion + SegundoOperando);
            display = PrimerOperando;        
            PrimerOperando = null;
        }
     });

      $("button.0").click(function() {
         //console.log("5");	   
        if (PrimerOperando == null){
            PrimerOperando = 0;
            console.log(PrimerOperando);
            $("#resultado").html(PrimerOperando);
        }else{
            SegundoOperando=0;
            $("#resultado").html (PrimerOperando + operacion + SegundoOperando);
            display = PrimerOperando;        
            PrimerOperando = null;
        }
     });

     $("button.plus").click(function(){
        
            if (PrimerOperando != null){
                $("#resultado").html( PrimerOperando + " + " );
                operacion = " + "; 
           }else{
                alert("escribe el primer operando");
            }
     });
        
    $("button.sus").click(function(){
        
            if (PrimerOperando != null){
                $("#resultado").html( PrimerOperando + " - " );
                operacion = " - "; 
           }else{
                alert("escribe el primer operando");
            }
     });

    $("button.x").click(function(){
        
            if (PrimerOperando != null){
                $("#resultado").html( PrimerOperando + " x " );
                operacion = " x "; 
           }else{
                alert("escribe el primer operando");
            }
     });
     
    $("button.cociente").click(function(){
        
            if (PrimerOperando != null){
                $("#resultado").html( PrimerOperando + " /" );
                operacion = " / "; 
           }else{
                alert("escribe el primer operando");
            }
     });

    $("button.equal").click(function(){

       
        if (operacion == " + ")  {  
         resultado = display + SegundoOperando; 
         $("#resultado").html( display + " + "+ SegundoOperando +" = " + resultado);
         SegundoOperando = null;

        }else if(operacion ==" x "){
          resultado = display * SegundoOperando; 
          $("#resultado").html(display + " x "+ SegundoOperando +" = " + resultado);
          SegundoOperando = null;        
     
        }else if(operacion == " - "){
         resultado = display - SegundoOperando; 
         $("#resultado").html( display + " - "+ SegundoOperando +" = " + resultado);
          SegundoOperando = null;
    
        }else if(operacion ==" / "){
         resultado = display / SegundoOperando; 
         $("#resultado").html( display + " / "+ SegundoOperando +" = " + resultado);
         SegundoOperando = null;
        }
    });
    
    $("button.ce").click(function(){
        
            PrimerOperando = null;
            SegundoOperando =null;  
            $("#resultado").html( "0." );                  
            
     });
});


/*
function setSiete(){
    siete = 7;        
    document.getElementById("resultado").innerHTML = siete;
    if (PrimerOperando == null){
        PrimerOperando = siete;
        console.log(PrimerOperando);
    }else{
        SegundoOperando=siete;
        document.getElementById("resultado").innerHTML = PrimerOperando + operacion + SegundoOperando;
        display = PrimerOperando;        
        PrimerOperando = null;
    }
}



function setOcho(){
    ocho = 8    
    document.getElementById("resultado").innerHTML = ocho;
    if (PrimerOperando == null){
        PrimerOperando = ocho;
    }else{
        SegundoOperando=ocho;
        document.getElementById("resultado").innerHTML = PrimerOperando + operacion + SegundoOperando;        
        display = PrimerOperando;        
        PrimerOperando = null;
    } 

}



function setNueve(){
    nueve = 9;   
     document.getElementById("resultado").innerHTML = nueve;
      if (PrimerOperando == null){
        PrimerOperando = nueve;
    }else{
        SegundoOperando=nueve;
        document.getElementById("resultado").innerHTML = PrimerOperando + operacion + SegundoOperando;        
        display = PrimerOperando;        
        PrimerOperando = null;
    }  

}



function setCuatro(){
    cuatro = 4    
    document.getElementById("resultado").innerHTML = cuatro;
    if (PrimerOperando == null){
        PrimerOperando = cuatro;
    }else{
        SegundoOperando=cuatro;
        document.getElementById("resultado").innerHTML = PrimerOperando + operacion + SegundoOperando;        
        display = PrimerOperando;        
        PrimerOperando = null;
    }  


}


function setCinco(){
    cinco = 5
    document.getElementById("resultado").innerHTML = "5";
    if (PrimerOperando == null){
        PrimerOperando = cinco;
    }else{
        SegundoOperando=cinco;
        document.getElementById("resultado").innerHTML = PrimerOperando + operacion + SegundoOperando;        
        display = PrimerOperando;        
        PrimerOperando = null;
    }  

}


function setSeis(){
    seis = 6;    
    document.getElementById("resultado").innerHTML = seis;
    if (PrimerOperando == null){
        PrimerOperando = seis;
    }else{
        SegundoOperando=seis;
        document.getElementById("resultado").innerHTML = PrimerOperando + operacion + SegundoOperando;        
        display = PrimerOperando;        
        PrimerOperando = null;
    }  

}

function setUno(){
    uno = 1;
    document.getElementById("resultado").innerHTML = uno;
    if (PrimerOperando == null){
        PrimerOperando = uno;
    }else{
        SegundoOperando=uno;
        document.getElementById("resultado").innerHTML = PrimerOperando + operacion + SegundoOperando;        
        display = PrimerOperando;        
        PrimerOperando = null;
    }  
}

function setDos(){
    dos = 2;
    document.getElementById("resultado").innerHTML = dos;
    if (PrimerOperando == null){
        PrimerOperando = dos;
    }else{
        SegundoOperando=dos;
        document.getElementById("resultado").innerHTML = PrimerOperando + operacion + SegundoOperando;        
        display = PrimerOperando;        
        PrimerOperando = null;
    }  

}

function setTres(){
    tres = 3;
    document.getElementById("resultado").innerHTML = tres;
    if (PrimerOperando == null){
        PrimerOperando = tres;
    }else{
        SegundoOperando=tres;
        document.getElementById("resultado").innerHTML = PrimerOperando + operacion + SegundoOperando;        
        display = PrimerOperando;        
        PrimerOperando = null;
    }  
}


function setZero(){
    cero =0;
    document.getElementById("resultado").innerHTML = "0";
     if (PrimerOperando == null){
        PrimerOperando = cero;
    }else{
        SegundoOperando=cero;
        document.getElementById("resultado").innerHTML = PrimerOperando + operacion + SegundoOperando;        
        display = PrimerOperando;        
        PrimerOperando = null;
    } 
}



function setDivide(){
    document.getElementById("resultado").innerHTML = "/";
 }


function setPoint(){
    document.getElementById("resultado").innerHTML = ".";
 }



function setPlus(){
    
    if (PrimerOperando != null){
        document.getElementById("resultado").innerHTML = PrimerOperando + " + " ;
        operacion = " + "; 
   }else{
        alert("escribe el primer operando");
    }
 }

function setResta(){
    if (PrimerOperando != null){
        document.getElementById("resultado").innerHTML = PrimerOperando + " - " ;
        operacion = " - "; 
   }else{
        alert("escribe el primer operando");
    }
 }



function setMulty(){
    
    if (PrimerOperando != null){
        document.getElementById("resultado").innerHTML = PrimerOperando + " x " ;
        operacion = " x "; 
   }else{
        alert("escribe el primer operando");
    }

 }


 function setDivide(){
       if (PrimerOperando != null){
        document.getElementById("resultado").innerHTML = PrimerOperando + " / " ;
        operacion = " / "; 
   }else{
        alert("escribe el primer operando");
    }


 }

 function setEqual(){
    if (operacion == " + ")  {  
         resultado = display + SegundoOperando; 
         document.getElementById("resultado").innerHTML = display + " + "+ SegundoOperando +" = " + resultado;
         SegundoOperando = null;

    }else if(operacion ==" x "){
          resultado = display * SegundoOperando; 
         document.getElementById("resultado").innerHTML = display + " x "+ SegundoOperando +" = " + resultado;
          SegundoOperando = null;        
     
    }else if(operacion == " - "){
         resultado = display - SegundoOperando; 
         document.getElementById("resultado").innerHTML = display + " - "+ SegundoOperando +" = " + resultado;
          SegundoOperando = null;
    
    }else if(operacion ==" / "){
         resultado = display / SegundoOperando; 
         document.getElementById("resultado").innerHTML = display + " / "+ SegundoOperando +" = " + resultado;
         SegundoOperando = null;
    }

    else{
           alert("operacion erronea");        
    }
 }


  */










