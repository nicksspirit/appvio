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
        <CloseIcon />
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
        <DeleteIcon />
      </button>

      <button
        class="appcard__controls__btn edit-btn focus:outline-none rounded-full focus:shadow-secondaryoutline"
      >
        <EditIcon />
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import CloseIcon from './icons/CloseIcon.svg'
import DeleteIcon from './icons/DeleteIcon.svg'
import EditIcon from './icons/EditIcon.svg'

@Component({
  components: {
    CloseIcon,
    DeleteIcon,
    EditIcon
  }
})
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
