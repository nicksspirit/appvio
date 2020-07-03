<template>
  <div class="p-3">
    <div class="appform__controls flex justify-end p-1">
      <button
        class="appform__controls__btn close-btn rounded-full 
        focus:outline-none focus:shadow-primaryoutline"
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path d="M6 18L18 6M6 6l12 12"></path>
        </svg>
      </button>
    </div>
    <VForm class="appform h-full" autocomplete="off" @submit.prevent="onSave">
      <template #default="form">
        <VInput
          class="appform__input"
          type="text"
          label="Name"
          name="name"
          :classes="{
            input:
              'w-full px-3 py-2 appearance-none leading-tight \
              border border-solid rounded-md \
              focus:outline-none focus:border-primary',
            text: 'text-base'
          }"
          required
        ></VInput>
        <VInput
          class="appform__input"
          type="text"
          label="URL"
          name="url"
          :classes="{
            input:
              'w-full px-3 py-2 appearance-none leading-tight \
              border border-solid rounded-md \
              focus:outline-none focus:border-primary',
            text: 'text-base'
          }"
          required
        ></VInput>
        <VInput
          class="appform__input"
          type="textarea"
          label="Description"
          name="description"
          :classes="{
            input:
              'w-full px-3 py-2 h-20 appearance-none leading-tight \
              border border-solid rounded-md \
              focus:outline-none focus:border-primary',
            text: 'text-base'
          }"
          required
        ></VInput>
        <div class="appform__input">
          <span class="text-base">Tags</span>
          <TagInput></TagInput>
        </div>
        <div class="flex flex-row justify-end">
          <!-- <button @click="form.clear" type="button">Clear</button> -->
          <button
            type="submit"
            :disabled="!form.valid"
            class="my-3 bg-transparent hover:bg-primary font-semibold hover:text-white py-2 px-4 border border-primary hover:border-transparent rounded"
          >
            Save
          </button>
        </div>
      </template>
    </VForm>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { VForm, VInput } from 'vuetensils'
import TagInput from '@/components/TagInput.vue'

@Component({
  components: {
    VForm,
    VInput,
    TagInput
  }
})
export default class AppEditForm extends Vue {
  async onSave(event: Event) {
    const target = event.target as HTMLFormElement
    const form = new FormData(target)

    form.delete('tag') // Don't need value from input in input tag

    const formObj = Object.fromEntries(form)

    const appData = Object.assign(formObj, {
      tags: form.getAll('tags'),
      $type: 'app'
    })

    try {
      const resp = await this.$db.local.post(appData)
    } catch (err) {
      console.error(err)
    }
  }
}
</script>

<style lang="scss">
.appform {
  max-height: var(--app-height);
  &__input {
    margin: 1rem 0;
  }

  &__controls {
    &__btn {
      width: 32px;
      height: 32px;
    }
  }
}

// .appform__input[type='textarea'] {
//   min-height: 50px;
// }
</style>
