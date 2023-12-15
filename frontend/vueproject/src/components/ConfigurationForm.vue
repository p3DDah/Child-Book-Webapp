<template>
    <div class="container mt-4">
      <div class="config-form">
        <div class="text-center">
          <h2>Configuration Form</h2>
        </div>
  
        <form class="mt-4" @submit.prevent="submitForm">
          <div class="form-group col-6 mx-auto">
            <label for="name">Name:</label>
            <input type="text" class="form-control" id="name" v-model="config.name" placeholder="Enter your name" required pattern="[A-Za-z ]+">
          </div>
  
          <div class="form-group col-6 mx-auto">
            <label for="gender">Gender:</label>
            <select class="form-control" id="gender" v-model="config.gender" required>
              <option value="" disabled selected>Select your gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>
  
          <div class="form-group col-6 mx-auto">
            <label for="country">Country:</label>
            <input type="text" class="form-control" id="country" v-model="config.country" placeholder="Enter your country" required>
          </div>
  
          <div class="form-group col-6 mx-auto">
            <label for="color">Favorite Color:</label>
            <input type="color" class="form-control" id="color" v-model="config.favoriteColor" required>
          </div>

          <!-- Favorite Animal input field -->
          <div class="form-group col-6 mx-auto">
            <label for="animal">Favorite Animal:</label>
            <input type="text" class="form-control" id="animal" v-model="config.favoriteAnimal" @input="validateAnimal" placeholder="Enter your favourite animal" required>
            <span class="error-message" v-if="errors.favoriteAnimal">{{ errors.favoriteAnimal }}</span>
          </div>

          <div class="form-group col-6 mx-auto">
            <label for="nameAnimal">Choose a name for your animal:</label>
            <input type="text" class="form-control" id="nameAnimal" v-model="config.nameAnimal" placeholder="Enter a name for your animal" required pattern="[A-Za-z ]+">
          </div>
  
          <div class="form-group col-6 mx-auto">
            <label for="season">Season:</label>
            <select class="form-control col-6" id="season" v-model="config.season" required>
              <option value="" disabled selected>Choose a preferred season</option>
              <option value="summer">Summer</option>
              <option value="fall">Fall</option>
              <option value="winter">Winter</option>
              <option value="spring">Spring</option>
            </select>
          </div>
  
          <div class="form-group col-6 mx-auto">
            <label for="chapters">Number of Chapters:</label>
            <input type="number" class="form-control" id="chapters" v-model="config.numChapters" min="3" max="15" placeholder="Must be between 3 and 15" required>
          </div>
  
          <div class="form-group mb-4 col-6 mx-auto">
            <label for="choices">Number of Choices:</label>
            <input type="number" class="form-control" id="choices" v-model="config.numChoices" min="2" max="5" placeholder="Must be between 2 and 5" required>
          </div>
  
          <div class="text-center">
            <button type="submit" class="btn btn-primary" id="startbutton">Start</button>
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ConfigurationForm',
    data() {
      return {
        config: {
          name: '',
          gender: '',
          country: '',
          favoriteColor: '',
          favoriteAnimal: '',
          nameAnimal: '',
          season: '',
          numChapters: null,
          numChoices: null,
        },
        errors: {
          numChapters: '',
          numChoices: '',
          favoriteAnimal: '',
    },
      };
    },
    methods: {

      validateNumericInput(field, min, max) {
        const value = this.config[field];
        if (value < min || value > max) {
          this.errors[field] = `Number of ${field} must be between ${min} and ${max}.`;
        } else {
          this.errors[field] = '';
        }
      },
      validateAnimal() {
        const regex = /^[A-Za-z ]+$/;
        if (!regex.test(this.config.favoriteAnimal)) {
          this.errors.favoriteAnimal = 'Favorite animal must only contain letters.';
        } else {
          this.errors.favoriteAnimal = '';
        }
      },
      submitForm() {
        // Call validation methods before submitting
        this.validateNumericInput('numChapters', 3, 15);
        this.validateNumericInput('numChoices', 2, 5);
        this.validateAnimal();

        // Check if there are any errors before emitting the event
        if (!this.errors.numChapters && !this.errors.numChoices && !this.errors.favoriteAnimal) {
          this.$emit('config-completed', this.config);
        }
      },
    },
  };
  </script>
  
  <style scoped>
  /* Styles for ConfigurationForm */
  .config-form {
    background-color: #f5f5f5; /* Light beige color */
    border-radius: 10px; /* Rounded corners */
    padding: 40px; /* Padding for inside the box */
    margin: auto; /* Center the box horizontally */
    max-width: 800px; /* Set a maximum width for the box */
    max-height: 890px;
  }
  
  #startbutton {
    background-color: limegreen;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  /* Optional: Add hover effect */
  #startbutton:hover {
    background-color: darkgreen;
  }
  
  .form-group {
    margin-bottom: 20px;
  }
  </style>
  