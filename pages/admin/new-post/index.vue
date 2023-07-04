<template>
  <div class="admin-new-post-page">
    <section class="new-post-form">
      <h2 class="form__title">Create New Post</h2>
      <admin-post-form @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";

export default {
  name: "AdminNewPostPage",
  layout: "admin",
  components: {
    AdminPostForm,
  },
  methods: {
    onSubmitted(postData) {
      this.$store.dispatch("addPost", postData).then(() => {
        this.$router.push("/admin");
      });
    },
  },
};
</script>

<style scoped>
.new-post-form {
  margin: 1.5rem auto;
  max-width: 45rem;
}

.form__title {
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
  margin-bottom: 1rem;
  color: rgb(233, 19, 137);
}
</style>
