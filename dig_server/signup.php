<?php

require_once './connections/connect.php';

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');
$response = [];

if(isset($_POST['username']) && isset($_POST['password'])) {
    
    $sql = "insert INTO tbl_users (username,password) values ('".$_POST['username']."','".$_POST['password']."')";
    
    $result = mysqli_query($conn, $sql);
    
    if ($result) {
        $response = ['status'=>true,'message'=>'Success'];
    } else {
        $response = ['status'=>false,'message'=>'Insert Error'];
    }
} else {
    $response = ['status'=>false,'message'=>'Please Enter Proper Data'];
}
print_r(json_encode($response));
exit;
?>