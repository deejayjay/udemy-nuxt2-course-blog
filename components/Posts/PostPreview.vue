<template>
  <nuxt-link :to="postLink">
    <article class="post-preview">
      <div
        class="post-thumbnail"
        :style="{ backgroundImage: `url(${thumbnail})` }"
      ></div>
      <div class="post-content">
        <h3>{{ title }}</h3>
        <p>{{ previewText }}</p>
      </div>
    </article>
  </nuxt-link>
</template>

<script>
export default {
  name: "PostPreview",
  props: {
    isAdmin: {
      type: Boolean,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    previewText: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
  },
  computed: {
    postLink() {
      return this.isAdmin ? `/admin/${this.id}` : `/posts/${this.id}`;
    },
  },
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}

.post-preview {
  border: 1px solid #ccc;
  box-shadow: 0 2px 2px #ccc;
  background-color: white;
  width: 90%;
  margin: 0 auto 1rem;
  border-radius: 8px;
  overflow: hidden;
}

.post-thumbnail {
  width: 100%;
  height: 200px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}

.post-content {
  padding: 10px;
  text-align: center;
}

.post-content h3 {
  font-weight: 600;
}

.post-content p {
  font-weight: 500;
}

a:hover .post-content,
a:active .post-content {
  background-color: #ccc;
}

@media (min-width: 1312px) {
  .post-preview {
    width: 400px;
    margin: 10px;
  }
}
</style>