<script setup>


import {onMounted, ref} from 'vue';

onMounted(async () => {
  data.value = await fetch(import.meta.env.VITE_API_URL)
      .then(res => res.json());
});


let data = ref("");


</script>


<template>
  <div class="page">
    {{data}}
  </div>
</template>

<style scoped>
.page {
  font-size: 60px;
}
</style>
