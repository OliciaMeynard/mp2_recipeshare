<?php

require_once 'config.php';

$response = array();


if(isset($_GET['search'])){
    $search = json_decode($_GET['search']);

    $query = $con->prepare("SELECT * FROM ".TBL_RECIPES." WHERE title LIKE :title ORDER BY uploadDate DESC");
    $query->bindValue(':title', "%$search%" );
    
} else {
  $query = $cont->prepare("SELECT * FROM ".TBL_RECIPES." ORDER BY uploadDate DESC");

}

$success = $query->execute();

if($success){


  $data = $query->fetchAll(PDO::FETCH_ASSOC);

  for($i = 0; $i < count($data); $i++){
      $change = $data[$i]['uploadDate'];
      $data[$i]['formattedDate'] = date("M j, Y", strtotime($change));
  }
  $response = createResponse(200, 'fetched recipes', 'result of recipes', $data);
}




else{
  $response = createResponse(400, 'Error', 'could not fetch recipes');
}

echo json_encode($response);


// $search = $_GET['search'] ?? '';
// if($search){
//   $statement = $pdo->prepare('SELECT * FROM products WHERE title LIKE :title ORDER BY create_date ASC');
//   $statement->bindValue(':title', "%$search%" );
// } else {
//   $statement = $pdo->prepare('SELECT * FROM products ORDER BY create_date ASC');

// }

// $statement->execute();
// $products  = $statement->fetchAll(PDO::FETCH_ASSOC); ///fetch to be associative array