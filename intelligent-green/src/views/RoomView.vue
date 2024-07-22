<template>
    <div class="container">
      <b><h1 class="my-4 brand-text">Registered Rooms</h1></b>
      <div class="row">
        <div class="col-md-4" v-for="room in rooms" :key="room.id">
          <RoomCard :room="room" />
        </div>
      </div>
      <div class="contact-section">
      <h2 class="contact-title">Do you want us to monitor one of your rooms?</h2>
      <p class="contact-description">
        Contact us at: <a href="mailto:AIGreen@gmail.com" class="contact-email">AIGreen@gmail.com</a>
      </p>
    </div>
    </div>
  </template>
  
  <script setup>
  import RoomCard from '@/components/RoomCard.vue'
  import { ref } from 'vue'
  
  import salariunioni from '@/components/images/salariunioni.jpeg'
  import labinfo from '@/components/images/labinfo.jpg'
  import ufficio from '@/components/images/ufficio.jpg'
  // Definisce l'elenco delle stanze come variabile reattiva
  const rooms = ref([
    { id: 1, name: 'Reunion Room', description: 'A spacious conference room designed for departmental meetings at the university. This room is equipped with advanced environmental sensors that monitor CO2 levels, humidity, and temperature, ensuring a comfortable and productive environment for attendees. The CO2 sensors help in maintaining optimal air quality by detecting elevated levels that may indicate poor ventilation. The humidity sensors keep track of moisture levels to prevent discomfort and potential damage to materials, while the temperature sensors regulate the climate to ensure an ideal setting for prolonged discussions. This room is used for a variety of purposes, including faculty meetings, academic conferences, and collaborative research sessions, making it a central hub for intellectual exchange and departmental coordination.', image: salariunioni },
    { id: 2, name: 'Computer Lab', description: 'A modern computer lab designed for technical and academic use within the university. This lab is equipped with 20 fixed computers, providing ample resources for students and faculty to engage in programming, data analysis, and other computing tasks. Each workstation is set up with the latest hardware and software to support a wide range of academic and research activities. Additionally, the lab features an automatic lighting system that adjusts the brightness based on the time of day and occupancy, ensuring optimal visibility and energy efficiency. This intelligent lighting system enhances the working environment by providing adequate illumination without the need for manual adjustments, contributing to a productive and comfortable workspace.', image: labinfo },
    { id: 3, name: 'Office A3', description: 'A well-equipped faculty office designed to support academic staff within the university. This office provides a comfortable and functional workspace for professors and lecturers. It features a spacious layout with individual desks for each faculty member, complete with ergonomic chairs and ample storage for personal and professional materials. The office is also outfitted with high-speed internet connectivity and modern communication tools, ensuring that faculty members can perform their research and teaching duties efficiently. Additionally, the room is equipped with an advanced climate control system that maintains a consistent temperature, enhancing comfort and productivity. The office is used for individual work, meetings with students, and collaborative discussions among faculty members.', image: ufficio }
    // Aggiungi altre stanze secondo necessità
  ])
  </script>
  
  <style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

.container {
  margin-top: 20px;
}

.brand-text {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 2rem;
  color: #28a745; /* Colore verde che richiama la natura */
  margin-left: 0.5rem;
}

/* Stili per la sezione di contatto */
.contact-section {
  background-color: #e0f2e8; /* Colore verde chiaro per uno stile ecologico */
  border-radius: 8px;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
}

.contact-title {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.5rem;
  color: #2c6e49; /* Colore verde scuro per contrasto */
  margin-bottom: 10px;
}

.contact-description {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  font-size: 1rem;
  color: #079704;
}

.contact-email {
  color: #355f01; /* Colore verde acqua per il link */
  text-decoration: none;
}

.contact-email:hover {
  text-decoration: underline;
}
</style>
