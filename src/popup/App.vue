<template>
  <main id="popup-main">
    <div class="flex flex-row justify-center py-4">
      <SearchBar class="w-3/4" />
    </div>
    <div class="w-full flex flex-row justify-center">
      <hr class="w-3/4" />
    </div>
    <AppList v-slot="{ docs }">
      <AppCard
        v-for="doc in docs"
        :key="doc.key"
        :appDoc="doc.doc"
        :docId="doc.id"
        :docKey="doc.key"
        :docRev="doc.value.rev"
      />
    </AppList>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SearchBar from '@/components/SearchBar.vue'
import AppCard from '@/components/AppCard.vue'
import AppList from './AppList.vue'

@Component({
  components: {
    SearchBar,
    AppList,
    AppCard
  }
})
export default class App extends Vue {
  get extName() {
    return browser.i18n.getMessage('extName')
  }

  mounted() {
    browser.runtime.sendMessage({})
  }
}
</script>

<style lang="scss" scoped>
#popup-main {
  width: 100%;
  height: 100vh;
}
</style>
