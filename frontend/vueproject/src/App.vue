<template>
  <div class='container'>
    <tests v-if='testing'></tests>

    <div class='row'>
      <div class='col'>
        <nav-bar
          :tests-open='testing'
          @toggle-tests='toggleTests'>
        </nav-bar>
      </div>
    </div>
    <div class='row mt-2'>
      <div class='col'>
        <complaint-form ref='complaintForm'></complaint-form>
      </div>
    </div>  
  </div>
</template>

<script>
// import NavBar from './components/NavBar.vue';
// import ComplaintForm from './components/ComplaintForm.vue';
// import Tests from './components/Tests.vue';

export default {
  name: 'App',
  components: {
    ComplaintForm,
    NavBar,
    Tests
  },
  data() {
    return {
      testing: false,
    }
  },
  methods: {
    toggleTests() {
      this.testing = !this.testing;
    }
  }  
}
</script>

<style>
body { 
  background: url('assets/bg.jpg') no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscnale;
}

@import'~bootstrap/dist/css/bootstrap.css'
</style>