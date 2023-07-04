<template>
  <div class="container">
    <section class="single-post-page">
      <article class="post">
        <div class="post-heading">
          <h2 class="title">{{ loadedPost.title }}</h2>
          <div class="post-details">
            <p class="post-updated">{{ loadedPost.updatedDate }}</p>
            <p class="post-author">{{ loadedPost.author }}</p>
          </div>
        </div>
        <p class="post-content">{{ loadedPost.content }}</p>
      </article>
      <aside class="post-feedback">
        <h3 class="feedback-title">Feedback</h3>
        <p class="feedback-content">
          Let me know what you think about the post. Send an email to
          <a href="mailto:feedback@myawesomedomain.com">
            feedback@myawesomedomain.com </a
          >.
        </p>
      </aside>
    </section>
  </div>
</template>

<script>
import axios from "axios";

export default {
  async asyncData(context) {
    return axios
      .get(
        `https://nuxt-blog-2023-default-rtdb.firebaseio.com/posts/${context.params.id}.json`
      )
      .then((res) => {
        return { loadedPost: res.data };
      })
      .catch((e) => context.error(e));
  },
};
</script>

<style scoped>
.single-post-page {
  background: #ededed;
  padding: 1.5rem;
  border-radius: 0.5rem;
  max-width: 1280px;
  margin: 2rem auto 0;
}

.post-heading {
  display: flex;
  border-bottom: 2px solid #708090;
  padding-bottom: 0.5rem;
  align-items: flex-end;
  justify-content: space-between;
}

.title {
  font-size: 2rem;
  font-weight: 500;
  color: rgb(233, 19, 137);
}

.post-details {
  font-style: italic;
  font-size: 0.875rem;
  color: #676767;
}

.post-content {
  margin-top: 1rem;
}

.post-feedback {
  margin-top: 1rem;
}

.feedback-title {
  border-bottom: 1px solid #708090;
  font-size: 1.25rem;
  font-weight: 600;
  color: rgb(233, 19, 137);
}

.feedback-content {
  font-size: 0.875rem;
}
</style>