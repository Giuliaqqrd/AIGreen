<template>
  <div>
    <div class="sensor-card card" :class="{ active: sensor.active }" @click="showDetails">
      <div class="card-body">
        <div class="d-flex align-items-center">
          <i class="bi" :class="sensorIcon"></i>
          <h5 class="card-title ms-2">{{ sensor.name }}</h5>
        </div>
        <p class="card-text">Status: {{ sensor.active ? 'Active' : 'Inactive' }}</p>
      </div>
    </div>
    <div v-if="showDetailsModal" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close" @click="closeModal">&times;</span>
        <h4>{{ sensor.name }} Details</h4>
        <p><strong>Status:</strong> {{ sensor.active ? 'Active' : 'Inactive' }}</p>
        <p><strong>Type:</strong> {{ sensor.type || 'N/A' }}</p>
        <p><strong>Location:</strong> {{ sensor.location || 'N/A' }}</p>
        <!-- Add other sensor details here -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sensor: Object
  },
  data() {
    return {
      showDetailsModal: false
    };
  },
  computed: {
    sensorIcon() {
      switch (this.sensor.type) {
        case 'Temperature':
          return 'bi-thermometer';
        case 'Humidity':
          return 'bi-droplet';
        case 'CO2':
          return 'bi-cloud';
        default:
          return 'bi-device-hdd';
      }
    }
  },
  methods: {
    showDetails() {
      this.showDetailsModal = true;
    },
    closeModal() {
      this.showDetailsModal = false;
    }
  }
}
</script>

<style scoped>
.sensor-card {
  margin-bottom: 20px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.sensor-card.active {
  border-color: #007bff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.sensor-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.sensor-card .card-body {
  padding: 15px;
}

.sensor-card .card-title {
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
