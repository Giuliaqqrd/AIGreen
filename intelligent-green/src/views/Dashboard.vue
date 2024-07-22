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
          { 
            id: 1, 
            name: 'DHT22 Temperature Sensor', 
            active: false, 
            description: 'Measures the temperature of the room.',
            location: 'Ceiling',
            type: 'Temperature',
            manufacturer: 'Adafruit'
          },
          { 
            id: 2, 
            name: 'HS1101LF Humidity Sensor', 
            active: true, 
            description: 'Monitors the humidity levels.',
            location: 'Wall',
            type: 'Humidity',
            manufacturer: 'Honeywell'
          },
          { 
            id: 3, 
            name: 'CO2Meter RAD-0301', 
            active: true, 
            description: 'Detects the concentration of carbon dioxide.',
            location: 'Corner',
            type: 'CO2',
            manufacturer: 'CO2Meter'
          }
        ],
        plants: [] 
      },
      { 
        id: 2, 
        name: 'Computer Lab', 
        sensors: [
          { 
            id: 1, 
            name: 'DHT22 Temperature Sensor', 
            active: false, 
            description: 'Measures the temperature of the room.',
            location: 'Ceiling',
            type: 'Temperature',
            manufacturer: 'Adafruit'
          },
          { 
            id: 2, 
            name: 'HS1101LF Humidity Sensor', 
            active: true, 
            description: 'Monitors the humidity levels.',
            location: 'Wall',
            type: 'Humidity',
            manufacturer: 'Honeywell'
          },
          { 
            id: 3, 
            name: 'CO2Meter RAD-0301', 
            active: true, 
            description: 'Detects the concentration of carbon dioxide.',
            location: 'Corner',
            type: 'CO2',
            manufacturer: 'CO2Meter'
          }
        ], 
        plants: [] 
      },
      { 
        id: 3, 
        name: 'Office A3', 
        sensors: [
          { 
            id: 1, 
            name: 'DHT22 Temperature Sensor', 
            active: false, 
            description: 'Measures the temperature of the room.',
            location: 'Ceiling',
            type: 'Temperature',
            manufacturer: 'Adafruit'
          },
          { 
            id: 2, 
            name: 'HS1101LF Humidity Sensor', 
            active: true, 
            description: 'Monitors the humidity levels.',
            location: 'Wall',
            type: 'Humidity',
            manufacturer: 'Honeywell'
          },
          { 
            id: 3, 
            name: 'CO2Meter RAD-0301', 
            active: true, 
            description: 'Detects the concentration of carbon dioxide.',
            location: 'Corner',
            type: 'CO2',
            manufacturer: 'CO2Meter'
          }
        ], 
        plants: [
          { 
            id: 1, 
            name: 'Fern', 
            description: 'ciao' 
          },
          { 
            id: 2, 
            name: 'Bamboo', 
            description: 'ciao' 
          }
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