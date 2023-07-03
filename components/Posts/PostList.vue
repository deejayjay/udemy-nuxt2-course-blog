<template>
  <section class="post-list">
    <post-preview
      id="1"
      title="Post 1"
      previewText="Preview Text 1"
      :thumbnail="require('~/assets/images/posts/post-1.jpg')"
      :is-admin="isAdmin"
    />
    <post-preview
      id="2"
      title="Post 2"
      previewText="Preview Text 2"
      :thumbnail="require('~/assets/images/posts/post-2.jpg')"
      :is-admin="isAdmin"
    />
    <post-preview
      id="3"
      title="Post 3"
      previewText="Preview Text 3"
      :thumbnail="require('~/assets/images/posts/post-3.jpg')"
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