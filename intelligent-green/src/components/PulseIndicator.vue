<template>
    <div class="d-flex align-items-center">
      <div class="pulse-circle"></div>
      <span class="ms-3 fs-4">{{ number }}</span>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        number: 0,
      };
    },
    created() {
      this.updateNumber();
      setInterval(this.updateNumber, 15000); // Aggiorna il numero ogni 15 secondi
    },
    methods: {
      updateNumber() {
        this.number = Math.floor(Math.random() * 31); // Numero casuale tra 0 e 30
      },
    },
  };
  </script>
  
  <style scoped>
  .pulse-circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: green;
    animation: pulse 1.5s infinite;
  }
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      opacity: 1;
    }
    50% {
      transform: scale(1.5);
      opacity: 0.5;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
  </style>
  