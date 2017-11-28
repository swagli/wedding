
/*风格样片的轮播效果*/
$(()=>{
    var i=0;
    function start(){
        i++;
        if(i>4){
            i=1;
            play(i);
        }else{
            play(i);
        }
    }
    var timer=setInterval(start,3000);
    function play(i){
        $(" #carousel .main div:nth-child("+i+")").addClass("active").siblings().removeClass("active");
        $(" #carousel .banner-nav div:nth-child("+i+")").addClass("out").siblings().removeClass("out");
    }
    $("#carousel").mouseover(e=>{
        clearInterval(timer);
    });
    $(" #carousel").mouseout(e=>{
        timer=setInterval(start,3000)
    });
    var lis=document.querySelectorAll(".banner-nav>div");
    for(var i=0;i<lis.length;i++){
        lis[i].index=i;
        lis[i].onmouseover=function(){
            i=this.index;
            play(this.index+1);
        }
    }
});
/****风格样片的点击事件****/
$(function(){
    $('.banner-nav').on('click','.bg',function(){
        location.href='demo.html';
    });
});
$(function(){
    $('.main').on('click','.banner',function(){
        location.href='demo.html';
    });
});
/*左侧固定导航条*/
$(function () {
    $(".top").click(function () {
        $("body,html").animate({ scrollTop: "0px" },5000);
    });
    $(".bottom").click(function () {
        $("body,html").animate({ scrollTop: "3000px" }, 5000);
    });
    $(".tel").hover(function () {
        $(".phone").animate({ left: "58px", opacity: 1, top: "160px" }, 600);
    }, function () {
        $(".phone").animate({ left: "-56px", opacity: 0 }, 600);
    });
    $(".qq").hover(function () {
        $(".qrcode").animate({ left: "58px", opacity: 1, top: "250px" }, 600);
    }, function () {
        $(".qrcode").animate({ left: "-56px", opacity: 0 }, 600);
    });
})

 /*点击图片出现的背景图*/
 $(".overlay").hover(function() {
     $(this).children(".my-shadow").animate({ opacity: 1,bottom:"0px"}, 600);
 }, function () {
     $(this).children(".my-shadow").animate({ opacity: 0,bottom:"400px" }, 600);
 });
//客片大赏图片的点击事件
$(function(){
  $('#Grid').on('click','.my-shadow',function(){
    location.href='detail.html';
  });
});
//引入底部
$('#footer').load('footer.html');
//引出客服消息弹出框
$('#message').load('chat.html');

