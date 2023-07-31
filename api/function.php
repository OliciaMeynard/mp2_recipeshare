<?php
function createResponse($status, $title, $description, $data = array()) {
    $response = array();
    $response["status"] = $status;
    $response["description"] = $description;
    $response["title"] = $title;
    $response["data"] = $data;
    
    return $response;
}



///////////////////////GET PROFILE PIC ON COMMENTS

function getAllComments($con, $recipeId){

    $results = array();
    $query = $con->prepare("SELECT * FROM ".TBL_COMMENTS." WHERE recipeId = :recipeId ORDER BY datePosted DESC");
    $query->bindParam(":recipeId", $recipeId);
    $query->execute();
    


    $results = $query->fetchAll(PDO::FETCH_ASSOC);

    for($i = 0; $i < count($results); $i++){
        $username = $results[$i]['postedBy'];
        $results[$i]['profilePicDaw'] = getProfilePicComments($username);
    }

    return $results;

}


function getProfilePicComments($username){
    global $con;

    $query = $con->prepare("SELECT profilePic FROM ".TBL_USERS." WHERE username=:username");
    $query->bindParam(':username', $username);
    $query->execute();
    $data = $query->fetch(PDO::FETCH_ASSOC);
    return $data['profilePic'];
}

function formatDate($date){
    return date("M j, Y", strtotime($date));
}