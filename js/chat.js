
//页面加载完成时弹出框
window.onload=function(){
    msg.style.bottom="-3px";
}
$ ("#close").click(()=>{
    msg.style.bottom="-480px";
    setTimeout(()=>msg.style.bottom=0,4000+1000);
})
//用户输入的按钮点击事件
$("#subbtn").click(function(){
    var text= $("#userInput").val();
    var time=getCurrentTime();
    if(text==""){
        alert("您还没有输入任何内容！");
    }
    else{
        loadmessage(text,time);
        console.log('success!');
        $("#userInput").val("");
    }
})
//向页面中插入用户输入的内容
function loadmessage(message,time){
    var contentDiv=' <div class="time">';
    contentDiv+=time;
    contentDiv+='</div>';
    contentDiv+='<div class="mainInfo">'
    contentDiv+=' <div class="userId"><a href="#">';
    contentDiv+='</a><div class="conInfo">';
    contentDiv+=message;
    contentDiv+='</div></div>'
    ;
    $(".msgFrame").append(contentDiv);
}

function getCurrentTime(){
    var today=new Date();
    var y=today.getFullYear();
    var mh=today.getMonth();
    mh++;
    var d=today.getDate();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    m=checkTime(m)
    s=checkTime(s)
    var time=y+"-"+mh+"-"+d+"  "+h+":"+m+":"+s;
    return time;
}
function checkTime(i){
    if(i<10)
        i="0"+i
    return i
}
