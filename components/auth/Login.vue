<template>
    <form :schema="schema" :state="userInfo" @submit="signInUser">
        <div class="form-control w-full mt-2">
            <label class="label" name="userId">
                <span class="label-text">ユーザーID</span>
            </label>
            <input type="text" placeholder="ユーザーID" class="input input-bordered w-full" v-model.trim="userInfo.userId" />
        </div>
        <div class="form-control w-full">
            <label class="label" name="password">
                <span class="label-text">パスワード</span>
            </label>
            <input type="password" placeholder="パスワード" class="input input-bordered w-full" v-model.trim="userInfo.password" />
        </div>
        <div class="form-control mt-6 w-full">
            <button type="submit" class="btn btn-primary font-medium w-full">ログイン</button>
        </div>
    </form>
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
import { z } from 'zod'
const { signIn } = useAuth()
const schema = z.object({
    userId: z
        .string({ required_error: '必須項目です', invalid_type_error: '入力値に誤りがります' })
        .regex(/^[a-zA-Z0-9]+$/, { message: '半角英数字で入力してください' })
        .min(8, { message: '8文字以上で入力してください。' })
        .max(15, { message: '15文字以下で入力してください。' }),

    password: z
        .string({ required_error: '必須項目です', invalid_type_error: '入力値に誤りがります' })
        .regex(/^[a-zA-Z0-9]+$/, { message: '半角英数字で入力してください' })
        .min(8, { message: '8文字以上で入力してください。' })
        .max(15, { message: '15文字以下で入力してください。' }),
})
type Schema = z.output<typeof schema>

const validateUserId = () => {
    
}

const userInfo = reactive({
  userId: undefined,
  password: undefined
})
// const userId: Ref<string> = ref('')
// const password: Ref<string> = ref('')
const emit = defineEmits(['isLoading'])


const signInUser = async () => {
    try {
        emit('isLoading', true)
        // const result = await signIn('credentials', {
        //     name: userId.value,
        //     password: password.value
        // }, {
        //     redirect: '/'
        // })
        // if (result?.ok && !result.error) {
        //     console.log('Successfully LoggedIn')
        // } else {
        //     console.log('Something Went Wrong')
        // }
    } catch (error) {

    } finally {
        emit('isLoading', false)
    }
}
</script>