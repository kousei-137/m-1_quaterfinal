<template>
  <NuxtLayout>
    <template #searchInput>
      <SearchInput @searched="scrollToComedian" />
    </template>
    <template #comedianCard>
      <ComedianCard v-for="comedian in comedians" :key="comedian.id" :id="comedian.id" :comedian="comedian"
        @click="openModal(comedian)" />
    </template>
  </NuxtLayout>
  <ScoreModal v-if="loggedIn" v-show="modalState.showModal" @close="modalState.showModal = false"
    :comedian="modalState.selectedComedian" />
  <AuthModal v-else v-show="modalState.showModal" @close="modalState.showModal = false" />
</template>

<script setup lang='ts'>
definePageMeta({
  auth: {
    unauthenticatedOnly: false,
  }
})
const { status, data, getSession } = useAuth()
const loggedIn = computed(() => status.value === 'authenticated')
import type { Comedian } from '@prisma/client';
const comedians: Ref<Comedian[]> = useState('comedians')
const modalState = reactive({
  showModal: false,
  selectedComedian: {} as Comedian
})
const openModal = (comedian: Comedian) => {
  modalState.selectedComedian = comedian;
  modalState.showModal = true;
};
const scrollToComedian = (searchedComedian: Comedian) => {
  const element = document.getElementById(searchedComedian.id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}
console.log(data.value)
</script>