<!-- src/components/YourComponent.vue -->
<script setup>
import DescriptionComponent from '@/components/DescriptionComponent.vue';
</script>

<template>
  <main>
    <DescriptionComponent class="custom-spacing" />
  </main>
</template>

<style scoped>
.custom-spacing {
  margin: 20px; /* Spazio di 20px intorno a tutto il componente */
}
</style>
