window.onload = function () {
  var imagesCommon = [
    "./images/banner01.jpg",
    "./images/banner02.jpg",
    "./images/banner03.jpg",
    "./images/banner04.jpg"
  ];
  var oBanner = document.querySelector('#banner');

  var awesomeSlider = new AwesomeSlider(imagesCommon, oBanner, {
    ratio: 1 / 1.3
  });

  $('.liked').click(function () {
    if($(this).hasClass('active')){
      return;
    }
    $(this).addClass('active')
    $(this).find('img').attr('src','./images/icon09.png')
    var num = $(this).find('.liked-num').html();
    num++
    $(this).find('.liked-num').html(num);
  })

  $('.follow').click(function(){
    $(this).attr('src','./images/icon10.png')
    $('.fabulous').html('等 107 次赞')
  })

  $('.more').click(function(){
    layer.msg('请下载草莓App');
  })
  $('.right-icon,.btn,.share,.check-more').click(function(){
    layer.msg('请下载种草莓App');
  })
}