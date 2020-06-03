<template>
  <div id="showBox">
    <fieldset>
      <legend>案例</legend>
      <div class="container">
        <div class="row">
      <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header">
          <h2>Router</h2>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <router-link to="/home" class="list-group-item">Home</router-link>
          <router-link to="/about" class="list-group-item">About</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
              <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
      </div>
    </fieldset>
  </div>
</template>

<script>
export default {
  name: 'showBox',
  components: {}
}
</script>

<style>
</style>
