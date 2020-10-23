// wow = new WOW({  
//     boxClass: 'wow', 
//     animateClass: 'animated',
//     offset: 0, 
//     mobile: true, 
//     live: true
// })  
// wow.init();

window.onload = function(){

    // 产品模块点击展示产品的详细内容
    var flag = true;
    $('#product .list li a').click(function(event){
        event.stopPropagation();
       flag = false;
        $('#product #mask').fadeIn();
        var ImgUrl = $(this).find('.img img').attr('src');
        var title = $(this).find('h4').html();
        var price = $(this).find('span').html();
        var content = $(this).find(".textHidden").html();
        var model = $(this).attr('model');
        var spec = $(this).attr('spec');
        console.log(ImgUrl , title , price , content , model , spec);
        $('#product .mask img').attr('src',ImgUrl)
        $('#product .mask h4').text(title)
        $('#product .mask .price span').text(price)
        $('#product .mask .content article').html(content)
        $('#product .mask .model span').text(model)
        $('#product .mask .spec span').text(spec)
    })
    $('html').click(function(){
        console.log(flag)
        if (!flag){
            flag = true;
            $('#product #mask').fadeOut();
        }
    })


    var arrLocation = window.location.href.split('/');
    var activeName = '';
    console.log(arrLocation)
    activeName = arrLocation[arrLocation.length - 1];
    if(activeName == "about.html" || activeName == "contact.html"){}else{ activeName = arrLocation[arrLocation.length - 2]; }
    console.log(activeName)
    switch(activeName){
        case 'about.html': 
            for(var i = 0; i<$('.nav li').length; i++){ if($('.nav li').eq(i).attr("name") == 'about.html'){ $('.nav li').eq(i).addClass('active').siblings('li').removeClass('active') } }; break;
        case 'contact.html': 
            for(var i = 0; i<$('.nav li').length; i++){ if($('.nav li').eq(i).attr("name") == 'contact.html'){ $('.nav li').eq(i).addClass('active').siblings('li').removeClass('active') } }; break;
        case 'product':
            for(var i = 0; i<$('.nav li').length; i++){ if($('.nav li').eq(i).attr("name") == 'product'){ $('.nav li').eq(i).addClass('active').siblings('li').removeClass('active') } }; break;
        case 'news':
            for(var i = 0; i<$('.nav li').length; i++){ if($('.nav li').eq(i).attr("name") == 'news'){ $('.nav li').eq(i).addClass('active').siblings('li').removeClass('active') } }; break;
        case 'video':
            for(var i = 0; i<$('.nav li').length; i++){ if($('.nav li').eq(i).attr("name") == 'video'){ $('.nav li').eq(i).addClass('active').siblings('li').removeClass('active') } }; break;
        case 'case':
            for(var i = 0; i<$('.nav li').length; i++){ if($('.nav li').eq(i).attr("name") == 'case'){ $('.nav li').eq(i).addClass('active').siblings('li').removeClass('active') } }; break;
        default: 
            $('.nav li').eq(0).addClass('active').siblings('li').removeClass('active'); break;
    }


    //手机端的菜单按钮动态效果
    var flagA = true;
    var flag1 = true;
    $('header .top .open').click(function(){
        if(flag1 == false){
            flag1 = true;
            $('header .top dl').slideUp();  
        }
        if(flagA){
            flagA = false;
            $('header .open span').eq(0).addClass('active');
            $('header .open span').eq(2).addClass('active');
            $('header .open span').eq(1).hide();
            $('header .nav').slideDown();
        }else{
            flagA = true;
            $('header .open span').eq(0).removeClass('active');
            $('header .open span').eq(2).removeClass('active');
            $('header .open span').eq(1).show();          
            $('header .nav').slideUp();
        }
    });

    $('header .top .admin').click(function(){
        if(flagA == false){
            flagA = true;
            $('header .open span').eq(0).removeClass('active');
            $('header .open span').eq(2).removeClass('active');
            $('header .open span').eq(1).show();          
            $('header .nav').slideUp();
        }
        if(flag1){
            flag1 = false;
            $('header .top dl').slideDown();
        }else{
            flag1 = true;
            $('header .top dl').slideUp();        
        }
    });

    $('.header>ul>li').hover(
        function(){ $(this).find('.childUl').fadeIn(100);  $(this).find('.childUl').animate({top:'80px',display:'block'},200)},
        function(){$(this).find('.childUl').animate({top:'100px',display:'none'},200);  $(this).find('.childUl').fadeOut();}
    
    )
    var arr = window.location.href.split('/');
    var index = arr.indexOf(document.domain);
    var value = arr[index+1].split('.');
    var val = value[0];
    for(var i=0; i<$('#nav>li').length; i++){
        if($('#nav>li').eq(i).attr('name') == val){
            $('#nav>li').eq(i).addClass('active').siblings().removeClass('active'); 
        }
    }

    var Bannerswiper = new Swiper('#banner', { 
        lazy: true, 
        loop: true,
        autoplay:true,
        speed:600,
        navigation: {
            nextEl: '#banner .swiper-button-next',
            prevEl: '#banner .swiper-button-prev',
        },
    });
    var swiper1 = new Swiper('.swiper1.swiper-container', {  
        autoplay:true,
        speed:600,
        slidesPerView: 4,
        spaceBetween: 45,
        slidesPerGroup:4,
        loop: false,
        loopFillGroupWithBlank: true,
        breakpoints: {
            1024:{
                slidesPerView: 3,
                spaceBetween: 25,
                slidesPerGroup:3,
            },
            750:{
                slidesPerView: 2,
                spaceBetween: 20,
                slidesPerGroup:2,
            }
        },
        navigation: {
            nextEl: '#sectFive .swiper-button-next',
            prevEl: '#sectFive .swiper-button-prev',
        },
        pagination:{ 
            el: '.swiper-pagination',
             clickable :true,
        }
    });
    $('.swiper1.swiper-container').mouseenter(function () {
        swiper1.autoplay.stop();
     })
     $('.swiper1.swiper-container').mouseleave(function () {
        swiper1.autoplay.start();
     })
    var swiper2 = new Swiper('.swiper2.swiper-container', { 
        autoplay: true, 
        effect:'fade',
        // direction:'vertical',
        speed:600,
        loop:true,
        navigation: {
            nextEl: '.swiper-button-next.more',
        },  
    });

    
    certifySwiper = new Swiper('.video.swiper-container', {
        disableOnInteraction:false,
        speed:600,
        watchSlidesProgress: true,
        slidesPerView: 'auto',
        centeredSlides: true,
        loop: true,
        loopedSlides: 3,
        autoplay: true,
        on: {
            progress: function(progress) {
                for (i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i);
                    var slideProgress = this.slides[i].progress;
                    modify = 1;
                    if (Math.abs(slideProgress) > 1) {
                        modify = (Math.abs(slideProgress) - 1) * 0.3 + 1;
                    }
                    translate = slideProgress * modify * 260 + 'px';
                    scale = 1 - Math.abs(slideProgress) / 5;
                    zIndex = 999 - Math.abs(Math.round(10 * slideProgress));
                    slide.transform('translateX(' + translate + ') scale(' + scale + ')');
                    slide.css('zIndex', zIndex);
                    slide.css('opacity', 1);
                    
                    if (Math.abs(slideProgress) > 1) {
                        slide.css('opacity', 0);
                    }
                }
            },
            setTransition: function(transition) {
                for (var i = 0; i < this.slides.length; i++) {
                    var slide = this.slides.eq(i)
                    slide.transition(transition);
                }

            }
        }

    });
    $('.video .swiper-wrapper .swiper-slide').click(function(){
        var videoUrl = $(this).find('a').attr('name');
        $('.videoUrl').fadeIn();
        $('.videoUrl video').attr('src',videoUrl);
        $('body').css({'overflow':'hidden'})
    })
    $('.videoUrl img').click(function(){
        $('.videoUrl').fadeOut();
        var video = document.getElementById('video');
        video.pause();
        $('.videoUrl video').attr('src','javascript:;');
        $('body').css({'overflow':'auto'})
    })
    

}

// var height = $('#sectThree .left').width();
// window.onresize = function(){
//     var currentWidth = document.body.clientWidth;
//     console.log(height)
//     if(currentWidth > 768){
//         height = $('#sectThree .left').width();
//         $('#sectThree .content').css({'height':height+'px'});
//     }else{
//         $('#sectThree .content').css({'height':'auto'});
//         $('#sectThree .content .left').css({'height':height + 'px'});
//     }   
// }
