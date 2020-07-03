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
        class="p-0 mx-3 w-10 h-10 bg-red-600 rounded-full hover:bg-red-700 active:shadow-lg mouse shadow transition ease-in duration-200 focus:outline-none"
      >
        <svg
          viewBox="0 0 20 20"
          enable-background="new 0 0 20 20"
          class="w-6 h-6 inline-block"
        >
          <path
            fill="#FFFFFF"
            d="M16,10c0,0.553-0.048,1-0.601,1H11v4.399C11,15.951,10.553,16,10,16c-0.553,0-1-0.049-1-0.601V11H4.601
                                    C4.049,11,4,10.553,4,10c0-0.553,0.049-1,0.601-1H9V4.601C9,4.048,9.447,4,10,4c0.553,0,1,0.048,1,0.601V9h4.399
                                    C15.952,9,16,9.447,16,10z"
          />
        </svg>
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

@Component({
  components: {
    SearchBar,
    AppList,
    AppCard
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
