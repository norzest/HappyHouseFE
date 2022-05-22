<template>
  <tr>
    <td>{{ id }}</td>
    <td>
      <router-link
        :to="{ name: 'boardDetail', params: { id: id } }"
        @click.prevent.native="clickcount(id)"
      >
        {{ title }}</router-link
      >
    </td>
    <td>{{ writerId }}</td>
    <td>{{ createdAt | date }}</td>
    <td>{{ hit }}</td>
  </tr>
</template>

<script>
import { hitCounter } from "@/api/board";
export default {
  name: "BoardListItem",
  props: {
    id: Number,
    title: String,
    writerId: String,
    createdAt: String,
    hit: Number,
  },
  methods: {
    clickcount(id) {
      hitCounter(
        id,
        () => {},
        () => {},
      );
    },
  },
  filters: {
    date(val) {
      return val.substr(0, 10);
    },
  },
};
</script>

<style scoped></style>
