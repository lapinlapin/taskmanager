<template>
  <div
    class="task-button"
    :class="{
      'task-button--remove': type === 'remove'
    }"
  >
    {{ title }}
  </div>
</template>
<script>
export default {
  name: 'Btn',
  data() {
    return {}
  },
  props: {
    title: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: ''
    },
  },
}
</script>
<style lang="scss">
  $button-text-color: #fff;
  $button-background-color: #2c3e50;
  $button-background-color-remove: #a5284b;

  .task-button {
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 80px;
    min-height: 30px;
    border-radius: 4px;
    color: $button-text-color;
    padding: 5px 10px;
    background: $button-background-color;

    &--remove {
      background: $button-background-color-remove;
    }

    &:hover {
      cursor: pointer;
      opacity: .8;
    }
  }
</style>
