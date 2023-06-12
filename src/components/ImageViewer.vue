<script setup lang="ts">
import { onBeforeMount, ref } from "vue";
import ImgV1 from "./ImgV1.vue";
import { fetchImages } from "../utils";

const img = {
    id: "102",
    author: "Ben Moore",
    width: 4320,
    height: 3240,
    url: "https://unsplash.com/photos/pJILiyPdrXI",
    download_url: "https://picsum.photos/id/102/4320/3240",
};

type Img = typeof img;

const images = ref<Img[]>([]);

onBeforeMount(async () => {
    const data = await fetchImages<Img[]>();
    if (data) images.value = data;
});
</script>

<template>
    <section class="row items-center">
        <div
            v-for="(image, i) in images"
            :key="i"
            class="lg:flex-[30%] m-3 md:flex-[50%] sm:flex-[100%]"
        >
            <ImgV1 :src="image.download_url" :alt="image.author" />
        </div>
    </section>
</template>
