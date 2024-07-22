<template>
    <div class="chart card">
      <div class="card-body">
        <h5 class="card-title">{{ title }}</h5>
        <canvas ref="canvas"></canvas>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { Chart, registerables } from 'chart.js';
  import 'chartjs-adapter-date-fns';
  
  // Registra tutte le componenti necessarie di Chart.js
  Chart.register(...registerables);
  
  export default {
    props: {
      data: Array,
      previousData: Array,
      title: String
    },
    setup(props) {
      const canvas = ref(null);
  
      onMounted(() => {
        const ctx = canvas.value.getContext('2d');
        new Chart(ctx, {
          type: 'line',
          data: {
            labels: props.data.map(item => item.time),
            datasets: [
              {
                label: 'Current Year',
                data: props.data.map(item => item.value),
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
              },
              {
                label: 'Previous Year',
                data: props.previousData.map(item => item.value),
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                fill: false
              }
            ]
          },
          options: {
            scales: {
              x: {
                type: 'time',
                time: {
                  unit: 'day'
                }
              },
              y: {
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
  .chart {
    margin-bottom: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  </style>
  