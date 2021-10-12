<template>
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
        <input type="email" name="email" v-model="pedido.email" />
        </div>
      

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
</style>