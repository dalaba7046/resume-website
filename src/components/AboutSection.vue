<template>
  <section id="about">
    <div class="container">
      <p class="section-label">01. 關於我</p>
      <h2 class="section-title">About Me</h2>
      <div class="about-grid fade-in" ref="aboutRef">
        <div class="about-text">
          <p>
            後端工程師，具備 <strong>5 年以上 Python 開發經驗</strong>，
            擅長後端服務建置、雲端部署與多系統 API 整合。
            曾派駐玉山銀行開發 22 項 RPA 自動化系統，
            也在宏碁主導廣告、物流、Google 等多項第三方 API 串接專案。
          </p>
          <p>
            目前透過個人 GitHub 專案延伸 <strong>FastAPI + SQLAlchemy</strong>、
            <strong>Django</strong> 等後端實作能力，
            並積極學習 <strong>Vue.js</strong>，
            以本站作為全端開發的起點。
          </p>
          <p>
            學歷：<strong>東吳大學 資料科學系 碩士</strong>（在職專班）
          </p>
          <p>
            證照：銀行內部控制與內部稽核測驗（一般金融）合格
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
  { num: '10+', label: 'API 整合' },
  { num: '4', label: '雲端 AWS 服務' },
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
