<template>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="plant in plantsData" :key="plant.commonName">
          <PlantCardDesc :plant="plant" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { plantsData } from '../data/plantsData.js';
  import PlantCardDesc from '../components/PlantCardDesc.vue';
  
  const plants = ref(plantsData);
  </script>
  
  <style>
  .container {
    margin-top: 20px;
  }
  </style>

