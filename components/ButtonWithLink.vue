<template>
  <button @click="handler">
    <NuxtLink :to="to" class="btn block w-full">
      <slot></slot>
    </NuxtLink>
  </button>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      default: '/'
    },
    handler: {
      type: Function,
      default: () => {}
    }
  }
}
</script>
