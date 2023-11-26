<template>
    <dialog class="modal modal-bottom sm:modal-middles bg-slate-700 bg-opacity-50" open>

        <div class="modal-box">
            <div role="tablist" class="tabs tabs-boxed w-full">
                <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="ログイン" checked />
                <div role="tabpanel" class="tab-content">
                    <div class="flex flex-col items-center justify-center p-6">
                        <AuthLogin />
                    </div>
                </div>

                <input type="radio" name="my_tabs_1" role="tab" class="tab" aria-label="登録" />
                <div role="tabpanel" class="tab-content">
                    <AuthSignUp />
                </div>

            </div>

        </div>

        <form method="dialog" class="modal-backdrop" @click="emit('close', true)"></form>

    </dialog>
</template>
  
<script setup>

// ここに認証ロジックを追加します
</script>
  
<style>
/* ここに必要なCSSを追加 */
</style>
  