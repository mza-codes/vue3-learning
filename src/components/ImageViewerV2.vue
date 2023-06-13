<script lang="ts">
import { defineComponent } from "vue";
import { fetchImages, genRandomNumber } from "../utils";
import ImgV2 from "./ImgV2.vue";

type Img = {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
};

export default defineComponent({
    name: "ImageViewerV2",
    data() {
        return {
            images: [] as Img[],
            loading: false,
        };
    },
    components: {
        ImgV2,
    },
    async created() {
        console.log("@Created call");
        let result: Img[] = [];

        const values = JSON.parse(localStorage.getItem("img-cache") ?? "[]");
        if (!values || values?.length <= 0) {
            const data = await fetchImages<Img[]>(6);
            if (data) result = data;
        } else if (values instanceof Array) {
            console.log("Values is instance of array!");
            result = values;
        }
        this.images = result;
    },
    methods: {
        clearData() {
            localStorage.removeItem("img-cache");
            this.images = [];
        },
        async fetchData() {
            const data = await fetchImages<Img[]>(genRandomNumber(15), 60);
            if (data) this.images = data;
            // toast an error
        },
    },
});
</script>

<template>
    <section class="row items-center py-6">
        <div class="font-semibold text-2xl w-full row justify-between my-2">
            <button @click="fetchData" class="btn btn-warning btn-outline">
                Fetch New
            </button>
            <span class="text-center font-semibold text-4xl">View Images</span>
            <button class="btn btn-error btn-outline" @click="clearData">
                Clear Storage
            </button>
        </div>
        <h2
            v-show="!images?.length"
            class="font-semibold text-2xl w-full text-center my-2"
        >
            No Images Found!
        </h2>
        <div
            v-show="images?.length > 0"
            v-for="(image, i) in images"
            :key="i"
            class="lg:flex-[30%] m-3 sm:flex-[50%] flex-[100%]"
        >
            <ImgV2 :src="image.download_url" :alt="image.author" />
            <span class="font-medium pt-4 text-white text-sm"
                >Captured By: <b>{{ image.author }}</b></span
            >
        </div>
    </section>
</template>
