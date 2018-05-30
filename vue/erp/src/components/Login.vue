<template>
    <div class="login-container">
        <div class="content">       
            <form class="login-form" id="login-form" action="#" method="post" autocomplete="off" > 
				<h3 class="form-title">徒美旅行</h3>
                <div class="form-group">                   
                    <div class="input-icon">
                        <i class="fa fa-user"></i>
                        <el-input v-model="userName" placeholder="请输入用户名" ></el-input>
					</div>
                </div>
                <div class="form-group">
                    <label class="control-label"></label>
                    <div class="input-icon">
                        <i class="fa fa-lock"></i>
                        <el-input v-model="password" placeholder="请输入密码" type="password"></el-input>
					</div>
                </div>
                <el-row :gutter="0">
                    <el-col :span="6"><el-checkbox v-model="rmbUser">记住密码</el-checkbox></el-col>
                    <el-col :span="18" class="el-log" ><el-button type="primary" @click="login">登录</el-button></el-col>
                </el-row>
                <div class="form-group">
                    
                    
                </div>                                 
                <el-dropdown @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{lang}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item command='zh'>{{lang_zh}}</el-dropdown-item>
                        <el-dropdown-item command='en'>{{lang_en}}</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>                  
                <div class="create-account">
					<p>徒美旅行ERP管理系统</p>
                </div>
            </form>   
        </div>
        <div class="backstretch" >
            <img class="bgImg"  src="@/assets/images/35.jpg">
        </div>
    </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
        lang_zh:"中文",
        lang_en:"英文",
        lang:"中文",
        userName:"",
        password:"",
        rmbUser:"",
    }
  },
  methods: {
    handleCommand(command) {
        if (command === 'zh') {
            this.lang=this.lang_zh;
        }else{
            this.lang=this.lang_en;
        }
    },
    login(){
            this.$api.mock();
/*             this.axios.get("https://www.so.com/s?ie=utf-8&fr=none&src=360sou_newhome&q=vue").then((response)=>{
                console.log(response);
            }).catch((response)=>{
                console.log(response);
            }) */
    }

}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped >
    $bg:#ccc;
    $light_gray:#eee;
    $num_0px : 0px;
    $num_1920px: 1920px;
    $num_949px :949px;
    $num_561px :561px;
    $per_100: 100%;
    .login-container {
        position: fixed;
        height: $per_100;
        width: $per_100;
        background-color: $bg;
        .logo{
            margin: 40px auto 10px auto;
            padding: 15px;
            text-align: center;
        }
        .content{
            width: 500px;
            margin: 150px auto 0;
            margin-bottom: $num_0px;
            padding: 30px;
            padding-bottom: 15px;
            -webkit-border-radius: 7px;
            -moz-border-radius: 7px;
            -ms-border-radius: 7px;
            -o-border-radius: 7px;
            border-radius: 7px; 
            padding-top: 26px;
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 3px 3px rgba(0,0,0,.4);           
        }
        .create-account {
            font-size: 16px;
            text-align: center;
            border-top: 1px dotted #9E9E9E;
            padding-top: 0;
            margin-top: 15px;
        }
        .backstretch{
            left: $num_0px;
            top: $num_0px;
            overflow: hidden;
            margin: $num_0px;
            padding: $num_0px;
            height: $num_949px;
            width: $num_1920px;
            z-index: -999999;
            position: fixed;
        }
        .form-group {
            margin-bottom: 10px;
        }
        .el-button{
            padding: 5px 10px;
        }
        .el-log{
            text-align: right;
        }
        .bgImg {
            position: absolute; 
            margin: $num_0px; 
            padding: $num_0px;
            border: none; 
            width: $num_1920px; 
            height: 1346.4px; 
            max-height: none; 
            max-width: none; 
            z-index: -999999; 
            left: $num_0px; 
            top: -392.7px;
        }
        
    }
</style>
