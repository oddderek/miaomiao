<template>
    <div class="login-body">
        <div>
            <input type="text" class="login-text" placeholder="账户名/手机号/Email">
        </div>
        <div>
            <input type="text" class="login-text" placeholder="请输入您的密码">
        </div>
        <div class="login-btn">
            <input type="submit" value="登录">
        </div>
        <div class="login-link">
            <a href="#">立即注册</a>
            <a href="#">找回密码</a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
#content .login-body {
    width: 100%;
}

.login-body .login-text {
    width: 100%;
    height: 40px;
    outline: none;
    border: none;
    border-bottom: 1px solid #ccc;
    margin-bottom: 5px;
    text-indent: 10px;
}

.login-body .login-btn {
    height: 50px;
    margin: 10px;
}

.login-body .login-btn > input {
    display: block;
    background: #e54847;
    width: 100%;
    height: 100%;
    font-size: 20px;
    color: #fff;
    border-radius: 5px;
    border: none;
}

.login-body .login-link {
    display: flex;
    justify-content: space-between;
}

.login-body .login-link > a {
    text-decoration: none;
    font-size: 12px;
    margin: 0 5px;
    color: #e54847;
}
</style>
