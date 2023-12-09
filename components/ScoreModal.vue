<template>
    <dialog class="modal modal-bottom sm:modal-middle bg-slate-700 bg-opacity-50" open>
        <div class="modal-box">
            <div v-if="!isLoading">
                <div class="flex flex-col h-full">
                    <h2 class="flex-1 font-bold text-2xl">{{ props.comedian?.name }}</h2>
                    <!-- <input v-model="score" type="tel" inputmode="numeric" class="flex-1 mx-4 w-10 h-20 text-2xl"> -->
                    <div class="flex-1 form-control w-full max-w-xs">
                        <label class="label">
                            <span class="label-text" :class="{ 'text-red-600': isError }">50~100までの数字を入力してください</span>
                        </label>
                        <input v-model="score" type="text" placeholder="Type here"
                            class="input input-bordered w-full max-w-xs" />
                    </div>
                </div>
                <div class="modal-action">
                    <button class="btn" @click="emit('close', true)">Close</button>
                    <button class="btn" :disabled="isError" @click="registerScore">確定</button>
                </div>
            </div>
            <div v-else class="w-full flex justify-center">
                <span class="loading loading-dots block w-24 my-10"></span>
            </div>
        </div>
        <form method="dialog" class="modal-backdrop" @click="emit('close', true)"></form>
    </dialog>
</template>

<script setup lang='ts'>
import type { Comedian } from '@prisma/client';
import type { SessionData } from '@sidebase/nuxt-auth/dist/runtime/composables/useAuthState';
import type { PropType } from 'vue';
import { useUpdateAverageScore } from '~/composables/useUpdateAverageScore';
const { data } = useAuth()
// const selectedComedian = inject(selectedComedian)
const props = defineProps({
    comedian: Object as PropType<Comedian>
})
const emit = defineEmits(['close', 'score'])
const isError: Ref<boolean> = ref(false)
const isLoading: Ref<boolean> = ref(false)
const score: Ref<string> = ref("")
const userData: Ref<SessionData> = ref(null)
const validateScore = (score: string): boolean => {
    score = score.toLowerCase()
    const num = parseInt(score)
    const containsNonNumeric = /\D/.test(score);
    if (isNaN(num) || num < 50 || num > 100 || containsNonNumeric) {
        isError.value = true
        return false
    } else {
        isError.value = false
        return true
    }
}
watchEffect(() => {
    validateScore(score.value)
})
watchEffect(() => {
    userData.value = data.value
})
const registerScore = async () => {
    try {
        isLoading.value = true
        const { data, error } = await useFetch('/api/score', {
            method: 'POST',
            body: {
                score: parseInt(score.value),
                userId: userData.value?.id,
                comedianId: props.comedian?.id
            }
        })
        if (error.value) {
            //要エラー処理
            window.alert(error.value)
            isLoading.value = false
            emit('close', true)
        } else if (data.value) {
            score.value=''
            isLoading.value = false
            emit('close', true)
            await useAllComedian()
            return await useUpdateAverageScore(props.comedian?.id!)
        }
    } catch (error) {
        throw createError({
            statusCode: 401,
            message: '得点の登録に失敗しました'
        })
    } finally {
    }
}
</script>