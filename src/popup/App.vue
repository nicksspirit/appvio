<template>
  <main id="popup-main">
    <div class="flex flex-row justify-center py-4">
      <SearchBar />
    </div>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SearchBar from '@/components/SearchBar.vue'

@Component({
  components: {
    SearchBar
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
