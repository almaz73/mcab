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
        <!--<div class="col-xl-4" v-for="e in programm.data" :key="e.index">-->
          <!--{{e}}-->
        <!--</div>-->

        <!--<div class="col-xl-4" v-for="e in programm" :key="e.index">-->
          <!--<div class="program-element-header">-->

            <!--<h2 style="color: #1BCF74; font-size: 35px; font-weight: bold">{{e.name}}</h2>-->
            <!--&lt;!&ndash;<p>{{e.duration}}</p>&ndash;&gt;-->
            <!--<p style="font-size: 20px;">{{e.description}}</p>-->
            <!--<br>-->
          <!--</div>-->
          <!--<div class="program-element-footer">-->
            <!--<p style="font-size: 20px;">{{e.enticingText}}</p>-->
            <!--<p v-if="!isBuyOut(e.products)"-->
               <!--style="bottom: 20px; position: absolute; width: 100%; left: 0;">-->
              <!--<template v-for="el in e.products"-->
                        <!--v-if="(el.purchased == null || el.purchased == false) && el.lifetime != 604800000 && el.active == true && el.primary == true">-->
                <!--<a href="javascript:;"-->
                   <!--@click="buy(el.id)"-->
                   <!--v-bind:class="{'btn': true, 'btn-success': true, 'btn-monthly': el.lifetime == 2592000000}"-->
                   <!--v-html="buildProductName(el) + ' FOR $'  + el.priceAsFractional + buildPromoPostfix(el, e)"-->
                <!--&gt;</a>-->
                <!--<br>-->
              <!--</template>-->
              <!--<img src="/src/img/pvm.png" style="width: 85%; margin-top: 10px;"/>-->
            <!--</p>-->
            <!--<p style="bottom: 40px; position: absolute; width: 100%; left: 0;" v-else>-->
              <!--This program is fully purchased-->
            <!--</p>-->

          <!--</div>-->

        <!--</div>-->
      </div>
    </div>
        {{users}}
    <nuxt-link to="/">index</nuxt-link>
  </div>
</template>

<script>
  import Header from '../components/Header.vue';
  export default {
    name: "Pricing",
    components:{
      Header
    },
    async asyncData({store}) {
      await store.dispatch('getUsers');
      //await store.dispatch('getProgramm');
      return {
        users: store.getters.users,
        //programm: store.getters.programm
      }
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
    background: url(../static/img/main-3.png) no-repeat;
    background-size: cover;
  }
</style>
