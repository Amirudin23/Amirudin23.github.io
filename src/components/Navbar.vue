<script setup lang="ts">
</script>

<template>
  <nav class="navbar">
    <div class="navbar-container">
      <div class="navbar-menu">
        <a href="#about" class="nav-link">About Me</a>
        <a href="#work-experience" class="nav-link">Work Experience</a>
        <a href="#projects" class="nav-link">Projects</a>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: var(--gradient-surface);
  padding: 1rem 0;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 100;
}

.navbar-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.navbar-menu {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.3s ease;
  cursor: pointer;
}

.nav-link:hover {
  opacity: 0.8;
  background-color: transparent !important;
}

@media (max-width: 768px) {
  .navbar-container {
    padding: 0 1rem;
  }

  .navbar-menu {
    gap: 1rem;
    font-size: 0.9rem;
  }
}
</style>

