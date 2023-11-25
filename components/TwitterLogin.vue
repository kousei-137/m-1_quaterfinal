<template>
  <button
    aria-label="Continue with twitter"
    class="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-4"
    @click="signIn('twitter', { callbackUrl: '/' })"
  >
    <IconTwitter />
    <p class="text-base font-medium ml-4 text-gray-700">
      Continue with Twitter
    </p>
  </button>
</template>
<script setup lang="ts">
const { signIn } = useAuth()
</script>
