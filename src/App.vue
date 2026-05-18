<template>
  <div id="app"  :class="{ 'theme-dark': isDarkTheme }">
    <DragonCursor :enabled="showDragon" :is-dark-theme="isDarkTheme" />
    <DragonToggle v-model="showDragon" />
    <!-- 這裡加 slider -->
    <ThemeToggle v-model="isDarkTheme" />

    <!-- 這裡加龍顯示切換 button -->
    <DragonToggle v-model="showDragon" />

    <NavBar />
    <main>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
    <footer class="footer">
      <p class="mono">
        Built with <span class="accent">Vue.js 3</span> + Vite ·
        <a :href="profile.github" target="_blank" rel="noopener">@{{ profile.githubHandle }}</a>
      </p>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import DragonCursor from './components/DragonCursor.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ThemeToggle from './components/ThemeToggle.vue'
import DragonToggle from './components/DragonToggle.vue'
import { profile } from './data/resumeData.js'

const isDarkTheme = ref(false)
const showDragon = ref(true)
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 32px 0;
  border-top: 1px solid var(--border);
  color: var(--text-muted);
  font-size: 13px;
}

.mono { font-family: var(--font-mono); }
.accent { color: var(--accent); }

.footer a {
  color: var(--accent);
  text-decoration: none;
}

.footer a:hover { color: #fff; }
</style>
