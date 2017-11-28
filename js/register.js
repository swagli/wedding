(()=>{
    var result=true;
    $("input[name=uname2]").blur(e=>{
        vali($(e.target),"data/vali.php");
    })
    function vali($txt,url){
        return new Promise(resolve=>{
            var $span=$txt.next();
            if($txt.val()==""){
                $span.removeClass("right").addClass("error")
                    .text("不能为空!");
                result=false;
            }else{
                $.get(url,"uname="+$txt.val())
                .then(data=>{
                    if(data==true){
                        $span.removeClass("error").addClass("ok").text("可用");
                        result=true;
                        resolve();
                    }else{
                        $span.removeClass("ok").addClass("error").text("已存在！不可用！");
                        result=false;
                        console.log(data);
                    }
                })
            }
        })
    }
    $("input[name=email]").blur(e=>{
        vali($(e.target),"data/vali.php");
    })
    function checkPwd(){
        var $upwd2=$("input[name=upwd2]"),
            $upwd3=$("#upwd3"),
            $span=$upwd3.next();
        if($upwd2.val()!=$upwd3.val()){
            $span.removeClass('ok').addClass("error").text("两次输入的密码不一致!");
            result=false;
        }else{
            $span.removeClass("error").addClass('ok').text("通过!");
            result=true;
        }
    }
    $("#upwd2").blur(checkPwd);
    $("#upwd3").blur(checkPwd);

  $("#register").click(e=>{
        e.preventDefault();
        var n = $("#uname2").val();
        var p = $("#upwd2").val();
        var e=$("#el").val();
        $.ajax({
            type:"GET",
            url:'data/register.php',
            data:{uname:n,upwd:p,email:e},
            success:function(data){
                if(data.code>0){
                    $('#tip6').removeClass("error").addClass("ok").text("注册成功");
                   location.href='index.html';
                }else{
                    $('#tip6').removeClass("ok").addClass("error").text("注册失败");
                }
            },
            error:function(data){
                alert("您的网络出现故障，请检查");
            }
        })
	    })
  })()

$('#cancel2').click(()=>{
    $('#uname2').val("");
    $('#upwd2').val("");
    $('#upwd3').val("");
    $('#el').val("");
    $("#tip3").html("");
    $("#tip4").html("");
    $("#tip5").html("");
    $("#tip6").html("");
})