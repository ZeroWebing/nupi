<template>
  <div>
    <div class="flex">
      <div class="basis-1/2">1</div>
      <div class="basis-1/2">1</div>
    </div>
    <Icon name="svg-spinners:blocks-wave" size="3em" />
    <Button label="Search">
      <template #icon>
        <Icon name="mdi:magnify" />
      </template>
    </Button>
    <Button type="button" label="Search" icon="pi pi-search" />
    <ClientOnly>
      <BlurReveal :delay="0.2" :duration="0.75" class="p-8">
        <h2 class="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">Hey there 👋</h2>
        <span class="text-xl text-pretty tracking-tighter sm:text-3xl xl:text-4xl/none">
          How is it going?
        </span>
      </BlurReveal>
    </ClientOnly>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'home-layout'
})
</script>

<style></style>