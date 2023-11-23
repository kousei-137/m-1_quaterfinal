<template>
    <div class="bg-gray-100 p-5 min-h-screen">
        <!-- 検索バー -->
        <div class="fixed z-40 w-full">
            <slot name="searchInput"></slot>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 w-full pt-16">
            <slot name="scoreCard"></slot>
        </div>
    </div>
</template>

<script setup lang='ts'>

</script>