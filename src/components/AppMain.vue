<template>
  <div>
    <div class="flex flex-row justify-center py-4">
      <SearchBar class="w-3/4" />
    </div>
    <div class="w-full flex flex-row justify-center">
      <hr class="w-3/4" />
    </div>
    <AppList v-slot="{ docs }" class="applist">
      <AppCard
        v-for="doc in docs"
        :key="doc.key"
        :appDoc="doc.doc"
        :docId="doc.id"
        :docKey="doc.key"
        :docRev="doc.value.rev"
      />
    </AppList>
    <div class="w-full flex flex-row justify-end p-2 absolute bottom-0">
      <button
        @click="addApp"
        class="z-10 p-0 mx-3 w-10 h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
      >
        <FABPlusIcon />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SearchBar from '@/components/SearchBar.vue'
import AppCard from '@/components/AppCard.vue'
import AppList from '@/components/AppList.vue'
import { FormMode } from '@/common/enums'
import FABPlusIcon from './icons/FABPlusIcon.svg'

@Component({
  components: {
    SearchBar,
    AppList,
    AppCard,
    FABPlusIcon
  }
})
export default class AppMain extends Vue {
  addApp() {
    this.$emit('onComponentChange', 'AppEditForm', { mode: FormMode.Add })
  }
}
</script>

<style lang="scss">
.applist {
  max-height: var(--app-height);
}
</style>
