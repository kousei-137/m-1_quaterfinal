<template>
    <div class="absolute z-50 mt-2 w-full overflow-hidden rounded-md bg-white">
        <ul class="absolutew-[calc(80%)]list-none">
          <li v-if="filteredComedians.length > 0" v-for="comedian in filteredComedians" :key="comedian.id"
            @click='emit("searched", comedian)'
            class="cursor-pointer hover:bg-yellow-50 hover:text-gray-900 px-4 py-2">
            {{ comedian.name }}
          </li>
          <li v-else class="px-4 py-2">検索結果はありません</li>
        </ul>
      </div>
</template>

<script setup lang='ts'>
import type { Comedian } from '@prisma/client';
import { useComediansStore } from '~/stores/comedians'

const props = defineProps({
    searchValue: {
        type: String,
        required: true
    }
})
const emit = defineEmits(['searched'])
// const searchValue: Ref<string> = ref('')
const comedians: Ref<Comedian[]> = useState('comedians')
const filteredComedians: Ref<Comedian[]> = ref([])
const searchedComedian: Ref<Comedian> = ref({} as Comedian)

watchEffect(() => {
    filteredComedians.value = comedians.value.filter((comedian) => {
        return comedian.name.startsWith(props.searchValue)
    })
})
// watchEffect(() => {
//   useState('searchedComedian', () => searchedComedian.value)
// })
</script>