<template>
    <div class="card glass shadow-xl m-3 card-shadow">
        <div class="relative">
            <h2 class="text-center py-3 text-xl w-full rounded-t-2xl text-violet-100 bg-slate-600 bg-opacity-70">
                {{ props.comedian?.name }}</h2>
            
            <div class="flex">
                <div class="card flex-1 m-3 text-center justify-center bg-neutral text-neutral-content">
                    <span class="text-2xl">{{ props.comedian?.averageScore?.toFixed(1) || 75}}</span>
                    <span>平均</span>
                </div>
                <div class="card flex-1 m-3 text-center justify-center bg-neutral text-neutral-content">
                    <!-- <input type="number" inputmode="numeric" v-model="userScore" min="50" max="100"> -->
                    <span class="text-2xl">{{ userScore?.score || '--' }}</span>
                    <span>採点</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang='ts'>
import type { Comedian, Score } from '@prisma/client';
import type { PropType } from 'vue';
import { string } from 'zod';
const {data} = useAuth()
const emit = defineEmits(['open'])
const props = defineProps({
    comedian: {
        type: Object as PropType<Comedian>,
        required: true
    },
    scoredData: {
        type: string
    }
})
const userScore: Ref<Score> = ref(computed(() => {
    return props.comedian.scores?.find(scoreObject => scoreObject.userId === data.value?.id)!
}))

</script>

<style>
.card-shadow {
  /* @apply bg-gray-100 py-2 pl-4 pr-10 w-full text-sm border border-transparent focus:outline-none; */
  box-shadow: 4px 4px 6px #b8b9be, -4px -4px 6px #fff;
}

.card-shadow:hover {
  box-shadow: inset 4px 4px 6px #b8b9be, inset -4px -4px 6px #fff;
}
</style>
