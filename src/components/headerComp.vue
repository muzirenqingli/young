<template>
    <div class="topbar">
        <img src="../images/top-logo.png" class="logo" />
        <div class="serch-wrap">
            <input type="text" class="serch-text" />
            <button class="serch-btn">搜索</button>
        </div>
        <img src="../images/header-faxian.png" class="findicon" @click="btnClick"/>
    </div>
</template>
<script>
export default {
    methods:{
        btnClick:function(){
        }
    }
}
</script>
<style lang="less" scope>
    .topbar{ position: fixed; left: 0rem; top: 0rem; display: inline-block; background: #fff;}
    .logo{ width:25%; margin: 0.10rem; float: left;}
    .serch-wrap{ display: inline-block; border-radius: 0.50rem; background: #f2f2f2; margin: 0.08rem 0rem; padding: 0.05rem 0.10rem; float: left;
        .serch-text{ border: none; background:none; outline: none}
        .serch-btn{border:none; border-left:0.01rem solid #000; background:none;}
    }
    .findicon{ width: 7%; margin: 0.10rem}
</style>

