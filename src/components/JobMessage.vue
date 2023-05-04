<template>
  <div>
    <ul>
      <li>
        {{ results.jobID }} - {{ results.jobMG }} - {{ results.jobCD }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    results() {
      return this.$store.state.results || []; // state에서 results 값을 가져옴
    },
  },
};
</script>