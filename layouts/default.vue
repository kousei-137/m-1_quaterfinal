<template>
    <div class="bg-gray-100 flex flex-col h-screen overflow-auto">
        <!-- 検索バー -->
        <div class="fixed z-20 w-full">
            <slot name="searchInput"></slot>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 w-full pt-20">
            <slot name="comedianCard"></slot>
        </div>
    </div>
</template>

<script setup lang='ts'>

</script>