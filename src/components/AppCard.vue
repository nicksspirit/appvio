<template>
  <div class="appcard relative">
    <div
      class="max-w-sm rounded overflow-hidden shadow-md px-2 py-3 my-1 flex flex-col align-center relative z-20"
    >
      <div class="appcard__controls flex justify-end">
        <button
          class="appcard__controls__btn menu-btn focus:outline-none rounded-full focus:shadow-outline"
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
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        </button>
      </div>
      <div class="flex flex-row">
        <div class="appcard__icon flex justify-center items-center mr-3">
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
                />
              </circle>
            </svg>
          </div>
        </div>
        <dt class="appcard__name">
          <a :href="appData.url">
            <h4 class="text-lg truncate ...">{{ appData.name }}</h4>
          </a>
        </dt>
      </div>
      <div class="appcard__controls flex justify-end">
        <button
          class="appcard__controls__btn copy-btn focus:outline-none rounded-full focus:shadow-outline mx-2"
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
              d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
            />
          </svg>
        </button>
        <button
          :class="{
            'appcard__controls__btn expand-btn mx-2 \
            focus:outline-none rounded-full focus:shadow-outline': true,
            'appcard__controls__btn--is-expanded': isExpanded
          }"
          @click="isExpanded = !isExpanded"
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            viewBox="0 0 24 24"
          >
            <path d="M19 9l-7 7-7-7" />
          </svg>
        </button>
      </div>
    </div>
    <transition name="slide-in-top">
      <div
        v-show="isExpanded"
        class="
        appcard__details max-w-sm m-auto h-auto
        rounded overflow-hidden shadow-md 
        px-1 py-1 my-1 flex flex-col 
        relative z-10"
      >
        <p
          class="appcard__details__descr px-2 mb-1 h-24 overflow-hidden text-justify"
        >
          {{ appData.description }}
        </p>
        <div
          class="appcard__details__tags px-2 py-1 overflow-hidden overflow-x-scroll whitespace-no-wrap"
        >
          <span class="text-grey" v-if="appData.tags.length === 0">
            No tags available
          </span>
          <span
            :class="{
              'bg-grey rounded-full text-white text-xxs p-1 mr-1':
                appData.tags.length
            }"
            :key="index"
            v-for="(tag, index) in appData.tags"
            v-else
          >
            #{{ tag }}
          </span>
        </div>
      </div>
    </transition>
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
  public isExpanded = false
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

<style lang="scss">
.clamp {
  display: -webkit-box;
  -webkit-line-clamp: 3; // amount of line you want
  -webkit-box-orient: vertical;
}

.appcard {
  width: inherit;
  height: inherit;

  > div {
    background-color: var(--color-bg);
  }

  &__name {
    max-width: 220px;
  }

  &__icon {
    width: 36px;
  }

  &__icon div,
  &__icon svg {
    width: 24px;
    height: 24px;
  }

  &__controls {
    &__btn {
      width: 16px;
      height: 16px;
      transform: rotate(0deg);
      transition: transform ease-in-out 0.6s;
    }

    &__btn--is-expanded {
      transform: rotate(180deg);
    }
  }

  &__details {
    background-color: var(--color-bg);

    &__tags::-webkit-scrollbar {
      height: 5px;
    }
    &__tags {
      scrollbar-width: thin;
      scrollbar-color: var(--color-primary) var(--color-bg);
    }
    &__tags::-webkit-scrollbar-track {
      background: var(--color-bg);
    }
    &__tags::-webkit-scrollbar-thumb {
      background-color: var(--color-primary);
      border-radius: 9999px;
      border: 3px solid vvar(--color-bg);
    }
  }
}

.slide-in-top-enter-active {
  -webkit-animation: slide-in-top 0.6s both;
  animation: slide-in-top 0.6s both;
}

.slide-in-top-leave-active {
  -webkit-animation: slide-in-top 0.6s reverse both;
  animation: slide-in-top 0.6s reverse both;
}

/* ----------------------------------------------
 * Generated by Animista on 2020-3-29 22:54:37
 * Licensed under FreeBSD License.
 * See http://animista.net/license for more info. 
 * w: http://animista.net, t: @cssanimista
 * ---------------------------------------------- */

/**
 * ----------------------------------------
 * animation slide-in-top
 * ----------------------------------------
 */
@-webkit-keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-83px);
    transform: translateY(-83px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
@keyframes slide-in-top {
  0% {
    -webkit-transform: translateY(-83px);
    transform: translateY(-83px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateY(0);
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
