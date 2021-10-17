<template>
  <h1 v-if="!pokemon">Espere por favor...</h1>
  <div v-else="pokemon">
    <h1>¿Quién es este pokemon?</h1>
    <pokemonPicture :pokemonId="pokemon.id" :showPokemon="showPokemon" />
    <pokemonOptions :pokemons="pokemonArr" @selectionPokemon="checkAnswer" />

    <div v-if="showAnswer">
      <h2 class="fade-in" :class="{ 'text-danger': hasError }">
        {{ message }}
      </h2>
      <button class="boton-jugar" @click="newGame">Jugar</button>
    </div>
  </div>
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";

import getPokemonOptions from "@/helpers/getPokemonOptions";

console.log(getPokemonOptions());

export default {
  components: { PokemonPicture, PokemonOptions },
  data() {
    return {
      pokemonArr: [],
      pokemon: null,
      showPokemon: false,
      showAnswer: false,
      message: "",
      hasError: false,
      "text-danger": false,
    };
  },
  methods: {
    async mixPokemonArray() {
      this.pokemonArr = await getPokemonOptions();
      // Queremos un número random de los 4 elems del array.
      const rndInt = Math.floor(Math.random() * 4);
      this.pokemon = this.pokemonArr[rndInt];
    },
    //Emite un evento al hacer clik en el <li> y muestra la imagen en color
    checkAnswer(selectedId) {
      this.showPokemon = true;
      this.showAnswer = true;

      if (selectedId === this.pokemon.id) {
        this.message = `Correcto!, es ${this.pokemon.name}!`;
      } else {
        this.message = `Ooops!, era ${
          this.pokemon.name
        } ${(this.hasError = true)}`;
      }
    },
    newGame() {
      this.showPokemon = false;
      this.showAnswer = false;
      this.pokemonArr = [];
      this.pokemon = null;
      this.mixPokemonArray();
    },
  },
  mounted() {
    this.mixPokemonArray();
  },
};
</script>

<style scoped>
.boton-jugar {
  background-color: #4caf50;
  border: 1px solid green;
  border-radius: 12px;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition-duration: 0.4s;
}
.boton-jugar:hover {
  background-color: green;
  color: white;
}
.text-danger {
  color: red;
}
</style>
