<template>
  <div>
          <!-- Book picture -->
    <div class="custom-container text-center">
      <img src="@/assets/book1.png" alt="Hintergrund" class="background-image">
    </div>
    <img src="@/assets/Prolog.png" alt="Overlay" class="overlay-image">





    <!-- Buttons container (top right) -->
    <div class="buttons-container">

      <!-- See whole text button -->
      <button class="text-button" @click="showTextConfirmation">
        <div class="see-button">See whole text</div>
      </button>

      <!-- Sound button -->
      <button class="square-button" @click="toggleSound">
        {{ soundButtonText }}
      </button>

      <!-- Exit button -->
      <button class="round-button" @click="showExitConfirmation">
        <div class="x-symbol">X</div>
      </button>

      <!-- Continue button -->
      <button class="text-continue" @click="showContinueConfirmation">Continue</button>

</div>

  


    <!-- Confirmation dialog for continuing -->
    <div v-if="showContinueDialog" class="modal">
        <div class="modal-content">
          <h2>Do you really want to continue?</h2>
          <button type="submit" id="Yes" @click="startStory">Yes</button>
          <button id="No" @click="cancelContinue">No</button>
        </div>
    </div>

    <div class="prologue-box">
        <h2 id="title-page"> {{ prologueTitle }}</h2>
        <p id="prologue-text">{{ truncatedPrologueText }}</p>
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




     <!-- Text box Prolog -->
     <div v-if="showWholeText" class="modal">
      <div class="modal-content">
        <h2><div class="text-box">
          <h2 id="title"> {{ prologueTitle }}</h2>
          <p>{{ prologueText }}</p>
          </div></h2>
        <button class="close" @click="closeText">Close</button>
      </div>
    </div>

  </div>
</template>



<script>
export default {
  name: 'ProloguePage',
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
      showContinueDialog: false,
    };
  },
  computed: {
    soundButtonText() {
      return this.soundButtonActive ? 'Sound on' : 'Sound off';
    },
    prologueText() {
    // Replace placeholders in the prologue text with userConfig data
    return `
      In a realm where ancient mystique and modern marvels intertwine, an epic saga awaits to be told. Here, in the heart of Korea's enchanted lands, a world brimming with magic and mystery beckons. A world where dragons trace majestic arcs across the sky and mythical beings whisper the secrets of the ages.

      In this realm of wonder, two heroes are predestined to unite: [MAIN_NAME], the resplendent phoenix from the soaring cliffs of Pohang, a creature of fire and lore, and Nubzuki, the inquisitive platfish from the tranquil waters of Daejeon, wise and whimsical.

      Their journey, a tapestry of peril and enlightenment, will sweep them through realms where ancient trees murmur forgotten tales, across vast meadows echoing with celestial music, and into vibrant cities where history and future meld in perfect harmony.

      This odyssey, however, is far from a mere escapade; it's a quest of discovery, resilience, and kinship. Through trials and tribulations, [MAIN_NAME] and Nubzuki will delve deep into the heart of Korean culture, encountering its rich traditions, arts, and ancient wisdoms, each step a lesson in unity and strength.

      But lurking in the shadows is a darkness, a force that seeks to unbalance this world of wonder. Our heroes, [MAIN_NAME] and Nubzuki, must stand as one against this burgeoning chaos. In their quest, they will learn that true might blossoms from togetherness and that courage can be found in the most unexpected places.

      So, brace yourselves, dear readers, for an adventure beyond compare. Soar with [MAIN_NAME] into realms uncharted, dive with Nubzuki into the depths of the extraordinary. Together, we will traverse a world where Korean lore comes alive, where each twist and turn is a doorway to the extraordinary.

      Prepare to embark on "The Quest for Harmony in Korea's Enchanted Realms," a narrative pulsating with magic, brimming with lessons, and shimmering with the light of enduring hope.`;
    },
    prologueTitle() {
      return `The Quest for Harmony in Korea's Enchanted Realms`
    },
    truncatedPrologueText() {
      // Legen Sie die maximale Anzahl von Wörtern fest, die angezeigt werden sollen
      const maxWords = 150;

      // Teilen Sie den Text in Wörter auf
      const words = this.prologueText.split(/\s+/);

      // Begrenzen Sie die Anzahl der Wörter und fügen Sie "..." hinzu, wenn der Text abgeschnitten wurde
      const truncatedWords = words.length > maxWords ? words.slice(0, maxWords).join(' ') + '...' : words.join(' ');

      return truncatedWords;
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
    showContinueConfirmation() {
      this.showContinueDialog = true;
    },
    startStory() {
      // Navigate to the next page (ChapterPage.vue)
      this.$emit('start-story');
    },
    cancelContinue() {
      // Close the confirmation dialog
      this.showContinueDialog = false;
    },
  },
};
</script>



<style scoped>


.prologue-box {
  position: absolute; /* Absolute Positionierung relativ zum nächsten positionierten Elternelement */
  top: 140px; /* Anpassen der vertikalen Position des überlagernden Bildes */
  left: 340px; /* Anpassen der horizontalen Position des überlagernden Bildes */
  width: 470px; /* Breite des überlagernden Bildes */
  height: auto; /* Automatische Anpassung der Höhe basierend auf der Breite */
  z-index: 1; 
}
#prologue-title {
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

.text-button {
  position: absolute;
  right: 1020px; /* Add spacing between buttons */
  top: 650px;
  width: 120px;
  height: 50px;
  background-color: rgb(241, 212, 63);
  border: none;
  border-radius: 5px;
  color: darkslategray;
  text-align: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 3;
}

.text-button:hover {
  background-color: rgb(255, 196, 0);
}

.text-continue {
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

.text-continue:hover {
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

