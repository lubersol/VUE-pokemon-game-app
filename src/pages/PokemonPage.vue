<template>
  <h1>¿Quién es este pokemon?</h1>
  <pokemonPicture :pokemonId="251" :showPokemon="true" />
  <pokemonOptions />
</template>

<script>
import PokemonPicture from "@/components/PokemonPicture";
import PokemonOptions from "@/components/PokemonOptions";

import getPokemonOptions from "@/helpers/getPokemonOptions";

console.log(getPokemonOptions());

export default {
  components: { PokemonPicture, PokemonOptions },
};
</script>
