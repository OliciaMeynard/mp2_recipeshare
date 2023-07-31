<?php
 require_once 'config.php';

//  let record = {
//     "body" : commentBodyId.value,
//     "recipeId" : script.idUrl,
//     "uploadedBy" : script.uploadedBy
// }


if(isset($_POST['store'])) {
    $response = '';
    $data = json_decode($_POST['store']);

    $postedBy = $data->postedBy;
    $recipeId = $data->recipeId;
    $body = $data->body;

    $userLoggedInObj = new User($con, $_SESSION["userLoggedIn"]);

    $query = $con->prepare("INSERT INTO ".TBL_COMMENTS."(postedBy, recipeId, body)
                VALUES(:postedBy, :recipeId, :body)");
    $query->bindParam(":postedBy", $postedBy);
    $query->bindParam(":recipeId", $recipeId);
    $query->bindParam("body", $body);


    $wasSuccessful = $query->execute();
    if($wasSuccessful ){

        
        $results = getAllComments($con, $recipeId);
        $response = createResponse(200,'OK', 'Successfully Added and fetch new comment', $results  );
    }


    echo json_encode($response);

    // $userLoggedInObj = new User($con, $_SESSION["userLoggedIn"]);
    // $newComment = new Comment($con, $con->lastInsertId(), $userLoggedInObj, $recipeId );
    // echo $newComment->getLastInserted();

    // return new comment html

}
else {
    $response = "One or more parameters are not passed into subscribe.php the file";
    echo json_encode($response);
}





?>