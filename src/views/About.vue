<template>
  <div class="about">
    
  </div>
   <div class=" box h-8  bg-yellow-600 ">
        <div id="main-container">
              <router-link to="/pedidos">Pedidos</router-link>
             <!--            <a href="https://wa.me/3195650570" target="_blank" class="btn btn-yellow">Pedidos</a>-->
            <h3 ></h3>            
        </div>    
    </div>
    <header>        
        <div id="menu" class="nav-bar flex wrap ">
            <a id="logo" href="#"></a> <img width="337px" src="src\assets\Logo Gramo a Gramo.png" alt="" class="transform hover:-translate-y-1 hover:scale-110"/>           
            <ul class="box h-12  bg-white bg-opacity-30 rounded-md  menu-links">                
                <li class="transition transform hover:bg-yellow-200" ><a href="Page 2 - Quienes Somos.html">Quienes Somos</a></li>
                <li class="transition transform hover:bg-yellow-200" ><a href="Page 3 - Panes.html">Panaderia</a></li>
                <li class="transition transform hover:bg-yellow-200" ><a href="Page 4 - Pasteleria.html">Pasteleria</a></li>
                <li class="transition transform hover:bg-yellow-200" ><a href="Page 5 - Eventos.html">Eventos</a></li>
                <li class="transition transform hover:bg-yellow-200" ><router-link to="/contacto">Contacto</router-link></li>
            </ul>
        </div>                
        <!--</div class="fondo-home">-->   
        <div class="bg-no-repeat bg-right-top " style="background-image:"> 
  </div> 
        <div class= "flex justify-end txt_header " >
            <p class="text-white text-center">
                Un Sabor <br> que crese <br> como nuestro <br> Pan
            </p>
        </div>   
    </header>
  
    <main>
        <div class="img1">
            <img height="240px" src="img/Quienes_1.jpg" alt="">

        </div>

        <div class="txt1">
            <p>
                El mundo de la panadería ha evolucionado desde sus inicios que al día de hoy se ha visto envuelta en
                muchos cambios e innovaciones.
            </p>
        </div>

        <div class="img2">

            <img height="240px" src="img/Quienes_2.jpg" alt="">
        </div>

        <div class="txt2">
            <p>
                No es un secreto que se debe mantener un concepto fresco y vanguardista para romper esquemas y destacar
                entre los demás.

                Bajo esta premisa nace la empresa GramoaGramo, enfocada en ofrecer productos con un concepto artesanal y
                diferente, sabores que destacan e ideas poco comunes.
            </p>
        </div>

        <div class="img3">
            <img height="240px" src="img/Quienes_3.jpg" alt="">

        </div>

        <div class="txt3">
            <p>
                Somos una empresa enfocada en el desarrollo, producción y distribución de panadería y pastelería
                artesanal totalmente personalizable.
            </p>

        </div>

        <div class="img4">

            <img height="240px" src="img/Quienes_4.jpg" alt="">
        </div>

        <div class="txt4">
            <p>
                Poseemos fórmulas propias que nos permiten tener variedades de productos únicos para su empresa.
            </p>
        </div>

        <div class="img5">
            <img height="240px" src="img/Quienes_5.jpg" alt="">

        </div>

        <div class="txt5">
            <p>
                Manteniendo la receta estándar, logramos un producto 100% constante y sin variaciones.
            </p>
        </div>

        <div class="img6">

            <img height="240px" src="img/Quienes_6.jpg" alt="">
        </div>

        <div class="txt6">
            <p>
                Manejamos un concepto de precios enfocándonos en establecer una relación honesta con nuestros clientes
            </p>
        </div>

    </main>
    <footer class="box h-36 " > 
        <div class="box h-6  bg-yellow-200 "></div>
        <div class="box h-3  bg-yellow-800 "></div>
       
    </footer>

</template>
<style scoped>
  
        template {
            font-family: 'Delius Swash Caps', cursive;
            display: grid;
            grid-template-columns: 2fr;
            grid-template-rows: 60rem 5rem max max-content 1fr 2.5rem;
        }

        h3{
            color: #f7f1ee;
        font-size: 1.25rem;   
        text-align: center;
        font-family: 'Delius Swash Caps', cursive;  
        }
        header{   
            
            background-size: 100%;
            background-position: center;
            height: 31.25rem;
            background-repeat: no-repeat;    
}
.menu-links li{
    display: inline;          
    padding-right: 1.5625rem;
    font-family: titulos;
    
}
.nav-bar{
   display: flex; 
   justify-content: space-between;
}
#logo{
    position: absolute;
    width: 21.0625rem;
    height: 13.9375rem;
    left: 3.4375rem;
    top: 4.25rem;
/*backraun imagen principal*/
}
a{
    color: #301506;
    font-size: 1.125rem;
    font-family: 'Delius Swash Caps', cursive; 
     
}        
       .txt_header {
        position: absolute;
        width: 32.9375rem;
        height: 17.6875rem;
        left: calc(50% - 527px/2 + 394.5px);
        top: 7.6875rem;

        font-family:dulce ;
        font-style: normal;
        font-weight: normal;
        font-size: 4rem;
        line-height: 3.75rem;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: 0.14em;
       
        }
        main {
            /* background-color: red; */
            display: grid;
            grid-template-columns: repeat (2, 1fr);
            grid-template-rows: repeat(6, 1fr);
            align-items: center;
            font-size: 2rem;

        }

        main .img1 {
            grid-column: 1;
            /* display: inline; */
            grid-row: 1;
            text-align: center;

        }

        main .txt1 {
            grid-column: 2;
            /* display: inline; */
            grid-row: 1;
            text-align: justify;
            padding: 2rem;

        }

        main .img2 {
            grid-column: 2;
            /* display: inline; */
            grid-row: 2;
            text-align: center;

        }

        main .txt2 {
            grid-column: 1;
            /* display: inline; */
            grid-row: 2;
            text-align: justify;
            padding: 2rem;
        }

        main .img3 {
            grid-column: 1;
            /* display: inline; */
            grid-row: 3;
            text-align: center;

        }

        main .txt3 {
            grid-column: 2;
            /* display: inline; */
            grid-row: 3;
            text-align: justify;
            padding: 2rem;
        }

        main .img4 {
            grid-column: 2;
            /* display: inline; */
            grid-row: 4;
            text-align: center;

        }

        main .txt4 {
            grid-column: 1;
            /* display: inline; */
            grid-row: 4;
            text-align: justify;
            padding: 2rem;
        }

        main .img5 {
            grid-column: 1;
            /* display: inline; */
            grid-row: 5;
            text-align: center;

        }

        main .txt5 {
            grid-column: 2;
            /* display: inline; */
            grid-row: 5;
            text-align: justify;
            padding: 2rem;
        }

        main .img6 {
            grid-column: 2;
            /* display: inline; */
            grid-row: 6;
            text-align: center;

        }

        main .txt6 {
            grid-column: 1;
            /* display: inline; */
            grid-row: 6;
            text-align: justify;
            padding: 2rem;
        }
        footer{
    background: #E8A155;
    position: absolute;
    width: 90rem;
    height: 9.875rem;
    left: 0px;
    
    margin-top: auto;
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
    font-family: titulos;
    display: inline-block;

    
    }  
  .btn{
      border-radius: 0.875rem;
      display: inline-block;
      padding: 0px 0.75rem;
      text-shadow: 0 1px 0 rgba(254, 252, 252, 0.3);
      box-shadow: 0 1px 1px rgba(0, 0, 0, 0.3);
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
</style>
