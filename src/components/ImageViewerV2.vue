<script lang="ts">
import { defineComponent } from "vue";
import ImgV1 from "./ImgV1.vue";

export default defineComponent({
    data() {
        return {
            images: [],
            loading: false,
        } as {
            images: Img[];
            loading: boolean;
        };
    },
    components: {
        ImgV1,
    },
    async created() {
        console.log("@Created call");
        let result: Img[] = [];

        const values = JSON.parse(localStorage.getItem("img-cache") ?? "[]");
        if (!values || values?.length <= 0) {
            const data: Img[] = await fetch(
                "https://picsum.photos/v2/list?page=8&limit=50"
            ).then((res) => res.json());
            localStorage.setItem("img-cache", JSON.stringify(data));
            result = data;
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
            try {
                const data: Img[] = await fetch(
                    "https://picsum.photos/v2/list?page=8&limit=50"
                ).then((res) => res.json());
                localStorage.setItem("img-cache", JSON.stringify(data));
                this.images = data;
            } catch (err) {
                console.log("@Error Getting images");
            }
        },
    },
});

type Img = {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
};
</script>

<template>
    <section class="row items-center">
        <h2
            v-show="!images?.length"
            class="font-semibold text-2xl w-full text-center my-2"
        >
            No Images Found!
        </h2>
        <div class="font-semibold text-2xl w-full row justify-between my-2">
            <button @click="fetchData" class="btn btn-warning btn-outline">
                Fetch New
            </button>
            <button class="btn btn-error btn-outline" @click="clearData">
                Clear Storage
            </button>
        </div>
        <div
            v-show="images?.length > 0"
            v-for="(image, i) in images"
            :key="i"
            class="lg:flex-[30%] m-3 sm:flex-[50%] flex-[100%]"
        >
            <ImgV1 :src="image.download_url" :alt="image.author" />
        </div>
    </section>
</template>
