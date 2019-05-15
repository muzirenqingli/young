<template>
    <div>
        <ul>
            <li v-for="(item,index) in newsList[newsId]" :key="index">
                <a :href="item.newLink">
                    <h3>{{item.newTitle}}</h3>
                    <p>{{item.newDes}}</p>
                </a>
            </li>
        </ul>
     
    </div>
</template>
<script>
export default {
    data() {
        return {
            newsId : 0,
            newsList:
            [
                [{newLink:'http://baidu.com',newTitle:'000000中美经贸磋商：愿谈则谈，要打便打',newDes:'北京时间5月8日，在前一天夜里美道琼斯指数暴跌近500点之后，美国贸易代表办公室（USTR）发布声明宣布，美方将于5月10日将2000亿美元中国输美商品的关税从10%上调至25%。'},
                {newLink:'http://baidu.com',newTitle:'000000中美经贸磋商：愿谈则谈，要打便打',newDes:'北京时间5月8日，在前一天夜里美道琼斯指数暴跌近500点之后，美国贸易代表办公室（USTR）发布声明宣布，美方将于5月10日将2000亿美元中国输美商品的关税从10%上调至25%。'},
                {newLink:'http://baidu.com',newTitle:'000000中美经贸磋商：愿谈则谈，要打便打',newDes:'北京时间5月8日，在前一天夜里美道琼斯指数暴跌近500点之后，美国贸易代表办公室（USTR）发布声明宣布，美方将于5月10日将2000亿美元中国输美商品的关税从10%上调至25%。'},
                {newLink:'http://baidu.com',newTitle:'000000中美经贸磋商：愿谈则谈，要打便打',newDes:'北京时间5月8日，在前一天夜里美道琼斯指数暴跌近500点之后，美国贸易代表办公室（USTR）发布声明宣布，美方将于5月10日将2000亿美元中国输美商品的关税从10%上调至25%。'},
                ],
                 [{newLink:'http://baidu.com',newTitle:'111111中美经贸磋商：愿谈则谈，要打便打',newDes:'北京时间5月8日，在前一天夜里美道琼斯指数暴跌近500点之后，美国贸易代表办公室（USTR）发布声明宣布，美方将于5月10日将2000亿美元中国输美商品的关税从10%上调至25%。'},
                {newLink:'http://baidu.com',newTitle:'111111中美经贸磋商：愿谈则谈，要打便打',newDes:'北京时间5月8日，在前一天夜里美道琼斯指数暴跌近500点之后，美国贸易代表办公室（USTR）发布声明宣布，美方将于5月10日将2000亿美元中国输美商品的关税从10%上调至25%。'},
                {newLink:'http://baidu.com',newTitle:'111111中美经贸磋商：愿谈则谈，要打便打',newDes:'北京时间5月8日，在前一天夜里美道琼斯指数暴跌近500点之后，美国贸易代表办公室（USTR）发布声明宣布，美方将于5月10日将2000亿美元中国输美商品的关税从10%上调至25%。'},
                {newLink:'http://baidu.com',newTitle:'111111中美经贸磋商：愿谈则谈，要打便打',newDes:'北京时间5月8日，在前一天夜里美道琼斯指数暴跌近500点之后，美国贸易代表办公室（USTR）发布声明宣布，美方将于5月10日将2000亿美元中国输美商品的关税从10%上调至25%。'},
                ],
                
                
            ]
        }
    },
    methods: {
        
    },
    created() {
        console.log(this.newsId+'12111111111111111111');
        this.newsId = this.$route.query.newsId;
    },
}
</script>
<style lang='less' scoped>
</style>