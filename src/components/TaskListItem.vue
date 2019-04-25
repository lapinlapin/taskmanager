<template>
  <div
    class="task-list__item"
    :class="{'task-list__item--complete': item.completed }"
  >
    <div class="task-list__item-title">{{ noteTitle }}</div>
    <Btn
      v-if="item.completed"
      class="task-list__item-btn"
      title="Remove"
      type="remove"
      @click.native="$emit('onRemove', item)"
    />
    <Btn
      v-if="!item.completed"
      class="task-list__item-btn"
      title="To do"
      @click.native="$emit('onTodo', item)"
    />
  </div>
</template>
<script>
import Btn from '@/components/Btn'

export default {
  name: 'TaskListItem',
  data() {
    return {}
  },
  components: {
    Btn,
  },
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
    isComplete: {
      type: Boolean,
      default: false,
    },
    num: {
      type: Number,
    },
  },
  computed: {
    noteTitle() {
      return `#${this.num + 1} ${this.item.title}`
    },
  },
}
</script>
<style lang="scss">
  $task-color: #ccc;
  $task-color-completed: #A2DDAE;

  .task-list__item {
    background: $task-color;
    border-radius: 4px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    min-height: 35px;
    padding: 15px;
    margin-bottom: 5px;

    &--complete {
      background: $task-color-completed;

      .task-list__item-title {
        text-decoration: line-through;
      }
    }
  }

  .task-list__item-title {
    text-align: left;
  }

  .task-list__item-btn {
    min-width: 80px;
    margin: 0 5px;
  }
</style>
