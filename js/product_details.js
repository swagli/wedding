$.ajax({
    type:"url",
    url:'data/product_detail.php?'+location.search.slice(1),
    success:function(data){
        var details=data.details;
        $("#larger").attr("src",details.picList[0].lg);
         var html="";
        for(var pic of details.picList) {
            html += (`
               <li>
                  <img data-toggle="item"  src="${pic.sm}" >        
               </li>
            `)
            $('.J_small').html(html);
            $('.J_small').children().on("click",function () {
                 var $li = $(this);
                 var src = $li.children().first().attr("src").replace("/sm/" , "/lg/");
                $("#larger").attr({src});
            });
            $('#title').html(`<h3>${details.title}</h3>`)
            $('.price-rel').html(`
           <span class="priceDisplay"><em>￥</em>${details.newPrice}</span>
           <span class="originalPrice">参考价：￥<em>${details.oldPrice}</em></span>
          `)
        }
    },
    error:function(){
        alert("网络故障，请检查！")
    }
})
$(".J_small").on("click ","[data-toggle=item]",e=>{
    e.preventDefault();
    var $item=$(e.target);
    if(!$item.parent().hasClass("cur")){
        $item.parent().addClass("cur").siblings().removeClass("cur");
    }
});

$("#J_boxTax>ul>li").on("click ","[data-toggle=item]",e=>{
    e.preventDefault();
    var $item=$(e.target);
    if(!$item.parent().hasClass("tip")){
        $item.parent().addClass("tip").siblings().removeClass("tip");
        $($item.attr("href")).addClass("active").siblings().removeClass("active");
    }
});