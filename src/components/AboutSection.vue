<template>
  <section id="about">
    <div class="container">
      <p class="section-label">01. 關於我</p>
      <h2 class="section-title">About Me</h2>
      <div class="about-grid fade-in" ref="aboutRef">
        <div class="about-text">
          <p>
            具備 <strong>5 年以上 Python 後端與系統整合經驗</strong>。
            近兩年在緯創軟體派駐玉山銀行，參與海外分行 RPA 與金融流程自動化，
            將 6 個銀行系統的共通基礎設施整理成可重用的 Python 自動化框架。
          </p>
          <p>
            更早在宏碁負責跨區域電商資料管線與商業 API 整合，
            涵蓋 30+ 資料源、8 家廣告與物流 API，以及 GCP BigQuery / GCS 寫入管線。
            期間獨立主導 <strong>AWS 容器化 POC</strong>，
            後續成為其他爬蟲上雲的基礎方案。
          </p>
          <p>
            個人專案以 <strong>FastAPI + Vue 3 + Docker</strong> 為主，
            目前朝需要多源資料整合、雲端管線與後端 API 開發的全端 / 後端職務前進。
          </p>
          <p>
            學歷：<strong>東吳大學 資料科學系 在職專班碩士</strong>（已畢業）
          </p>
        </div>
        <div class="about-stats">
          <div v-for="stat in stats" :key="stat.label" class="stat-card">
            <span class="stat-num">{{ stat.num }}</span>
            <span class="stat-label">{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const aboutRef = ref(null)

const stats = [
  { num: '5+', label: 'Years Python' },
  { num: '22', label: '自動化系統' },
  { num: '6', label: '銀行系統' },
  { num: '8', label: '商業 API' },
]

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
    { threshold: 0.1 }
  )
  if (aboutRef.value) observer.observe(aboutRef.value)
})
</script>

<style scoped>
.about-grid {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 48px;
  align-items: start;
}

.about-text p {
  color: var(--text-secondary);
  line-height: 1.8;
  margin-bottom: 16px;
}

.about-text strong {
  color: var(--accent);
}

.about-stats {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
}

.stat-card {
  background: var(--bg-secondary);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px;
  text-align: center;
  min-width: 100px;
  transition: border-color 0.2s, transform 0.2s;
}

.stat-card:hover {
  border-color: var(--accent);
  transform: translateY(-2px);
}

.stat-num {
  display: block;
  font-size: 28px;
  font-weight: 700;
  color: var(--accent);
  font-family: var(--font-mono);
}

.stat-label {
  font-size: 11px;
  color: var(--text-secondary);
  margin-top: 4px;
  display: block;
}

@media (max-width: 768px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
  .about-stats {
    grid-template-columns: repeat(4, 1fr);
  }
}
</style>
