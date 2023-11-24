<template>
    <div class="flex justify-center py-6 bg-gray-100">
      <div class="relative w-[calc(80%)]">
        <input 
          v-model="searchQuery" 
          type="search" 
          placeholder="Search..." 
          class="neu-input"
        />
        <button class="absolute inset-y-0 right-0 flex items-center pr-3 shadow-sm hover:shadow-2xl">
          <IconSearch />
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const searchQuery = ref('');
  </script>
  
  <style>
  /* Assuming you have @tailwind directives set up */
  .neu-input {
    @apply bg-gray-100 rounded-full py-2 pl-4 pr-10 w-full text-sm border border-transparent focus:outline-none;
    box-shadow: 4px 4px 6px #b8b9be, -4px -4px 6px #fff;
  }
  
  .neu-input:focus {
    box-shadow: inset 4px 4px 6px #b8b9be, inset -4px -4px 6px #fff;
  }
  </style>
  