<?php

require_once './connections/connect.php';

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');
$response = [];

if(isset($_POST['username']) && isset($_POST['password'])) {
    
    $sql = "SELECT id FROM tbl_users WHERE username = '".$_POST['username']."' AND password = '".$_POST['password']."'";
    
    $result = mysqli_query($conn, $sql);
    
    if($result->num_rows > 0) {
        $response = ['status'=>true,'message'=>'Success'];
    } else {
        $response = ['status'=>false,'message'=>'Invalid Details'];
    }
} else {
    $response = ['status'=>false,'message'=>'Please Enter Proper Data'];
}
print_r(json_encode($response));
exit;
?>