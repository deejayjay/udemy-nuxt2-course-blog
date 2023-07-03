<template>
  <div>
    <the-header @sidenavToggle="displaySideNav = !displaySideNav" />
    <the-sidenav :show="displaySideNav" @close="displaySideNav = false" />
    <main>
      <nuxt />
    </main>
  </div>
</template>

<script>
import TheHeader from "@/components/Navigation/TheHeader.vue";
import TheSidenav from "@/components/Navigation/TheSidenav.vue";

export default {
  components: {
    TheHeader,
    TheSidenav,
  },
  data() {
    return {
      displaySideNav: false,
    };
  },
};
</script>