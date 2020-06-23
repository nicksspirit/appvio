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
    <VForm class="appform h-full" autocomplete="off">
      <template>
        <VInput
          class="appform__input"
          type="text"
          label="Name"
          name="appName"
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
          name="appUrl"
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
          name="appDesc"
          :classes="{
            input:
              'w-full px-3 py-2 h-20 appearance-none leading-tight \
              border border-solid rounded-md \
              focus:outline-none focus:border-primary',
            text: 'text-base'
          }"
          required
        ></VInput>
      </template>
    </VForm>
  </div>
</template>

<script>
import { Component, Vue } from 'vue-property-decorator'
import { VForm, VInput } from 'vuetensils'

@Component({
  components: {
    VForm,
    VInput
  }
})
export default class AppEditForm extends Vue {}
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
