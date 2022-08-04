<template>
  <tr class="table-item__table-row">
    <td>{{ title }}</td>
    <td>{{ isbn }}</td>
    <td>
      <BaseButton
        :text="buttonText"
        variant="secondary"
        @change-bookmark="handleButtonClick"
      />
    </td>
  </tr>
</template>
<script>
import BaseButton from "@/components/BaseButton.vue";
export default {
  components: {
    BaseButton,
  },
  props: {
    title: String,
    isbn: String,
    isBookmarked: Boolean,
  },
  computed: {
    buttonText() {
      return this.isBookmarked ? "Remove Bookmark" : "Add Bookmark";
    },
  },
  methods: {
    handleButtonClick() {
      this.$emit("bookmark-clicked", this.isbn);
    },
  },
};
</script>

<style scoped>
.table-item__table td {
  padding: 12px 15px;
}
</style>
