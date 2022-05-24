<template>
  <tr class="up" @click="detailMethod">
    <td>{{ id }}</td>
    <td>{{ title }}</td>
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
    detailMethod() {
      hitCounter(
        this.id,
        () => {},
        () => {},
      );
      this.$router.push({ name: "boardDetail", params: { id: this.id } });
    },
  },
  filters: {
    date(val) {
      return val.substr(0, 10);
    },
  },
};
</script>

<style scoped>
.up:hover {
  background-color: #e4d6ba;
  cursor: pointer;
}
.up {
  border-bottom: 2px solid #e9e8e6;
}
</style>
