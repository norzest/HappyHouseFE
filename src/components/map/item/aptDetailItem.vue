<template>
  <tr>
    <td>{{ dealDate }}</td>
    <td>{{ dealAmount }}</td>
    <td>{{ area }}</td>
    <td>{{ floor }}</td>
  </tr>
</template>

<script>
export default {
  name: "aptDetailItem",
  props: {
    dealDate: String,
    dealAmount: String,
    area: String,
    floor: String,
  },
};
</script>

<style scoped>
td {
  font-size: 14px;
  padding: 10px 0;
  border-bottom: 1px solid lightgray;
}
</style>
