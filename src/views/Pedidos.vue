<template>
 <div class="box h-8  bg-yellow-600">
        <div id="main-container">
            <a href="https://wa.me/3195650570" target="_blank" class="btn btn-yellow">Pedidos</a>
            <h3 >3195650570</h3>            
        </div>    
    </div> 
    <header>
       <div id="menu" class="nav-bar flex wrap ">
            <a id="logo" href="#"></a> <img width="337px" src="src\assets\Logo Gramo a Gramo.png" alt="" class="transform hover:-translate-y-1 hover:scale-110"/>           
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
    <div>
        <h3>Haga su Pedido</h3>

    </div>           

<footer class="box h-36" > 
		<div class="box h-6  bg-yellow-200 "></div>
		<div class="box h-3  bg-yellow-800 "></div>
		<!--<div class="md:object-top flex justify-center">           
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
  
  name: 'Pedidos',
  components:{

  }
}
</script>

<style scoped>

#main-container{
     padding-top: 0.1875rem;     
     text-align: center ;
     vertical-align: auto;    
 } 
 h3{      
    color: #ac4d1e;
    font-size: 1.25rem;   
    text-align: right;
    font-family: titulos;
    display: inline-block;
   
    } 
    header{        
    background-size: 100%;
    background-position: center;
    height: 25rem;
    background-repeat: no-repeat;    
}
a{
  font-family: 'Delius Swash Caps', cursive;
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
header{
    
			/*background-image: url( src\assets\Fondo_contactenos.jpg);*/
			background-size: 100%;
			background-position: center;
			height: 100%;
			background-repeat: no-repeat; 
		}
		footer{
			background: #E8A155;
			position: absolute;
			width: 100%;
			height: 9.875rem;
			left: 0px;						
			margin-top: auto;
		}

</style>