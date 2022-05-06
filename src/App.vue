<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <router-view />
  </main>
  <FloatContenter v-slot="slotValue">
    <!-- 传递进来的 slotValue 作为默认组件的 props 传递给子组件 -->
    <TheImage v-bind="slotValue" />
  </FloatContenter>
</template>
