<template>
<div class="contacto"></div>
  <header>
		<div class="box h-8  bg-yellow-600">
        <div id="main-container">
            <router-link to="/pedidos">Pedidos</router-link>
             <!--<a href="https://wa.me/3195650570" target="_blank" class="btn btn-yellow">Pedidos</a>-->
            <h3 ></h3>            
        </div>   
            
			<a  href="#"></a> <img id="logo" src="../assets/Logo_Gramo_Gramo.png"  alt="" class="transform hover:-translate-y-1 hover:scale-110"/>  	
		</div>  			
		
	<body >	
		<h1>Contactanos</h1>
		<h2> Mail: gramoagramopanaderia@gmail.com </h2>
		<h2>Cel: 3195650570</h2>
		<h1>Dejanos un mensaje</h1>
	</body>	
		<form action="/my-handling-form-page" method="post">
			<ul>
				<li>			
					<label for="name">Nombre:</label>		
					<span>
					<input type="text" id="name" name="user_name" />
					</span>
				</li>
				<li>
					<label for="mail">E-mail:</label>					
					<span>
					<input type="email" id="mail" name="user_mail" />
					</span>
				</li>
                <li>
					<label for="phone">tel...cel...:</label>					
					<span>
					<input type="phone" id="phone" name="phone" />
					</span>
				</li>
				<li>
					<label for="msg">Mensaje:</label>					
					<span>
					<textarea id="msg" name="user_message"></textarea>
					</span>
				</li>
				<!--<li class="button">
					<button class="transition duration-500 ease-in-out bg-yellow-800 hover:bg-yellow-200 transform hover:-translate-y-1 hover:scale-110">
					Contactame
				</li>-->
			</ul>
		</form>
	</header>
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
<style scoped>
#logo{
    
    width: 21.0625rem;  
	}

	form {
				/* Just to center the form on the page */
				margin: 0 auto;
				width: 18.75rem;
				color: rgb(238, 161, 137);			
							
			}
			ul {
				list-style: none;
				padding: 0;
				margin: 0;
			}
			form li + li {
				
				margin-top: 1em;
			}
			label {
				/* To make sure that all labels have the same size and are properly aligned */
				display: inline-block;
				width: 5.625rem;
				text-align: right;
			}

			input,
			textarea {				
				/* To make sure that all text fields have the same font settings By default, textareas have a monospace font */
				font: 1em sans-serif;
				/* To give the same size to all text fields */
				width: 18.75rem;
				box-sizing: border-box; /* To harmonize the look & feel of text field border */
				border: 0.0625rem solid #999;
				background: rgba(255, 250, 250, 0.37);
				
			}

			input:focus,
			textarea:focus {				
				border-color: #000;				
			}
			textarea {				
				vertical-align: top;				
				height: 5em;
			}
			.button {				
				padding-left: 5.625rem;				
				
			}

			button {				
				margin-left: 0.5em;
				
			}
			h1{
			color:rgb(235, 193, 103);	
			font-size:40pt;
			font-family:Dulcelin;
			text-align:center;
		}
		h2{
			color:rgb(228, 168, 56);
			font-style:normal;
			font-weight:normal;
			font-size:14pt;
			font-family:Delius Swash Caps;
			text-align:center;
		}
		a{
			font-family: 'Delius Swash Caps', cursive;
			color: #794425;
			font-size: 1.125rem;  
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
		/*boton de pedidos
  */     
 #main-container{
     padding-top: 0.1875rem;     
     text-align: center ;
     vertical-align: auto;

    
 } 
 h3{      
    color: #f18c59;
    font-size: 1.25rem;   
    text-align: right;
    font-family: titulos;
    display: inline-block;

    
    }  
  .btn{
      border-radius: 0.875rem;
      display: inline-block;
      padding: 0px 0.75rem;
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
	</style> 
		