<template>
  <div>
          <!-- Book picture -->
    <div class="custom-container text-center">
      <img src="@/assets/book1.png" alt="Hintergrund" class="background-image">
    </div>

  
    <!-- Buttons container (top right) -->
    <div class="buttons-container">

        <!-- CHOICE buttons -->
        <button class="choice-1" @click="showTextConfirmation">
          <div class="see-button"> A: {{ choice1 }} </div>
        </button>

        <button class="choice-2" @click="showTextConfirmation">
          <div class="see-button">B: {{ choice2 }} </div>
        </button>

        <button class="choice-3" @click="showTextConfirmation">
          <div class="see-button">C:{{ choice3 }} </div>
        </button>

        <button class="choice-4" @click="showTextConfirmation">
          <div class="see-button">D:{{ choice3 }} </div>
        </button>
   
        <!-- Sound button -->
        <button class="square-button" @click="toggleSound">
          {{ soundButtonText }}
        </button>

        <!-- Exit button -->
        <button class="round-button" @click="showExitConfirmation">
          <div class="x-symbol">X</div>
        </button>

        <!-- Back button -->
        <button class="text-back" @click="showBackConfirmation">Go back</button>
    </div>



      <div v-if="showLoadingModal" class="modal">
      <div class="modal-content">
        <h2>Loading...</h2>
        <!-- You can add a spinner or any loading animation here -->
      </div>
    </div>


    <!-- Confirmation dialog for going back -->
    <div v-if="showBackDialog" class="modal">
        <div class="modal-content">
          <h2>Do you really want to go back?</h2>
          <button type="submit" id="Yes" @click="goBacktoLastPage">Yes</button>
          <button id="No" @click="cancelBack">No</button>
        </div>
      </div>

    <div class="chapter-box">
        <h2 id="title-page"> {{ chapterTitle }}</h2>
        <p id="chapter-text">{{ truncatedChapterText }}</p>
      </div>



    <!-- Sound settings modal -->
    <div v-if="soundSettingsModalOpen" class="modal">
      <div class="modal-content">
        <button class="close" @click="closeSoundSettingsModal">&times;</button>
        <h2>Sound Settings</h2>
        <!-- Add your sound settings options here -->
      </div>
    </div>



    <!-- Confirmation dialog for exiting -->
    <div v-if="showConfirmationDialog" class="modal">
      <div class="modal-content">
        <h2>Are you sure you want to leave?</h2>
        <button id="yes" @click="confirmExit">Yes</button>
        <button id="no" @click="cancelExit">No</button>
      </div>
    </div>




     <!-- Text box Chapter -->
     <div v-if="showWholeText" class="modal">
      <div class="modal-content">
        <h2>Are you sure about this choice?</h2>
        <p>You have selected: {{ }}</p>
        <button class="open" @click="confirmChoice">Yes</button>
        <button class="close" @click="closeText">No</button>
      </div>
    </div>


</div>



</template>

<script>
export default {
  name: 'ChapterPage',
  props: {
  userConfig: Object
  },
  data() {
    return {
      selectedOption: 'Open',
      soundButtonActive: true,
      soundSettingsModalOpen: false,
      showConfirmationDialog: false,
      showWholeText: false,
      showBackDialog: false, // Initialisieren Sie die Variable hier
      showLoadingModal: false,
    };
  },
  computed: {
    soundButtonText() {
      return this.soundButtonActive ? 'Sound on' : 'Sound off';
    },
    chapterText() {
      return `hello`
    },
    chapterTitle() {
      return `hello`
    },
    truncatedChapterText() {
      const maxWords = 150;

      // Teilen Sie den Text in Wörter auf
      const words = this.chapterText.split(/\s+/);

      // Begrenzen Sie die Anzahl der Wörter und fügen Sie "..." hinzu, wenn der Text abgeschnitten wurde
      const truncatedWords = words.length > maxWords ? words.slice(0, maxWords).join(' ') + '...' : words.join(' ');

      return truncatedWords;
    },
    choice1() {
      return ``
    },
    choice2() {
      return ``
    },
    choice3() {
      return ``
    },
    choice4() {
      return ``
    },
  },
  methods: {
    toggleSound() {
      this.soundButtonActive = !this.soundButtonActive;
    },
    showExitConfirmation() {
      this.showConfirmationDialog = true;
    },
    confirmExit() {
      this.showConfirmationDialog = false;
      this.$router.push({ name: 'WelcomePage' }); // Assuming you have a route named 'LanguagePage'
    },
    cancelExit() {
      this.showConfirmationDialog = false;
    },
    closeSoundSettingsModal() {
      this.soundSettingsModalOpen = false;
    },
    showTextConfirmation() {
      this.showWholeText = true;
    },
    closeText() {
      this.showWholeText = false;
    },
    toggleOption(option) {
      this.selectedOption = option;
    },
    showBackConfirmation () {
      this.showBackDialog = true; 
    },
    cancelBack() {
      // Close the confirmation dialog
      this.showBackDialog = false;
    },
    goBacktoLastPage() {
      // Navigate to the next page (ChapterPage.vue)
      this.$emit('start-prologue');;
    },
    confirmChoice() {
      this.showWholeText = false;
      this.showLoadingModal = true;
      setTimeout(() => {
        this.showLoadingModal = false;
        // Redirect to the next page, you might need to pass the selected choice or handle it accordingly
        ; // Replace 'NextPage' with the actual route name
        this.$emit('start-prologue')}, 30000); // 30 seconds delay
    },
  },
}

</script>


<style scoped>


.chapter-box {
  position: absolute; /* Absolute Positionierung relativ zum nächsten positionierten Elternelement */
  top: 140px; /* Anpassen der vertikalen Position des überlagernden Bildes */
  left: 340px; /* Anpassen der horizontalen Position des überlagernden Bildes */
  width: 470px; /* Breite des überlagernden Bildes */
  height: auto; /* Automatische Anpassung der Höhe basierend auf der Breite */
  z-index: 1; 
}
#chapter-title {
  margin-top: 10px;
}
.overlay-image {
  position: absolute; /* Absolute Positionierung relativ zum nächsten positionierten Elternelement */
  top: 150px; /* Anpassen der vertikalen Position des überlagernden Bildes */
  right: 320px; /* Anpassen der horizontalen Position des überlagernden Bildes */
  width: 470px; /* Breite des überlagernden Bildes */
  height: auto; /* Automatische Anpassung der Höhe basierend auf der Breite */
  z-index: 1; /* Z-Index steuert die Schichtung der Elemente - das überlagernde Bild wird über dem Hintergrundbild platziert */
}

.custom-container {
display: flex;
align-items: center;
justify-content: center;
height: 100vh;
}

/* Buttons container styles (top right) */
.buttons-container {
  position: fixed;
  top: 20px;
  right: 20px;
  display: flex;
  align-items: center;
}

/* Sound button styles */
.square-button {
  margin-right: 10px; /* Add spacing between buttons */
  width: 120px;
  height: 50px;
  background-color: lightblue;
  border: none;
  border-radius: 5px;
  color: white;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.square-button:hover {
background-color: darkblue; /* Change color on hover */
}
/* Close button styles */
.round-button {
  width: 50px;
  height: 50px;
  background-color: lightgrey;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
}

.round-button:hover {
background-color: grey; /* Change color on hover */
}

/* X symbol styles */
.x-symbol {
  color: red;
  font-size: 20px;
  font-weight: bold;
}

.choice-1 {
  position: absolute;
  right: 880px; /* Add spacing between buttons */
  top: 460px;
  width: 420px;
  height: 50px;
  border: none;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
  background-color: rgb(194, 192, 192);
  color: darkslategray;
}

.choice-1:hover {
  background-color: limegreen;
}
.choice-2 {
  position: absolute;
  right: 880px; /* Add spacing between buttons */
  top: 540px;
  width: 420px;
  height: 50px;
  border: none;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
  background-color: rgb(194, 192, 192);
  color: darkslategray;
}

.choice-2:hover {
  background-color: limegreen;
}
.choice-3 {
  position: absolute;
  right: 880px; /* Add spacing between buttons */
  top: 620px;
  width: 420px;
  height: 50px;
  border: none;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
  background-color:rgb(194, 192, 192);
  color: darkslategray;
}

.choice-3:hover {
  background-color: limegreen;
}
.choice-4 {
  position: absolute;
  right: 880px; /* Add spacing between buttons */
  top: 700px;
  width: 420px;
  height: 50px;
  border: none;
  border-radius: 5px;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
  background-color: rgb(194, 192, 192);
  color: darkslategray;
}

.choice-4:hover {
  background-color: limegreen;
}

.text-button:hover {
  background-color: rgb(255, 196, 0);
}

.text-back {
  position: absolute;
  right: 450px; /* Add spacing between buttons */
  top: 650px;
  width: 120px;
  height: 50px;
  background-color: limegreen;
  border: none;
  border-radius: 5px;
  color: darkslategray;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 2;
}

.text-back:hover {
    background-color: darkgreen;
  }

#yes {
  width: 120px;
  height: 50px;
  background-color: limegreen;
  border: none;
  border-radius: 5px;
  color: black;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

#no {
  margin-right: 20px;
  margin-top: 20px;
  width: 120px;
  height: 50px;
  background-color: red;
  border: none;
  border-radius: 5px;
  color: black;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

#Yes {
  width: 120px;
  height: 50px;
  background-color: limegreen;
  border: none;
  border-radius: 5px;
  color: black;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

#No {
  margin-right: 20px;
  margin-top: 20px;
  width: 120px;
  height: 50px;
  background-color: red;
  border: none;
  border-radius: 5px;
  color: black;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}
/* Confirmation dialog styles */
.modal {
  display: block;
  position: fixed;
  z-index: 7;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);
  padding: 55px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Optional: Add a box shadow */
}

.modal-content {
  background-color: #fefefe;
  margin: 0% auto;
  padding: 40px;
  width: 45%;
  z-index: 3;
  /* Add more styles for modal content */
}

.close {
  color: black;
  float: right;
  font-size: 28px;
  font-weight: bold;
  transition: color 0.3s; /* Add a smooth color transition */
  width: 120px;
  height: 50px;
  background-color: lightcoral;
  border: none;
  border-radius: 5px;
}

.close:hover,
.close:focus {
  background-color: red;
  color: #333; /* Change color on hover/focus */
  text-decoration: none;
  cursor: pointer;
}

.open {
  color: black;
  float: left;
  align-items: right;
  font-size: 28px;
  font-weight: bold;
  transition: color 0.3s; /* Add a smooth color transition */
  width: 120px;
  height: 50px;
  background-color: turquoise;
  border: none;
  border-radius: 5px;
}

.open:hover,
.open:focus {
  background-color: blue;
  color: #333; /* Change color on hover/focus */
  text-decoration: none;
  cursor: pointer;
}

/* Optional: Add more styles for the text as needed */
.text-box p {
font-size: 16px;
color: #333;
text-align: left;
line-height: 2.0;
}

#title {
padding: 55px;
}


</style>