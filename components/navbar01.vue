<template>
  <b-navbar type="dark" variant="info">
    <b-navbar-brand href="#">
      <div class="font-awesome" style="color: orange;">
        <font-awesome-icon icon="carrot" />
      </div>
    </b-navbar-brand>
    {{ brand }}

    <b-nav-text left class="mx-5">
      <div class="font-awesome" style="color: white;" right>
        <font-awesome-icon icon="chevron-circle-left" />
        test-left
      </div>
    </b-nav-text>

    <b-nav-text class="ml-auto" center>
      <h2 style="color: white;">{{ nav_title }}</h2>
    </b-nav-text>

    <b-navbar-nav class="ml-auto mx-5">
      <b-nav-text right>
        <div class="font-awesome" style="color: white;" right>
          test-right
          <font-awesome-icon icon="chevron-circle-right" />
        </div>
      </b-nav-text>
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
export default {
  data() {
    return {
      name: 'Navbar01Vue',
      brand: 'NFA',
      status: '1',
      nav_title: 'current step',
      prev_icon: 'chevron-circle-left',
      next_icon: 'chevron-circle-right',
      prev: '',
      next: '',
    }
  },
}
</script>

<style scoped></style>
