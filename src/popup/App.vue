<template>
  <main id="popup-main" class="relative">
    <component
      @onComponentChange="handleComponentChange"
      v-bind:is="currentComponent"
      v-bind="currentComponentProps"
    ></component>
  </main>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import AppMain from '@/components/AppMain.vue'
import AppEditForm from '@/components/AppEditForm.vue'

@Component({
  components: {
    AppMain,
    AppEditForm
  }
})
export default class App extends Vue {
  private component = 'AppMain'
  private componentProps = {}

  get extName() {
    return browser.i18n.getMessage('extName')
  }

  get currentComponent() {
    return this.component
  }

  get currentComponentProps() {
    return this.componentProps
  }

  mounted() {
    browser.runtime.sendMessage({})
  }

  handleComponentChange(componentName: string, options: object) {
    this.component = componentName
    Object.assign(this.componentProps, { ...options })
  }
}
</script>

<style lang="scss" scoped>
#popup-main > div {
  width: 100%;
  height: 100vh;
}
</style>
