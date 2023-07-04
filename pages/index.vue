<template>
  <section class="home-page">
    <div class="intro">
      <h2>Get the latest tech news!</h2>
    </div>
    <section class="featured-posts container">
      <post-list :posts="loadedPosts" />
    </section>
  </section>
</template>

<script>
import PostPreview from "@/components/Posts/PostPreview.vue";
import PostList from "@/components/Posts/PostList.vue";

export default {
  name: "IndexPage",
  components: {
    PostPreview,
    PostList,
  },
  computed: {
    loadedPosts() {
      return this.$store.getters.loadedPosts;
    },
  },
  // data() {
  //   return {
  //     loadedPosts: [],
  //   };
  // },
};
</script>

<style scoped>
.intro {
  position: relative;
  padding: 4rem 1.5rem;
  box-sizing: border-box;
  background-position: center;
  background-size: cover;
  background-image: url("~assets/images/hero.jpg");
}

.intro h2 {
  width: 90%;
  margin: 0 auto;
  text-align: center;
  font-size: 1.5rem;
  color: black;
  background-color: rgb(211, 211, 211);
  padding: 10px;
  border-radius: 10px;
  box-shadow: 3px 3px 3px black;
  box-sizing: border-box;
  border: 1px solid black;
}

.featured-posts {
  margin-top: 4rem;
}

@media (min-width: 768px) {
  .intro h2 {
    font-size: 2rem;
  }
}

@media (min-width: 1312px) {
  .featured-posts {
    display: flex;
    padding: 20px;
    box-sizing: border-box;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
  }
}
</style>
