<template>
  <button
    aria-label="CTwitterでログイン"
    class="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex justify-center items-center w-full"
    @click="signIn('twitter', { callbackUrl: '/' })"
  >
    <IconTwitter />
    <p class="text-center font-medium ml-2 text-gray-700">
      Twitterでログイン
    </p>
  </button>
</template>
<script setup lang="ts">
const { signIn } = useAuth()
</script>
