<script setup lang="ts">
import { ref } from 'vue';
import Canvas from './components/Canvas.vue';
import HeadingText from './components/HeadingText.vue';
import Links from './components/Links.vue';
import { WorkData } from './utils';

const selectWork = ref<WorkData>({ name: '', url: '' })

function selectEvent(work: WorkData) {
  selectWork.value = work;
}
</script>

<template>
  <div>
    <HeadingText text="uai" />
    <HeadingText text="-Link-" size="h2" />
    <Links @select-work="selectEvent" />
    <Canvas :work="selectWork" />
  </div>
</template>

<style scoped>
</style>
