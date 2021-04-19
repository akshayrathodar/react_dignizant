<?php

require_once './connections/connect.php';

header("Access-Control-Allow-Origin: *");
header('Access-Control-Allow-Headers: *');
$response = [];

    
    

$sql = "select * from tbl_products";

$result = mysqli_query($conn, $sql);

if ($result->num_rows > 0) {
    $results = [];
    while($row = $result->fetch_assoc()) {
        $image = HOST.'/uploads/'.$row['image'];
        array_push($results,['id'=>$row['id'],'product_name'=>$row['productName'],'product_price'=>$row['productPrice'],'image'=>$image,'descr'=>$row['descr']]);
    }
    array_push($response,['status'=>true,'data'=>$results]);
    
} else {
    $response = ['status'=>false,'message'=>'No Record Found'];
}

print_r(json_encode($response));
exit;
?>
