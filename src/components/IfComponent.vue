<script setup lang="ts">
import { ref } from "vue";
const show = ref();
</script>

<template>
    <button class="btn btn-primary" @click="show = !show">Show Message</button>
    <Transition>
        <span v-if="show" class="font-semibold">I'm Here</span>
    </Transition>
</template>
