<!-- src/components/RoomCard.vue -->
<template>
  <div class="card">
    <img :src="room.image" class="card-img-top" alt="Room Image">
    <div class="card-body">
      <h5 class="card-title">{{ room.name }}</h5>
      <p class="card-text">{{ room.description }}</p>
      <button class="btn btn-primary" @click="goToDashboard">Dashboard</button>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({
  room: {
    type: Object,
    required: true
  }
})

const router = useRouter()

function goToDashboard() {
  router.push({ name: 'dashboard', params: { id: props.room.id } })
}
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}

.card-img-top {
  width: 100%;
  height: 200px; /* Altezza fissa per le immagini */
  object-fit: cover; /* Adatta l'immagine all'area senza deformare */
}
</style>
