<template>
  <div>
    <div class="plant-card card" @click="showDetails">
      <div class="card-body">
        <div class="d-flex align-items-center">
          <img :src="plant.imageUrl" alt="Plant Image" class="plant-image" />
          <div class="ms-3">
            <h5 class="card-title">{{ plant.commonName }}</h5>
            <p class="card-text">{{ plant.scientificName }}</p>
          </div>
        </div>
      </div>
    </div>
    <div v-if="showDetailsModal" class="modal" @click="closeModal">
      <div class="modal-content" @click.stop>
        <span class="close" @click="closeModal">&times;</span>
        <h4>{{ plant.commonName }} Details</h4>
        <p><strong>Scientific Name:</strong> {{ plant.scientificName }}</p>
        <p><strong>CO2 Absorption (Average per Month):</strong> {{ plant.co2Absorption.averagePerMonth }}</p>
        <p><strong>VOC Absorption (Average per Month):</strong> {{ plant.vocAbsorption.averagePerMonth }}</p>
        <p><strong>Dust Capture (Average per Month):</strong> {{ plant.dustCapture.averagePerMonth }}</p>
        <p><strong>Leaf Type:</strong> {{ plant.leafType }}</p>
        <p><strong>Leaf Colors:</strong> {{ plant.leafColors }}</p>
        <p><strong>Lifespan:</strong> {{ plant.lifespan }}</p>
        <p><strong>Sunlight Requirements:</strong> {{ plant.care.sunlight }}</p>
        <p><strong>Watering Needs:</strong> {{ plant.care.water }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    plant: Object
  },
  data() {
    return {
      showDetailsModal: false
    };
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
.plant-card {
  margin-bottom: 20px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
}

.plant-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

.plant-card .card-body {
  padding: 15px;
  display: flex;
  flex-direction: column;
}

.plant-card .plant-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 50%;
}

.plant-card .card-title {
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
