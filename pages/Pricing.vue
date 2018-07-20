<template>
  <div>
    <div class="fon">
      <Header />
      <div class="text">
        <h1>PRICING</h1>
        <p>
          Find the program that is just right for you! Each one contains a pre-selected set of essential lessons and
          courses which are designed specifically to master the instrumet at a desired level.</p>
        <p>
          The given time is just an estimate and you are always free to choose your own rate of studing! Perhaps you
          will make it even faster.</p>
      </div>
      <div class="options">
12313123123
        1312
        3123
        1231
      </div>
    </div>
  </div>
</template>

<script>
  import Header from '../components/Header.vue'
  export default {
    name: "Pricing",
    components:{
      Header
    }
  }
</script>

<style scoped>
  .fon {
    text-align: center;
    color: white;
  }
  .text{
    height: 314px;
    padding-top: 45px;
    border: 1px solid black;
  }

  p {
    font-size: 20px;
    margin-bottom: 20px;
    line-height: 30px;
  }

  h1 {
    color: white;
    font-weight: bold;
    font-size: 3em;
    padding-bottom: 25px;
  }

  .options{
    background: url(../assets/img/main-3.png) no-repeat;
  }
</style>
