<template>
  <section id="skills">
    <div class="container">
      <p class="section-label">02. 技能</p>
      <h2 class="section-title">Skills</h2>
      <div class="skills-grid">
        <div
          v-for="(group, i) in skills"
          :key="group.category"
          class="skill-card fade-in"
          :ref="el => cardRefs[i] = el"
          :style="{ '--card-color': group.color }"
        >
          <div class="card-header">
            <span class="card-icon">{{ group.icon }}</span>
            <h3 class="card-title">{{ group.category }}</h3>
          </div>
          <ul class="skill-list">
            <li v-for="item in group.items" :key="item.name" class="skill-item">
              <span class="skill-bullet">▸</span>
              <span class="skill-name">{{ item.name }}</span>
              <span v-if="item.note" class="skill-note">{{ item.note }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { skills } from '../data/resumeData.js'

const cardRefs = ref([])

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
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
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
}

.skill-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-top: 3px solid var(--card-color, var(--accent));
  border-radius: var(--radius);
  padding: 24px;
  transition: transform 0.2s, border-color 0.2s, box-shadow 0.2s;
}

.skill-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 24px rgba(2, 12, 27, 0.5);
  border-left-color: var(--card-color);
}

.card-header {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 18px;
}

.card-icon { font-size: 20px; }

.card-title {
  font-size: 15px;
  font-weight: 600;
  color: var(--text-primary);
}

.skill-list { display: flex; flex-direction: column; gap: 8px; }

.skill-item {
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-size: 14px;
}

.skill-bullet {
  color: var(--card-color, var(--accent));
  font-size: 11px;
  flex-shrink: 0;
}

.skill-name { color: var(--text-secondary); }

.skill-note {
  font-family: var(--font-mono);
  font-size: 11px;
  color: var(--text-muted);
  margin-left: auto;
  background: var(--bg-card);
  padding: 2px 6px;
  border-radius: 4px;
}
</style>
