<template>
    <div class="fixed inset-0 bg-gray-600 z-30 bg-opacity-50 overflow-y-auto h-full w-full" @click.self="close">
        <ModalContent />
    </div>
</template>

<script setup lang='ts'>
const props = defineProps({
    comedians: Object
})
const emit = defineEmits(['close', 'score'])
// const isOpen = ref(false)
// watchEffect(() => {
//     isOpen.value = !!props.comedians
// })
// onMounted(() => {
//     isOpen.value = !!props.comedians
// })
</script>