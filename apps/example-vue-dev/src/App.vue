<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import {
  presets,
  ShaderGradient,
  ShaderGradientCanvas,
} from '@shadergradient/vue'
import type { ShaderGradientProps } from '@shadergradient/vue'

const preset = ref<keyof typeof presets>('halo')
const settings = ref<ShaderGradientProps>({ ...presets.halo.props })
const paused = ref(false)
const grain = ref(true)
const error = ref('')
const animation = computed(() => (paused.value ? 'off' : 'on'))

watch(preset, (name) => {
  settings.value = { ...presets[name].props }
  grain.value = settings.value.grain !== 'off'
  error.value = ''
})
</script>

<template>
  <main>
    <header>
      <h1>ShaderGradient <span>Vue</span></h1>
      <label class="toggle"
        ><input v-model="paused" type="checkbox" > Pause animation</label
      >
    </header>
    <div class="gradient">
      <ShaderGradientCanvas>
        <ShaderGradient
          v-bind="settings"
          :animate="animation"
          :grain="grain ? 'on' : 'off'"
          @error="error = 'The environment texture could not be loaded.'"
        />
      </ShaderGradientCanvas>
    </div>
    <form class="controls" aria-label="Gradient settings" @submit.prevent>
      <label
        >Preset
        <select v-model="preset">
          <option v-for="(item, name) in presets" :key="name" :value="name">
            {{ item.title }}
          </option>
        </select>
      </label>
      <label
        >Shape
        <select v-model="settings.type">
          <option value="plane">Plane</option>
          <option value="waterPlane">Water plane</option>
          <option value="sphere">Sphere</option>
        </select>
      </label>
      <label
        >Shader
        <select v-model="settings.shader">
          <option value="defaults">Default</option>
          <option value="positionMix">Position mix</option>
          <option value="cosmic">Cosmic</option>
          <option value="glass">Glass</option>
        </select>
      </label>
      <fieldset>
        <legend>Colors</legend>
        <input
          v-model="settings.color1"
          type="color"
          aria-label="First color"
        >
        <input
          v-model="settings.color2"
          type="color"
          aria-label="Second color"
        >
        <input
          v-model="settings.color3"
          type="color"
          aria-label="Third color"
        >
      </fieldset>
      <label
        >Speed
        <input
          v-model.number="settings.uSpeed"
          type="range"
          min="0"
          max="2"
          step="0.05"
        >
      </label>
      <label class="toggle"
        ><input v-model="grain" type="checkbox" > Grain</label
      >
    </form>
    <p v-if="error" role="alert">{{ error }}</p>
  </main>
</template>

<style>
* {
  box-sizing: border-box;
}
body {
  margin: 0;
  color: #171717;
  background: #f7f8fa;
  font-family: 'Courier New', monospace;
}
main {
  min-height: 100svh;
  display: flex;
  flex-direction: column;
}
header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 16px;
  padding: 20px 24px;
}
h1 {
  margin: 0;
  font-size: 22px;
  letter-spacing: 0;
}
h1 span {
  color: #08754c;
}
.gradient {
  height: 65svh;
  min-height: 280px;
}
.controls {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 24px;
  padding: 24px;
}
label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-size: 14px;
}
select {
  min-height: 44px;
  max-width: 100%;
  padding: 8px;
  border: 1px solid #737373;
  border-radius: 4px;
  background: white;
  color: inherit;
  font: inherit;
}
fieldset {
  margin: 0;
  padding: 0;
  border: 0;
}
legend {
  margin-bottom: 8px;
  font-size: 14px;
}
input[type='color'] {
  width: 44px;
  height: 44px;
  padding: 2px;
  border: 1px solid #737373;
  border-radius: 4px;
  background: white;
}
input[type='range'] {
  min-height: 44px;
  max-width: 100%;
  accent-color: #08754c;
}
.toggle {
  flex-direction: row;
  align-items: center;
  min-height: 44px;
}
input[type='checkbox'] {
  width: 20px;
  height: 20px;
  accent-color: #08754c;
}
:focus-visible {
  outline: 3px solid #171717;
  outline-offset: 3px;
}
p[role='alert'] {
  padding: 0 24px;
}
@media (max-width: 480px) {
  header,
  .controls {
    padding: 16px;
  }
  .controls > label:not(.toggle) {
    flex: 1 1 130px;
  }
}
</style>
