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
  name: "NoticeListItem",
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
      this.$router.push({ name: "noticeDetail", params: { id: this.id } });
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
  background-color: #ded8cc;
  cursor: pointer;
}
.up {
  border-bottom: 2px solid #e9e8e6;
}
</style>
