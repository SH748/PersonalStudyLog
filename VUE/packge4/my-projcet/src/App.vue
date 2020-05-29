<template>
  <div id="app">
    <div>
      <box1></box1>
    </div>
    <div>
      <box2></box2>
    </div>
    <div>
      <box3></box3>
    </div>
    <div>
      <box4></box4>
    </div>
  </div>
</template>

<script>
import box1 from './components/1/box'
import box2 from './components/2/box'
import box3 from './components/3/box'
import box4 from './components/4/box'
export default {
  name: 'App',
  components: {
    box1,
    box2,
    box3,
    box4
  }
}
</script>

<style>
  #app{
    background-color: lightblue;
    display: flex;
    justify-content: center;
    width: 100vw;
  }
  #app>div{
    width: 40%;
    height: 500px;
    margin:10px;
    background-color: lightcoral ;
  }
   .todo-container {
  width: 600px;
  margin: 0 auto;
}
div .todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}
</style>
