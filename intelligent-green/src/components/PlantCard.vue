<template>
    <div class="card mb-4">
      <img :src="plant.imageUrl" class="card-img-top" :alt="plant.commonName">
      <div class="card-body">
        <h5 class="card-title">{{ plant.commonName }}</h5>
        <p class="card-text"><em>{{ plant.scientificName }}</em></p>
        <ul class="list-group list-group-flush">
          <li class="list-group-item"><strong>CO2 Absorption (avg per month):</strong> {{ plant.co2Absorption.averagePerMonth }}</li>
          <li class="list-group-item"><strong>VOC Absorption (avg per month):</strong> {{ plant.vocAbsorption.averagePerMonth }}</li>
          <li class="list-group-item"><strong>Dust Capture (avg per month):</strong> {{ plant.dustCapture.averagePerMonth }}</li>
          <li class="list-group-item"><strong>Leaf Type:</strong> {{ plant.leafType }}</li>
          <li class="list-group-item"><strong>Leaf Colors:</strong> {{ plant.leafColors }}</li>
          <li class="list-group-item"><strong>Lifespan:</strong> {{ plant.lifespan }}</li>
          <li class="list-group-item"><strong>Sunlight:</strong> {{ plant.care.sunlight }}</li>
          <li class="list-group-item"><strong>Water:</strong> {{ plant.care.water }}</li>
        </ul>
      </div>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  
  const props = defineProps({
    plant: {
      type: Object,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  .card {
    margin-bottom: 20px;
  }
  </style>
  