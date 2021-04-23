<template>
  <div class="detailParams" v-if="Object.keys(params).length !== 0">
    <table v-for="(table,index) in params.rule" class="infoRule" :key="index">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="itemParams">
      <tr v-for="(info,index) in params.info" :key="index">
        <td class="infoParamsKey">{{info.key}}</td>
        <td class="infoParamsValue">{{info.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name:'DetailParams',
  props: {
    params:{
      type:Object,
      defauls(){
        return {}
      }
    }
  }
}
</script>

<style>
.detailParams{
  background-color: #fff;
  padding: 20px 10px;
  color: #000;
  font-weight: normal;
  font-size: 14px;
  margin-top: 10px;
  border-radius: 10px;
}
.detailParams table{
  width: 100%;
  border-collapse: collapse;
}
.detailParams table tr{
  height: 42px;
}
.detailParams table tr td{
  border-bottom: 1px solid rgba(100, 100, 100, .1)
}
.infoParamsKey{
  width: 95px;
}
.infoParams{
  border-top: 1px solid rgba(0, 0, 0, .1);
}
.infoParamsValue{
  color: #eb4868;
}
</style>