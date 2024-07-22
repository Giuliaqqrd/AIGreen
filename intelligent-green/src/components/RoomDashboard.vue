<template>
  <div class="room-dashboard">
    <h2>{{ room.name }}</h2>
    <p class="room-description">{{ room.description }}</p>

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

    <!-- Sezione Sensori -->
    <div class="row mb-4">
      <div class="col-md-12">
        <h4>Sensors</h4>
        <div class="row sensor-container">
          <div class="col-md-4 mb-3" v-for="sensor in room.sensors" :key="sensor.id">
            <sensor-card :sensor="sensor" />
          </div>
        </div>
      </div>
    </div>

    <!-- Sezione Piante -->
    <div class="row mb-4">
      <div class="col-md-12">
        <h4>Plants</h4>
        <div class="row plant-container">
          <div class="col-md-4 mb-3" v-for="plant in room.plants" :key="plant.scientificName">
            <plant-card :plant="plant" :waterNeed="getWaterNeed(plant.id)" />
          </div>
        </div>
      </div>
    </div>

    <!-- Sezione Grafici -->
    <div class="row mb-4">
      <div class="col-md-6">
        <chart :data="temperatureData" :previousData="previousTemperatureData" title="Temperature Over Time" />
      </div>
      <div class="col-md-6">
        <chart :data="humidityData" :previousData="previousHumidityData" title="Humidity Over Time" />
      </div>
    </div>
    <div class="row mb-4">
      <div class="col-md-6">
        <chart :data="co2Data" :previousData="previousCo2Data" title="CO2 Concentration Over Time" />
      </div>
      <div class="col-md-6">
        <chart :data="vocData" :previousData="previousVocData" title="VOC Concentration Over Time" />
      </div>
    </div>
    <div class="row">
      <div class="col-md-12">
        <scatter-chart :data="scatterData" title="Temperature vs CO2 Concentration" />
      </div>
    </div>
  </div>
</template>

<script>
import SensorCard from '../components/SensorCard.vue';
import PlantCard from './PlantCard.vue';
import Chart from '../components/Chart.vue';
import ScatterChart from '../components/ScatterChart.vue';

export default {
  props: {
    room: Object
  },
  components: { SensorCard, PlantCard, Chart, ScatterChart },
  data() {
    return {
      temperatureData: [],
      previousTemperatureData: [],
      humidityData: [],
      previousHumidityData: [],
      co2Data: [],
      previousCo2Data: [],
      vocData: [],
      previousVocData: [],
      scatterData: [],
      roomDetails: [
        { title: 'Main Usage', value: this.room.mainUsage },
        { title: 'Area', value: `${this.room.areaInSquareMeters} m²` },
        { title: 'Max Capacity', value: this.room.maxCapacity },
        { title: 'Number of Windows', value: this.room.numberOfWindows },
        { title: 'Building Side', value: this.room.buildingSide },
        { title: 'Air Conditioned', value: this.room.airConditioned ? 'Yes' : 'No' },
        { title: 'Sound Proof', value: this.room.soundProof ? 'Yes' : 'No' }
      ]
    };
  },
  created() {
    this.fetchSensorData();
  },
  methods: {
    fetchSensorData() {
      const mockData = this.getMockData();
      this.temperatureData = mockData.map(d => ({ time: d.time, value: d.temperature }));
      this.previousTemperatureData = this.getPreviousYearData().map(d => ({ time: d.time, value: d.temperature }));
      this.humidityData = mockData.map(d => ({ time: d.time, value: d.humidity }));
      this.previousHumidityData = this.getPreviousYearData().map(d => ({ time: d.time, value: d.humidity }));
      this.co2Data = mockData.map(d => ({ time: d.time, value: d.co2 }));
      this.previousCo2Data = this.getPreviousYearData().map(d => ({ time: d.time, value: d.co2 }));
      this.vocData = mockData.map(d => ({ time: d.time, value: d.voc }));
      this.previousVocData = this.getPreviousYearData().map(d => ({ time: d.time, value: d.voc }));
      this.scatterData = mockData;
    },
    getMockData() {
      const data = [];
      const startDate = new Date('2024-07-01');
      const endDate = new Date('2024-07-31');

      for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
        const temperature = Math.floor(Math.random() * (35 - 18 + 1)) + 18;
        const humidity = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
        const co2 = Math.floor(Math.random() * (1000 - 300 + 1)) + 300;
        const voc = Math.floor(Math.random() * (1000 - 200 + 1)) + 200;
        data.push({
          time: new Date(d).toISOString().split('T')[0],
          temperature: temperature,
          humidity: humidity,
          co2: co2,
          voc: voc
        });
      }

      return data;
    },
    getPreviousYearData() {
      const data = [];
      const startDate = new Date('2023-07-01');
      const endDate = new Date('2023-07-31');

      for (let d = startDate; d <= endDate; d.setDate(d.getDate() + 1)) {
        const temperature = Math.floor(Math.random() * (35 - 18 + 1)) + 18;
        const humidity = Math.floor(Math.random() * (100 - 30 + 1)) + 30;
        const co2 = Math.floor(Math.random() * (1000 - 300 + 1)) + 300;
        const voc = Math.floor(Math.random() * (1000 - 200 + 1)) + 200;
        data.push({
          time: new Date(d).toISOString().split('T')[0],
          temperature: temperature,
          humidity: humidity,
          co2: co2,
          voc: voc
        });
      }

      return data;
    },
    getWaterNeed(plantId) {
      const sensor = this.room.sensors.find(sensor => sensor.type === 'Water Need');
      // Simula la lettura del sensore per una pianta data (logica di esempio)
      return this.room.plants.find(plant => plant.id === plantId).waterNeed;
    }
  }
};
</script>

<style scoped>
.room-dashboard {
  padding: 20px;
}

.sensor-container, .plant-container {
  margin-bottom: 20px;
}

.sensor-container > .col-md-4, .plant-container > .col-md-4 {
  margin-bottom: 10px;
}

.row {
  margin-bottom: 20px;
}

.room-details-container .card {
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.room-details-container .card-body {
  padding: 15px;
}
</style>
