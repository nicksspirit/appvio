<template>
  <div class="searchbar w-3/4">
    <VInput
      :classes="{
        input:
          'w-full px-3 py-2 appearance-none leading-tight \
          border border-solid rounded-md \
          focus:outline-none focus:border-primary'
      }"
      placeholder="Search..."
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

<style lang="scss"></style>
