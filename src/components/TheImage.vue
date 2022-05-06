<template>
  <!-- 公用属性可以在这里直接定义 -->
  <div overflow-hidden transition-all @click="a = !a">
    <img v-if="a" src="https://images.unsplash.com/photo-1651440391743-ef05664bbc93?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="">
    <img v-else src="https://images.unsplash.com/photo-1651743425430-26fd8e4c6ddf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80" alt="">
  </div>
</template>

<script	lang="ts" setup>
  const a = $ref(true)
</script>
