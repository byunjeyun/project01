<template>
  <div class="button">
    <div>
      <slot></slot>
    </div>
    <button
      v-for="button in buttons"
      :key="button.type"
      :class="'btn-theme btn-' + button.type"
      :data-preset="button.preset"
       @click="button.type === 'search' && fetchMatmstList('partno')"
    >
      {{ button.name }}
    </button>
  </div>
</template>

<script>
import { fetchMatmstList } from '../api/index.js';

export default {
  props: {
    buttons: {
      type: Array,
      required: true,
      default: () => [
        { name: 'Search', type: 'search', preset: 'default' },
        { name: 'Add', type: 'add', preset: 'default' },
        { name: 'Save', type: 'save', preset: 'default' },
        { name: 'Delete', type: 'delete', preset: 'default' },
        { name: 'Excel↑', type: 'excelup', preset: 'default' },
        { name: 'Excel↓', type: 'exceldown', preset: 'default' },
      ],
    },
  },
  methods: {
    
    handleButtonClick(button) {
      if (button.type === 'search') {
        fetchMatmstList('partno_value')
      this.$store.dispatch('FETCH_MATMST')
      }   
    },
  }
};
</script>

<style scoped>
.button {
  float: right;
}

.btn-theme {
  background-color: #def;
  margin: 3px;
  border: 1px;
  padding: 10px;
  width: 80px;
}

.btn-theme:hover {
  background-color: #cde;
  font-weight: bold;
}

.btn-search {
  /* Custom styles for search button */
}

.btn-add {
  /* Custom styles for add button */
}

/* Add custom styles for other button types */
</style>