
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


    
     $("#resultado").html( "0." );   
    
    function SetOperando(operando){
      //  console.log("una funcion");

        if (PrimerOperando == null){
            PrimerOperando = operando;
            $("#resultado").html( PrimerOperando );            
            console.log(PrimerOperando);
        }else{
            SegundoOperando=operando;
            $("#resultado").html(PrimerOperando + operacion + SegundoOperando);
            display = PrimerOperando;        
            PrimerOperando = null;
        }
    
    }

    function SetOperacion(opera){
        if (PrimerOperando != null){
                $("#resultado").html( PrimerOperando + opera );
                operacion = opera; 
        }else{
             alert("escribe el primer operando");
        }
    }    
    
    function Solve(opera){ 
         $("#resultado").html( display + opera + SegundoOperando +" = " + resultado);
         SegundoOperando = null;
            
    }
    
    function ProcessOperacion(){
        if (operacion == " + ")  {  
             resultado = display + SegundoOperando; 
             Solve(operacion);
            
        }else if(operacion ==" x "){
              resultado = display * SegundoOperando; 
              Solve(operacion);
            
        }else if(operacion == " - "){
             resultado = display - SegundoOperando; 
             Solve(operacion);

        }else if(operacion ==" / "){
            resultado = display / SegundoOperando; 
            Solve(operacion);
        }

        
    }


    function operaEvento(evento){

        letra = $("#contenido").html(String.fromCharCode(evento.which)).hide();

        if ($.isNumeric( letra.html())){
         
            num = parseInt(letra.html()) ;
         
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
               
               if(PrimerOperando != null){
                     
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
                       ProcessOperacion();
                }

    
            }      
        }    
    }
    
    $(document).keyup(operaEvento);

   


     $("button.7").click(function() {        	    
        SetOperando(7);

     });


     $("button.8").click(function() {
         //console.log("8");	    
          SetOperando(8);
     });

    $("button.9").click(function() {
          SetOperando(9); 
     });

    $("button.4").click(function() {
        SetOperando(4);
     });

    $("button.5").click(function() {
         SetOperando(5);
     });
    
    $("button.6").click(function() {
         SetOperando(6);
     });

    $("button.1").click(function() {
        SetOperando(1);
     });
    
    $("button.2").click(function() {
         SetOperando(2);
     });

     $("button.3").click(function() {
         SetOperando(3);
     });

      $("button.0").click(function() {
         SetOperando(0);
     });

     $("button.plus").click(function(){
        SetOperacion(" + ");
     });
        
    $("button.sus").click(function(){
        
            SetOperacion(" - ");
     });

    $("button.x").click(function(){
        
            SetOperacion(" x ");
     });
     
    $("button.cociente").click(function(){
        
            SetOperacion(" / ");
     });

   
     $("button.equal").click(function(){

        ProcessOperacion(); 
      });
    
    $("button.ce").click(function(){
        
            PrimerOperando = null;
            SegundoOperando =null;  
            $("#resultado").html( "0." );                  
            
     });
});



  










