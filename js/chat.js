
//ҳ��������ʱ������
window.onload=function(){
    msg.style.bottom="-3px";
}
$ ("#close").click(()=>{
    msg.style.bottom="-480px";
    setTimeout(()=>msg.style.bottom=0,4000+1000);
})
//�û�����İ�ť����¼�
$("#subbtn").click(function(){
    var text= $("#userInput").val();
    var time=getCurrentTime();
    if(text==""){
        alert("����û�������κ����ݣ�");
    }
    else{
        loadmessage(text,time);
        console.log('success!');
        $("#userInput").val("");
    }
})
//��ҳ���в����û����������
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
