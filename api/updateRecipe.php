<?php
include_once 'config.php';




$response = array();
$allowedTypes = ['jpg', 'png', 'jpeg', 'webp'];


if(!empty($_POST['title']) || !empty($_POST['ingredients']) || !empty($_POST['privacy']) || !empty($_POST['category']) || !empty($_POST['description']) || !empty($_POST['howtocook'])
|| !empty($_POST['filePathRef']) || !empty($_POST['idRef'])){
    // || !empty($_POST['howtocook']) || !empty($_FILES['file']['name'])
    
    // $res['title'] = $_POST['title'];
    // $res['ingredients'] = $_POST['ingredients'];
    $title = $_POST['title'];
    $ingredients = $_POST['ingredients'];
    $category = $_POST['category'];
    $privacy = (int)$_POST['privacy'];
    $description = $_POST['description'];
    $idRef = $_POST['idRef'];
    $howtocook = $_POST['howtocook'];
    $filePathRef = $_POST['filePathRef'];
    $image = $_FILES['file'] ?? null;
    // $uploadedFile = '';

    if($image && $image['tmp_name']){

    //     //////DELETE IF IMAGE IF THERE IS EXISTING IMAGE
        if($filePathRef){
            unlink("../uploads/recipeImgs/".$filePathRef);
        }

      $fileName = uniqid() . basename($image["name"]) ;
      $fileName = str_replace(" ", "_",$fileName);
      $targetDir = "../uploads/recipeImgs/".$fileName;

      move_uploaded_file($image['tmp_name'], $targetDir);

      $query = $con->prepare("UPDATE ".TBL_RECIPES." SET title = :title,  ingredients = :ingredients,
                                  privacy = :privacy, category = :category, howtocook = :howtocook, description = :description,
                                  filePath = :filePath WHERE id = :id");
  
      $query->bindParam(":id", $idRef);
      $query->bindParam(":title", $title);
      $query->bindParam(":ingredients", $ingredients);
      $query->bindParam(":privacy", $privacy);
      $query->bindParam(":category", $category);
      $query->bindParam(":howtocook", $howtocook);
      $query->bindParam(":description", $description);
      $query->bindParam(":filePath", $fileName );
      
      $query->execute();

    }

    else{
        $query = $con->prepare("UPDATE ".TBL_RECIPES." SET title = :title,  ingredients = :ingredients,
        privacy =:privacy, category = :category, howtocook = :howtocook, description = :description
        WHERE id = :id");

        $query->bindParam(":id", $idRef);
        $query->bindParam(":title", $title);
        $query->bindParam(":ingredients", $ingredients);
        $query->bindParam(":privacy", $privacy);
        $query->bindParam(":category", $category);
        $query->bindParam(":howtocook", $howtocook);
        $query->bindParam(":description", $description);

         $query->execute();

    }

        // $response = createResponse(200, 'connected', 'successfully connected',  $filePath );
        $response = createResponse(200, 'updated', 'Successfully Updated', $privacy );



    echo json_encode($response);
}