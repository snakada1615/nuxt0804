<template>
  <div class="myNav">
    <b-navbar type="dark" variant="info">
      <b-navbar-brand href="/">
        <div class="font-awesome" style="color: orange;">
          <font-awesome-icon icon="carrot" />
        </div>
      </b-navbar-brand>

      <b-navbar-nav left>
        <b-nav-text class="ml-auto" left>
          {{ brand }}
        </b-nav-text>
      </b-navbar-nav>

      <b-navbar-nav left class="ml-5">
        <b-nav-text class="ml-auto mr-2" left>
          {{ prev_title }}
        </b-nav-text>

        <b-nav-text class="ml-auto" left>
          <a :href="prev_link">
            <div class="font-awesome" style="color: white;">
              <font-awesome-icon icon="chevron-circle-left" />
            </div>
          </a>
        </b-nav-text>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto" center>
        <b-nav-text>
          <h2 style="color: white;">{{ current_title }}</h2>
        </b-nav-text>
      </b-navbar-nav>

      <b-navbar-nav class="ml-auto mx-5">
        <b-nav-text right class="mr-2">
          <a :href="next_link">
            <div class="font-awesome" style="color: white;" right>
              <font-awesome-icon icon="chevron-circle-right" />
            </div>
          </a>
        </b-nav-text>
        <b-nav-text class="ml-auto" right>
          {{ next_title }}
        </b-nav-text>
      </b-navbar-nav>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: 'myNav',
      brand: 'NFA',
      status: '1',
      prev_icon: 'chevron-circle-left',
      next_icon: 'chevron-circle-right',
      current_title: 'current step',
      prev_title: 'page01',
      next_title: 'page03',
      current_link: 'page02',
      prev_link: 'page01',
      next_link: 'page03',
    }
  },
}
</script>

<style scoped></style>
