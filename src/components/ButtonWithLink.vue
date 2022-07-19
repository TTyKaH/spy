<template>
  <button :class="{'w-full': full}" @click="handler">
    <NuxtLink :to="to" class="btn block w-full" :class="{'btn-disabled': disabled}">
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
    },
    disabled: {
      type: Boolean,
      default: false
    },
    full: {
      type: Boolean,
      default: false
    }
  }
}
</script>
