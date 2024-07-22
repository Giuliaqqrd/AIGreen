<template>
    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="@/components/images/img1.png"  class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Eco-future</h5>
            <p>Plants meet AI</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/components/images/img2.webp"  class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Plants As Sensor</h5>
            <p>Make plants sensing</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src="@/components/images/img5.jpeg"  class="d-block w-100" alt="...">
          <div class="carousel-caption d-none d-md-block">
            <h5>Monitor and Predict</h5>
            <p>Future integrating plants.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </template>
  
  <script setup>
  
  </script>
  
  <style scoped>
  .carousel-item img {
    height: 400px;
    object-fit: cover;
  }
  </style>
  