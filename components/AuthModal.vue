<template>
    <dialog class="modal modal-bottom sm:modal-middle md:modal-middle bg-slate-700 bg-opacity-50" open>
        <div class="modal-box">
            <div v-if="!isLoading" role="tablist" class="tabs tabs-boxed w-full">
                <input type="radio" name="my_tabs_1" role="tab" class="tab w-full" aria-label="ログイン" checked />
                <div role="tabpanel" class="tab-content">
                    <div class="flex flex-col items-center justify-center p-3">
                        <AuthLogin @isLoading="handleLoading" />
                    </div>
                </div>

                <input type="radio" name="my_tabs_1" role="tab" class="tab w-full" aria-label="登録" />
                <div role="tabpanel" class="tab-content">
                    <div class="flex flex-col items-center justify-center p-3">
                        <AuthSignUp @isLoading="handleLoading" />
                    </div>
                </div>
            </div>
            <div v-else class="w-full flex justify-center">
                <span class="loading loading-dots block w-24 my-10"></span>
            </div>
        </div>

        <form method="dialog" class="modal-backdrop" @click="emit('close', true)"></form>
    </dialog>
</template>
  
<script setup lang="ts">
const emit = defineEmits(['close'])
const isLoading: Ref<boolean> = ref(false)

const handleLoading = (bool: boolean) => {
    isLoading.value = bool
}
</script>
  
<style>
/* ここに必要なCSSを追加 */
.tabs-boxed {
    padding: 0rem !important;
    background-color: rgba(255, 255, 255) !important
}
</style>
  