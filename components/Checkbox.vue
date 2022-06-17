<template>
  <div class="checkbox">
    <div class="box">
      <svg
        v-if="isChecked"
        xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24"
        stroke="var(--check)"
        stroke-width="2.5">
        <path stroke-linecap="round" stroke-linejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
.checkbox {
  .box {
    width: 34px;
    height: 34px;
    border-radius: 5px;
    border: 1px solid var(--border-color);
    background-color: var(--bg-checkbox);

    svg {
    }
  }
}
</style>
