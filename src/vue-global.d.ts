import Vue from 'vue'
import { LocalDB } from '@/common/interfaces'

declare module 'vue/types/vue' {
  interface Vue {
    $db: LocalDB
  }
}