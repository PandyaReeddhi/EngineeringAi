$(document).ready(function(){

  $(".trainer_card").on("mouseenter", function () {
    $(this).addClass("flip");
  })
  $(".trainer_card").on("mouseleave", function () {
    $(this).removeClass("flip");
  })

  $(".trainer_card").on("touchstart", function () {
    $(this).closest(".trainers").find(".trainer_card").removeClass("flip");
    $(this).toggleClass("flip");
  })
      // Slider Jquery
  var window_width = $(window).width(),
  slider_item = $(".banner-slider li").length;
$(".banner-slider li:first-child").addClass('active');
$(".banner-slider li").height(window_width * 0.226);
$(".banner-slider li").width(window_width);
$(".banner-slider ul").width(window_width * slider_item);

$(".next-btn").click(function () {
  var dataIndex = $(".banner-slider li.active").data("index")+1;
  $(".prev-btn").removeClass("disable");
  if ($(".banner-slider li.active").next().length) {
    $(".banner-slider li.active").addClass('next').next().addClass('active');
    $(".banner-slider li.next").removeClass('active next');
    var current_active = $(".banner-slider li.active").index();
    $(".banner-slider ul").css("transform", "translateX(" + -(current_active * window_width) + "px)");
  }
  if(dataIndex == 4){
    $(this).addClass("disable");
  }
})

$(".prev-btn").click(function () {
  var dataIndex = $(".banner-slider li.active").data("index")-1;
  $(".next-btn").removeClass("disable");
  if ($(".banner-slider li.active").prev().length) {

    $(".banner-slider li.active").addClass('prev').prev().addClass('active');
    $(".banner-slider li.prev").removeClass('active prev');
    var current_active = $(".banner-slider li.active").index();
    $(".banner-slider ul").css("transform", "translateX(" + -(current_active * window_width) + "px)");
  }
  if(dataIndex == 1){
    $(this).addClass("disable");
  }
})

$(window).resize(function (event) {
  window_width = $(window).width(),
    slider_item = $(".banner-slider li").length;
  $(".banner-slider li:first-child").addClass('active');
  $(".banner-slider li").height(window_width * 0.226);
  $(".banner-slider li").width(window_width);
  $(".banner-slider ul").width(window_width * slider_item);
  var current_active = $(".banner-slider li.active").index();
  $(".banner-slider ul").css("transform", "translateX(" + -(current_active * window_width) + "px)");

});
/*mobile menu*/
$(".hamburger-menu").click(function () {
  $("html,body").toggleClass("open-menu");
});

})
/* Window scroll */
$(window).scroll(function () {

  var scrollTopPos = $(window).scrollTop() / 2 - 180;
  $(".banner-slider li.active .bg_img").css({ "transform": "translate3d(0," + scrollTopPos + "px,0)" })
});