<?php
 include_once 'config.php';

 $response = array();

//  unset($_SESSION["userLoggedIn"]);

 if(isset($_SESSION["userLoggedIn"])){
        
        $response =createResponse(200,'there is a user', 'user logged in', $userLoggedInObj->getUserData());
        echo json_encode($response);
    }


else{
    $response = createResponse(400,"not logged in", 'You are not logged in');
    echo json_encode($response);
}

