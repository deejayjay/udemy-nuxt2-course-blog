<template>
  <div class="admin-post-page">
    <section class="update-form">
      <h2 class="form__title">Edit Post</h2>
      <admin-post-form :post="loadedPost" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";

export default {
  name: "AdminEditPostPage",
  layout: "admin",
  components: {
    AdminPostForm,
  },
  data() {
    return {
      loadedPost: {
        author: "Deepak",
        title: "My first post",
        content: "This is my first post",
        thumbnailLink: "https://picsum.photos/200/300",
      },
    };
  },
};
</script>

<style scoped>
.form__title {
  font-size: 1.5rem;
  font-weight: 600;
  color: rgb(233, 19, 137);
  text-align: center;
  margin: 1.5rem 0 0.5rem;
}
</style>