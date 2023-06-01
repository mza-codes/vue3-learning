<script setup lang="ts">
import { Transition, ref } from "vue";

const show = ref();
</script>
<template>
    <button @click="show = true" class="btn btn-error">Toggle modal</button>
    <Transition type="animation">
        <!-- can be replaced with `v-if` -->
        <section v-show="show" class="fixed inset-0 bg-black/40 col center z-10 p-4">
            <div class="bg-white rounded-lg py-8 px-6 relative max-w-lg text-black">
                <button
                    @click.stop="show = false"
                    class="btn btn-xs btn-circle btn-warning absolute right-1 top-1"
                >
                    x
                </button>
                <span class="text-sm font-semibold"
                    >Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
                    quas sequi enim illum sunt aliquam dicta voluptatum totam perferendis
                    minus error, tenetur sint nobis tempore iste eaque nam impedit, qui
                    eligendi cupiditate? Eius placeat libero quas incidunt culpa quasi
                    sapiente hic quod corporis molestias facere neque fuga, itaque id
                    saepe laudantium beatae, reiciendis ipsam animi ducimus quidem aliquam
                    omnis veritatis. Eligendi ea saepe repudiandae, id suscipit,
                    doloremque totam, nemo hic incidunt aliquid perferendis. Eveniet
                    minima esse inventore! Velit ad commodi vel deleniti consequatur
                    reiciendis fugit. Recusandae aliquam delectus molestias cupiditate.
                    Alias, exercitationem nisi accusantium culpa repellat odio, amet illum
                    vel possimus fugit maiores quidem, rem molestias quis? Hic assumenda,
                    qui beatae eligendi quasi minus veniam.</span
                >
            </div>
            <span>Hi there</span>
        </section>
    </Transition>
</template>
