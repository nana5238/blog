<template>
  <div class="list">
    <div class="ui items">
      <div class="item" v-for="item in data">
        <router-link :to="{ name: 'detail', params: { id: item._id }}">
          <div class="image">
            <img src="https://unsplash.it/300/200">
          </div>
          <div class="content">
            <a class="header">{{item.title}}</a>
            <div class="meta">
              <span>{{item.date}}</span>
            </div>
            <div class="description">
              <p></p>
            </div>
            <div class="extra">{{item.desc}}</div>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped="" type="text/css">
  @import '../assets/sass/statistic.scss';
</style>

<script>


  export default{
      data(){
          return{
              msg : "list",
              data:[],
          }
      },
      mounted:function(){
          this.$nextTick(function () {
            this.list();
          })
      },

      methods:{
          list:function(){
              var that= this;
              $.ajax({
                  type:'GET',
                  url:'/api/list',
                  success:function(res){

                      that.data = res.value;
                      console.log(that.data);
                  }
              })
          },

      }
  }
</script>
