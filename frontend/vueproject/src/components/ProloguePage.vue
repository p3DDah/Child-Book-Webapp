<template>
    <div class="prologue-page">
      <h1>Prologue</h1>
      <p>{{ prologueText }}</p>
      <button @click="startStory">Start Story</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ProloguePage',
    props: {
      userConfig: Object
    },
    computed: {
      prologueText() {
        // Replace placeholders in the prologue text with userConfig data
        return `Once upon a time, ${this.userConfig.name}...`;
      }
    },
    methods: {
      startStory() {
        this.$emit('start-story');
      }
    }
  };
  </script>
  
  <style scoped>
  /* Styles for ProloguePage */
  </style>
  