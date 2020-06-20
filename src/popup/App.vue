<template>
  <main id="popup-main" class="relative">
    <component v-bind:is="currentComponent" class="tab"></component>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppMain from '@/components/AppMain.vue'

@Component({
  components: {
    AppMain
  }
})
export default class App extends Vue {
  private component = 'AppMain'

  get extName() {
    return browser.i18n.getMessage('extName')
  }

  get currentComponent() {
    return this.component
  }

  mounted() {
    browser.runtime.sendMessage({})
  }
}
</script>

<style lang="scss" scoped>
#popup-main > div {
  width: 100%;
  height: 100vh;
}
</style>
