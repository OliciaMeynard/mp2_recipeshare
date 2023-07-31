<?php
    require_once("config.php");
   

    $account = new Account($con);
    // echo hash("sha512", "password");



    $response = array();
    $allowedTypes = ['jpg', 'png', 'jpeg', 'webp'];


if(!empty($_POST['firstName']) || !empty($_POST['lastName']) || !empty($_POST['email']) || !empty($_POST['idRef'])){

    $firstName = FormSanitizer::sanitizeFormString($_POST['firstName']);
    $lastName = FormSanitizer::sanitizeFormString($_POST['lastName']);
    $email = FormSanitizer::sanitizeFormEmail($_POST['email']);
    $profilePicRef = $_POST['profilePicRef'];
    $image = $_FILES['file'] ?? null;
    $idRef = $_POST['idRef'];
    // $uploadedFile = '';

    if($image && $image['tmp_name']){

    //     //////DELETE IF IMAGE IF THERE IS EXISTING IMAGE
        if($profilePicRef){
            unlink("../uploads/profpic/".$profilePicRef);
        }

      $fileName = uniqid() . basename($image["name"]) ;
      $fileName = str_replace(" ", "_",$fileName);
      $targetDir = "../uploads/profpic/".$fileName;

      move_uploaded_file($image['tmp_name'], $targetDir);

      $query = $con->prepare("UPDATE ".TBL_USERS." SET firstName = :firstName,  lastName = :lastName,
                                  email = :email, profilePic = :profilePic WHERE id = :id");
  
      $query->bindParam(":id", $idRef);
      $query->bindParam(":firstName", $firstName);
      $query->bindParam(":lastName", $lastName);
      $query->bindParam(":email", $email);
      $query->bindParam(":profilePic", $fileName );

        
      $wasSuccessful = $query->execute();
            if($wasSuccessful){
                $response = createResponse(200, 'updated', 'Successfully Updated' );

            }
            if(!$wasSuccessful){
                $response = createResponse(404, 'update Failed', 'Failed update');

            }

    }



    else {

      $query = $con->prepare("UPDATE ".TBL_USERS." SET firstName = :firstName,  lastName = :lastName,
                                  email = :email WHERE id = :id");
  
  
      $query->bindParam(":id", $idRef);
      $query->bindParam(":firstName", $firstName);
      $query->bindParam(":lastName", $lastName);
      $query->bindParam(":email", $email); 
      $wasSuccessful = $query->execute();
            if($wasSuccessful){
                $response = createResponse(200, 'updated', 'Successfully Updated' );

            }
            if(!$wasSuccessful){
                $response = createResponse(404, 'update Failed', 'Failed update');

            }

    }




    echo json_encode($response);
}






