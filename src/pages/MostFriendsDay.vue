<template>
  <div>
    <Compilation v-bind:block="blocks[3]" />
  </div>
</template>

<script>
import blocks from "../data/blocks.json"
import Compilation from "../components/Compilation.vue"

export default {
  components: {
    Compilation
  },
  data() {
    return {
      blocks: blocks,
    };
  },
};
</script>