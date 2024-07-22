<template>
  <div class="room-dashboard">
    <h2>{{ room.name }}</h2>
    <div class="row">
      <div class="col-md-4">
        <h4>Sensors</h4>
        <sensor-card v-for="sensor in room.sensors" :key="sensor.id" :sensor="sensor" />
        <h4>Plants</h4>
        <plant-card v-for="plant in room.plants" :key="plant.id" :plant="plant" />
      </div>
      <div class="col-md-8">
        <chart :data="temperatureData" :previousData="previousTemperatureData" title="Temperature Over Time" />
        <chart :data="humidityData" :previousData="previousHumidityData" title="Humidity Over Time" />
        <chart :data="co2Data" :previousData="previousCo2Data" title="CO2 Concentration Over Time" />
        <chart :data="vocData" :previousData="previousVocData" title="VOC Concentration Over Time" />
        <scatter-chart :data="scatterData" title="Temperature vs CO2 Concentration" />
      </div>
    </div>
  </div>
</template>

<script>
import SensorCard from '../components/SensorCard.vue';
import PlantCard from './PlantCardDesc.vue';
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
      scatterData: []
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
    }
  }
};
</script>

<style scoped>
.room-dashboard {
  padding: 20px;
}
</style>