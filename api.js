

var PrimerOperando =null;
var SegundoOperando =null;
var display;
var resultado;
var suma;
var uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, cero;
var operacion;
var sum = "suma";  

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









