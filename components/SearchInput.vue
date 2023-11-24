<template>
  <div class="flex justify-center py-6 bg-gray-100">
    <div class="relative w-[calc(80%)]">
      <input v-model="searchValue" type="search" placeholder="Search..." class="neu-input" />
      <button class="absolute inset-y-0 right-0 flex items-center pr-3 shadow-sm hover:shadow-2xl">
        <IconSearch />
      </button>
      <FilterdModal v-show="searchValue.length > 0" :searchValue="searchValue" @selectedComedian="emit('selectedComedian', )"/>
    </div>
  </div>

</template>
  
<script setup lang="ts">
import type { Comedian } from '@prisma/client';
const searchValue: Ref<string> = ref('')
const filteredComedian: Ref<Comedian[]> = ref([])
const emit = defineEmits(['selectedComedian'])

// watchEffect(() => {
//     filteredComedian.value = props.comedianObjects.filter((comedian) => {
//         return comedian.comedianName.startsWith(searchValue.value)
//         // console.log(searchValue.value + comedian)
//     })
// })

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
  