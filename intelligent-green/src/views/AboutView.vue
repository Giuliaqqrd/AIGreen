<template>
    <div class="about-container">
      <h1 class="about-title">About the Project</h1>
      <div class="about-content">
        <img src="@/components/images/me.jpg" alt="Creator Photo" class="creator-photo">
        <div class="about-description">
          <p>
            This project was born from a university initiative for the course "Digital Innovation for Living Environments". The main goal is to enhance the role of plants in living spaces by integrating artificial intelligence into this context.
          </p>
          <p>
            The project aims to monitor and optimize the environmental conditions for plants, ensuring they thrive and contribute positively to the indoor environment. By using AI-driven sensors and smart systems, we can maintain optimal air quality, humidity, and temperature levels, creating healthier and more pleasant living spaces.
          </p>
          <p>
            The creator of this project is deeply passionate about merging technology with nature, striving to create solutions that benefit both people and the environment.
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
 
  </script>
  
  <style scoped>
  .about-container {
    margin: 20px auto;
    padding: 20px;
    max-width: 800px;
    background-color: #f5f5f5; /* Light grey background */
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    font-family: 'Poppins', sans-serif;
  }
  
  .about-title {
    font-size: 2rem;
    color: #2c6e49; /* Dark green color */
    text-align: center;
    margin-bottom: 20px;
  }
  
  .about-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .creator-photo {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 20px;
  }
  
  .about-description {
    font-size: 1rem;
    color: #333; /* Dark grey color for text */
    line-height: 1.6;
  }
  
  .about-description p {
    margin-bottom: 10px;
  }
  </style>
  