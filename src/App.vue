<script lang="ts" setup>
import Menu from './views/Menu.vue'
import EndScreen from './views/EndScreen.vue'
import Practice from './views/practice/Practice.vue'
import { useStateStore } from './stores/state'
</script>

<template>
  <Menu v-if="useStateStore().state === 'menu'" />
  <EndScreen v-if="useStateStore().state === 'endScreen'" />
  <Practice v-if="useStateStore().state === 'practice'" />
</template>

<style lang="scss"></style>
