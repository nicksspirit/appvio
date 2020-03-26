<template>
  <div class="applist px-3">
    <dl>
      <slot :appData="appData"></slot>
    </dl>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppData } from '@/common/interfaces'
import axios from 'axios'

@Component
export default class App extends Vue {
  appData: Array<AppData> = []

  created() {
    this.getApps()
  }

  async getApps() {
    const response = await axios.get<Array<AppData>>(
      'http://localhost:3004/apps'
    )

    this.appData = response.data
  }
}
</script>

<style lang="scss">
.applist {
  max-height: var(--app-height);
  overflow: hidden;
  overflow-y: scroll;
}
</style>
