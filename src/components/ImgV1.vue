<script setup lang="ts">
defineProps(["src", "alt", "others"]);
</script>
<template>
    <img
        v-lazy="src"
        :alt="alt"
        class="max-w-full object-cover rounded-md"
        loading="lazy"
    />
</template>
