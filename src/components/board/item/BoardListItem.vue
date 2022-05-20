<template>
  <tr>
    <td>{{ id }}</td>
    <td>
      <router-link :to="{ name: 'boardDetail', params: { id: id } }">
        {{ title }}</router-link
      >
    </td>
    <td>{{ writerId }}</td>
    <td>{{ createdAt }}</td>
    <td>{{ hit }}</td>
  </tr>
</template>

<script>
export default {
  name: "BoardListItem",
  props: {
    id: Number,
    title: String,
    writerId: String,
    createdAt: String,
    hit: Number,
  },
};
</script>

<style></style>
