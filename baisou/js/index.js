
window.alert = function (name) {

            const iframe = document.createElement('IFRAME');
    
            iframe.style.display = 'none';
    
            iframe.setAttribute('src', 'data:text/plain,');
    
            document.documentElement.appendChild(iframe);
    
            window.frames[0].window.alert(name);
    
            iframe.parentNode.removeChild(iframe);
    
        };
var app = new Vue({
    el: '#app',
    data: {
        contentList:[
            {
                avatar: './img/1/avatar1_1.jpg',
                name: '陈春玲',
                occupation: '香港大学医学博士',
                videourl: '',
                poster: '',
                bannerlist: [],
                bannerurl: './img/1/banner1_1.jpg',
                article_avatarlist: ['./img/1/avatar1_2.jpg','./img/1/avatar1_3.jpg','./img/1/avatar1_4.jpg'],
                isFav: false,
                rentong_count: 153,
                article_content: '塑身衣真的有用吗 | 关于塑身衣的4个真相,听听陈教授是怎么说的。',
                link: '查看更多',
                comment_count: 1520,
                comment_list: [
                    {key: '＠_＠怡情', val: '讲解的很清晰,明白了'},
                    {key: 'AUHiuYg', val: '就是因为不清楚塑身衣的情况才迟迟没买，这下可以放心了.....'}
                ],
                comment_tan: [
                    {
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '勾小肥',
                        tan_comment_content: '这种类型的地欧弟是打开看看这种类型的地欧弟是打开看看',
                        isTanFav: false,
                        tan_comment_count: 391,
                        sec_comment_list: [
                            {
                                sec_avatar: './img/1/avatar1_1.jpg',
                                sec_name: '勾小肥2',
                                sec_comment_content: '这种类型的地欧弟是打开看看2这种类型的地欧弟是打开看看2',
                                isTanFav2: false,
                                sec_comment_count: 392
                            },{
                                sec_avatar: './img/1/avatar1_1.jpg',
                                sec_name: '勾小肥3',
                                sec_comment_content: '这种类型的地欧弟是打开看看3这种类型的地欧弟是打开看看3',
                                isTanFav2: false,
                                sec_comment_count: 393
                            }
                        ]
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '勾小肥',
                        tan_comment_content: '这种类型的地欧弟是打开看看这种类型的地欧弟是打开看看',
                        isTanFav: false,
                        tan_comment_count: 391,
                        sec_comment_list: [
                            {
                                sec_avatar: './img/1/avatar1_1.jpg',
                                sec_name: '勾小肥2',
                                sec_comment_content: '这种类型的地欧弟是打开看看2这种类型的地欧弟是打开看看2',
                                isTanFav2: false,
                                sec_comment_count: 392
                            },{
                                sec_avatar: './img/1/avatar1_1.jpg',
                                sec_name: '勾小肥3',
                                sec_comment_content: '这种类型的地欧弟是打开看看3这种类型的地欧弟是打开看看3',
                                isTanFav2: false,
                                sec_comment_count: 393
                            }
                        ]
                    }
                ]
            },{
                avatar: './img/2/avatar2_1.jpg',
                name: 'k姐探吧',
                occupation: '芒果娱乐版主编',
                videourl: '',
                poster: '',
                bannerlist: ['./img/2/banner2_1.jpg'],
                bannerurl: '',
                article_avatarlist: ['./img/2/avatar2_2.jpg','./img/2/avatar2_3.jpg','./img/2/avatar2_4.jpg'],
                isFav: false,
                rentong_count: 19,
                article_content: '自《乘风破浪的姐姐》开播后,49岁的钟丽缇因“少女感”又冲上热搜,日前,她现身走机场，穿着粉色外套扎....',
                link: '查看更多',
                comment_count: 178,
                comment_list: [
                    {key: '不短*的小短腿', val: '岁月从不败美人'},
                    {key: '蔡大姨-ak', val: '不愧是我们的雅雅姐，你68都比我18好看'}
                ]
            },{
                avatar: './img/3/avatar3_1.jpg',
                name: '邱正宏',
                occupation: '台湾塑身专家',
                videourl: 'http://1256062259.vod2.myqcloud.com/7ab667a8vodcq1256062259/dcdc8d1f5285890807426310510/n8LkeJAEpd8A.mp4',
                poster: './img/3/banner3_1.jpg',
                bannerlist: [],
                bannerurl: '',
                article_avatarlist: ['./img/3/avatar3_2.jpg','./img/3/avatar3_3.jpg','./img/3/avatar3_4.jpg'],
                isFav: false,
                rentong_count: 121,
                article_content: '塑身衣到底有没有效果？今天就来和大家从原理讲解塑身衣。',
                link: '什么叫做接触性抑制-百科解读',
                comment_count: 312,
                comment_list: [
                    {key: '~胧咚蔷', val: '生完大宝宝从大码穿到小码，还是有效果的'},
                    {key: '打个盹mi', val: '除了塑形，最重要还是可以让人变挺拔'}
                ]
            },{
                avatar: './img/4/avatar4_1.jpg',
                name: 'Ja菲菲',
                occupation: 'CFC国际认证美体顾问',
                videourl: '',
                poster: '',
                bannerlist: ['./img/4/banner4_1.jpg'],
                bannerurl: '',
                article_avatarlist: ['./img/4/avatar4_2.jpg','./img/4/avatar4_3.jpg','./img/4/avatar4_4.jpg'],
                isFav: false,
                rentong_count: 2.1,
                article_content: '塑身衣真的是消费主义的陷阱，你认同吗？',
                link: '',
                comment_count: 97,
                comment_list: [
                    {key: 'kiki大笨钟', val: '讲解的很清晰，明白了'},
                    {key: '*风雨人生', val: '就是因为不清楚塑身衣的情况才迟迟没买，这下可以放心了'}
                ]
            },{
                avatar: './img/5/avatar5_1.jpg',
                name: '刘芝娜',
                occupation: '美国ACE-CPT认证教练',
                videourl: '',
                poster: '',
                bannerlist: ['./img/5/banner5_1.jpg'],
                bannerurl: '',
                article_avatarlist: ['./img/5/avatar5_2.jpg','./img/5/avatar5_3.jpg','./img/5/avatar5_4.jpg'],
                isFav: false,
                rentong_count: 2.2,
                article_content: '关于塑身衣的4个真相，上万元的塑身衣真的有用吗？？',
                link: '查看更多',
                comment_count: 106,
                comment_list: [
                    {key: '繁星人_', val: '讲解的很清晰，明白了'},
                    {key: 'forever*', val: '就是因为不清楚塑身衣的情况才迟迟没买，这下可以放心了'}
                ]
            },{
                avatar: './img/6/avatar6_1.jpg',
                name: '林希缳',
                occupation: '国家一级纤体师',
                videourl: '',
                poster: '',
                bannerlist: [],
                bannerurl: './img/6/banner6_1.jpg',
                article_avatarlist: ['./img/6/avatar6_2.jpg','./img/6/avatar6_3.jpg','./img/6/avatar6_4.jpg'],
                isFav: false,
                rentong_count: 1.3,
                article_content: '坚持穿塑身衣对生活有什么改变？？',
                link: '查看更多',
                comment_count: 312,
                comment_list: [
                    {key: '-慧小彤', val: '不看不知道，一看吓一跳'},
                    {key: '@候鸟飞-', val: '看到这个身材，我默默放下了筷子！拿起手机加入购物车，哈哈哈'}
                ]
            },{
                avatar: './img/7/avatar7_1.jpg',
                name: '处女座小C',
                occupation: '百万美妆博主',
                videourl: '',
                poster: '',
                bannerlist: [],
                bannerurl: './img/7/banner7_1.jpg',
                article_avatarlist: ['./img/7/avatar7_2.jpg','./img/7/avatar7_3.jpg','./img/7/avatar7_4.jpg'],
                isFav: false,
                rentong_count: 19.1,
                article_content: '史上最全的塑身衣亲测评分，千万别买6分以下的塑身衣!',
                link: '',
                comment_count: 201,
                comment_list: [
                    {key: 'inon恩恩', val: '想拥有，刚生完宝宝的我太需要了'},
                    {key: '简单的-幸福', val: '虽然最近一直在kepp提重和身形，但是还是急需这个啊啊啊啊啊啊'}
                ]
            },{
                avatar: './img/8/avatar8_1.jpg',
                name: 'Alice Tan',
                occupation: '台湾旅游博主',
                videourl: '',
                poster: '',
                bannerlist: ['./img/8/banner8_1.jpg'],
                bannerurl: '',
                article_avatarlist: ['./img/8/avatar8_2.jpg','./img/8/avatar8_3.jpg','./img/8/avatar8_4.jpg'],
                isFav: false,
                rentong_count: 3.6,
                article_content: '塑身衣真的能变瘦吗？我连续穿了7周！',
                link: '查看更多',
                comment_count: 92,
                comment_list: [
                    {key: '九分甜**', val: '你变化很明显啊，穿的是什么塑身衣？'},
                    {key: '邱月浩瀚', val: '看的我一个孕妇也蠢蠢欲动啊'}
                ]
            }
        ],
        showReasonIndex: -1,
        isShowComment_tan: false,
        isShowComment_tanBg: false,
        tan_commentData: {},
    },
    mounted: function() {
        var mySwiper = new Swiper ('.swiper-container', {
            loop: true, // 循环模式选项
            
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
              bulletClass : 'my-bullet',//需设置.my-bullet样式
              bulletActiveClass: 'my-bullet-active',
            },
          })
    },
    methods: {
        showReason: function(index) {
            if (this.showReasonIndex == index) {
                this.showReasonIndex = -1
            } else {
                this.showReasonIndex = index
            }
            
        },
        fav: function(index) {
            this.contentList[index].isFav = !this.contentList[index].isFav
        },
        fav2: function(index) {
            let thisData = this.tan_commentData.list[index]
            if (thisData.isTanFav == false) {
                thisData.tan_comment_count = ++thisData.tan_comment_count
            } else {
                thisData.tan_comment_count = --thisData.tan_comment_count
            }
            thisData.isTanFav = !thisData.isTanFav
        },
        fav3: function(index, secIndex) {
            let thisData = this.tan_commentData.list[index].sec_comment_list[secIndex]
            if (thisData.isTanFav2 == false) {
                thisData.sec_comment_count = ++thisData.sec_comment_count
            } else {
                thisData.sec_comment_count = --thisData.sec_comment_count
            }
            thisData.isTanFav2 = !thisData.isTanFav2
        },
        alertTip: function() {
            alert('已提交，谢谢您的建议');
            this.showReasonIndex = -1;
        },
        showComment_tan: function(index) {
            this.isShowComment_tanBg = true
            this.isShowComment_tan = true
            this.tan_commentData.index = index
            this.tan_commentData.count = this.contentList[index].comment_count
            this.tan_commentData.list = this.contentList[index].comment_tan
        },
        closeComment_tan: function() {
            let that =  this;
            this.isShowComment_tan = false
            setTimeout(function() {
                that.isShowComment_tanBg = false
            }, 500)
        }
    }
  })