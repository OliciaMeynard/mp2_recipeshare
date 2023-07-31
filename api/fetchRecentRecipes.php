<?php
require_once 'config.php';


if(isset($_POST['getRecentRecipes'])){

    $response = array();

    $query = $con->prepare("SELECT * FROM ".TBL_RECIPES." ORDER BY uploadDate DESC LIMIT 6");
    $query->execute();

    $data = $query->fetchAll(PDO::FETCH_ASSOC);

    for($i = 0; $i < count($data); $i++){
        $change = $data[$i]['uploadDate'];
        $data[$i]['formattedDate'] = date("M j, Y", strtotime($change));
    }

    $response = createResponse(200 , 'recipe recent', 'all recipe recent', $data);

    echo json_encode($response);

}

?>