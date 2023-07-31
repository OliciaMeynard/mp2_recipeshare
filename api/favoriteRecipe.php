<?php
include 'config.php';



if(!isset($_SESSION["userLoggedIn"])){
    $response = createResponse(300,'You are not logged in', 'not logged in', false);
    echo json_encode($response);
    exit();
}


$username = $_SESSION["userLoggedIn"];
$response = array();


if(isset($_POST["recipeId"])){

        $userLoggedInObj = new User($con, $username);
        $recipeId = $_POST["recipeId"];
        $recipe = new Recipe($con, $recipeId , $userLoggedInObj);
        $recipe->favorite();
        $responseData['checkIfLiked'] = $recipe->checkIfLiked();
        $responseData['login'] = $_SESSION["userLoggedIn"];
        $responseData['getFavorites'] = $recipe->getFavorites();
        $response = createResponse(200, 'regarding favorites', 'favorites', $responseData);

}

echo json_encode($response);



?>