<template>
  <div>
    <ClientOnly>
      <CardContainer>
        <CardBody
          class="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border">
          <CardItem :translateZ="50" class="text-xl font-bold text-neutral-600 dark:text-white">
            NUPI
          </CardItem>
          <CardItem as="p" translateZ="60" class="text-neutral-500 text-sm max-w-sm mt-2 dark:text-neutral-300">
            Nuxt3 UnoCSS PrimeVue InspiaUI
          </CardItem>
          <CardItem :translateZ="100" class="w-full mt-4">
            <NuxtImg src="https://cdn.jsdelivr.net/gh/llds66/imageBed/githubImage/20241005/132301.webp" height="1000"
              width="1000" class="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl" alt="thumbnail" />
          </CardItem>
          <div class="flex justify-between items-center mt-20">
            <CardItem :translateZ="20" as="a" href="https://rahulv.dev" target="__blank"
              class="px-4 py-2 rounded-xl text-xs font-normal dark:text-white decoration-none">
              <NuxtLink to="/about" class="decoration-none"> About page →</NuxtLink>
            </CardItem>
            <CardItem :translateZ="20" as="button" @click="link('https://github.com/ZeroWebing/nupi')"
              class="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold">
              Github
            </CardItem>
          </div>
        </CardBody>
      </CardContainer>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
const link = (url: string) => {
  window.open(url, '_blank');
}
</script>