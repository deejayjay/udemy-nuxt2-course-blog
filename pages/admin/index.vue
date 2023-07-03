<template>
  <div class="admin-page">
    <section class="new-post">
      <app-button @click="$router.push('/admin/new-post')"
        >Create Post</app-button
      >
    </section>
    <section class="existing-posts">
      <h2>Existing Posts</h2>
      <post-list :isAdmin="true" />
    </section>
  </div>
</template>

<script>
import PostList from "@/components/Posts/PostList";
import AppButton from "~/components/UI/AppButton.vue";

export default {
  name: "AdminHome",
  layout: "admin",
  components: {
    PostList,
    AppButton,
  },
};
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.new-post {
  text-align: center;
  border-bottom: 2px solid #ccc;
  padding-bottom: 10px;
}

.existing-posts h2 {
  text-align: center;
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(233, 19, 137);
  margin: 1.5rem 0 0.5rem;
}
</style>