<template>
  <section class="post-list">
    <post-preview
      v-for="post in posts"
      :key="post.id"
      :id="post.id"
      :title="post.title"
      :previewText="post.previewText"
      :thumbnail="post.thumbnail"
      :is-admin="isAdmin"
    />
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview.vue";

export default {
  name: "PostList",
  components: {
    PostPreview,
  },
  props: {
    isAdmin: {
      type: Boolean,
      default: false,
    },
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
@media (min-width: 1312px) {
  .post-list {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 1rem;
    width: 100%;
  }
}
</style>