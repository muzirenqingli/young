<template>
    <div class="news-content">
        <ul>
            <li v-for="(item,index) in newsList[newsId]" :key="index">
                <a>
                    <h3>{{item.name}}</h3>
                    <p>{{item.text}}</p>
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
            newsList:[
                [{'name':'lilili123','text':'my test11111'}],
                [{'name':'2222222','text':'my test22222'}]
            ]
        }
    },
    methods: {
        getDate(){
            let url = "https://www.apiopen.top/satinApi?type=1&page="+this.newsId;
            this.$http.get(url).then((response)=> {
                this.showDate(response);
            }).catch((response)=>{
                console.log(response)
            })
        },
        showDate(json){
            console.log(json.data.data)
            this.newsList = json.data.data;
        }

    },
    created() {
        //console.log(this.$route.query);
        this.newsId = this.$route.query.newsId;
        //this.getDate(this.newsId)
    },
}
</script>
<style lang='less' scoped>
    .news-content{ padding-top: 0.8rem;}
</style>