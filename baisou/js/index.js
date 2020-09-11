
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
                avatar: './img/3/avatar3_1.jpg',
                name: '邱正宏',
                occupation: '台湾知名医学博士',
                videourl: 'http://1256062259.vod2.myqcloud.com/7ab667a8vodcq1256062259/a2581e3c5285890807497469165/RZkS4vnIqL8A.mp4',
                poster: './img/3/banner3_1.jpg',
                bannerlist: [],
                bannerurl: '',
                article_avatarlist: ['./img/3/avatar3_2.jpg','./img/3/avatar3_3.jpg','./img/3/avatar3_4.jpg'],
                isFav: false,
                rentong_count: 121,
                article_content: '塑身衣到底有没有效果？今天就来和大家从原理讲解塑身衣。',
                link: {text: '', url: ''},
                comment_count: 312,
                comment_list: [
                    {key: '~胧咚蔷', val: '了解，长知识了，谢谢'},
                    {key: '打个盹mi', val: '请问如果长期穿塑身衣，实质上是会变瘦的吗？'}
                ],
                comment_tan: [
                    {
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '~胧咚蔷',
                        tan_comment_content: '了解，长知识了，谢谢',
                        isTanFav: false,
                        tan_comment_count: 590,
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '打个盹mi',
                        tan_comment_content: '请问如果长期穿塑身衣，实质上是会变瘦的吗？',
                        isTanFav: false,
                        tan_comment_count: 411,
                        sec_comment_list: [
                            {
                                sec_avatar: './img/1/avatar1_1.jpg',
                                sec_name: '邱正宏',
                                sec_comment_content: '您好，透过塑身衣以外力加压，有接触性抑制的效果，对维持身形会有帮助，但要减少局部脂肪需要咖啡因面料配合',
                                isTanFav2: false,
                                sec_comment_count: 392
                            }
                        ]
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '奶韬家',
                        tan_comment_content: '我行动了已经',
                        isTanFav: false,
                        tan_comment_count: 290,
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: 'Deniece',
                        tan_comment_content: '能保持身材的我都愿意尝试',
                        isTanFav: false,
                        tan_comment_count: 156,
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '易小啾',
                        tan_comment_content: '看来穿上塑身衣就可以用好的体态见人了！',
                        isTanFav: false,
                        tan_comment_count: 123,
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '夏日海风',
                        tan_comment_content: '看来我要找回自信了',
                        isTanFav: false,
                        tan_comment_count: 102,
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '梅长苏家',
                        tan_comment_content: '谢谢邱医生的分享，讲得非常清楚',
                        isTanFav: false,
                        tan_comment_count: 87,
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '一只小左鸭',
                        tan_comment_content: '体态对我来讲真的很重要',
                        isTanFav: false,
                        tan_comment_count: 45,
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: 'Kathaa',
                        tan_comment_content: '接触性抑制，get',
                        isTanFav: false,
                        tan_comment_count: 28,
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '西班牙之北',
                        tan_comment_content: '塑身衣肯定有用啊，我一直都在穿',
                        isTanFav: false,
                        tan_comment_count: 11,
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '白猫诗官',
                        tan_comment_content: '你说的这么好，我也想试试看',
                        isTanFav: false,
                        tan_comment_count: 6,
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '立青',
                        tan_comment_content: '原来真的可以耶',
                        isTanFav: false,
                        tan_comment_count: 6,
                    }
                ]
            },{
                avatar: './img/1/avatar1_1.jpg',
                name: '明星健身房',
                occupation: '健康时尚类综艺',
                videourl: 'http://1256062259.vod2.myqcloud.com/7ab667a8vodcq1256062259/9c0d81135285890807425885442/6OLzv0Ad374A.mp4',
                poster: './img/1/banner1_1.jpg',
                bannerlist: [],
                bannerurl: '',
                article_avatarlist: ['./img/1/avatar1_2.jpg','./img/1/avatar1_3.jpg','./img/1/avatar1_4.jpg'],
                isFav: false,
                rentong_count: 19,
                article_content: '刘芸产后22天瘦身40斤？女明星产后瘦身秘诀竟是穿塑身衣。',
                link: {text: '', url: ''},
                comment_count: 320,
                comment_list: [
                    {key: '放飞-piano', val: '我也有类似的经历，产后塑身衣真的少不'},
                    {key: 'Amy爱', val: '身材太棒了'}
                ],
                comment_tan: [
                    {
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '放飞-piano',
                        tan_comment_content: '我也有类似的经历，产后塑身衣真的少不了',
                        isTanFav: false,
                        tan_comment_count: 150
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: 'FreeSpirit',
                        tan_comment_content: '刘芸是恢复得挺好的',
                        isTanFav: false,
                        tan_comment_count: 91
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '鹿珊宣岐',
                        tan_comment_content: '我看了节目，非常喜欢你，不用在意那些恶意的评论，作自己就好了。',
                        isTanFav: false,
                        tan_comment_count: 79
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: 'cx晨',
                        tan_comment_content: '姐姐加油',
                        isTanFav: false,
                        tan_comment_count: 54
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '红豆',
                        tan_comment_content: '你对自己是不是太狠了呀',
                        isTanFav: false,
                        tan_comment_count: 33
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '奶茶三分糖',
                        tan_comment_content: '原来恢复得快，付出的也多',
                        isTanFav: false,
                        tan_comment_count: 20
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '杨琳NUN',
                        tan_comment_content: '加油姐姐',
                        isTanFav: false,
                        tan_comment_count: 8
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '小李加油',
                        tan_comment_content: '太厉害了',
                        isTanFav: false,
                        tan_comment_count: 8
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '原来山峰',
                        tan_comment_content: '好好照顾自己不要太累',
                        isTanFav: false,
                        tan_comment_count: 6
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '啦啦啦咔',
                        tan_comment_content: '姐姐也太漂亮了吧呜呜呜',
                        isTanFav: false,
                        tan_comment_count: 3
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: 'Amy爱米',
                        tan_comment_content: '身材太棒了',
                        isTanFav: false,
                        tan_comment_count: 3
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
                article_content: '《乘风破浪的姐姐》开播后，钟丽缇的“少女感”冲上热搜，日前，又因这件塑身衣再次上热搜。',
                link: {text: '查看更多', url: ''},
                comment_count: 178,
                comment_list: [
                    {key: '小短腿', val: '岁月从不败美人'},
                    {key: '蔡小姨-ak', val: '不愧是我们的雅雅姐，你49都比我19好看'}
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
                article_content: '塑身衣的3大误区，你中招了吗？？',
                link: {text: '', url: ''},
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
                article_content: '塑身衣可瘦腰燃脂保持身材？当心塑身不成反伤身',
                link: {text: '查看更多', url: ''},
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
                link: {text: '查看更多', url: ''},
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
                article_content: '塑身衣有没有效果？选对很重要! - 大麦测评',
                link: {text: '查看更多', url: '/baisou/zhongcao/index.html'},
                comment_count: 201,
                comment_list: [
                    {key: '乖露露的萌妹子', val: '秀密斯S？到底是啥牌子，效果真好'},
                    {key: '拉菲1800', val: '请问产后穿塑身衣好不好？我是剖腹产的！！！'}
                ],
                comment_tan: [
                    {
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '乖露露的萌妹子',
                        tan_comment_content: '秀密斯S？到底是啥牌子，效果真好',
                        isTanFav: false,
                        tan_comment_count: 611,
                        sec_comment_list: [
                            {
                                sec_avatar: './img/1/avatar1_1.jpg',
                                sec_name: '喵小鱼',
                                sec_comment_content: '秀密斯S就是秀密斯，看完就入手了，真的太适合我了这期的塑身衣测评',
                                isTanFav2: false,
                                sec_comment_count: 592
                            },{
                                sec_avatar: './img/1/avatar1_1.jpg',
                                sec_name: '鸽子小姐',
                                sec_comment_content: '对，京东上买过，就是叫秀密斯，意大利品牌',
                                isTanFav2: false,
                                sec_comment_count: 426
                            }
                        ]
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '小猪角',
                        tan_comment_content: '种草一下购买渠道吧',
                        isTanFav: false,
                        tan_comment_count: 390,
                        sec_comment_list: [
                            {
                                sec_avatar: './img/1/avatar1_1.jpg',
                                sec_name: '白菜姐妹花',
                                sec_comment_content: '油管上一直有人推荐秀密斯，没想到在京东也有旗舰店了。',
                                isTanFav2: false,
                                sec_comment_count: 92
                            }
                        ]
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '拉菲1800',
                        tan_comment_content: '请问产后穿塑身衣好不好？我是剖腹产的！！！',
                        isTanFav: false,
                        tan_comment_count: 215,
                        sec_comment_list: [
                            {
                                sec_avatar: './img/1/avatar1_1.jpg',
                                sec_name: '杨冰冰',
                                sec_comment_content: '可以的，我也是剖腹产后用的就是秀密斯，可以保护到伤口，缓解腰背痛，腰背挺直后感觉更精神了。',
                                isTanFav2: false,
                                sec_comment_count: 192
                            }
                        ]
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '哔哔哔粑粑',
                        tan_comment_content: '好强大的一篇测评，我想知道夏天穿热不热？',
                        isTanFav: false,
                        tan_comment_count: 215,
                        sec_comment_list: [
                            {
                                sec_avatar: './img/1/avatar1_1.jpg',
                                sec_name: '北鼻有梦',
                                sec_comment_content: '我也是夏天都穿的，没感觉说会很热，反而那几个月瘦下来更多，体重也有明显下降，估计跟夏季人体代谢旺盛、体内循环加快有关。',
                                isTanFav2: false,
                                sec_comment_count: 192
                            }
                        ]
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '海绵宝宝',
                        tan_comment_content: '终于等到大麦这篇塑身衣测评了，棒棒棒，买它~~~',
                        isTanFav: false,
                        tan_comment_count: 90,
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '我是小鱼',
                        tan_comment_content: '本来还在束腹带、连体衣、买不买有排扣这些上纠结，大麦这篇测评完美帮我解决好了，爱心',
                        isTanFav: false,
                        tan_comment_count: 55,
                    }
                ]

            },{
                avatar: './img/8/avatar8_1.jpg',
                name: 'Alice Tan',
                occupation: '环球旅游博主',
                videourl: '',
                poster: '',
                bannerlist: ['./img/8/banner8_1.jpg'],
                bannerurl: '',
                article_avatarlist: ['./img/8/avatar8_2.jpg','./img/8/avatar8_3.jpg','./img/8/avatar8_4.jpg'],
                isFav: false,
                rentong_count: 3.6,
                article_content: '塑身衣真的能变瘦吗？我连续穿了7周！',
                link: {text: '查看更多', url: ''},
                comment_count: 92,
                comment_list: [
                    {key: '九分甜**', val: '你变化很明显啊，穿的是什么塑身衣？'},
                    {key: '邱月浩瀚', val: '看的我一个孕妇也蠢蠢欲动啊'}
                ]
            },{
                avatar: './img/8/avatar8_1.jpg',
                name: 'Emeric茉茉',
                occupation: '英国时尚达人',
                videourl: 'http://1256062259.vod2.myqcloud.com/7ab667a8vodcq1256062259/8ea188a65285890807473125610/AZ9MaFGaj2oA.mp4',
                poster: './img/9/banner9_1.jpg',
                bannerlist: [],
                bannerurl: '',
                article_avatarlist: ['./img/8/avatar8_2.jpg','./img/8/avatar8_3.jpg','./img/8/avatar8_4.jpg'],
                isFav: false,
                rentong_count: 3.6,
                article_content: '塑身衣绝对是凹身材的好物，它不一定让你舒服？但是为了美，谁还管这么多。',
                link: {text: '', url: ''},
                comment_count: 92,
                comment_list: [
                    {key: '白色大鹅', val: '每次看到茉茉的心情都会变好了'},
                    {key: '佳喱味', val: 'you are such a cutie啊'}
                ],
                 comment_tan: [
                    {
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '白色大鹅',
                        tan_comment_content: '每次看到茉茉的心情都会变好了',
                        isTanFav: false,
                        tan_comment_count: 60
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '佳喱味儿',
                        tan_comment_content: 'you are such a cutie',
                        isTanFav: false,
                        tan_comment_count: 41
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '果冻',
                        tan_comment_content: '茉茉今天这套超美',
                        isTanFav: false,
                        tan_comment_count: 29
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '凌栎727',
                        tan_comment_content: '塑身衣我在穿，效果还不错',
                        isTanFav: false,
                        tan_comment_count: 14
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '我是小熊',
                        tan_comment_content: '最大的愿望就是穿着不勒',
                        isTanFav: false,
                        tan_comment_count: 13
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '伊丽莎白',
                        tan_comment_content: '这个视频不错',
                        isTanFav: false,
                        tan_comment_count: 10
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '彭圈圈',
                        tan_comment_content: 'love you',
                        isTanFav: false,
                        tan_comment_count: 8
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '安娜98',
                        tan_comment_content: '塑身衣很有用呀',
                        isTanFav: false,
                        tan_comment_count: 8
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '凡凡最爱',
                        tan_comment_content: '敏感肌能用吗？',
                        isTanFav: false,
                        tan_comment_count: 6
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '惠姐',
                        tan_comment_content: '茉茉的皮肤真的很好',
                        isTanFav: false,
                        tan_comment_count: 2
                    },{
                        tan_avatar: './img/1/avatar1_1.jpg',
                        tan_name: '是舒逾呀',
                        tan_comment_content: '塑身衣肯定是有用的呀',
                        isTanFav: false,
                        tan_comment_count: 2
                    }
                ]
            },{
                avatar: './img/8/avatar8_1.jpg',
                name: 'K姐说好物',
                occupation: '六年从业新闻人',
                videourl: '',
                poster: '',
                bannerlist: ['./img/10/banner10_1.jpg','./img/7/banner7_1.jpg'],
                bannerurl: '',
                article_avatarlist: ['./img/10/avatar10_2.jpg','./img/10/avatar10_3.jpg','./img/10/avatar10_4.jpg'],
                isFav: false,
                rentong_count: 3.6,
                article_content: '2020年“全球塑身衣榜单TOP10”揭晓，有你在穿的吗？',
                link: {text: '查看更多', url: ''},
                comment_count: 92,
                comment_list: [
                    {key: '周素萍', val: '排名第一的有穿过'},
                    {key: '易安', val: '我穿了两件秀密斯了，真的好穿！'}
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
            alert('已提交，感谢您的反馈');
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
        },
        toDetail: function(index) {
            if (this.contentList[index].link.url) {
                this.tan_commentData.index = index
                this.tan_commentData.count = this.contentList[index].comment_count
                this.tan_commentData.list = this.contentList[index].comment_tan
                sessionStorage.setItem("commentData_" + index, JSON.stringify(this.tan_commentData));
                console.log(JSON.stringify(this.tan_commentData));
                window.location.href = this.contentList[index].link.url
            }
        }
    }
  })