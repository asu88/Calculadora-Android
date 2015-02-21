
jQuery(document).ready(function() {

var PrimerOperando =null;
var SegundoOperando =null;
var display;
var resultado;
var suma;
var uno, dos, tres, cuatro, cinco, seis, siete, ocho, nueve, cero;
var operacion;
var sum = "suma";  
var letra;

    console.log("se carga el js");
    
     $("#resultado").html( "0." );   
    
    
    function operaEvento(evento){
        
        letra = $("#contenido").html(String.fromCharCode(evento.which)).hide();
        //letra2 = $("#contenido").html(evento.which);
        if ($.isNumeric( letra.html())){
         //   console.log(letra.html() + " es numero");
            num = parseInt(letra.html()) ;
           // console.log(num);
                        
            if (PrimerOperando == null){
                PrimerOperando = num;
                $("#resultado").html( PrimerOperando );            
                //console.log(PrimerOperando);
            }else{
                SegundoOperando=num;
                $("#resultado").html(PrimerOperando + operacion + SegundoOperando);
                display = PrimerOperando;        
                PrimerOperando = null;
            }

        }else{
            console.log(letra.html() +" es letra");  
            if(PrimerOperando != null){
              //  console.log(letra.html());        
                
                if (letra.html() =="k"){
                    $("#resultado").html( PrimerOperando + " + " );
                    operacion = " + ";
                }
                else  if (letra.html() =="X"){
                    $("#resultado").html( PrimerOperando + " x " );
                    operacion = " x ";
                }
                else if (letra.html() =="-"){
                    $("#resultado").html( PrimerOperando + " - " );
                    operacion = " - ";
                }
                 else if (letra.html() =="¿"){
                    $("#resultado").html( PrimerOperando + " / " );
                    operacion = " / ";
                }
                else if (letra.html() =="="){
                    $("#resultado").html( PrimerOperando + " / " );
                    operacion = " / ";
                }

    
            }      
        }    
    }
    
    $(document).keyup(operaEvento);

   


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



  










