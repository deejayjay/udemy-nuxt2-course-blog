<template>
  <div class="admin-post-page">
    <section class="update-form">
      <h2 class="form__title">Edit Post</h2>
      <admin-post-form :post="loadedPost" @submit="onSubmitted" />
    </section>
  </div>
</template>

<script>
import axios from "axios";
import AdminPostForm from "@/components/Admin/AdminPostForm.vue";

export default {
  name: "AdminEditPostPage",
  layout: "admin",
  components: {
    AdminPostForm,
  },
  async asyncData(context) {
    return axios
      .get(`${process.env.baseUrl}/posts/${context.params.postId}.json`)
      .then((res) => {
        return { loadedPost: res.data };
      })
      .catch((e) => context.error(e));
  },
  methods: {
    onSubmitted(editedPost) {
      this.$store
        .dispatch("editPost", { id: this.$route.params.postId, editedPost })
        .then(() => {
          this.$router.push("/admin");
        });
    },
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