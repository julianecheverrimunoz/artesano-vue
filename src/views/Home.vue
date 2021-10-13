<template>
  <div class="box h-8  bg-yellow-600">
        <div id="main-container">
            <router-link to="/pedidos">Pedidos</router-link>
            <!--<a href="https://wa.me/3195650570" target="_blank" class="btn btn-yellow">Pedidos</a>-->
            <h3 ></h3>            
        </div>      
        
    </div>
    <header>        
        <div id="menu" class="nav-bar flex wrap ">
          <a  href="#"></a> <img id="logo" src="../assets/Logo_Gramo_Gramo.png"  alt="" class="transform hover:-translate-y-1 hover:scale-110"/>     
            <ul class="box h-12  bg-white bg-opacity-30 rounded-md  menu-links">                
                <li class="transition transform hover:bg-yellow-200" ><router-link to="/about">Quienes Somos</router-link></li>
                <li class="transition transform hover:bg-yellow-200" ><a href="Page 3 - Panes.html">Panaderia</a></li>
                <li class="transition transform hover:bg-yellow-200" ><a href="Page 4 - Pasteleria.html">Pasteleria</a></li>
                <li class="transition transform hover:bg-yellow-200" ><a href="Page 5 - Eventos.html">Eventos</a></li>
                <li class="transition transform hover:bg-yellow-200" ><router-link to="/contacto">Contacto</router-link></li>
            </ul>
        </div>                
        <!--</div class="fondo-home">-->   
        <div class="bg-no-repeat bg-right-top " style="background-image:">  
        <!--BODY<img width="1440px" src="img/fondo_home.JPG" alt=""/>-->
        </div>    
    </header>   


<!--MAIN-->

    <main> 
        <section>
            <div class="panes"> 

                <h1 class="tx_panes" >Productos de <br>panaderia artesanal</h1>

                <div class="m-28 relative grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-48 space-y-36 ">                   
                    <div class="space-y-6 self-end">
                        <h2>Espinaca</h2>
                        <img src="../assets/Pan_Espinaca.png" alt="" class="espinaca">
                        <p>
                            Pan preparado con extracto de
                            espinaca natural, llamativo en
                            color y sabor.
                        </p>
                    </div>
                    
                    <div class="space-y-6">
                        <h2>Zanahoria</h2>
                        <img src="../assets/Pan_Zanahoria.png" alt="" class="zanahoria">
                        <p>
                            Pan preparado ralladura y
                            extracto de zanahoria, con sabor
                            concentrado.
                        </p>
                    </div>

                    <div class="space-y-6">
                        <h2>Brioche</h2>
                        <img src="../assets/Pan_Brioche.png" alt="" class="brioche">
                        <p>
                            Pan aliñado de masa suave, con un
                            porcentaje alto de margarina y
                            huevo.
                        </p>
                    </div>
                
                
                    <div class="space-y-6">
                        <h2>Artesano</h2>
                        <img src="../assets/Pan_Artesano.png" alt="" class="artesano">
                        <p>
                            Pan de corteza con alto porcentaje
                            de fermento.
                        </p>
                    </div>

                    <div class="space-y-6">
                        <h2>Multigrano</h2>
                        <img src="../assets/Pan_MultiGranos.png" alt="" height=" " class="multigrano">
                        <p>
                            Pan que posee semillas de ajonjolí,
                            lino amarillo y marrón, mijo,
                            semillas de girasol y semillas de
                            amapola.
                        </p>
                    </div>

                    <div class="space-y-6">
                        <h2>Intefral</h2>
                        <img src="../assets/Pan_Integral.png" alt="" class="integral">
                        <p>
                            Pan de harina 100% integral.
                        </p>
                    </div>
                </div>
                
            </div> 
            <div class="linea">
                <div class="box h-6  bg-yellow-200 "></div>
                <div class="box h-3  bg-yellow-800 "></div>
            </div>
        </section>
        <section>
            <div class="pasteleria">
                <h1> Productos de <br>pasteleria</h1>
                <p>
                    Poseemos un amplio portafolio de productos de pastelería <br> y postres para
                    cumplir todas las necesidades de nuestros clientes.
                </p>
                <div class="m-16 grid grid-cols-1 xl:grid-cols-2 gap-10 my-4">
                    <img src="../assets/Pasteleria_1.png" alt="">
                    <img src="../assets/Pasteleria_2.png" alt="">
                    <img src="../assets/Pasteleria_3.png" alt="">
                    <img src="../assets/Pasteleria_4.png" alt="">
                
                </div>
                <p>
                    Ofrecemos la opción de personalizarlos según sus deseos y
                    necesidades.
                </p>     
            </div>
            <div class="box  h-6  bg-yellow-200 "></div>
        <div class="box h-3  bg-yellow-800 "></div>
        </section> 
        <section>
            <div class=" eventos">
                <h1> Productos para <br> eventos</h1>
                <p>
                    También atendemos todo tipo de eventos familiares y empresariales con mesas
                    de dulce y sal de pasabocas. <br> Este servicio se hace personalizado por lo que no
                    manejamos rango de precios.
                </p>
                <div class="m-16 grid grid-cols-1 xl:grid-cols-2 ">
                    <img src="../assets/Eventos_1.png" alt="">
                    <img src="../assets/Eventos_2.png" alt="">
                    <img src="../assets/Eventos_3.png" alt="">
                    <img src="../assets/Eventos_4.png" alt="">     
                </div>
            </div>
        </section> 
    </main>

    <aside>
    </aside> 

    <footer class="box h-36 " > 
        <div class="box h-6  bg-yellow-200 "></div>
       <!-- <div class="box h-3  bg-yellow-800 "></div>
        <div class="md:object-top flex justify-center">           
            <div>  
            <a class="m-2 p-4" href="https://www.facebook.com/Gramoagramopanartesano/" target="_blank"><img src="img/icons8-facebook-nuevo.svg" alt="" class="transform hover:-translate-y-1 hover:scale-110">
            </div>

            <div>  
            <a class="m-2 p-4" href="https://www.instagram.com/gramoagramopanartesano/?hl=es-la" target="_blank"><img src="img/icons8-instagram.svg" alt="" class="transform hover:-translate-y-1 hover:scale-110">
            </div>

        </div>-->
    </footer>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  components: {
    
  }
}
</script>
<style scoped>
*{
    margin: 0;
    padding: 0;
}

/*@font-face {
    font-family: titulos;
    src: url(../assets/fuentes/DeliusSwashCaps-Regular.ttf);
}  
@font-face {
    font-family:dulce ;
    src: url(../assets/fuentes/Dulcelin.otf);  
}*/
template{
    position: relative;
    
}
.nav-bar{
   display: flex; 
   justify-content: space-between;
}
#logo{
    
    width: 21.0625rem;   
    
/*backraun imagen principal*/
}
header{
    
    /*background-image: url(@/assets/Fondo_home.JPG);*/
    background-size: 100%;
    background-position: center;
    height: 25rem;
    background-repeat: no-repeat;    
}
a{
    color: #794425;
    font-size: 1.125rem;  
}

.menu-links li{
    display: inline;          
    padding-right: 1.5625rem;
    font-family: titulos;
    
}
/*da color a los titulos*/
h1{
    color: #794425;
    font-size: 4rem;
    text-align: center;
    font-family: titulos;
}
/*galeria panes*/
h2{      
    color: #794425;
    font-size: 4rem;   
    text-align: center;
    font-family: dulce;       
    } 
    
    p{
        color: #070707;
        font-size: 24px;
        text-align: center;
        font-family: titulos;         
    }    
    .panes{
          
        width: 100%;
        height: 91.375rem;
        display: inline-block;
        padding: 10rem;         
    
    }
    .tx_panes{
        position: relative;
        width: 46.5rem;
        height: 5.75rem;
        left: calc(50% - 46.5rem/2 + 0.4375rem);
        top: 2.8125rem;
    }
    .pasteleria{
        position: relative; 
        width: 100%;
        height: 98.625rem;       
        margin-top: 18.75rem;
        display: inline-block;
        padding: 4rem;
    }  
    .eventos{
        position: relative;
        width: 100%;
        height: 115.9375rem;
        padding: 4rem;
        display: inline-block;

    }       
      
    .panes img{

        width: 13.25rem;
        height: 16.75rem;
        border-radius: 2.4375rem;
        box-shadow: 0.625rem 0.3125rem 0.9375rem rgb(78, 45, 8);
       

    }
    .pasteleria img{
        
        width: 36.7344rem;
        height: 26.3125rem;    
        border-radius: 4.5625rem;
        box-shadow: 0.625rem 0.3125rem 0.9375rem rgb(78, 45, 8);
        margin-top: 6.25rem;
    } 
    .eventos img{
        width: 36.4875rem;
        height: 26.3125rem;              
        border-radius: 4.5625rem;
        box-shadow: 0.625rem 0.3125rem 0.9375rem rgb(78, 45, 8);
        margin-top: 6.25rem;
        
    }  
   

#menu-links{
    position: absolute;
    width: 54.4375rem;
    height: 3.875rem;
    right: 0rem;
    top: 2.625rem;

    background: rgba(254, 252, 252, 0.57);
    
}
 .linea{
    position: absolute;
    height: 6.25rem;
    left: 0rem;
    right: 0rem;
    top: 134.375rem;
    
 }
 /*boton de pedidos
  */     
 #main-container{
     padding-top: 0.1875rem;     
     text-align: center ;
     vertical-align: auto;

    
 } 
 h3{      
    color: #f7f1ee;
    font-size: 1.25rem;   
    text-align: right;
   /* font-family: titulos;*/
    display: inline-block;

    
    }  
  .btn{
      border-radius: 0.875rem;
      display: inline-block;
      padding: 0rem 0.75rem;
      text-shadow: 0 0.0625rem 0 rgba(254, 252, 252, 0.3);
      box-shadow: 0 0.0625rem 0.0625rem rgba(0, 0, 0, 0.3);
  }
  .btn-yellow{
      color: rgb(39, 17, 7);
      background-color: rgb(241, 241, 214);
  }
  .btn-yellow:hover{
      background-color:rgb(236, 227, 143) ;
  }
  .btn-yellow:active{
    background-color:sienna ;
}

/*posiciona y da color al footer*/
footer{
    background: #E8A155;
    position: relative;
    width: 90rem;
    height: 9.875rem;
    left: 0rem;
    bottom: 0;    
    margin-top: auto;
}
</style>
