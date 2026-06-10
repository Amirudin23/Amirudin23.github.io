<template>
  <footer class="footer">
    <div class="footer-container">
      <p>&copy; 2026 Amirudin</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  /* background-color: #f5f5f5; */
  background: linear-gradient(135deg, #334155 0%, #475569 100%) !important;
  padding: 2rem 0;
  margin-top: auto;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.footer-container p {
  color: #fff;
  font-size: 0.9rem;
  margin: 0;
}

@media (max-width: 768px) {
  .footer-container {
    text-align: center;
  }
}
</style>
