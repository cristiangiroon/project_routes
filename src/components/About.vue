<template>
  <div>
    <h1>This is an about page</h1>
    <p>User ID: User {{ id ? id : 0 }}</p>
  </div>
</template>

<script setup>
defineProps({
  id: Number,
})
</script>
