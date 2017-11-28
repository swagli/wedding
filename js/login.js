
 $("#uname").blur(e=>{
    var result=true;
     var n = $("#uname").val();
     var unameReg=/^[a-zA-Z0-9]{3,8}$/;
     if(n==""){
         $('#tips').removeClass("ok").addClass("error").text("不能为空!");
         result=false;
     }else{
         if(!unameReg.test(n)){
             $('#tips').removeClass("ok").addClass("error").text("用户名格式不正确（字母数字3~8位）!");
             result=false;
             return;
         }else{
             $('#tips').removeClass("error").addClass("ok") .text("可用");
             result=false;
         }
     }
 })
 $("#upwd").blur(e=>{
	 var result=true;
     var p = $("#upwd").val();
     var upwdRect=/^[a-zA-Z0-9]{3,8}$/;
     if(p==""){
         $('#tips2').removeClass("ok").addClass("error").text("不能为空!");
         result=false;
     }else{
        if(!upwdRect.test(p)){
             $('#tips2').removeClass("ok").addClass("error").text("密码格式不正确（字母数字3~8位）");
                result=false;
                return;
        }else{
             $('#tips2').removeClass("error").addClass("ok").text("可用");
             result=true;
        }
     }
 })
   
$("#login").click(e=>{
	e.preventDefault();
	var n = $("#uname").val();
	var p = $("#upwd").val();
		 $.ajax({
		type:"GET",
		url:"data/login.php",
		data:{uname:n,upwd:p},
		success:function(data){
            if(data.code>0){
                //将用户名编号保存在sessionStorage
                sessionStorage.setItem("uname",n);
                sessionStorage.setItem("uid",data.uid);
                //登录成功自动跳转到首页index.html
                location.href="index.html";
                $('#tips2').removeClass("error").addClass("ok").text("登陆成功");
            }else{
                $('#tips2').removeClass("ok").addClass("error").text("该用户不存在!");
            }
		},
		error:function(data){
            alert("您的网络出现故障，请检查");
		}
    });
})

$('#cancel').click(()=>{
  $('#tips').html('');
  $('#tips2').html('');
  $('#uname').val('');
  $('#upwd').val('');
})
   