<template>
  <div>
    <mt-swipe :auto="2000">
          <mt-swipe-item v-for="(img,index) in imgs" :key="index">
              <a :href="img.url">
                <img :src="img.img">
              </a>
          </mt-swipe-item>
        </mt-swipe>
  </div>
</template>

<script>
  export default{
    data(){
      return{
        imgs:[],
      }
    },created(){
      this.$ajax.get('getlunbo')
      .then(res=>{
        console.log(res);
        this.imgs = res.data.message;
      })
      .catch(err=>{
        console.log(err);
      })
    }
  }
</script>
<style scoped>
  .mint-swipe{
    height:200px;
  }
  .mint-swipe img{
    width:100%;
  }
</style>