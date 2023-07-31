<?php
    require_once("config.php");
    // require_once "../includes/classes/FormSanitizer.php";
    // require_once "../includes/classes/Account.php";
    // require_once "../includes/classes/Constants.php";
   

    $account = new Account($con);
    // echo hash("sha512", "password");

    
    if(isset($_POST['register'])){
        


    $receivedData = json_decode($_POST['register']);
    $response = array();

    $firstName = FormSanitizer::sanitizeFormString($receivedData->firstName);
    $lastName = FormSanitizer::sanitizeFormString($receivedData->lastName);
    $userName = FormSanitizer::sanitizeFormUserName($receivedData->userName);
    $email = FormSanitizer::sanitizeFormEmail($receivedData->email);
    $email2 = FormSanitizer::sanitizeFormEmail($receivedData->email2);
    $password = FormSanitizer::sanitizeFormPassword($receivedData->password);
    $password2 = FormSanitizer::sanitizeFormPassword($receivedData->password2);

    $wasSuccessful = $account->register($firstName, $lastName, $userName, $email, $email2, $password, $password2);
    if($wasSuccessful){
        $_SESSION["userLoggedIn"] = $userName;
        // SUCCESS
        $response = createResponse(200, "Successful", "Successfully Registered");
        //Redirect to index page     
    } else {

        $response = createResponse(401, "Failed", "Registration failed", $account->getErrors());
    }

    
    echo json_encode($response);
}