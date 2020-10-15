<template>
  <button
    :type="type"
    @click.prevent="$emit('click')"
    :disabled="disabled"
    :class="['btn', classEl]"
  >
    <slot />
  </button>
</template>

<script>
  export default {
    name: 'ButtonComponent',
    props: {
      type: {
        type: String,
        default: 'button'
      },
      disabled: {
        type: Boolean,
        default: false
      },
      classEl: {
        type: [String, Array],
        default: ''
      }
    }
  }
</script>
