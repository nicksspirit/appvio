<template>
  <div
    class="appcard__menu bg-primary opacity-98 h-full w-full 
    top-0 absolute z-30 flex flex-col"
  >
    <div class="appcard__controls flex justify-end p-1">
      <button
        class="appcard__controls__btn close-btn focus:outline-none rounded-full focus:shadow-secondaryoutline"
        @click="closeAppMenu"
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
    <div
      :class="{
        'flex flex-row justify-evenly w-full h-full': true,
        'items-center': isExpanded
      }"
    >
      <button
        class="appcard__controls__btn delete-btn focus:outline-none rounded-full focus:shadow-secondaryoutline"
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          ></path>
        </svg>
      </button>

      <button
        class="appcard__controls__btn edit-btn focus:outline-none rounded-full focus:shadow-secondaryoutline"
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
        >
          <path
            d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
          ></path>
        </svg>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class AppCardMenu extends Vue {
  @Prop() private isExpanded!: boolean

  closeAppMenu() {
    this.$emit('onCloseAppMenu')
  }
}
</script>

<style lang="scss" scoped>
.appcard {
  &__controls {
    &__btn {
      width: 32px;
      height: 32px;
    }

    &__btn > svg {
      color: var(--color-bg);
    }
  }
}

.close-btn {
  width: 16px;
  height: 16px;
}
</style>
