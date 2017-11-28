<?php
require_once('init.php');
@$bid=$_REQUEST["bid"];
if(!$bid) $bid=1;
$output=[
    "picList"=>[]
];
$sql="SELECT * FROM banner_detail WHERE bid=$bid order by bid";
$output["picList"]=sql_execute($sql);
echo json_encode($output);
?>