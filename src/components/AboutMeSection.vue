<script setup lang="ts">
import Button from 'primevue/button'
import Card from 'primevue/card'

const contact = {
  email: 'amirrest078@gmail.com',
  phone: '+625161302279',
  linkedin: 'https://www.linkedin.com/in/amirudin-955121210'
}

const downloadCV = () => {
  const link = document.createElement('a')
  link.href = '/Amirudin-resume.pdf'
  link.download = 'Amirudin-resume.pdf'
  link.click()
}
</script>

<template>
  <section id="about" class="about-section">
    <div class="section-container">
      <Card :pt="{ root: { style: 'box-shadow: none' } }">
        <template #content>
          <div class="about-card">
            <div class="about-content">
              <div class="about-avatar">
                <img src="/amirudin.jpg" class="avatar">
              </div>
              
              <div class="about-info">
                <h3 class="about-name">Amirudin</h3>

                <p class="about-title">Mobile Engineer | Frontend Developer</p>
                
                <p class="about-summary">
                  Software Engineer with 4+ years of experience in web and mobile development using Flutter and Angular. 
                  Experienced in building maintainable and scalable enterprise applications, API integration, and system design. 
                  Skilled in SQL Server and Oracle databases. Proficient in Agile and Waterfall methodologies with strong 
                  analytical and problem-solving skills.
                </p>
                
                <div class="contact-info">
                  <div class="contact-item">
                    <i class="pi pi-envelope"></i>
                    <a :href="`mailto:${contact.email}`">{{ contact.email }}</a>
                  </div>
                  <div class="contact-item">
                    <i class="pi pi-phone"></i>
                    <span>{{ contact.phone }}</span>
                  </div>
                  <div class="contact-item">
                    <i class="pi pi-linkedin"></i>
                    <a :href="contact.linkedin" target="_blank">Amirudin .</a>
                  </div>
                </div>
                
                <div class="actions">
                  <Button 
                    label="Download CV" 
                    icon="pi pi-download" 
                    @click="downloadCV"
                    class="download-btn"
                  />
                </div>
              </div>
            </div>
          </div>
        </template>

      </Card>
      
    </div>
  </section>
</template>

<style scoped>
.about-section {
  padding: 4.5rem 2rem 2.5rem 2rem;
}

.section-container {
  max-width: 1000px;
  margin: 0 auto;
}

.about-card {
  padding: 0;
}

.about-content {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 3rem;
  align-items: start;
}

.about-avatar {
  display: flex;
  justify-content: center;
}

.avatar {
  width: 180px;
  height: 180px;
  border-radius: 12px;
  object-fit: cover;
  object-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
  
}

.about-info h3 {
  font-size: 2rem;
  margin: 0 0 0.5rem 0;
}

.about-name {
  font-size: 2rem;
  font-weight: 700;
}

.about-title {
  font-size: 1.3rem;
  color: #667eea;
  margin: 0 0 1rem 0;
  font-weight: 600;
}

.about-summary {
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
}

.contact-info {
  margin-bottom: 2rem;
  padding: 1.5rem;
  /* background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); */
  background: linear-gradient(135deg, #334155 0%, #475569 100%) !important;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  color: white;
  font-size: 0.95rem;
}

.contact-item i {
  font-size: 1.2rem;
  min-width: 24px;
  text-align: center;
}

.contact-info a {
  color: white;
  text-decoration: none;
  transition: opacity 0.3s ease;
  font-weight: 500;
}

.contact-info a:hover {
  opacity: 0.8;
  text-decoration: none;
  background-color: transparent !important;
}

.actions {
  display: flex;
  gap: 1rem;
}

.download-btn {
  /* background: linear-gradient(135deg, #667eea 0%, #764ba2 100%) !important; */
  background: linear-gradient(135deg, #334155 0%, #475569 100%) !important;
  border: none !important;
  padding: 0.8rem 2rem !important;
  border-radius: 8px !important;
  color: #fff;
  gap: 0.5rem !important;
}

.download-btn:hover {
  opacity: 0.9;
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(102, 126, 234, 0.4) !important;
  color: #fff !important;
}

@media (max-width: 768px) {
  .about-section {
    padding: 2.5rem 1rem;
  }

  .about-card {
    padding: 0;
  }

  .about-content {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .avatar-placeholder {
    width: 140px;
    height: 140px;
    font-size: 3rem;
  }

  .about-info h3 {
    font-size: 1.5rem;
  }

  .about-title {
    font-size: 1.1rem;
  }

  .about-summary {
    font-size: 0.95rem;
  }

  .contact-info {
    flex-direction: column;
  }

  .contact-item {
    font-size: 0.9rem;
  }
}
</style>
