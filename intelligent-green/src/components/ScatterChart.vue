<template>
    <div class="scatter-chart card">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <canvas ref="canvas"></canvas>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { Chart, registerables } from 'chart.js';
  
  // Registriamo tutti i componenti necessari di Chart.js
  Chart.register(...registerables);
  
  export default {
    props: {
      data: Array,
      title: String
    },
    setup(props) {
      const canvas = ref(null);
  
      onMounted(() => {
        const ctx = canvas.value.getContext('2d');
        new Chart(ctx, {
          type: 'scatter',
          data: {
            datasets: [{
              label: 'Current Year',
              data: props.data.map(item => ({
                x: item.co2,
                y: item.temperature
              })),
              backgroundColor: 'rgba(75, 192, 192, 0.5)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              x: {
                title: {
                  display: true,
                  text: 'CO2 Concentration (ppm)'
                }
              },
              y: {
                title: {
                  display: true,
                  text: 'Temperature (°C)'
                },
                beginAtZero: true
              }
            }
          }
        });
      });
  
      return {
        canvas
      };
    }
  }
  </script>
  
  <style scoped>
  .scatter-chart {
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>
  