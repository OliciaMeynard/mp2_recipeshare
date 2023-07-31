<?php

require_once 'config.php';

$response = array();
if(isset($_GET['allComments'])){
    $recipeId = json_decode($_GET['allComments']);

    
    $results = getAllComments($con, $recipeId->id);

    if($results){

        $response = createResponse(200, 'success', 'successfully fetched comments', $results);
    }

    else if(empty($results)){
        $response = createResponse(300,'empty result', 'result is empty', $results);
    }
    
    else{
        $response = createResponse(300,'error', 'error', $results);

    }

    
}

echo json_encode($response);

?>