<template>
    <div class="login-container">
        <div class="logo">
            <a><img src="@/assets/images/logo-big.png" alt="" width="104" height="25" /></a>
        </div>
        <div class="content">       
            <form class="login-form" id="login-form" action="#" method="post" autocomplete="off" > 
				<h3 class="form-title">登录到您的帐户</h3>
                <div class="form-group">                   
                    <label class="control-label">用户名</label>
                    <div class="input-icon">
                        <i class="fa fa-user"></i>
                        <input class="form-control placeholder-no-fix" type="text" autocomplete="off" placeholder="请输入用户名" name="tm_user_name" id="tm_user_name" /> 
					</div>
                </div>
                <div class="form-group">
                    <label class="control-label"></label>
                    <div class="input-icon">
                        <i class="fa fa-lock"></i>
                        <input class="form-control placeholder-no-fix" type="password" autocomplete="new-password" placeholder="请输入密码" name="tm_password"  id="tm_password"  /> 
					</div>
                </div>
                <div class="form-actions">
                    <label class="checkbox">
                        <input type="checkbox" name="remember" value="1" id="rmbUser"/>记住密码
                    </label>
                    <button type="button"  class="btn green pull-right">登录<i class="m-icon-swapright m-icon-white"></i> </button>
                </div>                                 
				<!-- Language selector -->
				<ul class="nav navbar-top-links">
					<li class="dropdown">
						<a id="demo-lang-switch" class="lang-selector dropdown-toggle" href="#" data-toggle="dropdown">
                            <span class="lang-selected">                                
                            </span>
                        </a>
                        <!--Language selector menu-->
                        <ul class="head-list dropdown-menu">
                            <li>
                                <!--Chinese-->
                                <a href="#">
                                    <img class="lang-flag" src="/images/login/flags/cn.png" alt="Chinese">
                                    <span class="lang-id">ZH</span>
                                    <span class="lang-name">中文</span>
                                </a>
                            </li>
                            <li>
                                <!--English-->
                                <a href="#" class="active">
                                    <img class="lang-flag" src="/images/login/flags/united-kingdom.png" alt="English">
                                    <span class="lang-id">EN</span>
                                    <span class="lang-name">English</span>
                                </a>
                            </li>
                        </ul>
                    </li>
				</ul>                  
                <div class="create-account">
					<p>徒美旅行</p>
                </div>
            </form>   
        </div>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style rel="stylesheet/scss" lang="scss" scoped >
    $bg:#ccc;
    $light_gray:#eee;
    .login-container {
        position: fixed;
        height: 100%;
        width: 100%;
        background-color: $bg;
        .logo{
            margin: 40px auto 10px auto;
            padding: 15px;
            text-align: center;
        }
        .content{
            background: url(/images/login/bg-white-lock.png) repeat;
            width: 360px;
            margin: 0 auto;
            margin-bottom: 0px;
            padding: 30px;
            padding-top: 20px;
            padding-bottom: 15px;
            -webkit-border-radius: 7px;
            -moz-border-radius: 7px;
            -ms-border-radius: 7px;
            -o-border-radius: 7px;
            border-radius: 7px;            
        }
    }
</style>
