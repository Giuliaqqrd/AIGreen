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
  .plant-card {
    margin-bottom: 20px;
    background-color: #ffffff;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
    cursor: pointer;
  }
  
  .plant-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .plant-card .card-body {
    padding: 15px;
    display: flex;
    flex-direction: column;
  }
  
  .plant-card .plant-image {
    width: 60px;
    height: 60px;
    object-fit: cover;
    border-radius: 50%;
  }
  
  .plant-card .card-title {
    margin-bottom: 0;
  }
  
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000; /* Ensure the modal is above other elements */
  }
  
  .modal-content {
    background-color: #ffffff;
    padding: 20px;
    border-radius: 8px;
    width: 80%;
    max-width: 400px;
    position: relative;
  }
  
  .modal .close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 24px;
    cursor: pointer;
    color: #666;
  }
  </style>
  