<?php


include 'config.php';



$response = array();


if(isset($_GET["show"])){

    $userId = json_decode($_GET["show"]);

            $query = $con->prepare("SELECT * FROM ".TBL_USERS." WHERE id =:id ");
            $query->bindParam(":id", $userId);
            $query->execute();   
            $data = $query->fetch(PDO::FETCH_ASSOC);

            $followers = $con->prepare("SELECT * FROM ".TBL_SUBSCRIBERS." WHERE userTo =:userTo");
            $followers->bindParam(':userTo', $data['username']);
            $followers->execute();  
            $followersData = $followers->fetchAll(PDO::FETCH_ASSOC);

            $data['followers'] = $followersData;


            $following = $con->prepare("SELECT * FROM ".TBL_SUBSCRIBERS." WHERE userFrom =:userFrom");
            $following->bindParam(':userFrom', $data['username']);
            $following->execute();  
            $followingData = $following->fetchAll(PDO::FETCH_ASSOC);

            $data['following'] = $followingData;



            $recipePosted = $con->prepare("SELECT * FROM ".TBL_RECIPES." WHERE uploadedBy = :uploadedBy");
            $recipePosted->bindParam(':uploadedBy', $data['username']);
            $recipePosted->execute();  
            $recipePostedData = $recipePosted->fetchAll(PDO::FETCH_ASSOC);

            for($i = 0; $i < count($recipePostedData); $i++){
                $change = $recipePostedData[$i]['uploadDate'];
                $recipePostedData[$i]['formattedDate'] = date("M j, Y", strtotime($change));
            }

            $data['recipePostedData'] = $recipePostedData;


    if(isset($_SESSION["userLoggedIn"])){
            $data['userLoggedInData'] = $userLoggedInObj->getUserData();
              
    }

    if(!isset($_SESSION["userLoggedIn"])){
        $data['userLoggedInData'] = 'none';
    }






    $response = createResponse(200, 'Id Request', 'Positive', $data); 
    echo json_encode($response);
}



if(isset($_POST['destroy'])){
    $userId = json_decode($_POST['destroy']);

    $query = $con->prepare("DELETE FROM  ".TBL_RECIPES." WHERE id =:id ");
    $query->bindParam(":id", $userId);
    $isDeleted = $query->execute();   



   
    if($isDeleted){
        $response = createResponse(200, "success", "successfully Deleted");

    } else {
        $response = createResponse(401, "Error", "Error deleting");
    }

    echo json_encode($response);
}






