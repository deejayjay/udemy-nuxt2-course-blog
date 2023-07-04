import axios from 'axios';
import Vuex from 'vuex';

const createStore = () => {
  return new Vuex.Store({
    state: {
      loadedPosts: []
    },
    mutations: {
      setPosts(state, posts) {
        state.loadedPosts = posts;
      },
      addPost(state, newPost) {
        state.loadedPosts.push(newPost);
      },
      editPost(state, editedPost) {
        // Replace the old post with the edited post
        const postIndex = state.loadedPosts.findIndex(post => post.id === editedPost.id);
        state.loadedPosts[postIndex] = editedPost;
      }
    },
    actions: {
      async nuxtServerInit(vuexContext, context) {
        return axios.get("https://nuxt-blog-2023-default-rtdb.firebaseio.com/posts.json")
          .then(res => {
            const postsArray = Object.entries(res.data).map(post => {
              return { id: post[0], ...post[1] }
            });
            vuexContext.commit('setPosts', postsArray);
          })
          .catch(e => context.error(e));
      },
      setPosts(vuexContext, posts) {
        vuexContext.commit('setPosts', posts);
      },
      addPost(vuexContext, newPost) {
        // Save the post details to firebase
        const createdPost = {
          ...newPost,
          updatedDate: new Date(),
        }
        return axios
          .post("https://nuxt-blog-2023-default-rtdb.firebaseio.com/posts.json", createdPost)
          .then((res) => {
            vuexContext.commit("addPost", { ...createdPost, id: res.data.name })
          })
          .catch((err) => {
            console.log(err);
          });
      },
      editPost(vuexContext, { id, editedPost }) {
        return axios
          .put(
            `https://nuxt-blog-2023-default-rtdb.firebaseio.com/posts/${id}.json`,
            editedPost
          )
          .then((_res) => {
            vuexContext.commit("editPost", { id, ...editedPost });
          })
          .catch((e) => console.log(e));
      }
    },
    getters: {
      loadedPosts(state) {
        return state.loadedPosts;
      }
    }
  });
};

export default createStore;