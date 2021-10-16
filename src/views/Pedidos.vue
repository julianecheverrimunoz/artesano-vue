<template>
  <div class="box h-8 bg-yellow-600">
    <div id="main-container">
      <a href="https://wa.me/3195650570" target="_blank" class="btn btn-yellow"
        >Pedidos</a
      >
      <h3>3195650570</h3>
    </div>
  </div>
  <header>
    <div id="menu" class="nav-bar flex wrap mr-10">
      <router-link to="/"
        ><img
          id="logo"
          src="../assets/Logo_Gramo_Gramo.png"
          alt=""
          class="transform hover:-translate-y-1 hover:scale-110"
      /></router-link>
      <ul class="box h-12 bg-white bg-opacity-60 rounded-md menu-links">
        <li class="transition transform hover:bg-yellow-200">
          <router-link to="/about">Quienes Somos</router-link>
        </li>

        <li class="transition transform hover:bg-yellow-200">
          <router-link to="/contacto">Contacto</router-link>
        </li>
      </ul>
    </div>
    <!--</div class="fondo-home">-->
    <div class="bg-no-repeat bg-right-top" style="background-image: ">
      <!--BODY<img width="1440px" src="img/fondo_home.JPG" alt=""/>-->
    </div>
    <main class="md:object-top flex justify-center">
      <div class="formulario">
        <h2>Registro Pedidos</h2>
        <h1>Ingrese sus datos</h1>
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
            <input type="email" name="email" v-model="pedido.email" />
          </div>

          <h1>Seleccione los Productos</h1>
          <!-- <form id="formulario_productos" action="#" method="post"> -->
          <div id="datos_productos">
            <input
              type="checkbox"
              name="pan_artesanal"
              v-model="nombrePanes"
              value="Pan Artesanal"
              id=""
            />
            <label for="pan_artesanal">Pan Artesanal</label>
            <!-- <input v-if="artesanal" type="number" name="qartesanal" /> -->
            <input
              v-model.number="qartesanal"
              type="number"
              name="qartesanal"
              id=""
            />

            <input
              type="checkbox"
              name="pan_brioche"
              v-model="nombrePanes"
              value="Pan Brioche"
              id=""
            />
            <label for="pan_brioche">Pan Brioche</label>
            <!-- <input v-if="brioche" type="number" name="qbrioche" /> -->
            <input
              type="number"
              name="qbrioche"
              id=""
              v-model.number="qbrioche"
            />

            <input
              type="checkbox"
              name="pan_multigranos"
              v-model="nombrePanes"
              value="Pan Multigranos"
              id=""
            />
            <label for="pan_multigranos">Pan Multigranos</label>
            <input
              type="number"
              name="qmultigranos"
              id=""
              v-model="qmultigranos"
            />

            <input
              type="checkbox"
              name="pastel_pollo"
              v-model="ppollo"
              value="Pastel de Pollo"
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

          <div>
            <h1>Seleccione la forma de envio</h1>
          </div>

          <label for="envio">Forma de Envio</label>
          <div>
            <input type="radio" name="envio" value="0" v-model="envio" id="" />
            Recoger en el Local
            <input type="radio" name="envio" value="1" v-model="envio" id="" />
            Envio a Domicilio
          </div>
          <div class="grid gap-4 grid-cols-2">
            <div>
              <button type="reset" name="limpiar">Limpiar</button>
            </div>
            <div>
              <button @click.prevent="procesarInformacion()" type="button">
                Agregar
              </button>
            </div>
          </div>
        </form>
      </div>

      <div>
        <h2>Resumen del Pedido</h2>
        <table>
          <tr>
            <th>Fecha:</th>
            <td>{{ pedido.fecha }}</td>
          </tr>
          <tr>
            <th>Nombre:</th>
            <td>{{ pedido.nombre }}</td>
          </tr>
          <tr>
            <th>Documento:</th>
            <td>{{ pedido.documento }}</td>
          </tr>

          <tr>
            <th>Telefono:</th>
            <td>{{ pedido.telefono }}</td>
          </tr>

          <tr>
            <th>Email:</th>
            <td>{{ pedido.email }}</td>
          </tr>

          <table>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio Unitario</th>
              <th>Precio Total</th>
            </tr>
            <tr>
              <td>{{ nombrePanes[0] }}</td>
              <td>{{ qartesanal }}</td>
              <td>{{ precioPanes[0] }}</td>
              <td>7000</td>
            </tr>
            <tr>
              <td>{{ nombrePanes[1] }}</td>
              <td>{{ qbrioche }}</td>
              <td>{{ precioPanes[1] }}</td>
              <td>7000</td>
            </tr>
            <tr>
              <td>{{ nombrePanes[2] }}</td>
              <td>{{ qmultigranos }}</td>
              <td>{{ precioPanes[2] }}</td>
              <td>7000</td>
            </tr>
            <tr>
              <td>{{ nombrePasteles[0] }}</td>
              <td>{{ qppollo }}</td>
              <td>{{ preciosPasteles[0] }}</td>
              <td>7000</td>
            </tr>
            <tr>
              <td>{{ nombrePasteles[1] }}</td>
              <td>{{ qpcarne }}</td>
              <td>{{ preciosPasteles[1] }}</td>
              <td>7000</td>
            </tr>
            <td>{{ nombrePasteles[2] }}</td>
            <td>{{ qpgloria }}</td>
            <td>{{ preciosPasteles[2] }}</td>
            <td>7000</td>
          </table>
        </table>
      </div>
    </main>
  </header>
  <footer class="box h-36">
    <div class="box h-6 bg-yellow-200"></div>
    <div class="box h-3 bg-yellow-800"></div>
    <div class="md:object-top flex justify-center">
      <div>
        <a
          class="m-2 p-4"
          href="https://www.facebook.com/Gramoagramopanartesano/"
          target="_blank"
        >
          <img
            src="../assets/icons8_facebook_nuevo.svg"
            alt=""
            class="transform hover:-translate-y-1 hover:scale-110"
          />
        </a>
      </div>
      <div>
        <a
          class="m-2 p-4"
          href="https://www.instagram.com/gramoagramopanartesano/?hl=es-la"
          target="_blank"
        >
          <img
            src="../assets/icons8_instagram.svg"
            alt=""
            class="transform hover:-translate-y-1 hover:scale-110"
          />
        </a>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      // nombrePanes: [],
      nombrePanes: ["Pan Artesanal", "Pan Brioche", "Pan Multigranos"],
      precioPanes: [700, 1000, 900],

      nombrePasteles: ["Pastel de Pollo", "Pastel de Carne", "Pastel Gloria"],
      preciosPasteles: [3000, 2700, 2600],

      listaPanes: [
        {
          nombre: "Pan Artesanal",
          precio: 700,
        },
        {
          nombre: "Pan Brioche",
          precio: 1000,
        },
        {
          nombre: "Pan Multigranos",
          precio: 900,
        },
      ], // Cierre listaPanes

      listaPasteles: [
        {
          nombre: "Pastel de Pollo",
          precio: 3000,
        },
        {
          nombre: "Pastel de Carne",
          precio: 2700,
        },
        {
          nombre: "Pastel Gloria",
          precio: 2600,
        },
      ], // Cierre listaPasteles

      pedido: {
        fecha: new Date().toISOString().substr(0, 10),
        nombre: "",
        documento: "",
        telefono: "",
        email: "",
        qartesanal: 0,
        qbrioche: 0,
        qmultigranos: 0,
        qppollo: 0,
        qpcarne: 0,
        qpgloria: 0,
        envio: 0,
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
    procesarInformacion() {
      //   this.pedido.artesanal = this.listaPanes[this.salon - 1];
      // if (this.artesanal) {
      //   this.evento.meseros += this.evento.salon.cantidad_meseros;
      // } else {
      //   this.evento.meseros = this.evento.salon.cantidad_meseros;
      // } //cierre else
    },

    borrarInformacion() {},
  }, // Cierre methods
}; //cierre export default
</script>

<style scoped>
@font-face {
  font-family: titulos;
  src: url(../assets/Fuentes/DeliusSwashCaps-Regular.ttf);
}
template {
  position: relative;
  padding: 3rem;
}
.nav-bar {
  display: flex;
  justify-content: space-between;
}
#logo {
  width: 10rem;
}
.formulario {
  display: inline-block;
  margin-top: -100px;
}
header {
  background-image: url(../assets/Fondo_contactenos.jpg);
  background-size: 100%;
  background-position: center;
  background-repeat: no-repeat;
}
a {
  color: #794425;
  font-size: 1.125rem;
}

.menu-links li {
  display: inline;
  padding-right: 1.5625rem;
  font-family: titulos;
}
/*boton de pedidos
  */
#main-container {
  padding-top: 0.1875rem;
  text-align: center;
  vertical-align: auto;
}

h3 {
  color: #f5f0ee;
  font-size: 1.25rem;
  text-align: center;
  font-family: titulos;
  display: inline-block;
}
h1 {
  color: #f5f0ee;
  font-size: 1.25rem;
  text-align: center;
  font-family: titulos;
}
h2 {
  color: #eb794d;
  font-size: 3rem;
  text-align: center;
  font-family: titulos;
}
.btn {
  border-radius: 0.875rem;
  display: inline-block;
  padding: 0rem 0.75rem;
  text-shadow: 0 0.0625rem 0 rgba(254, 252, 252, 0.3);
  box-shadow: 0 0.0625rem 0.0625rem rgba(0, 0, 0, 0.3);
}
.btn-yellow {
  color: rgb(39, 17, 7);
  background-color: rgb(241, 241, 214);
}
.btn-yellow:hover {
  background-color: rgb(236, 227, 143);
}
.btn-yellow:active {
  background-color: sienna;
}

#datos_cliente {
  display: grid;
  grid-template-columns: 7rem 12rem;
  padding: 1rem;
  row-gap: 1rem;
  column-gap: 0.5rem;
  background-color: rgba(223, 223, 240, 0.137);
}

#datos_productos {
  display: grid;
  grid-template-columns: 2rem 9rem 9rem;
  padding: 1rem;
  row-gap: 1rem;
  column-gap: 0.5rem;

  background-color: rgba(223, 223, 240, 0.137);
}

button {
  border-radius: 0.875rem;
  width: 100px;
  border: beige;
  color: rgb(39, 17, 7);
  background-color: rgb(241, 241, 214);
}
button:hover {
  background-color: rgb(224, 139, 12);
}
button:active {
  background-color: rgb(226, 199, 186);
}

/*posiciona y da color al footer*/
footer {
  background: #e8a155;
  position: relative;
  height: 9.875rem;
  left: 0rem;
  bottom: 0;
  margin-top: auto;
}
</style>