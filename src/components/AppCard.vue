<template>
  <div>
    <dt>
      {{ appData.name }}
    </dt>
    <dd>
      <a href="">{{ appData.url }}</a>
    </dd>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { AppData } from '@/common/interfaces'

@Component
export default class AppCard extends Vue {
  @Prop() private appData!: AppData
}
</script>

<style scoped></style>
