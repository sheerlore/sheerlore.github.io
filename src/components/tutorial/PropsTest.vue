<script setup lang="ts">

defineProps({
  msg: String
})
const emit = defineEmits(['response'])

</script>

<template>
  <h2 @click="emit('response', msg)">{{ msg || "No props passed yet" }}</h2>
</template>
