<template>
 <div class="box h-8  bg-yellow-600">
        <div id="main-container">            
            <a href="https://wa.me/3195650570" target="_blank" class="btn btn-yellow">Pedidos</a>
            <h3 ></h3>            
        </div>      
        
    </div>
    <header>        
        <div id="menu" class="nav-bar flex wrap ">
          <a id="logo" href="#"></a> <img src="assets/Logo Gramo a Gramo.png" alt="">      
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
  <main>
    <div>
      <h2>Registro Pedidos</h2>
      <h3>Ingrese sus datos</h3>
      <form id="formulario_pedido" action="#" method="post">
        <div id="datos_cliente">
        <label for="fecha">Fecha:</label>
        <input type="date" name="fecha" v-model="pedido.fecha" />

        <label for="nombre">Nombre:</label>
        <input type="text" name="cliente" v-model="pedido.nombre" />

        <label for="documento">Documento:</label>
        <input type="text" name="documento" v-model="pedido.documento" />

        <label for="telefono">Telefono:</label>
        <input type="number" name="telefono" v-model="pedido.telefono" />

        <label for="email">Email: </label>
        <input type="email" name="email" v-model="pedido.email" />       </div>
      

      <h3>Seleccione los Productos</h3>     

      <!-- <form id="formulario_productos" action="#" method="post"> -->
        <div id="datos_productos">
        <input
          type="checkbox"
          name="pan_artesanal"
          v-model="artesanal"
          value="Si"
          id=""
        />
        <label for="pan_artesanal">Pan Artesanal</label>
        <!-- <input v-if="artesanal" type="number" name="qartesanal" /> -->
        <input type="number" name="qartesanal" id="" />

        <input
          type="checkbox"
          name="pan_brioche"
          v-model="brioche"
          value="Si"
          id=""
        />
        <label for="pan_brioche">Pan Brioche</label>
        <!-- <input v-if="brioche" type="number" name="qbrioche" /> -->
        <input type="number" name="qbrioche" id="" />

        <input
          type="checkbox"
          name="pan_multigranos"
          v-model="multigranos"
          value="Si"
          id=""
        />
        <label for="pan_multigranos">Pan Multigranos</label>
        <input type="number" name="qmultigranos" id="" />

        <input
          type="checkbox"
          name="pastel_pollo"
          v-model="ppollo"
          value="Si"
          id=""
        />
        <label for="pastel_pollo">Pastel de Pollo</label>
        <input type="number" name="qppollo" id="" />

        <input
          type="checkbox"
          name="pastel_carne"
          v-model="pcarne"
          value="Si"
          id=""
        />
        <label for="pastel_carne">Pastel de Carne</label>
        <input type="number" name="qpcarne" id="" />

        <input
          type="checkbox"
          name="pastel_gloria"
          v-model="pgloria"
          value="Si"
          id=""
        />
        <label for="pastel_gloria">Pastel Gloria</label>
        <input type="number" name="qpgloria" id="" />

        </div>

      <!-- </form> -->
      <h3>Seleccione la forma de envio</h3>
      <label for="envio">Forma de Envio</label>
        <div>
          <input type="radio" name="envio" value="0" v-model="envio" id="" />
          Recoger en el Local
          <input type="radio" name="envio" value="1" v-model="envio" id="" />
          Envio a Domicilio
        </div>

        <button type="reset" name="limpiar">Limpiar</button>

        <button @click.prevent="procesarInformacion()" type="button">
          Agregar Evento
        </button>
        </form>
    </div>
  </main>
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
export default {
  data() {
    return {
      pedido: {
        fecha: new Date(), //.toISOString().substr(0, 11),
        nombre: "",
        documento: "",
        telefono: "",
        email: "",
        qartesanal: "",
        qbrioche: "",
        qmultigranos: "",
        qppollo: "",
        qpcarne: "",
        qpgloria: "",
        envio:"",
        
      }, // Cierre pedido


      artesanal: false,
      brioche: false,
      multigranos: false,
      ppollo: false,
      pcarne: false,
      pgloria: false,
    }; //Cierre return
  }, //Cierre data

  methods: {
    borrarInformacion() {},

  } // Cierre methods


}; //cierre export default
</script>

<style scoped>
template{
    position: relative;
    padding: 3rem;
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
header{
    
    /*background-image: url(img/assets/fondo_home.JPG);*/
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
     /*boton de pedidos
  */     
 #main-container{
     padding-top: 0.1875rem;     
     text-align: center ;
     vertical-align: auto;

    
 } 
 #formulario_pedido{
   display: flex; 
   justify-content: space-between;
 }
 h3{      
    color: #9e4112;
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


    #datos_cliente {
      display: grid;
      grid-template-columns: 7.2rem 12rem;
      padding: 1rem;
      row-gap: 1rem;
      column-gap: 0.5rem;
      text-align: justify;
      
    }

    #datos_productos {
      display: grid;
      grid-template-columns: 2rem 9rem 9rem;
      padding: 1rem;
      row-gap: 1rem;
      column-gap: 0.5rem;
      text-align: justify;
      
    }

    main {
      display: grid;
      grid-template-columns: 1fr 3fr;
      padding: 1rem;
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