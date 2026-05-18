<template>
  <section id="hero" class="hero">
    <div class="container">
      <p class="hero-greeting mono">你好，我是</p>
      <h1 class="hero-name">{{ profile.name }}</h1>
      <h2 class="hero-name-en">{{ profile.nameEn }}</h2>
      <p class="hero-title">{{ profile.titleSub }}</p>
      <p class="hero-intro">{{ profile.intro }}</p>
      <div class="hero-actions">
        <a :href="`mailto:${profile.email}`" class="btn-primary">聯絡我</a>
        <a :href="profile.github" target="_blank" rel="noopener" class="btn-secondary">
          查看 GitHub
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { profile } from '../data/resumeData.js'
</script>

<style scoped>
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  padding-top: 80px;
  overflow: hidden;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: -1;
  background:
    radial-gradient(circle at 66% 34%, rgba(47, 125, 115, 0.12), transparent 24%),
    radial-gradient(circle at 76% 56%, rgba(112, 96, 76, 0.12), transparent 28%);
  pointer-events: none;
}

.hero-greeting {
  font-family: var(--font-mono);
  font-size: 16px;
  color: var(--accent);
  margin-bottom: 16px;
}

.hero-name {
  font-size: clamp(40px, 8vw, 72px);
  font-weight: 700;
  color: var(--hero-name);
  line-height: 1.1;
}

.hero-name-en {
  font-size: clamp(24px, 5vw, 48px);
  font-weight: 600;
  color: var(--hero-name-en);
  line-height: 1.2;
  margin-bottom: 20px;
}

.hero-intro {
  max-width: 560px;
  color: var(--hero-intro);
  font-size: 16px;
  line-height: 1.8;
  margin-bottom: 40px;
  white-space: pre-line;
}

.hero-title {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--accent);
  margin-bottom: 28px;
  letter-spacing: 1px;
}

.hero-actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
}

.btn-primary {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--accent);
  border: 1px solid var(--accent);
  padding: 14px 28px;
  border-radius: var(--radius);
  text-decoration: none;
  transition: all 0.2s;
}

.btn-primary:hover {
  background: rgba(100, 255, 218, 0.1);
  color: var(--accent);
}

.btn-secondary {
  font-family: var(--font-mono);
  font-size: 14px;
  color: var(--text-secondary);
  border: 1px solid var(--border);
  padding: 14px 28px;
  border-radius: var(--radius);
  text-decoration: none;
  transition: all 0.2s;
}

.btn-secondary:hover {
  color: var(--accent);
  border-color: var(--accent);
}
</style>
