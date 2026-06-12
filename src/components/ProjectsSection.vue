<script setup lang="ts">
import { computed } from 'vue'
import Card from 'primevue/card'
import Button from 'primevue/button'
import type { Project } from '../model/project'
import type { Platform } from '../model/project_url'
import { useFetch } from '../composables/useFetch'


const { data, loading } = useFetch<{ projects: Project[] }>('/projects.json')
const projects = computed(() => data.value?.projects ?? [])

const openUrl = (url: string) => {
  window.open(url, '_blank')
}

const platformIconMap: Record<Platform, string> = {
  Web: 'pi-globe',
  Android: 'pi-android',
  iOS: 'pi-apple',
  GitHub: 'pi-github',
}

function getPlatformIcon(platform: Platform): string {
  return `pi ${platformIconMap[platform] ?? 'pi-link'}`
}
</script>

<template>
  <section id="projects" class="projects-section">
    <div class="section-container">
      <h2 class="section-title">My Works</h2>
      
      <div v-if="loading" class="loading">
        <p>Loading projects...</p>
      </div>
      
      <div v-else class="projects-grid">
        <Card v-for="project in projects" :key="project.project_id" class="project-card">
          <template #header>
            <div class="project-header">
              <div v-if="project.project_image" class="project-image">
                <img :src="project.project_image" :alt="project.project_name" />
              </div>
              <div v-else class="project-image-placeholder">
                <i class="pi pi-folder"></i>
              </div>
            </div>
          </template>
          <template #content>
            <div class="project-content">
              <div class="project-year">{{ project.year }}</div>
              <h3 class="project-name">{{ project.project_name }}</h3>
              
              <p class="project-description">{{ project.project_description }}</p>
              
              <div class="technologies">
                <span v-for="tech in project.technologies" :key="tech" class="tech-badge">
                  {{ tech }}
                </span>
              </div>
              
              <div class="project-actions">
                <Button 
                  v-for="url in project.project_url"
                  :key="`${project.project_id}-${url.name}`"
                  :label="url.name"
                  :icon="getPlatformIcon(url.platform)"
                  @click="openUrl(url.url)"
                  class="action-btn"
                  text
                />
              </div>
            </div>
          </template>
          
        </Card>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects-section {
  padding: 4rem 2rem 2.5rem 2rem;
}

.section-container {
  max-width: 1200px;
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

.loading {
  text-align: center;
  padding: 2rem;
  font-size: 1.1rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.project-card {
  border-radius: 12px;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  display: flex;
  flex-direction: column;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 15px 40px rgba(102, 126, 234, 0.2);
}

.project-header {
  height: 200px;
  overflow: hidden;
  background: #f0f0f0;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.project-image-placeholder {
  width: 100%;
  height: 100%;
  background: var(--gradient-surface) !important;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 4rem;
  color: white;
}

.project-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
}

.project-year {
  display: inline-block;
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--color-primary);
  background-color: #f0f0f0;
  padding: 0.3rem 0.8rem;
  border-radius: 15px;
  width: fit-content;
  margin-bottom: 0.8rem;
}

.project-name {
  font-size: 1.3rem;
  font-weight: 700;
  margin: 0 0 0.8rem 0;
  line-height: 1.4;
}

.project-description {
  font-size: 0.95rem;
  line-height: 1.6;
  margin: 0 0 1rem 0;
  flex-grow: 1;
}

.technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
  margin-bottom: 1.5rem;
}

.tech-badge {
  display: inline-block;
  background-color: #e8eef7;
  color: var(--color-primary);
  padding: 0.4rem 0.8rem;
  border-radius: 12px;
  font-size: 0.8rem;
  font-weight: 600;
  border: 1px solid;
}

.project-actions {
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
  margin-top: auto;
}

.action-btn {
  color: var(--color-primary) !important;
  font-weight: 600 !important;
  font-size: 0.9rem !important;
  padding: 0.5rem 1rem !important;
  border-radius: 6px !important;
  transition: all 0.3s ease !important;
  flex: 1;
  min-width: 100px;
  text-align: center !important;
  gap: 0.5rem !important;
}

.action-btn:hover {
  background-color: #f0f0f0 !important;
  color: #764ba2 !important;
}

@media (max-width: 768px) {
  .projects-section {
    padding: 2.5rem 1rem;
  }

  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  .projects-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }

  .project-header {
    height: 150px;
  }

  .project-image-placeholder {
    font-size: 3rem;
  }

  .project-name {
    font-size: 1.1rem;
  }

  .project-description {
    font-size: 0.9rem;
  }
}
</style>
