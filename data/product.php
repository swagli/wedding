<?php
 require_once("init.php");
 $sql='SELECT * FROM product';
 $result=mysqli_query($conn,$sql);
 $rowList=mysqli_fetch_all($result,MYSQLI_ASSOC);
 echo json_encode($rowList);
 ?>