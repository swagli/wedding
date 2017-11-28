<?php
 require_once('init.php');
 @$pid=$_REQUEST["pid"];
 if(!$pid) $pid=1;
$output=[
  "details"=>[]
];
$sql="SELECT * FROM product WHERE pid=$pid";
$output["details"]=sql_execute($sql)[0];
$sql="SELECT * FROM product_pic WHERE pid=$pid order by pid";
$output["details"]["picList"]=sql_execute($sql);
echo json_encode($output);

?>