<?php
include_once 'config.php';




$response = array();
$allowedTypes = ['jpg', 'png', 'jpeg', 'webp'];


if(!empty($_POST['title']) || !empty($_POST['ingredients']) || !empty($_POST['privacy']) || !empty($_POST['category']) || !empty($_POST['description']) || !empty($_POST['howtocook']) || !empty($_FILES['file']['name'])){

    $title = $_POST['title'];
    $ingredients = $_POST['ingredients'];
    $category = $_POST['category'];
    $privacy = $_POST['privacy'];
    $privacy = $_POST['description'];
    $privacy = $_POST['howtocook'];
    $uploadedFile = '';


    $recipeUploadData = new RecipeUploadData(
        $_FILES["file"],
        $_POST["title"],
        $_POST["ingredients"],
        $_POST["privacy"],
        $_POST["category"],
        $_POST["howtocook"],
        $_POST["description"],
        $userLoggedInObj->getUserName()
        // $userLoggedInObj->getUserName()
        );

     $recipeProcessor = new RecipeProcessor($con);
     $wasSuccessful = $recipeProcessor->upload($recipeUploadData);
    

        if($wasSuccessful){
            $response = createResponse(200, "Successful", "Successfully Uploaded", $recipeProcessor->getErrors());
        }
        else {
            $response = createResponse(300, "Error", "Something went wrong, please try again", $recipeProcessor->getErrors());
        }

    echo json_encode($response);
}