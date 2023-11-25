<template>
    <div class="form-control w-full mt-2">
        <label class="label">
            <span class="label-text">ユーザーID</span>
            <span class="label-text text-red-600" v-if="errors.userId">※{{ errors.userId._errors[0] }}</span>
        </label>
        <input type="text" placeholder="ユーザーID" class="input input-bordered w-full" @input="validate" v-model="userId" />
    </div>
    <div class="form-control w-full">
        <label class="label">
            <span class="label-text">パスワード</span>
            <span class="label-text text-red-600" v-if="errors.password">※{{ errors.password._errors[0] }}</span>
        </label>
        <input type="password" placeholder="パスワード" class="input input-bordered w-full" @input="validate"
            v-model="password" />
    </div>
    <div class="form-control w-full">
        <label class="label">
            <span class="label-text">確認用パスワード</span>
            <span class="label-text text-red-600" v-if="errors.comfirmPassword">※{{ errors.comfirmPassword._errors[0]
            }}</span>
        </label>
        <input type="password" placeholder="確認用パスワード" class="input input-bordered w-full" @input="validate"
            v-model="comfirmPassword" />
    </div>
    <div class="form-control mt-6 w-full">
        <button :disabled="isSubmitDisabled" @click="register" class="btn btn-primary w-full">登録</button>
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
import { z, ZodError } from 'zod'
const userId: Ref<string> = ref('')
const password: Ref<string> = ref('')
const comfirmPassword: Ref<string> = ref('')
const errors = ref({})
const emit = defineEmits(['isLoading'])


const schema = z.object({
    userId: z
        .string({ required_error: '必須項目です', invalid_type_error: '入力値に誤りがります' })
        .regex(/^[a-zA-Z0-9]+$/, { message: '半角英数字で入力してください' })
        .min(6, { message: '6文字以上で入力してください。' })
        .max(15, { message: '15文字以下で入力してください。' }),

    password: z
        .string({ required_error: '必須項目です', invalid_type_error: '入力値に誤りがります' })
        .regex(/^[a-zA-Z0-9]+$/, { message: '半角英数字で入力してください' })
        .min(6, { message: '8文字以上で入力してください。' })
        .max(15, { message: '15文字以下で入力してください。' }),
    comfirmPassword: z
        .string()
        .refine(() => comfirmPassword.value === password.value, {
            message: 'パスワードが異なります'
        })
})
type Schema = z.output<typeof schema>

const validate = () => {
    const result = schema.safeParse({ userId: userId.value, password: password.value, comfirmPassword: comfirmPassword.value })
    errors.value = result.success ? {} : result.error.format()
}

const isSubmitDisabled = computed(() => {
    return Object.keys(errors.value).length > 0;
});

const register = async () => {
    try {
        emit('isLoading', true)
        const { data, error } = await useFetch('/api/auth/register', {
            method: 'POST',
            body: {
                name: userId.value,
                password: password.value
            }
        })
        if (error.value) {
            console.log(error.value)
        }
        if (data.value) {
            console.log('Successfully Registered')
        }
    } catch (error) {
        console.log(error)
    } finally {
        emit('isLoading', false)
    }
}
</script>