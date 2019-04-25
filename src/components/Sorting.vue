<template>
  <div class="tasks-sorting">
    <div
      class="tasks-sorting__item"
      v-for="sortItem in sortItems"
      :key="sortItem.id"
      :class="{
        'tasks-sorting__item--active': sortType.key === sortItem.key
      }"
      @click="setActiveSortType({ type: sortItem })"
    >
      {{ sortItem.title }}
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Sorting',
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      sortItems: 'sorting/getSortItems',
      sortType: 'sorting/getSortType',
    }),
  },
  methods: {
    ...mapActions({
      setActiveSortType: 'sorting/setActiveSortType',
    }),
  },
}
</script>
<style lang="scss">
  $sorting-active-background-color: #ccc;

  .tasks-sorting {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    padding: 10px 0;
  }

  .tasks-sorting__item {
    margin-right: 10px;
    padding: 5px;
    border: 1px solid #000;
    border-radius: 4px;

    &:hover {
      cursor: pointer;
    }

    &--active {
      font-weight: 600;
      background: $sorting-active-background-color;
    }
  }
</style>
