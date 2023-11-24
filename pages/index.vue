<template>
  <NuxtLayout>
    <template #searchInput>
      <SearchInput />
    </template>
    <template #scoreCard>
      <ComedianCard v-for="comedian in comedians" :key="comedian.id" :comedian="comedian" @click="openModal(comedian)" />
    </template>
  </NuxtLayout>
  <ModalContent v-show="modalState.showModal" @close="modalState.showModal=false"/>
</template>

<script setup lang='ts'>
// const comedians = ref([])
const comedians = [
  {id: 'dddd', name: 'sary', avgScrore: 96, score: 99}
]
const modalState = reactive({
  showModal: false,
  selectedComedian: ''
})
// provide('selectedComedian', modalState.selectedComedian)
const openModal = (comedian) => {
    modalState.selectedComedian = comedian;
    modalState.showModal = true;
};
</script>