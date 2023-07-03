<template>
  <section class="posts-page container">
    <post-list />
  </section>
</template>

<script>
import PostList from "~/components/Posts/PostList.vue";

export default {
  name: "PostsPage",
  components: {
    PostList,
  },
};
</script>

<style scoped>
.posts-page {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
  margin: 3rem auto 1rem;
}

.posts-page > * {
  width: 100%;
}

@media (min-width: 1312px) {
  .posts-page {
    flex-direction: row;
  }

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