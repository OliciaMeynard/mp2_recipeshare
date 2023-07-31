<?php
require_once 'config.php';

// $search = $_GET['search'] ?? '';
// if($search){
//   $statement = $pdo->prepare('SELECT * FROM products WHERE title LIKE :title ORDER BY create_date ASC');
//   $statement->bindValue(':title', "%$search%" );
// } else {
//   $statement = $pdo->prepare('SELECT * FROM products ORDER BY create_date ASC');

// }





if(isset($_POST['allRecipes'])){

    $response = array();

    $query = $con->prepare("SELECT * FROM ".TBL_RECIPES);
    $query->execute();

    $data = $query->fetchAll(PDO::FETCH_ASSOC);

    for($i = 0; $i < count($data); $i++){
        $change = $data[$i]['uploadDate'];
        $data[$i]['formattedDate'] = date("M j, Y", strtotime($change));
    }

    $response = createResponse(200 , 'recipe recent', 'all recipe recent', $data);

    echo json_encode($response);

}



if(isset($_POST['asiancuisine'])){
    $data = fetchRecipeByCategory($_POST['asiancuisine']);    
    $response = createResponse(200 , 'recipe recent', 'all recipe recent', $data);
    
    echo json_encode($response);

}

if(isset($_POST['drinks'])){
    $data = fetchRecipeByCategory($_POST['drinks']);    
    $response = createResponse(200 , 'recipe recent', 'all recipe recent', $data);
    
    echo json_encode($response);

}
if(isset($_POST['salad'])){
    $data = fetchRecipeByCategory($_POST['salad']);    
    $response = createResponse(200 , 'recipe recent', 'all recipe recent', $data);
    
    echo json_encode($response);

}


if(isset($_POST['europeandish'])){
    $data = fetchRecipeByCategory($_POST['europeandish']);    
    $response = createResponse(200 , 'recipe recent', 'all recipe recent', $data);
    
    echo json_encode($response);

}


if(isset($_POST['vegetarian'])){
    
    $data = fetchRecipeByCategory($_POST['vegetarian']);    
    $response = createResponse(200 , 'recipe recent', 'all recipe recent', $data);
    
    echo json_encode($response);

}


function fetchRecipeByCategory($issetCat){
        global $con;
        $category = json_decode($issetCat);

        $response = array();
    
        $query = $con->prepare("SELECT * FROM  " .  TBL_RECIPES. "  WHERE category = :category");
    
        $query->bindParam(":category", $category);
        $query->execute();
    
        $data = $query->fetchAll(PDO::FETCH_ASSOC);
    
        for($i = 0; $i < count($data); $i++){
            $change = $data[$i]['uploadDate'];
            $data[$i]['formattedDate'] = date("M j, Y", strtotime($change));
        }

        return $data;
    }





?>