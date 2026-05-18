<template>
  <section id="experience">
    <div class="container">
      <p class="section-label">03. 工作經歷</p>
      <h2 class="section-title">Experience</h2>
      <div class="timeline">
        <div
          v-for="(exp, i) in experiences"
          :key="exp.company"
          class="timeline-item fade-in"
          :ref="el => itemRefs[i] = el"
        >
          <div class="timeline-dot" :class="{ current: exp.current }"></div>
          <div class="timeline-content">
            <div class="exp-header">
              <div>
                <h3 class="exp-company">
                  {{ exp.company }}
                  <span v-if="exp.current" class="badge-current">現職</span>
                </h3>
                <p class="exp-employer" v-if="exp.employer">{{ exp.employer }}</p>
                <p class="exp-role">{{ exp.role }}</p>
              </div>
              <span class="exp-period mono">{{ exp.period }}</span>
            </div>
            <p class="exp-desc">{{ exp.description }}</p>
            <ul class="exp-highlights">
              <li v-for="hl in exp.highlights" :key="hl">
                <span class="hl-bullet">▸</span>{{ hl }}
              </li>
            </ul>
            <div class="exp-tags">
              <span v-for="tag in exp.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { experiences } from '../data/resumeData.js'

const itemRefs = ref([])

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
  itemRefs.value.forEach(el => { if (el) observer.observe(el) })
})
</script>

<style scoped>
.timeline {
  position: relative;
  padding-left: 32px;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 7px;
  top: 8px;
  bottom: 8px;
  width: 2px;
  background: var(--border);
}

.timeline-item {
  position: relative;
  margin-bottom: 48px;
}

.timeline-item:last-child { margin-bottom: 0; }

.timeline-dot {
  position: absolute;
  left: -28px;
  top: 8px;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: var(--bg-primary);
  border: 2px solid var(--text-muted);
  transition: border-color 0.2s;
}

.timeline-dot.current {
  border-color: var(--accent);
  background: var(--accent);
  box-shadow: 0 0 10px rgba(100, 255, 218, 0.4);
}

.timeline-item:hover .timeline-dot {
  border-color: var(--accent);
}

.timeline-content {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 24px;
  transition: border-color 0.2s, transform 0.2s;
}

.timeline-item:hover .timeline-content {
  border-color: var(--accent);
  transform: translateX(4px);
}

.exp-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 14px;
  flex-wrap: wrap;
}

.exp-company {
  font-size: 17px;
  font-weight: 600;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 8px;
}

.badge-current {
  font-size: 10px;
  font-family: var(--font-mono);
  color: var(--accent);
  border: 1px solid var(--accent);
  padding: 2px 6px;
  border-radius: 4px;
  vertical-align: middle;
}

.exp-employer {
  font-size: 12px;
  color: var(--text-muted);
  margin-top: 2px;
}

.exp-role {
  font-size: 14px;
  color: var(--accent);
  margin-top: 4px;
}

.exp-period {
  font-family: var(--font-mono);
  font-size: 12px;
  color: var(--text-muted);
  white-space: nowrap;
}

.exp-desc {
  font-size: 14px;
  color: var(--text-secondary);
  line-height: 1.7;
  margin-bottom: 16px;
}

.exp-highlights {
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.exp-highlights li {
  display: flex;
  gap: 8px;
  font-size: 13px;
  color: var(--text-secondary);
  line-height: 1.6;
}

.hl-bullet {
  color: var(--accent);
  flex-shrink: 0;
  font-size: 11px;
  margin-top: 3px;
}

.exp-tags { margin-top: 4px; }

@media (max-width: 600px) {
  .exp-header { flex-direction: column; }
}
</style>
