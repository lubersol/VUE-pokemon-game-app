<template>
  <div class="options-container">
    <ul class="options-list">
      <li
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        @click="$emit('selectionPokemon', pokemon.id)"
      >
        {{ pokemon.name }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    pokemons: {
      type: Array,
      required: true,
    },
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* Pokemon Options */
ul {
  list-style-type: none;
}
li {
  background-color: white;
  border-radius: 5px;
  border: 1px solid rgba(0, 0, 0, 0.2);
  cursor: pointer;
  margin-bottom: 10px;
  width: 250px;
}

li:hover {
  background-color: #b5e7a0;
}

.options-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.options-list {
  align-items: center;
  justify-content: center;
  padding: 0;
}
</style>
