<template>
  <button class="dragon-toggle" type="button" @click="model = !model">
    {{ model ? '藏龍' : '喚龍' }}
  </button>
</template>

<script setup>
const model = defineModel({ type: Boolean })
</script>
<style scoped>
.dragon-toggle {
    position: fixed;
    right: 28px;
    bottom: 36px;
    z-index: 120;
    min-width: 74px;
    height: 42px;
    border: 1px solid var(--accent);
    border-radius: var(--radius);
    background: rgba(255, 252, 240, 0.72);
    color: var(--accent);
    font-weight: 700;
    cursor: pointer;
}

</style>