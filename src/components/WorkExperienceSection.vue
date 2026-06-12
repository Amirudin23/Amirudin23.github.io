<script setup lang="ts">
import { computed } from 'vue'
import Card from 'primevue/card'
import type { Experience } from '@/model/experience'
import { useFetch } from '../composables/useFetch'

const { data, loading } = useFetch<{ experience: Experience[] }>('/experience.json')
const experiences = computed(() => data.value?.experience ?? [])
</script>

<template>
  <section id="work-experience" class="experience-section">
    <div class="section-container">
      <h2 class="section-title">Work Experience</h2>
      
      <div v-if="loading" class="loading">
        <p>Loading work experiences...</p>
      </div>
      <div v-else class="experience-timeline">
        <div v-for="(exp, index) in experiences" :key="exp.experience_id" class="timeline-item">
          <div class="timeline-marker">
            <div class="marker-dot"></div>
            <div v-if="index !== experiences.length - 1" class="marker-line"></div>
          </div>
          
          <Card class="experience-card">
            <template #header>
              <div class="card-header">
                <div class="header-content">
                  <h3 class="company-name">{{ exp.company }}</h3>
                  <p class="position-title">{{ exp.position }}</p>
                </div>
                <div class="period-badge">{{ exp.period }}</div>
              </div>
            </template>
            <template #content>
              <div class="card-body">
                <p class="location">
                  <i class="pi pi-map-marker"></i>
                  {{ exp.location }}
                </p>
                
                <ul class="description-list">
                  <li v-for="(desc, i) in exp.experience_description" :key="i">{{ desc }}</li>
                </ul>
                
                <div class="tech-stack">
                  <span v-for="tech in exp.technologies" :key="tech" class="tech-tag">
                    {{ tech }}
                  </span>
                </div>
              </div>
            </template>
          </Card>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience-section {
  padding: 4rem 2rem 2.5rem 2rem;
}

.section-container {
  max-width: 1000px;
  margin: 0 auto;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 3rem;
  text-align: center;
  background: var(--gradient-primary);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.experience-timeline {
  position: relative;
}

.timeline-item {
  display: flex;
  gap: 2rem;
  margin-bottom: 2rem;
  animation: slideInLeft 0.6s ease-out;
}

@keyframes slideInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.timeline-marker {
  position: relative;
  width: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
}

.marker-dot {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--gradient-primary);
  border: 4px solid white;
  box-shadow: 0 0 0 2px var(--color-primary);
  margin-top: 5px;
}

.marker-line {
  flex-grow: 1;
  width: 2px;
  background: var(--gradient-primary);
  margin-top: 10px;
}

.experience-card {
  flex: 1;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  padding: 1.5rem;
  transition: all 0.3s ease;
}

.experience-card:hover {
  box-shadow: 0 15px 35px rgba(102, 126, 234, 0.2);
  transform: translateY(-5px);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1rem;
  gap: 1rem;
}

.header-content {
  flex: 1;
}

.company-name {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 0.3rem 0;
}

.position-title {
  font-size: 1.05rem;
  color: var(--color-primary);
  font-weight: 600;
  margin: 0;
}

.period-badge {
  background: var(--gradient-primary);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  white-space: nowrap;
}

.card-body {
  margin-top: 1rem;
}

.location {
  font-size: 0.95rem;
  margin: 0 0 1rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.description-list {
  list-style: none;
  padding: 0;
  margin: 0 0 1rem 0;
}

.description-list li {
  font-size: 0.95rem;
  line-height: 1.7;
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;
}

.description-list li:before {
  content: '▸';
  position: absolute;
  left: 0;
  color: var(--color-primary);
  font-weight: bold;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-top: 1rem;
}

.tech-tag {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  border-radius: 15px;
  font-size: 0.8rem;
  font-weight: 500;
  border: 1px solid;
  transition: all 0.3s ease;
}

.tech-tag:hover {
  background: var(--gradient-primary);
  color: white;
  border-color: var(--color-primary);
}

@media (max-width: 768px) {
  .experience-section {
    padding: 3rem 1rem;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .timeline-item {
    gap: 1rem;
    margin-bottom: 1.5rem;
  }

  .experience-card {
    padding: 1rem;
  }

  .card-header {
    flex-direction: column;
  }

  .period-badge {
    width: 100%;
    text-align: center;
  }

  .company-name {
    font-size: 1.1rem;
  }

  .position-title {
    font-size: 0.95rem;
  }
}
</style>
