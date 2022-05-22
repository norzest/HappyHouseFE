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

<style></style>
