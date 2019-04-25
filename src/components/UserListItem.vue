<template>
  <router-link tag="div" :to="{ name: 'User', params: { id: item.userId } }">
    <div
      class="user-list__item"
      :class="{'user-list__item--active': isActive }"
    >
      <div class="user-list__item-title">{{ item.title }}</div>
    </div>
  </router-link>
</template>
<script>
export default {
  name: 'UserListItem',
  data() {
    return {}
  },
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
    isActive: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
<style lang="scss">
  $active-user-color: #3286c5;
  $active-user-color-hover: #1b68a2;

  .user-list__item {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    height: 25px;

    &--active {
      color: $active-user-color;
    }

    &:hover {
      cursor: pointer;

      .user-list__item-title {
        color: $active-user-color-hover;
      }
    }
  }
</style>
