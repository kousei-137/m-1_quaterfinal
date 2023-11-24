<template>
  <NuxtLayout>
    <template #searchInput>
      <SearchInput />
    </template>
    <template #comedianCard>
      <ComedianCard v-for="comedian in comedians" :key="comedian.id" :comedian="comedian" @click="openModal(comedian)" />
    </template>
  </NuxtLayout>
  <ModalContent v-show="modalState.showModal" @close="modalState.showModal=false"/>
</template>

<script setup lang='ts'>
import type { Comedian } from '@prisma/client';
// const comedians = ref([])
const comedians: Ref<Comedian[]> = ref([])
const modalState = reactive({
  showModal: false,
  selectedComedian: {}
})
// provide('selectedComedian', modalState.selectedComedian)
const openModal = (comedian: Comedian) => {
    modalState.selectedComedian = comedian;
    modalState.showModal = true;
};
comedians.value = await useAllComedian()

</script>