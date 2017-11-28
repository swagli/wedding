<?php
  require_once("init.php");

  @$uname=$_REQUEST["uname"];
  @$upwd=$_REQUEST["upwd"];
  @$email=$_REQUEST["email"];
  $sql="INSERT INTO user(uname,upwd,email) VALUES('$uname','$upwd','$email')";
    
  $result=mysqli_query($conn,$sql);
  if($result===true){
	echo '{"code":1,"msg":"注册成功"}';
  }else{
	echo '{"code":-1,"msg":"注册失败"}';
  }

 



?>