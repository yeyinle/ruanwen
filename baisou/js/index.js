
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
                avatar: './img/avatar1_1.jpg',
                name: '陈春玲',
                occupation: '香港大学医学博士',
                videourl: '',
                bannerlist: [],
                bannerurl: './img/banner1_1.jpg',
                article_avatarlist: ['./img/avatar1_2.jpg','./img/avatar1_3.jpg','./img/avatar1_4.jpg'],
                isFav: false,
                rentong_count: 153,
                article_content: '塑身衣真的有用吗 | 关于塑身衣的4个真相,听听陈教授是怎么说的。',
                link: '查看更多',
                comment_count: 1520,
                comment_list: [
                    {key: '＠_＠怡情', val: '讲解的很清晰,明白了'},
                    {key: 'AUHiuYg', val: '就是因为不清楚塑身衣的情况才迟迟没买，这下可以放心了.....'}
                ]
            },{
                avatar: './img/avatar2_1.jpg',
                name: 'k姐探吧',
                occupation: '芒果娱乐版主编',
                videourl: '',
                bannerlist: ['./img/banner2_1.jpg'],
                bannerurl: '',
                article_avatarlist: ['./img/avatar2_2.jpg','./img/avatar2_3.jpg','./img/avatar2_4.jpg'],
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
                avatar: './img/avatar3_1.jpg',
                name: '邱正宏',
                occupation: '台湾塑身专家',
                videourl: '',
                bannerlist: [],
                bannerurl: './img/banner3_1.jpg',
                article_avatarlist: ['./img/avatar3_2.jpg','./img/avatar3_3.jpg','./img/avatar3_4.jpg'],
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
                avatar: './img/avatar4_1.jpg',
                name: 'Ja菲菲',
                occupation: 'CFC国际认证美体顾问',
                videourl: '',
                bannerlist: ['./img/banner4_1.jpg'],
                bannerurl: '',
                article_avatarlist: ['./img/avatar4_2.jpg','./img/avatar4_3.jpg','./img/avatar4_4.jpg'],
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
                avatar: './img/avatar5_1.jpg',
                name: '刘芝娜',
                occupation: '美国ACE-CPT认证教练',
                videourl: '',
                bannerlist: ['./img/banner5_1.jpg'],
                bannerurl: '',
                article_avatarlist: ['./img/avatar5_2.jpg','./img/avatar5_3.jpg','./img/avatar5_4.jpg'],
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
                avatar: './img/avatar6_1.jpg',
                name: '林希缳',
                occupation: '国家一级纤体师',
                videourl: '',
                bannerlist: [],
                bannerurl: './img/banner6_1.jpg',
                article_avatarlist: ['./img/avatar6_2.jpg','./img/avatar6_3.jpg','./img/avatar6_4.jpg'],
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
                avatar: './img/avatar7_1.jpg',
                name: '处女座小C',
                occupation: '百万美妆博主',
                videourl: '',
                bannerlist: [],
                bannerurl: './img/banner7_1.jpg',
                article_avatarlist: ['./img/avatar7_2.jpg','./img/avatar7_3.jpg','./img/avatar7_4.jpg'],
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
                avatar: './img/avatar8_1.jpg',
                name: 'Alice Tan',
                occupation: '台湾旅游博主',
                videourl: '',
                bannerlist: ['./img/banner8_1.jpg'],
                bannerurl: '',
                article_avatarlist: ['./img/avatar8_2.jpg','./img/avatar8_3.jpg','./img/avatar8_4.jpg'],
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
        showReasonIndex: -1
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
        alertTip: function() {
            alert('已提交，谢谢您的建议');
            this.showReasonIndex = -1;
        }
    }
  })