<template>
    <div class="card glass shadow-xl m-7">
        <div class="relative">
            <h2 class="text-center py-3 text-xl w-full text-violet-100 bg-slate-600 bg-opacity-70">
                {{ props.comedian?.name }}</h2>
            
            <div class="flex">
                <div class="card flex-1 m-3 text-center justify-center bg-neutral text-neutral-content">
                    <span class="text-2xl">{{ $props.comedian?.avgScrore || 75}}</span>
                    <span>平均</span>
                </div>
                <div class="card flex-1 m-3 text-center justify-center bg-neutral text-neutral-content">
                    <!-- <input type="number" inputmode="numeric" v-model="userScore" min="50" max="100"> -->
                    <span class="text-2xl">{{ $props.comedian?.score || '--' }}</span>
                    <span>採点</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
const emit = defineEmits(['open'])
const props = defineProps({
    comedian: {
        type: Object,
        required: true
    }
})
console.log(props.comedian)
</script>