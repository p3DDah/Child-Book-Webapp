<template>
    <div class="welcome-page">
      <h1 id="page-title">Welcome to PaG</h1>
      <p id="language-prompt">In which language do you want to continue?</p>
      <select id="language-select" v-model="selectedLanguage">
        <option v-for="language in languages" :key="language" :value="language">{{ language }}</option>
      </select>
      <button id="continue-button" @click="confirmLanguage">Continue</button>
      <div class="overlay"></div>
    </div> 
</template>
  
<script>
  export default {
    name: 'WelcomePage',
    data() {
      return {
        selectedLanguage: 'English',
        languages:  ['Afrikaans', 'Albanian', 'Amharic', 'Arabic', 'Armenian', 'Azerbaijani',
        'Basque', 'Belarusian', 'Bengali', 'Bosnian', 'Bulgarian', 'Catalan',
        'Cebuano', 'Chinese', 'Corsican', 'Croatian', 'Czech', 'Danish',
        'Dutch', 'English', 'Esperanto', 'Estonian', 'Finnish', 'French',
        'Frisian', 'Galician', 'Georgian', 'German', 'Greek', 'Gujarati',
        'Haitian Creole', 'Hausa', 'Hawaiian', 'Hebrew', 'Hindi', 'Hmong',
        'Hungarian', 'Icelandic', 'Igbo', 'Indonesian', 'Irish', 'Italian',
        'Japanese', 'Javanese', 'Kannada', 'Kazakh', 'Khmer', 'Kinyarwanda',
        'Korean', 'Kurdish', 'Kyrgyz', 'Lao', 'Latvian', 'Lithuanian',
        'Luxembourgish', 'Macedonian', 'Malagasy', 'Malay', 'Malayalam',
        'Maltese', 'Maori', 'Marathi', 'Mongolian', 'Myanmar [Burma]', 'Nepali',
        'Norwegian', 'Pashto', 'Persian', 'Polish', 'Portuguese', 'Punjabi',
        'Romanian', 'Russian', 'Samoan', 'Scots Gaelic', 'Serbian', 'Shona',
        'Sindhi', 'Sinhala', 'Slovak', 'Slovenian', 'Somali', 'Spanish',
        'Sundanese', 'Swahili', 'Swedish', 'Tajik', 'Tamil', 'Tatar', 'Telugu',
        'Thai', 'Turkish', 'Turkmen', 'Ukrainian', 'Urdu', 'Uzbek', 'Vietnamese',
        'Welsh', 'Xhosa', 'Yiddish', 'Yoruba', 'Zulu']
      };
    },
    methods: {
      confirmLanguage() {
        this.$emit('language-selected', this.selectedLanguage);
      }
    }
  };
</script>
  
<style scoped>
/* Styles for WelcomePage */
.welcome-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

#page-title {
  font-size: 2em;
  color: #555;
}

#language-prompt {
  margin-top: 10px;
  color: #555;
}

.select-container {
  margin-top: 15px;
}

#language-select {
  width: 10%; /* Make the select box 100% width */
  padding: 12px;
  font-size: 1em;
  border: 2px solid #ccc;
  border-radius: 8px;
  /*appearance: none;  Remove default arrow on macOS */
  background-color: #fff;
  cursor: pointer;
  outline: none;
}

#continue-button {
  margin-top: 20px;
  padding: 10px 20px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1.2em;
}

#continue-button:hover {
  background-color: #45a049;
}

.overlay {
  position: absolute;
  top: 100;
  left: 0;
  width: 100%;
  height: 40%;
  background-color: rgba(255, 255, 255, 0.7); /* Semi-transparent white background */
  z-index: -1; /* Behind other content */
}


</style>
