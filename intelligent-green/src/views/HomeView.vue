<!-- src/components/YourComponent.vue -->
<script setup>
import Carousel from '@/components/Carousel.vue';
import DescriptionComponent from '@/components/DescriptionComponent.vue';
</script>

<template>
  <main>
    <Carousel></Carousel>
    <DescriptionComponent class="custom-spacing" />
  </main>
</template>

<style scoped>
.custom-spacing {
  margin: 20px; /* Spazio di 20px intorno a tutto il componente */
}
</style>
