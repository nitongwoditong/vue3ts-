<template>
  <div></div>
</template>

<script setup lang="ts">
const { h, resolveComponent, createApp } = Vue;
const app = createApp({});

app.component("anchored-heading", {
  render() {
    return h(
      "h" + this.level, // tag name
      {}, // props/attributes
      this.$slots.default() // array of children
    );
  },
  props: {
    level: {
      type: Number,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
</style>