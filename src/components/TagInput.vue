<template>
  <div
    class="app-input h-11 focus-within:outline-none focus-within:border-primary"
  >
    <div
      v-for="(tag, index) in tags"
      :key="tag"
      class="tag-input__tag h-6 mr-2 px-2 rounded-md inline-block leading-6"
    >
      {{ tag }}
      <input
        class="appearance-none"
        tabindex="-1"
        type="checkbox"
        name="tags"
        :value="tag"
        checked
      />
      <span @click="removeTag(index)">x</span>
    </div>
    <VInput
      type="text"
      name="tag"
      placeholder="Enter a tag"
      class="inline-block my-2"
      :classes="{
        input: 'appearance-none focus:outline-none',
        text: 'visually-hidden'
      }"
      @keydown.enter="addTag"
      @keydown.188="addTag"
      @keydown.delete="removeLastTag"
    ></VInput>
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
export default class SearchBar extends Vue {
  tags: Array<string> = []

  addTag(event: Event) {
    event.preventDefault()
    const target = event.target as HTMLTextAreaElement
    const val = target.value.trim()

    if (val.length > 0) {
      this.tags.push(val)
      target.value = ''
    }
  }

  removeTag(index: number) {
    this.tags.splice(index, 1)
  }

  removeLastTag(event: Event) {
    event.preventDefault()
    const target = event.target as HTMLTextAreaElement
    const val = target.value.trim()

    if (val.length === 0) {
      this.removeTag(this.tags.length - 1)
    }
  }
}
</script>

<style scoped>
.tag-input__tag {
  background-color: #eee;
}

.tag-input__tag > span {
  cursor: pointer;
  opacity: 0.75;
}
</style>
