<?php
require_once("config.php");

$response = array();
$account = new Account($con);

if(isset($_POST['auth'])){

    $data = json_decode($_POST['auth']);
    

    $userName = FormSanitizer::sanitizeFormUserName($data->userName);
    $password = FormSanitizer::sanitizeFormPassword($data->password);
    

    $wasSuccessful = $account->login($userName, $password);

    if($wasSuccessful){
        $_SESSION["userLoggedIn"] = $userName;
        // SUCCESS
        $response = createResponse(200, "Successful", "Successfully Logged In");
  
    }

    else {

        $response = createResponse(401, "Failed", "Sign In Failed", $account->getErrors());
    }
    
    
}

echo json_encode($response);



?>