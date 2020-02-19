<template>
  <div id="app">
    <Header></Header>
    <sideBar></sideBar>

    <div class="">
      <router-view></router-view>
  </div>
  </div>
</template>

<script>
import Header from './components/dashboard/header.vue';
import sideBar from './components/dashboard/sideBar.vue';

export default {
  name: 'app',
  components: {
    Header,
    sideBar
  }
}
</script>

<style>

</style>
