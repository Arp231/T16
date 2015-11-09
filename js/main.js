var Laptop1 = new Object();
Laptop1.descipcion="Macbook Air";
Laptop1.precio="$ 25,000";
Laptop1.marca = "Apple";
Laptop1.serie = "Air";
Laptop1.modelo = 2015;
Laptop1.pMarca="Intel";
Laptop1.pLinea="I5";
Laptop1.pModelo="4th Gen";
Laptop1.pVelocidad="1.8 GHz";
Laptop1.memoria="8GB";
Laptop1.mTipo="DDR4";
Laptop1.capacidad="256GB SSD";


var Laptop2 = new Object();
Laptop2.descipcion="Laptop Generica";
Laptop2.precio="$ 20,000";
Laptop2.marca = "Generica";
Laptop2.serie = "2";
Laptop2.modelo = 2015;
Laptop2.pMarca="Intel";
Laptop2.pLinea="Atom";
Laptop2.pModelo="2117u";
Laptop2.pVelocidad="2.4 GHz";
Laptop2.memoria="4GB";
Laptop2.mTipo="DDR4";
Laptop2.capacidad="1TB";


var Laptop3 = new Object();
Laptop3.descipcion="Laptop Lenovo";
Laptop3.precio="$ 18,000";
Laptop3.marca = "Lenovo";
Laptop3.serie = "Yoga";
Laptop3.modelo = "UT-412";
Laptop3.pMarca="Intel";
Laptop3.pLinea="n/a";
Laptop3.pModelo="2117u";
Laptop3.pVelocidad="1.7 GHz";
Laptop3.memoria="2GB";
Laptop3.mTipo="DDR3";
Laptop3.capacidad="64GB SSD";
  var lap=1;


$(document).ready(function(){

   $('#more_button').on('click',function(){
      $('#info').toggle(20);
      //rapido para evitar el efecto de alinear la tabla,
      //efecto que podria resolverse con canvas
   });

   $('#next').on('click',function(){

     if (lap==1){
        lap=2;
        $("#descipcion").text(Laptop2.descipcion);
        $("#precio").text(Laptop2.precio);
        $("#marca").text(Laptop2.marca);
        $("#serie").text(Laptop2.serie);
        $("#modelo").text(Laptop2.modelo);
        $("#pMarca").text(Laptop2.pMarca);
        $("#pLinea").text(Laptop2.pLinea);
        $("#pModelo").text(Laptop2.pModelo);
        $("#pVelocidad").text(Laptop2.pVelocidad);
        $("#memoria").text(Laptop2.memoria);
        $("#mTipo").text(Laptop2.mTipo);
        $("#capacidad").text(Laptop2.capacidad);
        $("#laptopImage").attr("src","img/2.png");

     }

     if (lap==2){

        $("#descipcion").text(Laptop3.descipcion);
        $("#precio").text(Laptop3.precio);
        $("#marca").text(Laptop3.marca);
        $("#serie").text(Laptop3.serie);
        $("#modelo").text(Laptop3.modelo);
        $("#pMarca").text(Laptop3.pMarca);
        $("#pLinea").text(Laptop3.pLinea);
        $("#pModelo").text(Laptop3.pModelo);
        $("#pVelocidad").text(Laptop3.pVelocidad);
        $("#memoria").text(Laptop3.memoria);
        $("#mTipo").text(Laptop3.mTipo);
        $("#capacidad").text(Laptop3.capacidad);
        $("#laptopImage").attr("src","img/3.png");
        lap=3;
     }

     if (lap==3){

        $("#descipcion").text(Laptop1.descipcion);
        $("#precio").text(Laptop1.precio);
        $("#marca").text(Laptop1.marca);
        $("#serie").text(Laptop1.serie);
        $("#modelo").text(Laptop1.modelo);
        $("#pMarca").text(Laptop1.pMarca);
        $("#pLinea").text(Laptop1.pLinea);
        $("#pModelo").text(Laptop1.pModelo);
        $("#pVelocidad").text(Laptop1.pVelocidad);
        $("#memoria").text(Laptop1.memoria);
        $("#mTipo").text(Laptop1.mTipo);
        $("#capacidad").text(Laptop1.capacidad);
        $("#laptopImage").attr("src","img/1.png");
        lap=1;
     }

   });


   $('#back').on('click',function(){
     if (lap==1){

        $("#descipcion").text(Laptop3.descipcion);
        $("#precio").text(Laptop3.precio);
        $("#marca").text(Laptop3.marca);
        $("#serie").text(Laptop3.serie);
        $("#modelo").text(Laptop3.modelo);
        $("#pMarca").text(Laptop3.pMarca);
        $("#pLinea").text(Laptop3.pLinea);
        $("#pModelo").text(Laptop3.pModelo);
        $("#pVelocidad").text(Laptop3.pVelocidad);
        $("#memoria").text(Laptop3.memoria);
        $("#mTipo").text(Laptop3.mTipo);
        $("#capacidad").text(Laptop3.capacidad);
        $("#laptopImage").attr("src","img/3.png");
                lap=3;
     }

     if (lap==2){

        $("#descipcion").text(Laptop1.descipcion);
        $("#precio").text(Laptop1.precio);
        $("#marca").text(Laptop1.marca);
        $("#serie").text(Laptop1.serie);
        $("#modelo").text(Laptop1.modelo);
        $("#pMarca").text(Laptop1.pMarca);
        $("#pLinea").text(Laptop1.pLinea);
        $("#pModelo").text(Laptop1.pModelo);
        $("#pVelocidad").text(Laptop1.pVelocidad);
        $("#memoria").text(Laptop1.memoria);
        $("#mTipo").text(Laptop1.mTipo);
        $("#capacidad").text(Laptop1.capacidad);
        $("#laptopImage").attr("src","img/1.png");
                lap=1;
     }

     if (lap==3){

        $("#descipcion").text(Laptop2.descipcion);
        $("#precio").text(Laptop2.precio);
        $("#marca").text(Laptop2.marca);
        $("#serie").text(Laptop2.serie);
        $("#modelo").text(Laptop2.modelo);
        $("#pMarca").text(Laptop2.pMarca);
        $("#pLinea").text(Laptop2.pLinea);
        $("#pModelo").text(Laptop2.pModelo);
        $("#pVelocidad").text(Laptop2.pVelocidad);
        $("#memoria").text(Laptop2.memoria);
        $("#mTipo").text(Laptop2.mTipo);
        $("#capacidad").text(Laptop2.capacidad);
        $("#laptopImage").attr("src","img/2.png");
                lap=2;
     }

   });
});
