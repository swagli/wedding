<?php
  //1:修改响应头的格式json
  header("Content-Type:application/json;CHARSET=utf-8");
  //2:创建数据库连接
  $conn = mysqli_connect("127.0.0.1","root","123456","wv",3306);
  //3:设置编码
  mysqli_query($conn,"SET NAMES UTF8");
function sql_execute($sql){
    global $conn;
    $result = mysqli_query($conn, $sql);
    if(!$result){
        return  "查询执行失败！请检查SQL语法：$sql";
    }else {
        if(stripos($sql,"select")===0){
            return $rowList = mysqli_fetch_all($result,MYSQLI_ASSOC);
        }else{
            return $result;
        }
    }
}
?>