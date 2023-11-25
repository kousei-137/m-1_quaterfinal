<template>
    <div class="form-control w-full mt-2">
        <label class="label">
            <span class="label-text">ユーザーID</span>
        </label>
        <input type="text" placeholder="ユーザーID" class="input input-bordered w-full" v-model="userId" />
    </div>
    <div class="form-control w-full">
        <label class="label">
            <span class="label-text">パスワード</span>
        </label>
        <input type="password" placeholder="パスワード" class="input input-bordered w-full" v-model="password" />
    </div>
    <div class="form-control w-full">
        <label class="label">
            <span class="label-text">確認用パスワード</span>
        </label>
        <input type="password" placeholder="確認用パスワード" class="input input-bordered w-full" v-model="comfirmPassword" />
    </div>
    <div class="form-control mt-6 w-full">
        <button class="btn btn-primary w-full">登録</button>
    </div>
    <div class="w-full flex items-center justify-between py-5">
        <hr class="w-full bg-gray-400">
        <p class="text-base font-medium leading-4 px-2.5 text-gray-400">
            OR
        </p>
        <hr class="w-full bg-gray-400">
    </div>
    <TwitterLogin />
</template>

<script setup lang='ts'>
const userId: Ref<string> = ref('')
const password: Ref<string> = ref('')
const comfirmPassword: Ref<string> = ref('')
</script>