<template>
  <div id="app">
    <WelcomePage v-if="currentPage === 'welcome'" @language-selected="setLanguage" />
    <ConfigurationForm v-else-if="currentPage === 'config'" @config-completed="startPrologue" />
    <ProloguePage v-else-if="currentPage === 'prologue'" @start-story="startStory" />
    <ChapterPage v-else-if="currentPage === 'chapter'" @start-next-chapter="startNextChapter" />

    <!-- Add other pages as needed -->
  </div>
</template>

<script>
import WelcomePage from './components/WelcomePage.vue';
import ConfigurationForm from './components/ConfigurationForm.vue';
import ProloguePage from './components/ProloguePage.vue';
import ChapterPage from './components/ChapterPage.vue';

export default {
  name: 'App',
  components: {
    WelcomePage,
    ConfigurationForm,
    ProloguePage,
    ChapterPage,
  },
  data() {
    return {
      currentPage: 'welcome',
      language: 'English',
      userConfig: {}
    };
  },
  methods: {
    setLanguage(lang) {
      this.language = lang;
      this.currentPage = 'config';
    },
    startPrologue(config) {
      this.userConfig = config;
      this.currentPage = 'prologue';
    },
    startStory() {
      // Logic to start the story
      this.currentPage = 'chapter';
    },
    startNextChapter(){
      this.currentPage = 'chapter'; 
    }
  }
};

</script>

<style>
body { 
  background: url('assets/BACKGROUND.png') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

@import'~bootstrap/dist/css/bootstrap.css'
</style>