<template>
  <div>
    <div>Foo</div>
    <button
      class="m-3 text-sm btn"
      @click="goBack"
    >
      goBack
    </button>
  </div>
</template>

<script setup lang="ts">
  const router = useRouter()
  const goBack = () => { router.go(-1) }
</script>
