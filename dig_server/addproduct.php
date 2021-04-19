<?php

require_once './connections/connect.php';

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');
$response = [];

if(isset($_POST['name']) && isset($_POST['price']) && isset($_POST['desc']) && isset($_FILES['file'])) {
    
    $target_dir = "uploads/";
    $target_file = $target_dir . basename($_FILES["file"]["name"]);
    

    $imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));
    $fnm = time().rand().'.'.$imageFileType;
    $target_file = $target_dir . $fnm;
    
    if(move_uploaded_file($_FILES["file"]["tmp_name"], $target_file)) {
        
        $sql = "insert INTO tbl_products (productName,productPrice,image,descr) values ('".$_POST['name']."',".$_POST['price'].",'".$fnm."','".$_POST['desc']."')";
        
        $result = mysqli_query($conn, $sql);
        
        if ($result) {
            $response = ['status'=>true,'message'=>'Success'];
        } else {
            $response = ['status'=>false,'message'=>'Insert Error'];
        }

    } else {
        $response = ['status'=>false,'message'=>'File is not uploaded'];    
    }

    // $sql = "insert INTO tbl_users (username,password) values ('".$_POST['username']."','".$_POST['password']."')";
    
    // $result = mysqli_query($conn, $sql);
    
    // if ($result) {
    //     $response = ['status'=>true,'message'=>'Success'];
    // } else {
    //     $response = ['status'=>false,'message'=>'Insert Error'];
    // }
} else {
    $response = ['status'=>false,'message'=>'Please Enter Proper Data'];
}
print_r(json_encode($response));
exit;
?>