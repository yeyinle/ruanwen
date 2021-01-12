$(function($) {
    $(".menu").click(function() {
        $(".mask_bg").fadeToggle();
        $(".menu_list").slideToggle();
    })
    $(".mask_bg").click(function() {
        $(".mask_bg").fadeToggle();
        $(".menu_list").slideToggle();
    })
});