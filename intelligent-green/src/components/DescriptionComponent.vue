<template>
    <div class="description-container">
      <div 
        class="description-section" 
        v-for="(section, index) in sections" 
        :key="index" 
        :class="{'reverse-layout': index % 2 !== 0}"
      >
        <div class="description-text-container">
          <h2 class="description-title">{{ section.title }}</h2>
          <p class="description-text">{{ section.text }}</p>
        </div>
        <div class="description-image-container">
          <img :src="section.image" alt="Description Image" class="description-image">
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import img4 from "@/components/images/img4.webp"
  import img3 from "@/components/images/img3.webp"
  import img6  from "@/components/images/img6.jpeg"
  const sections = [
    {
      title: 'Data Analysis',
      text: 'Our web app provides advanced tools for analyzing the distinctive characteristics of each plant species, helping you monitor growth, health, and other crucial parameters. These characteristics are essential for identifying the role of each plant in its living environment, allowing for better understanding and management of plant interactions and ecosystems.',
      image: img3
    },
    {
      title: 'Real time monitoring',
      text: 'Real-time monitoring allows us to collect data from environmental sensors and understand how each plant interacts within its context. This continuous data collection helps to gain insights into the plant’s behavior and response to varying environmental conditions.',
      image: img4
    },
    {
      title: 'Detailed Report',
      text: 'Our system generates detailed and highly customized reports that offer a thorough and comprehensive overview of the performance across each room and all the factors analyzed. These reports include in-depth analysis of various metrics, trends, and patterns observed in the data, providing valuable insights into the environmental conditions and their impact on plant health and growth. This allows you to make informed decisions based on a complete picture of the performance and conditions of your plants.',
      image: img6
    }
  ];
  </script>
  
  <style scoped>
  .description-container {
    display: flex;
    flex-direction: column;
    gap: 2rem;
    font-family: 'Poppins', sans-serif;
    color: #333333; /* Grigio scuro */
  }
  
  .description-section {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1rem;
    text-align: left;
  }
  
  .reverse-layout {
    flex-direction: row-reverse;
  }
  
  .description-text-container {
    flex: 1;
  }
  
  .description-title {
    color: #28a745; /* Verde */
    margin-bottom: 1rem;
  }
  
  .description-text {
    margin-bottom: 1rem;
  }
  
  .description-image-container {
    flex-shrink: 0;
  }
  
  .description-image {
    width: 300px;
    height: 200px;
    object-fit: cover;
  }
  </style>
  