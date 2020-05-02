<template>
  <div class="applist px-3 pb-2 h-full">
    <dl>
      <slot :docs="docs"></slot>
    </dl>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { AppDocument, DocumentResponse } from '@/common/interfaces'

@Component
export default class App extends Vue {
  docs: Array<DocumentResponse> = []

  created() {
    this.getApps()
  }

  async getApps() {
    try {
      const result = await this.$db.local.allDocs<AppDocument>({
        // eslint-disable-next-line @typescript-eslint/camelcase
        include_docs: true,
        attachments: true
      })

      this.docs = result.rows.filter(res => res.doc?.$type == 'app')
    } catch (err) {
      console.log(err)
    }
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
