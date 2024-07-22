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
    maxCapacity: 35, 
    numberOfWindows: 4,
    areaInSquareMeters: 35,
    buildingSide: 'North',
    mainUsage: 'Meetings',
    airConditioned: true,
    soundProof: false,
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
      },
      { 
        id: 4, 
        name: 'PIR Motion Sensor', 
        active: true, 
        description: 'Detects the presence of people in the room.',
        location: 'Ceiling',
        type: 'Occupation',
        manufacturer: 'Bosch'
      }
    ],
    plants: [
      { 
        commonName: 'Money plant',
        scientificName: 'Epipremnum aureum',
        imageUrl: '/src/components/images/epipremnum.jpg',
        co2Absorption: { averagePerMonth: '15 g' },
        vocAbsorption: { averagePerMonth: '7 g' },
        dustCapture: { averagePerMonth: '20 g' },
        leafType: 'Broad',
        leafColors: 'Green',
        lifespan: '5-10 years',
        care: { sunlight: 'Indirect sunlight', water: 'Water once a week' }
      },
      { 
        commonName: 'Dracaena',
        scientificName: 'Dracaena fragrans',
        imageUrl: '/src/components/images/dracaena.webp',
        co2Absorption: { averagePerMonth: '12 g' },
        vocAbsorption: { averagePerMonth: '9 g' },
        dustCapture: { averagePerMonth: '15 g' },
        leafType: 'Narrow',
        leafColors: 'Green with yellow stripes',
        lifespan: '10-15 years',
        care: { sunlight: 'Low to bright indirect light', water: 'Water every 2 weeks' }
      },
      { 
        commonName: 'Syngonium',
        scientificName: 'Syngonium podophyllum',
        imageUrl: '/src/components/images/sygoniumpoll.webp',
        co2Absorption: { averagePerMonth: '14 g' },
        vocAbsorption: { averagePerMonth: '8 g' },
        dustCapture: { averagePerMonth: '18 g' },
        leafType: 'Broad',
        leafColors: 'Green and white',
        lifespan: '5-10 years',
        care: { sunlight: 'Bright indirect light', water: 'Water once a week' }
      }
    ]
  },
  { 
    id: 2, 
    name: 'Computer Lab',
    maxCapacity: 40, 
    numberOfWindows: 2,
    areaInSquareMeters: 50,
    buildingSide: 'East',
    mainUsage: 'Computer training and work',
    airConditioned: true,
    soundProof: true,
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
      },
      { 
        id: 4, 
        name: 'PIR Motion Sensor', 
        active: true, 
        description: 'Detects the presence of people in the room.',
        location: 'Ceiling',
        type: 'Occupation',
        manufacturer: 'Bosch'
      }
    ],
    plants: [
      { 
        commonName: 'Snake plant',
        scientificName: 'Dracaena trifasciata',
        imageUrl: '/src/components/images/dracaenatrifasciata.jpg',
        co2Absorption: { averagePerMonth: '18 g' },
        vocAbsorption: { averagePerMonth: '10 g' },
        dustCapture: { averagePerMonth: '22 g' },
        leafType: 'Narrow',
        leafColors: 'Green with yellow edges',
        lifespan: '5-25 years',
        care: { sunlight: 'Low to bright indirect light', water: 'Water every 2-3 weeks' }
      },
      { 
        commonName: 'Sansevieria',
        scientificName: 'Sansevieria trifasciata',
        imageUrl: '/src/components/images/Sansevieriatrifasciata.jpg',
        co2Absorption: { averagePerMonth: '18 g' },
        vocAbsorption: { averagePerMonth: '10 g' },
        dustCapture: { averagePerMonth: '22 g' },
        leafType: 'Narrow',
        leafColors: 'Green with yellow edges',
        lifespan: '5-25 years',
        care: { sunlight: 'Low to bright indirect light', water: 'Water every 2-3 weeks' }
      },
      { 
        commonName: 'Bamboo plant',
        scientificName: 'Bambusa vulgaris',
        imageUrl: '/src/components/images/bamboo.webp',
        co2Absorption: { averagePerMonth: '20 g' },
        vocAbsorption: { averagePerMonth: '12 g' },
        dustCapture: { averagePerMonth: '25 g' },
        leafType: 'Narrow',
        leafColors: 'Green',
        lifespan: '5-10 years',
        care: { sunlight: 'Full sun to partial shade', water: 'Keep soil moist' }
      },
      { 
        commonName: 'Aglonema',
        scientificName: 'Aglaonema commutatum',
        imageUrl: '/src/components/images/aglaonema.jpg',
        co2Absorption: { averagePerMonth: '16 g' },
        vocAbsorption: { averagePerMonth: '9 g' },
        dustCapture: { averagePerMonth: '19 g' },
        leafType: 'Broad',
        leafColors: 'Green with silver markings',
        lifespan: '5-15 years',
        care: { sunlight: 'Low to bright indirect light', water: 'Water every 1-2 weeks' }
      }
    ]
  },
  { 
    id: 3, 
    name: 'Office A3',
    maxCapacity: 50, 
    numberOfWindows: 3,
    areaInSquareMeters: 25,
    buildingSide: 'South',
    mainUsage: 'Work office',
    airConditioned: false,
    soundProof: true,
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
      },
      { 
        id: 4, 
        name: 'PIR Motion Sensor', 
        active: true, 
        description: 'Detects the presence of people in the room.',
        location: 'Ceiling',
        type: 'Occupation',
        manufacturer: 'Bosch'
      }
    ],
    plants: [
      { 
        commonName: 'Aglonema',
        scientificName: 'Aglaonema commutatum',
        imageUrl: '/src/components/images/aglaonema.jpg',
        co2Absorption: { averagePerMonth: '16 g' },
        vocAbsorption: { averagePerMonth: '9 g' },
        dustCapture: { averagePerMonth: '19 g' },
        leafType: 'Broad',
        leafColors: 'Green with silver markings',
        lifespan: '5-15 years',
        care: { sunlight: 'Low to bright indirect light', water: 'Water every 1-2 weeks' }
      },
      { 
        commonName: 'Money plant',
        scientificName: 'Epipremnum aureum',
        imageUrl: '/src/components/images/epipremnum.jpg',
        co2Absorption: { averagePerMonth: '15 g' },
        vocAbsorption: { averagePerMonth: '7 g' },
        dustCapture: { averagePerMonth: '20 g' },
        leafType: 'Broad',
        leafColors: 'Green',
        lifespan: '5-10 years',
        care: { sunlight: 'Indirect sunlight', water: 'Water once a week' }
      },
      { 
        commonName: 'Dracaena',
        scientificName: 'Dracaena fragrans',
        imageUrl: '/src/components/images/dracaena.webp',
        co2Absorption: { averagePerMonth: '12 g' },
        vocAbsorption: { averagePerMonth: '9 g' },
        dustCapture: { averagePerMonth: '15 g' },
        leafType: 'Narrow',
        leafColors: 'Green with yellow stripes',
        lifespan: '10-15 years',
        care: { sunlight: 'Low to bright indirect light', water: 'Water every 2 weeks' }
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