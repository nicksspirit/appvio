<template>
  <div class="searchbar">
    <VInput
      label="Search for apps by name or tag"
      :classes="{
        input:
          'w-full px-3 py-2 appearance-none leading-tight \
          border border-solid rounded-md \
          focus:outline-none focus:border-primary',
        text: 'visually-hidden'
      }"
      placeholder="Search"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { VInput } from 'vuetensils'

@Component({
  components: {
    VInput
  }
})
export default class SearchBar extends Vue {}
</script>

<style></style>
