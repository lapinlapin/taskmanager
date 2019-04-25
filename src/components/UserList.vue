<template>
  <div class="user-list">
    <UserListItem
      v-for="(user, key, num) in users"
      :key="user.userId"
      :item="user"
      :is-active="user.userId == activeUserId"
      @click.native="onSelectUser(user.userId)"
    />
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import UserListItem from '@/components/UserListItem'

export default {
  name: 'UserList',
  data() {
    return {
    }
  },
  components: {
    UserListItem,
  },
  computed: {
    ...mapGetters({
      users: 'users/getUsers',
      activeUserId: 'users/getActiveUserId',
    }),
  },
  methods: {
    ...mapActions({
      setActiveUserId: 'users/setActiveUserId',
      updateTaskCoutToShow: 'tasks/updateTaskCoutToShow'
    }),
    onSelectUser(id) {
      this.setActiveUserId({ id })
      this.updateTaskCoutToShow(true)
    },
  },
}
</script>
<style lang="scss">
  .user-list {
    display: flex;
    flex-direction: column;

    border-radius: 4px;
    min-width: 110px;
    padding: 10px 0 10px 10px;
  }
</style>
