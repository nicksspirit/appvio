import Vue, { VNode } from 'vue'

import { LocalDB } from '@/common/interfaces'

declare module 'vue/types/vue' {
  interface Vue {
    $db: LocalDB
  }
}

declare global {
  namespace JSX {
    // tslint:disable no-empty-interface
    interface Element extends VNode {}
    // tslint:disable no-empty-interface
    interface ElementClass extends Vue {}
    interface IntrinsicElements {
      [elem: string]: any
    }
  }
}
