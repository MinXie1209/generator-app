<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   <myInput/>
  </div>

</template>

<script>
import myInput from "./input.vue";
export default {
  components: {
    myInput
  },
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#start {
  font-size: 26px;
}
</style>
