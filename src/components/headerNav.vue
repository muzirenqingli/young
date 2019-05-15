<template>
 
</template>
<script>
export default {
    data:function(){
        return {
            list:[
                { name:"关注",path:"/forcs"},
                { name:"头条",path:"/firster"},
                { name:"推荐",path:"/tujian"},
                { name:"上海",path:"/sh"},
                { name:"要闻",path:"/news"},
                { name:"青年",path:"/yong"},
                { name:"创新",path:"/innovation"},
            
            ]
        }
    },
    created:function(){

    }
}
</script>
<style lang="less" scoped>
    .header-nav{
        position: absolute;
        width: 100%;
        overflow-x: auto;
        font-size: 0.28rem;
        padding: 0.1rem 0rem;
        &::-webkit-scrollbar{display:none} 
        ul{
            width: 115%;
            display: flex;
            overflow-y: none
        }  
        
        ul li{
            margin: 0 0.18rem;
            a{font-size: 0.28rem}
        }
        
    }
</style>


