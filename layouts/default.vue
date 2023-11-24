<template>
    <div class="bg-gray-100 min-h-screen">
        <!-- 検索バー -->
        <div class="fixed z-20 w-full">
            <slot name="searchInput"></slot>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 w-full pt-16">
            <slot name="comedianCard"></slot>
        </div>
    </div>
</template>

<script setup lang='ts'>

</script>