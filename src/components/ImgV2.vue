<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "ImgV2",
    props: {
        src: String,
        alt: String,
        other: Object,
    },
});
</script>
<template>
    <img
        v-lazy="src"
        :alt="alt"
        class="max-w-full object-cover rounded-md load-image"
        @load="
            // @ts-expect-error property does not exist
            $event.currentTarget?.classList?.remove(`load-image`)
        "
    />
</template>

<style scoped>
.load-image {
    @apply animate-pulse bg-blue-50/50;
}
</style>
