<template>
  <nav :class="['navbar', { scrolled: isScrolled }]">
    <div class="nav-inner">
      <a href="#hero" class="nav-logo">
        <span class="mono">JL</span>
      </a>
      <ul class="nav-links">
        <li v-for="item in navItems" :key="item.id">
          <a :href="`#${item.id}`" :class="{ active: activeSection === item.id }">
            <span class="mono num">{{ item.num }}</span>{{ item.label }}
          </a>
        </li>
      </ul>
      <a :href="profile.github" target="_blank" rel="noopener" class="nav-btn">
        GitHub
      </a>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { profile } from '../data/resumeData.js'

const isScrolled = ref(false)
const activeSection = ref('hero')

const navItems = [
  { id: 'about', label: '關於我', num: '01.' },
  { id: 'skills', label: '技能', num: '02.' },
  { id: 'experience', label: '經歷', num: '03.' },
  { id: 'projects', label: '專案', num: '04.' },
]

function onScroll() {
  isScrolled.value = window.scrollY > 50

  const sections = ['hero', 'about', 'skills', 'experience', 'projects']
  for (const id of sections.reverse()) {
    const el = document.getElementById(id)
    if (el && window.scrollY >= el.offsetTop - 120) {
      activeSection.value = id
      break
    }
  }
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  padding: 20px 0;
  transition: all 0.3s ease;
}

.navbar.scrolled {
  background: var(--nav-bg);
  backdrop-filter: blur(10px);
  padding: 14px 0;
  box-shadow: 0 4px 30px var(--nav-shadow);
}

.nav-inner {
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  align-items: center;
  gap: 32px;
}

.nav-logo {
  margin-right: auto;
  font-size: 20px;
  font-weight: 700;
  color: var(--accent);
  text-decoration: none;
}

.nav-logo:hover { color: var(--text-primary); }

.mono { font-family: var(--font-mono); }

.nav-links {
  display: flex;
  gap: 28px;
}

.nav-links a {
  font-size: 13px;
  color: #4c453d;
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover,
.nav-links a.active {
  color: #145f56;
}

.num {
  color: var(--accent);
  margin-right: 4px;
  font-size: 12px;
}

.nav-btn {
  font-family: var(--font-mono);
  font-size: 13px;
  color: var(--accent);
  border: 1px solid var(--accent);
  padding: 8px 16px;
  border-radius: var(--radius);
  text-decoration: none;
  transition: all 0.2s;
}

.nav-btn:hover {
  background: rgba(100, 255, 218, 0.1);
  color: var(--accent);
}

@media (max-width: 768px) {
  .nav-links { display: none; }
  .nav-inner { padding: 0 24px; }
}
</style>
