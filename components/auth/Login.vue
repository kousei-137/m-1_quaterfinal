<template>
    <!-- <form @submit.prevent="signInUser"> -->
        <div class="form-control w-full mt-2">
            <label class="label" name="userId">
                <span class="label-text mr-3">ユーザーID</span>
                <span class="label-text text-red-600" v-if="errors.userId">※{{ errors.userId._errors[0] }}</span>
            </label>
            <input type="text" placeholder="ユーザーID" class="input input-bordered w-full" @input="validate" v-model.trim="userId" />
        </div>
        <div class="form-control w-full">
            <label class="label" name="password">
                <span class="label-text mr-3">パスワード</span>
                <span class="label-text text-red-600" v-if="errors.password">※{{ errors.password._errors[0] }}</span>
            </label>
            <input type="password" placeholder="パスワード" class="input input-bordered w-full" @input="validate" v-model.trim="password" />
        </div>
        <div class="form-control mt-6 w-full">
            <button :disabled="isSubmitDisabled" @click="signInUser" class="btn btn-primary font-medium w-full">ログイン</button>
        </div>
    <!-- </form> -->
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
const { signIn } = useAuth()
const userId: Ref<string> = ref('')
const password: Ref<string> = ref('')
const errors = ref({})
// const errors: Ref<Object | ZodError<{ userId: string; password: string; }>> = ref({})
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
})
type Schema = z.output<typeof schema>

const validate = () => {
    const result = schema.safeParse({userId: userId.value, password: password.value})
    errors.value = result.success ? {} : result.error.format()
}

const isSubmitDisabled = computed(() => {
  return Object.keys(errors.value).length > 0;
})
const emit = defineEmits(['isLoading'])


const signInUser = async () => {
    try {
        emit('isLoading', true)
        const result = await signIn('credentials', {
            name: userId.value,
            password: password.value
        }, {
            redirect: '/'
        })
        if (result?.ok && !result.error) {
            console.log('Successfully LoggedIn' + result)
        } else {
            console.log('Something Went Wrong')
        }
    } catch (error) {

    } finally {
        emit('isLoading', false)
    }
}
</script>