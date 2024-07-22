<template>
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="plant in plantsData" :key="plant.commonName">
          <PlantCard :plant="plant" />
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import PlantCard from '../components/PlantCard.vue';
  import { plantsData } from '../data/plantsData.js';
  
  const plants = ref(plantsData);
  </script>
  
  <style>
  .container {
    margin-top: 20px;
  }
  </style>

