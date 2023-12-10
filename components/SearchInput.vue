<template>
  <div class="flex justify-center items-center py-6 bg-gray-100">
    <div>
      <details class="dropdown">
        <summary class="btn p-0 bg-transparent border-none">
          <IconSort />
        </summary>
        <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li><button @click="useSortComediansByScore">点数で並び替え</button></li>
          <li><button @click="useSortComediansByName">名前で並び替え</button></li>
        </ul>
      </details>
    </div>

    <div class="relative w-[calc(70%)]">
      <input v-model="searchValue" @input="isShowFilter = true" type="search" placeholder="Search..." class="neu-input" />
      <i class="absolute inset-y-0 right-0 flex items-center pr-3 shadow-sm hover:shadow-2xl">
        <IconSearch />
      </i>
      <FilterdModal v-show="searchValue?.length > 0 && isShowFilter" :searchValue="searchValue" @searched="setComedian" />
    </div>
    <!-- <IconSignout v-if="loggedIn" @click="signOut()" /> -->
    <div v-if="loggedIn">
      <details class="dropdown dropdown-end">
        <summary class="btn p-0 bg-transparent border-none">
          <IconSignout />
        </summary>
        <ul class="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li><button @click="signOut()">ログアウト</button></li>
        </ul>
      </details>
    </div>
  </div>
</template>
  
<script setup lang="ts">
import type { Comedian } from '@prisma/client';
const { signOut, status } = useAuth()
const searchValue: Ref<string> = ref('')
const emit = defineEmits(['searched'])
const isShowFilter: Ref<boolean> = ref(false)
const loggedIn = computed(() => status.value === 'authenticated')
const isDropdownOpen = ref(false)

const setComedian = (searchedComedian: Comedian) => {
  searchValue.value = searchedComedian.name
  isShowFilter.value = false
  emit('searched', searchedComedian)
}
</script>
  
<style>
/* Assuming you have @tailwind directives set up */
.neu-input {
  box-shadow: 4px 4px 6px #b8b9be, -4px -4px 6px #fff;
  @apply bg-gray-100 rounded-full py-2 pl-4 pr-10 w-full text-sm border border-transparent focus:outline-none;
}

.neu-input:focus {
  box-shadow: inset 4px 4px 6px #b8b9be, inset -4px -4px 6px #fff;
}
</style>
  