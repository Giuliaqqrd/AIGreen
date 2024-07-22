<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img src="@/components/images/logo.png" alt="Logo" width="30" height="30" class="d-inline-block align-text-top">
          <span class = "brand-text">AI-Green</span>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">About</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'Navbar'
  }
  </script>
  
  <style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

  .navbar {
    background-color: #e3f2fd; /* Colore chiaro che richiama l'acqua e il cielo */
  }
  
  .nav-link {
    color: #2e7d32 !important; /* Colore verde che richiama la natura */
  }
  
  .navbar-brand img {
    border-radius: 50%; /* Aggiunge un tocco di modernità al logo */
  }
  
  .navbar-toggler {
    border-color: #2e7d32; /* Bordo verde per il pulsante di toggle */
  }
  
  .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 30 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba%28232, 239, 241, 0.5%29' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 7h22M4 15h22M4 23h22'/%3E%3C/svg%3E");
  }
  .brand-text {
  font-family: 'Poppins', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  color: #2e7d32; /* Colore verde che richiama la natura */
  margin-left: 0.5rem;
}
.nav-link {
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  color: #1b5e20 !important; /* Colore verde scuro */
}
  </style>
  