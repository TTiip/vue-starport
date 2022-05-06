<template>
  <div>
    <!-- 这里的 v-bind 绑定attrs 将外部传入的属性绑定到 slot 对应的组件上 -->
    <slot v-bind="metdata.attrs" />
  </div>
</template>

<script setup lang="ts">
  import { metdata } from '~/utils/Float'
</script>
