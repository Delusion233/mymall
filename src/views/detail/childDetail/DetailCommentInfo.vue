<template>
  <div v-if="Object.keys(commentInfo).length !== 0" class="detailCommentInfo">
    <div class="infoHeader">
      <div class="headerTitle">用户评价</div>
      <div class="headerMore">
        更多
        <i class="arrow-right"></i>
      </div>
    </div>
    <div class="infoUser">
      <img :src="commentInfo.user.avatar" alt="">
      <span>{{commentInfo.user.uname}}</span>
    </div>
    <div class="infoDetail">
      <p>{{commentInfo.content}}</p>
      <div class="infoOther">
        <span class="date">{{commentInfo.created | showDate}}</span>
        <span>{{commentInfo.style}}</span>
      </div>
      <div class="infoImgs">
        <img :src="item" v-for="(item,index) in commentInfo.images" :key="index" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'DetailCommentInfo',
  props: {
    commentInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  filters: {
    showDate(value){
      const date = new Date(value * 1000);
      return date.toLocaleDateString()
    }
  }
}
</script>

<style>
.detailCommentInfo{
  padding: 5px 10px;
  color: #333;
  background-color: #fff;
  margin-top: 10px;
  border-radius: 10px;
  font-weight: normal;
}
.infoHeader{
  height: 50px;
  line-height: 50px;
  border-bottom: 1px solid rgba(0, 0, 0, .1);
}
.headerTitle{
  float: left;
  font-size: 15px;
}
.headerMore{
  float: right;
  margin-right: 10px;
  font-size: 13px;
}
.infoUser{
  padding: 10px 0 0;
}
.infoUser img{
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.infoUser span {
  position: relative;
  font-size: 15px;
  top: -28px;
  margin-left: 56px;
}
.infoDetail{
  padding: 0 5px 15px;
}
.infoDetail p{
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
.infoDetail .infoOther{
  font-size: 12px;
  color: #999;
  margin-top: 10px;
}
.infoOther .date{
  margin-right: 8px;
}
.infoImgs{
  margin-top: 10px;
}
.infoImgs img{
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>