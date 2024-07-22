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
  const sections = [
    {
      title: 'Analisi dei Dati sulle Piante',
      text: 'La nostra web app offre strumenti avanzati per analizzare i dati sulle piante, aiutandoti a monitorare la crescita, la salute e altri parametri cruciali.',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Monitoraggio in Tempo Reale',
      text: 'Grazie alla nostra tecnologia di monitoraggio in tempo reale, puoi ricevere aggiornamenti costanti sulle condizioni delle tue piante ovunque tu sia.',
      image: 'https://via.placeholder.com/300x200'
    },
    {
      title: 'Report Dettagliati',
      text: 'Ottieni report dettagliati e personalizzati che ti forniscono una panoramica completa delle performance delle tue piante.',
      image: 'https://via.placeholder.com/300x200'
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
  