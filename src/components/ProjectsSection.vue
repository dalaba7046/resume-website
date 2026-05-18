<template>
  <section id="projects">
    <div class="container">
      <p class="section-label">04. 個人專案</p>
      <h2 class="section-title">Projects</h2>
      <div class="projects-grid">
        <a
          v-for="(proj, i) in projects"
          :key="proj.name"
          :href="proj.github"
          target="_blank"
          rel="noopener"
          class="project-card fade-in"
          :ref="el => cardRefs[i] = el"
          :style="{ '--proj-color': proj.color }"
        >
          <div class="proj-top">
            <span class="proj-icon">📁</span>
            <span class="proj-github-icon">↗</span>
          </div>
          <h3 class="proj-name">{{ proj.name }}</h3>
          <p class="proj-desc">{{ proj.description }}</p>
          <div class="proj-tech">
            <span v-for="t in proj.tech" :key="t" class="tech-tag">{{ t }}</span>
          </div>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { projects } from '../data/resumeData.js'

const cardRefs = ref([])

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, idx) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), idx * 100)
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )
  cardRefs.value.forEach(el => { if (el) observer.observe(el) })
})
</script>

<style scoped>
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.project-card {
  display: flex;
  flex-direction: column;
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 28px;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
  color: inherit;
}

.project-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 12px 36px rgba(2, 12, 27, 0.6);
  border-color: var(--proj-color, var(--accent));
}

.proj-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.proj-icon { font-size: 28px; }

.proj-github-icon {
  font-size: 20px;
  color: var(--text-muted);
  transition: color 0.2s;
}

.project-card:hover .proj-github-icon {
  color: var(--proj-color, var(--accent));
}

.proj-name {
  font-size: 16px;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 12px;
  transition: color 0.2s;
}

.project-card:hover .proj-name {
  color: var(--proj-color, var(--accent));
}

.proj-desc {
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.7;
  flex: 1;
  margin-bottom: 20px;
}

.proj-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
}

.tech-tag {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--proj-color, var(--accent));
  opacity: 0.85;
}
</style>
