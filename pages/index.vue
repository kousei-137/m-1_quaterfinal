<template>
  <NuxtLayout>
    <template #searchInput>
      <SearchInput @searched="scrollToComedian" />
    </template>
    <template #comedianCard>
      <ComedianCard v-for="comedian in comedians" :key="comedian.id" :id="comedian.id" :comedian="comedian" @click="openModal(comedian)" />
    </template>
  </NuxtLayout>
  <!-- <div class="flex flex-col h-screen overflow-auto">
    <div class="fixed bg-gray-100 w-full  z-10">
      <SearchInput />
    </div>
    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 w-full pt-16">
      <ComedianCard v-for="comedian in comedians" :key="comedian.id" :comedian="comedian" @click="openModal(comedian)" />
    </div>
  </div> -->
  <ModalContent v-show="modalState.showModal" @close="modalState.showModal=false" :comedian="modalState.selectedComedian"/>
</template>

<script setup lang='ts'>
import type { Comedian } from '@prisma/client';
const comedians: Ref<Comedian[]> = useState('comedians')

// const comedians = ref([])
// const comedians: Ref<Comedian[]> = ref([])
const modalState = reactive({
  showModal: false,
  selectedComedian: {}
})
// provide('selectedComedian', modalState.selectedComedian)
const openModal = (comedian: Comedian) => {
    modalState.selectedComedian = comedian;
    modalState.showModal = true;
};
// const comedians: Comedian[] = await useAllComedian()
// const state = useState('comedians', () => {
//   shallowRef(comedians)
// })
const scrollToComedian = (searchedComedian: Comedian) => {
  const element = document.getElementById(searchedComedian.id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

</script>