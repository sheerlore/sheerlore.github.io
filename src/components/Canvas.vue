<script setup lang="ts">
import p5 from 'p5';
import { onMounted, ref } from 'vue';

const canvas = ref<HTMLElement | null>(null)
const p5Object = ref<p5>()

const sketch = function (p: p5) {
  p.setup = () => {
    p.createCanvas(300, 300)
    p.noLoop()
  }

  p.draw = () => {
    // p.background(200)

    p.translate(0, -20, 0)

    p.strokeWeight(0)
    p.fill(200, 0, 0)
    p.ellipse(60, 180, 10, 10)
    p.ellipse(50, 170, 10, 10)
    p.ellipse(20, 180, 10, 10)

    // bbbb
    p.strokeWeight(0)
    p.fill(250, 250, 0)
    p.ellipse(230, 180, 60, 30)
    p.quad(200, 180, 195, 132, 265, 132, 260, 180)
    p.strokeWeight(3)
    p.stroke(220, 220, 0)
    p.fill(150, 150, 0)
    p.ellipse(230, 130, 70, 30)

    p.translate(0, 20, 0)
    // hole
    p.strokeWeight(4)
    p.stroke(200, 200, 200)
    p.fill(96, 128, 200)
    p.ellipse(p.width / 2, p.height * 3 / 4, 250, 80)
  }
}

onMounted(() => {
  if (canvas.value == null) return
  p5Object.value = new p5(sketch, canvas.value)
})

</script>

<template>
  <div ref="canvas"></div>
</template>
