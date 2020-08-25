<template>
  <div id="app">
      <div>
        <fieldset>
          <legend>基础版本</legend>
          <box1></box1>
        </fieldset>
      </div>
      <div>
        <fieldset>
          <legend>bus总线</legend>
          <box2></box2>
       </fieldset>
      </div>
      <div>
        <fieldset>
          <legend>slot插槽</legend>
          <box3></box3>
        </fieldset>
      </div>
  </div>
</template>

<script>
import box1 from './components/1Basicversion/todosContair'
import box2 from './components/2bus/todosContair'
import box3 from './components/3slot/todosContair'

export default {
  name: 'App',
  components: {
    box1,
    box2,
    box3
  }
}
</script>

<style>
#app {
  font-size: 14px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width:100vw;
  display: flex;
   flex-wrap:wrap;
  justify-content:space-around;
}
#app>div{
  width: 45%;
}
#app fieldset{
  width: 80%;
  display: inline-block;
  border-color: lightblue;
  margin: 10px auto;

}

</style>
