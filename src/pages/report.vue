<template>
    <el-form ref="form" :model="form" label-width="80px">
    <el-form-item label="标题">
      <el-input v-model="form.name"></el-input>
    </el-form-item>

    <el-form-item label="时间">
      <el-col :span="11">
        <el-date-picker type="date" placeholder="选择日期" v-model="form.date" style="width: 100%;"></el-date-picker>
      </el-col>
    </el-form-item>

    <el-form-item label="内容">
      <el-input type="textarea" v-model="form.desc"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">提交</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>

</template>

<script>
  export default {
    data() {
      return {
        form: {
          name: '',
          date: '',
          desc: ''
        }
      }
    },
    methods: {
      onSubmit() {
        console.log('submit!');
        var that = this;
        $.ajax({
          type:'POST',
          url:'/api/addarticle',
          data:{
            title: that.form.name,
            date: that.form.date,
            desc: that.form.desc,
          },
          success:function(res){
            if(res.status == 1){
              window.location.href="/list";
            }
          }
        })

      }
    }
  }
</script>
