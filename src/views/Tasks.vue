<template>
  <div class="tasks">
    <UserList />
    <TaskList />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import ls from 'local-storage';
import UserList from '@/components/UserList'
import TaskList from '@/components/TaskList'

export default {
  name: 'Tasks',
  data() {
    return {}
  },
  components: {
    UserList,
    TaskList,
  },
  watch: {
    allTasks(newV) {
      if (newV.length && this.$route.params && this.$route.params.id) {
        this.setActiveUserId({ id: +this.$route.params.id })
      }
    }
  },
  computed: {
    ...mapGetters({
      allTasks: 'tasks/getAllTasks',
    }),
  },
  methods: {
    ...mapActions({
      loadTasks: 'tasks/loadTasks',
      setActiveUserId: 'users/setActiveUserId',
      updateTaskCoutToShow: 'tasks/updateTaskCoutToShow',
      updateTasksData: 'tasks/updateTasksData',
    }),
  },
  created() {
    const tasks = ls.get('manager:tasks')

    if (tasks && tasks.length) {
      this.updateTasksData({ newItems: tasks })
      return
    }
    this.loadTasks()
  },
}
</script>
<style lang="scss">
  .tasks {
    display: flex;
    flex-direction: row;
    min-width: 150px;
  }
</style>
