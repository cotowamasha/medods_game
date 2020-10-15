<template>
  <div
    class="radio"
  >
    <label
      :for="id"
      class="radio__label"
    >
      <input
        :id="id"
        :value="value"
        @change="$emit('changeRadio', $event.target.checked)"
        :name="radioName"
        :class="classEl === '' ? 'radio__input' : classEl"
        type="radio"
        :checked="checked"
      >

      <span class="radio__text">
        <slot />
      </span>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'RadioComponent',
    props: {
      classEl: {
        type: String,
        default: ''
      },
      value: {
        type: String,
        required: true
      },
      id: {
        type: String,
        required: true
      },
      radioName: {
        type: String,
        default: ''
      },
      checked: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        name: this.value
      }
    },
    watch: {
      value (data) {
        this.name = data
      }
    }
  }
</script>
