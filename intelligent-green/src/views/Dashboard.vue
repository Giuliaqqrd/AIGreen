<template>
  <div class="room">
    <room-dashboard v-if="selectedRoom" :room="selectedRoom" />
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import RoomDashboard from '../components/RoomDashboard.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  components: { RoomDashboard },
  setup() {
    const route = useRoute();
    const selectedRoom = ref(null);

    const rooms = [
      { 
        id: 1, 
        name: 'Reunion Room', 
        sensors: [
          { id: 1, name: 'Temperature Sensor', active: false },
          { id: 2, name: 'Humidity Sensor', active: true },
        ],
        plants: [] 
      },
      { 
        id: 2, 
        name: 'Computer Lab', 
        sensors: [
          { id: 1, name: 'Temperature Sensor', active: false },
          { id: 2, name: 'Humidity Sensor', active: true },
        ], 
        plants: [] 
      },
      { 
        id: 3, 
        name: 'Office A3', 
        sensors: [
          { id: 1, name: 'Temperature Sensor', active: false },
          { id: 2, name: 'Humidity Sensor', active: true },
        ], 
        plants: [
          { id: 1, name: 'Fern', description: 'ciao' },
          { id: 2, name: 'Bamboo', description: 'ciao' },
        ] 
      }
    ];

    onMounted(() => {
      const roomId = parseInt(route.params.id);
      selectedRoom.value = rooms.find(room => room.id === roomId);
    });

    return { selectedRoom };
  }
};
</script>

<style scoped>
.room {
  padding: 20px;
}
</style>
