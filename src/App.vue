<template>
  <div id="app">
    <Navbar></Navbar>
    <transition   
    name="bounce"
    enter-active-class="slideInUp"
    leave-active-class="bounceRight-leave"
    >
      <router-view/>
    </transition>

    <Snackbar></Snackbar>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Navbar from './views/Navbar.vue';
import Snackbar from './views/Snackbar.vue';

@Component({
  components: {
    Navbar,
    Snackbar
  },
})
export default class Home extends Vue {
 
}
</script>

<style lang="scss" scoped>
$animationDuration: 0.4s;
// @import "vue2-animate/src/sass/vue2-animate.scss";
</style>







