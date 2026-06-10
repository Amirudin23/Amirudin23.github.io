<script setup lang="ts">
import AboutMeSection from '../components/AboutMeSection.vue'
import WorkExperienceSection from '../components/WorkExperienceSection.vue'
import ProjectsSection from '../components/ProjectsSection.vue'
</script>

<template>
  <div class="portfolio-page">
    <div id="about">
      <AboutMeSection />
    </div>
    <div id="work-experience">
      <WorkExperienceSection />
    </div>
    <div id="projects">
      <ProjectsSection />
    </div>
  </div>
</template>

<style scoped>
.portfolio-page {
  width: 100%;
}
</style>
