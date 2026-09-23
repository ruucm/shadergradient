<script setup lang="ts">
import { ref } from 'vue'
import { ShaderGradient, ShaderGradientCanvas, presets } from '@shadergradient/vue'

const paused = ref(false)
</script>

<template>
  <main>
    <header>
      <h1>ShaderGradient Vue</h1>
      <label><input v-model="paused" type="checkbox"> Pause animation</label>
    </header>
    <ShaderGradientCanvas style="height: 75svh; min-height: 280px">
      <ShaderGradient v-bind="presets.mint.props" :animate="paused ? 'off' : 'on'" />
    </ShaderGradientCanvas>
  </main>
</template>

<style>
* { box-sizing: border-box; }
body { margin: 0; color: #171717; background: #f7f8fa; font-family: 'Courier New', monospace; }
header { display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 16px; padding: 24px; }
h1 { margin: 0; font-size: 22px; letter-spacing: 0; }
label { display: flex; align-items: center; gap: 8px; min-height: 44px; font-size: 14px; }
input { width: 20px; height: 20px; accent-color: #08754c; }
:focus-visible { outline: 3px solid #171717; outline-offset: 3px; }
</style>