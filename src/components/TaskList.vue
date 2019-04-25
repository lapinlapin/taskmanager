<template>
  <div class="task-list">
    <Sorting />
    <div class="task-list__info">
      <div class="task-list__info-last-update">{{ lastUpdateTitle }}</div>
      <Btn
        title="Update"
        @click.native="loadTasks"
      />
    </div>
    <TaskListItem
      v-for="(task, ndx) in filteredTasksList"
      :key="ndx"
      :item="task"
      :num="ndx"
      @onTodo="onToDo"
      @onRemove="onRemove"
      v-dragging="{ item: task, list: filteredTasksList }"
    />
    <Btn
      v-if="filteredTasksList.length && filteredTasksList.length >= getTasksCountToShow"
      title="Show more"
      @click.native="showMoreTasks"
    />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import ls from 'local-storage';
import TaskListItem from '@/components/TaskListItem'
import Btn from '@/components/Btn'
import Sorting from '@/components/Sorting'
import _ from 'underscore'

export default {
  name: 'TaskList',
  data() {
    return {}
  },
  components: {
    TaskListItem,
    Btn,
    Sorting,
  },
  computed: {
    ...mapGetters({
      filteredTasksList: 'tasks/getFilteredTasks',
      allTasks: 'tasks/getAllTasks',
      lastUpdate: 'tasks/getLastUpdate',
      getTasksCountToShow: 'tasks/getTasksCountToShow',
    }),
    lastUpdateTitle() {
      return `Last update ${this.lastUpdate}`
    },
  },
  methods: {
    ...mapActions({
      loadTasks: 'tasks/loadTasks',
      updateTaskCoutToShow: 'tasks/updateTaskCoutToShow',
      updateTasksData: 'tasks/updateTasksData',
      setLastTasksUpdate: 'tasks/setLastTasksUpdate',
    }),
    updateTasks(tasks) {
      this.updateTasksData({ newItems: tasks })
      this.setLastTasksUpdate()
      ls.set('manager:tasks', tasks)
    },
    onToDo(task) {
      let { allTasks } = this

      allTasks = allTasks.map(
        oldTask => oldTask.id === task.id ?
          { ...task, completed: true } :
          oldTask
      )

      this.updateTasks(allTasks)
    },
    onRemove(task) {
      const newItems = this.allTasks.filter(oldTask => oldTask.id !== task.id)

      this.updateTasks(newItems)
    },
    showMoreTasks() {
      this.updateTaskCoutToShow()
    },
  },
  mounted () {
    const swapElements = (collection, a, b) => {
      collection[a] = collection.splice(b, 1, collection[a])[0]
      return collection
    }
    this.$dragging.$on('dragged', (data) => {
      let { allTasks } = this

      allTasks = swapElements(
        allTasks,
        _.findIndex(allTasks, { id: data.draged.id }),
        _.findIndex(allTasks, { id: data.to.id })
      )

      this.updateTasks(allTasks)
    })
  }
}
</script>
<style lang="scss">
  $border-color: #ccc;
  $task-info-color: #fff;
  $task-info-background-color: #687077;

  .task-list {
    width: 100%;
    padding: 10px;
  }

  .task-list__info {
    background: $task-info-background-color;
    color: $task-info-color;

    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    padding: 10px 20px;
    border-radius: 4px;
  }
</style>
