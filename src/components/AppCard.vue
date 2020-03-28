<template>
  <div
    class="appcard max-w-sm rounded overflow-hidden \
    shadow-md px-2 py-3 my-1 flex align-center"
  >
    <div class="appcard__icon flex justify-center items-center mr-3 shadow-sm">
      <div class="flex justify-center items-center">
        <img v-show="faviconUrl" :src="faviconUrl" />
        <svg
          v-show="!faviconUrl"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          style="margin:auto;background:#fff;display:block;"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid"
        >
          <circle
            cx="50"
            cy="50"
            fill="none"
            stroke="#292e66"
            stroke-width="10"
            r="35"
            stroke-dasharray="164.93361431346415 56.97787143782138"
          >
            <animateTransform
              attributeName="transform"
              type="rotate"
              repeatCount="indefinite"
              dur="1s"
              values="0 50 50;360 50 50"
              keyTimes="0;1"
            ></animateTransform>
          </circle>
        </svg>
      </div>
    </div>
    <div class="appcard__details">
      <dt class="">{{ appData.name }}</dt>
      <dd class="">
        <a href="">{{ appData.url }}</a>
      </dd>
    </div>
    <div class="appcard__controls"></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { AppData } from '@/common/interfaces'
import axios from 'axios'

interface Icon {
  sizes?: string
  src: string
  type?: string
}

interface FavIcon {
  domain: string
  icons: Icon[]
}

@Component
export default class AppCard extends Vue {
  public faviconUrl = ''
  private readonly targetIconSize = '32'
  @Prop() private appData!: AppData

  created() {
    this.getFaviconUrl(this.$props.appData.url)
  }

  async getFaviconUrl(appUrl: string) {
    const domain = new URL(appUrl).host
    const fallbackUrl = `https://www.google.com/s2/favicons?domain=${domain}`

    try {
      const response = await axios.get<FavIcon>(
        `http://favicongrabber.com/api/grab/${domain}`
      )
      const icons: Icon[] = response.data.icons

      const bySizeOrType = (icon: Icon) => {
        switch (icon.sizes ?? icon.type) {
          case '32x32':
          case 'image/png':
          case 'image/x-icon':
            return true
          default:
            return false
        }
      }

      const iconUrls = icons.filter(bySizeOrType).map(icon => icon.src)

      this.faviconUrl = iconUrls[0] !== undefined ? iconUrls[0] : fallbackUrl
    } catch (error) {
      this.faviconUrl = fallbackUrl
    }
  }
}
</script>

<style lang="scss" scoped>
.appcard {
  width: inherit;
  height: inherit;

  &__icon {
    width: 36px;
  }

  &__icon div {
    width: 24px;
    height: 24px;
  }
}
</style>
