<template>
    <div class="analysis" v-if="room">
      <h2>{{ room.name }} - Advanced Analysis</h2>
  
      <!-- Sezione Dettagli Stanza -->
      <div class="row mb-4">
        <div class="col-md-12">
          <h4>Room Details</h4>
          <div class="row room-details-container">
            <div class="col-md-3 mb-3" v-for="(detail, index) in roomDetails" :key="index">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{{ detail.title }}</h5>
                  <p class="card-text">{{ detail.value }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Sezione Piante -->
      <div class="row mb-4">
        <div class="col-md-12">
          <h4>Plants</h4>
          <button class="btn btn-primary mb-3" @click="addPlant">+ Add Plant</button>
          <div class="row plant-container">
            <div class="col-md-3 mb-3" v-for="plant in room.plants" :key="plant.scientificName">
              <div class="card">
                <img :src="plant.imageUrl" class="card-img-top" alt="Plant image">
                <div class="card-body">
                  <h5 class="card-title">{{ plant.commonName }}</h5>
                  <p class="card-text">{{ plant.scientificName }}</p>
                  <button class="btn btn-danger" @click="removePlant(plant)">🗑️ Remove</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Sezione Sensori -->
      <div class="row mb-4">
        <div class="col-md-12">
          <h4>Sensors</h4>
          <button class="btn btn-primary mb-3" @click="addSensor">+ Add Sensor</button>
          <div class="row sensor-container">
            <div class="col-md-3 mb-3" v-for="sensor in room.sensors" :key="sensor.id">
              <div class="card">
                <div class="card-body">
                  <h5 class="card-title">{{ sensor.name }}</h5>
                  <p class="card-text">{{ sensor.description }}</p>
                  <p class="card-text">Location: {{ sensor.location }}</p>
                  <p class="card-text">Type: {{ sensor.type }}</p>
                  <button class="btn btn-warning" :disabled="!sensor.active" @click="toggleSensor(sensor)">
                    {{ sensor.active ? 'Disable' : 'Disabled' }}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        room: null // Inizializzato a null
      };
    },
    computed: {
      roomDetails() {
        return this.room ? [
          { title: 'Max Capacity', value: this.room.maxCapacity },
          { title: 'Number of Windows', value: this.room.numberOfWindows },
          { title: 'Area (sq meters)', value: this.room.areaInSquareMeters },
          { title: 'Building Side', value: this.room.buildingSide },
          { title: 'Main Usage', value: this.room.mainUsage },
          { title: 'Air Conditioned', value: this.room.airConditioned ? 'Yes' : 'No' },
          { title: 'Sound Proof', value: this.room.soundProof ? 'Yes' : 'No' }
        ] : [];
      }
    },
    created() {
      const roomId = parseInt(this.$route.params.roomId, 10);
      this.loadRoomData(roomId);
    },
    methods: {
      loadRoomData(roomId) {
        // Simula il recupero dei dati della stanza
        const rooms = [
          // ... dati delle stanze come mostrato in precedenza
        ];
  
        this.room = rooms.find(room => room.id === roomId) || null;
      },
      addPlant() {
        // Logica per aggiungere una pianta
      },
      removePlant(plant) {
        if (this.room) {
          this.room.plants = this.room.plants.filter(p => p !== plant);
        }
      },
      addSensor() {
        // Logica per aggiungere un sensore
      },
      toggleSensor(sensor) {
        if (this.room) {
          sensor.active = !sensor.active;
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .analysis {
    padding: 20px;
  }
  .card {
    margin-bottom: 15px;
  }
  </style>
  