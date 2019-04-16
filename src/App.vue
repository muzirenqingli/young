<template>
  <div id="app">
    <header-comp></header-comp>
  </div>
</template>

<script>
import HeaderComp from './components/headerComp.vue'

export default {
  name: 'app',
  components: {
    HeaderComp
  },
  created:function(){
    class Person{
      constructor(name,age){
        this.name = name;
        this.age = age;

      }
      say(){
        return "name:11111111c"+this.name+"age:"+this.age
      }

    }

    let p1 = new Person('liqian','33');
    window.console.log(p1.say())
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
