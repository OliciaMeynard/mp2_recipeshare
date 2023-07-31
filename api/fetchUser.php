<?php
include 'config.php';



$response = array();


if(isset($_GET["show"])){
    $idRequest = json_decode($_GET["show"]);
    $recipe = new Recipe($con, $idRequest->id, $userLoggedInObj);
    $recipe->incrementViews();
    $recipeData = $recipe->getRecipeData();
    $recipeData['favorites'] = $recipe->getFavorites();
    $recipeData['formattedDate'] = $recipe->getUploadDate();
    $recipeData['uploaderProfilePic'] = $recipe->getUploaderProfilePic();
    $recipeData['uploaderId'] = $recipe->getUploaderId();
    // $recipeData['ifLoggedIn'] = $userLoggedInObj;
    if(!isset($_SESSION["userLoggedIn"])){
        $recipeData['checkIfLiked'] = 0;
        $recipeData['ifLoggedIn'] = false;
        $recipeData['loggedUser'] = null;
    }
    if(isset($_SESSION["userLoggedIn"])){
        $recipeData['checkIfLiked'] = $recipe->checkIfLiked();
        $recipeData['ifLoggedIn'] = true;
        $recipeData['loggedUser'] = $userLoggedInObj->getUserName();
        $recipeData['loggedUserProfilePic'] = $userLoggedInObj->getProfilePic();

        //////CHECK IF SUBBED
            $userTo = $recipe->getUploadedBy();
            $userFrom = $userLoggedInObj->getUserName();
            $query = $con->prepare("SELECT * FROM ".TBL_SUBSCRIBERS." WHERE userTo=:userTo AND
            userFrom=:userFrom");
            $query->bindParam(":userTo", $userTo);
            $query->bindParam(":userFrom", $userFrom);
            $query->execute();   
            $recipeData['ifSubbed'] = $query->rowCount();;
                   
    }

    $recipeData['sumOfComments'] = $recipe->getSumComments();




    $response = createResponse(200, 'Id Request', 'Positive', $recipeData); 
}




echo json_encode($response);


