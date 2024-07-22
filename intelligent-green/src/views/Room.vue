<template>
    <div class="room">
      <room-dashboard />
    </div>
  </template>
  
  <script>
  import RoomDashboard from '../components/RoomDashboard.vue';
  
  export default {
    components: { RoomDashboard }
  }
  </script>
  
  <style scoped>
  .room {
    padding: 20px;
  }
  </style>
  