<template>
    <div class="news-content">
        <ul>
            <li v-for="(item,index) in newsList" :key="index">
                <a>
                    <img :src="item.profile_image" class="list-img" />
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
                [{'name':'lilili123','profile_image':'http://tva4.sinaimg.cn/crop.0.0.996.996.50/e7f9e94djw8f6ursgyso3j20ro0rp0wy.jpg','text':'应塔吉克斯坦共和国外交部长穆赫里丁、吉尔吉斯共和国外交部长艾达尔别科夫、阿塞拜疆共和国外交部长马梅德亚罗夫、格鲁吉亚外交部长扎尔卡利亚尼、亚美尼亚共和国外交部长姆纳察卡尼扬邀请，国务委员兼外交部长王毅将于5月20日至27日访问上述五国并出席在吉尔吉斯共和国举行的上海合作组织成员国外长理事会会议。'}],
                [{'name':'2222222','profile_image':'http://tva4.sinaimg.cn/crop.0.0.996.996.50/e7f9e94djw8f6ursgyso3j20ro0rp0wy.jpg','text':'应塔吉克斯坦共和国外交部长穆赫里丁、吉尔吉斯共和国外交部长艾达尔别科夫、阿塞拜疆共和国外交部长马梅德亚罗夫、格鲁吉亚外交部长扎尔卡利亚尼、亚美尼亚共和国外交部长姆纳察卡尼扬邀请，国务委员兼外交部长王毅将于5月20日至27日访问上述五国并出席在吉尔吉斯共和国举行的上海合作组织成员国外长理事会会议。'}],
                [{'name':'lilili123','profile_image':'http://tva4.sinaimg.cn/crop.0.0.996.996.50/e7f9e94djw8f6ursgyso3j20ro0rp0wy.jpg','text':'应塔吉克斯坦共和国外交部长穆赫里丁、吉尔吉斯共和国外交部长艾达尔别科夫、阿塞拜疆共和国外交部长马梅德亚罗夫、格鲁吉亚外交部长扎尔卡利亚尼、亚美尼亚共和国外交部长姆纳察卡尼扬邀请，国务委员兼外交部长王毅将于5月20日至27日访问上述五国并出席在吉尔吉斯共和国举行的上海合作组织成员国外长理事会会议。'}],
                [{'name':'2222222','profile_image':'http://tva4.sinaimg.cn/crop.0.0.996.996.50/e7f9e94djw8f6ursgyso3j20ro0rp0wy.jpg','text':'应塔吉克斯坦共和国外交部长穆赫里丁、吉尔吉斯共和国外交部长艾达尔别科夫、阿塞拜疆共和国外交部长马梅德亚罗夫、格鲁吉亚外交部长扎尔卡利亚尼、亚美尼亚共和国外交部长姆纳察卡尼扬邀请，国务委员兼外交部长王毅将于5月20日至27日访问上述五国并出席在吉尔吉斯共和国举行的上海合作组织成员国外长理事会会议。'}],
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
        this.getDate(this.newsId)
    },
}
</script>
<style lang='less' scoped>
    .news-content{ padding-top: 0.8rem; text-align: left}
    .news-content ul li{ overflow: hidden; margin: 0.2rem}
    .list-img{ float: left; margin:0px 0.15rem 0 0; width: 0.5rem}
</style>