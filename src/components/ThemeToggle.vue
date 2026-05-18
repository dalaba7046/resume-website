<template>
  <button class="theme-toggle" type="button" @click="model = !model">
    <span class="slider" :class="{ dark: model }">
      <span class="icon icon-sun">☀</span>
      <span class="icon icon-moon">☾</span>
    </span>
  </button>
</template>

<script setup>
const model = defineModel({ type: Boolean })
</script>
<style scoped>
.theme-toggle {
    position: fixed;
    right: 28px;
    bottom: 96px;
    z-index: 120;
    border: 0;
    background: transparent;
    padding: 0;
    cursor: pointer;
}
.slider {
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 74px;
    height: 36px;
    align-items: center;
    border: 1px solid var(--border);
    border-radius: 999px;
    background: rgba(255, 252, 240, 0.72);
}

.slider.before {
    content: '';
    position: absolute;
    top: 4px;
    left: 4px;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: var(--accent);
    transition: transform 0.2s ease;
}

.icon {
    position: relative;
    font-size: 14px;
    color: var(--text-muted);
    transition: color 0.2s ease;
}


</style>